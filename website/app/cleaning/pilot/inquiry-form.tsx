'use client';

import { useRef, useState, useSyncExternalStore, type FormEvent } from 'react';
import { SiteLink } from '../../components/site-link';
import { inquiryLimits, inquiryVolumes, leadSources, validateInquiry, type InquiryErrors } from './inquiry-model';

const subscribeToHydration = () => () => {};
const clientReady = () => true;
const serverReady = () => false;

export function PilotInquiryForm({ contactEmail }: { contactEmail: string }) {
  const ready = useSyncExternalStore(subscribeToHydration, clientReady, serverReady);
  const [errors, setErrors] = useState<InquiryErrors>({});
  const [pending, setPending] = useState(false);
  const [message, setMessage] = useState('');
  const [reference, setReference] = useState('');
  const inFlight = useRef(false);
  const status = useRef<HTMLDivElement>(null);

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (inFlight.current) return;
    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form));
    const validation = validateInquiry(data);
    setReference('');
    setErrors(validation.errors);
    if (!validation.value) {
      setMessage('Please check the required fields and any errors below.');
      status.current?.focus();
      return;
    }
    inFlight.current = true;
    setPending(true);
    setMessage('Submitting your inquiry…');
    try {
      const response = await fetch('/api/pilot-inquiry', {
        method: 'POST', headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data), credentials: 'same-origin',
      });
      const raw: unknown = await response.json();
      const result: Record<string, unknown> = raw !== null && typeof raw === 'object' && !Array.isArray(raw) ? raw as Record<string, unknown> : {};
      if (response.ok && result.ok === true && typeof result.reference === 'string' && /^PILOT-[a-f0-9-]{36}$/.test(result.reference)) {
        setReference(result.reference);
        setMessage('Thank you. Your inquiry has been handed to our email service for delivery. This is not a booking or service agreement. No confirmation email is sent to you.');
        form.reset();
      } else {
        const fieldErrors: InquiryErrors = {};
        if (result.errors && typeof result.errors === 'object' && !Array.isArray(result.errors)) {
          for (const [key, value] of Object.entries(result.errors)) {
            if (['name', 'businessName', 'email', 'website', 'leadSource', 'monthlyInquiries', 'notes'].includes(key) && typeof value === 'string') fieldErrors[key as keyof InquiryErrors] = value;
          }
        }
        setErrors(fieldErrors);
        setMessage(typeof result.message === 'string' ? result.message : 'We could not confirm your submission. Please email us before retrying.');
      }
    } catch {
      setMessage('We could not confirm your submission because the connection failed. It may have been accepted; please email us before retrying.');
    } finally {
      setPending(false);
      inFlight.current = false;
      status.current?.focus();
    }
  }

  const error = (key: keyof InquiryErrors) => errors[key] && <p className="field-error" id={`inquiry-${key}-error`}>{errors[key]}</p>;
  return <form className="pilot-inquiry-form" method="post" action="/api/pilot-inquiry" onSubmit={submit} noValidate aria-label="Cleaning pilot inquiry">
    <div ref={status} tabIndex={-1} role="status" aria-live="polite" className="inquiry-status">
      {message && <p>{message}</p>}
      {reference && <p><strong>Reference: {reference}</strong> Keep this reference if you contact us; inbox receipt is not independently confirmed here.</p>}
    </div>
    <fieldset disabled={pending || !ready}>
      <legend className="sr-only">Your pilot inquiry</legend>
      <div className="inquiry-fields">
        {([['name', 'Name', 'name'], ['businessName', 'Business name', 'organization'], ['email', 'Email', 'email'], ['website', 'Website (optional)', 'url']] as const).map(([key, label, autoComplete]) => <div className="form-field" key={key}>
          <label htmlFor={`inquiry-${key}`}>{label}</label>
          <input id={`inquiry-${key}`} name={key} type={key === 'email' ? 'email' : key === 'website' ? 'url' : 'text'} autoComplete={autoComplete} required={key !== 'website'} maxLength={inquiryLimits[key]} aria-invalid={Boolean(errors[key])} aria-describedby={errors[key] ? `inquiry-${key}-error` : key === 'website' ? 'website-hint' : undefined} />
          {key === 'website' && <small id="website-hint">Include https:// if supplied.</small>}{error(key)}
        </div>)}
        <div className="form-field"><label htmlFor="inquiry-leadSource">Primary lead source</label><select id="inquiry-leadSource" name="leadSource" required defaultValue="" aria-invalid={Boolean(errors.leadSource)} aria-describedby={errors.leadSource ? 'inquiry-leadSource-error' : undefined}><option value="">Choose one</option>{leadSources.map(option => <option key={option}>{option}</option>)}</select>{error('leadSource')}</div>
        <div className="form-field"><label htmlFor="inquiry-monthlyInquiries">Approximate monthly inquiries (optional)</label><select id="inquiry-monthlyInquiries" name="monthlyInquiries" defaultValue="" aria-invalid={Boolean(errors.monthlyInquiries)} aria-describedby={errors.monthlyInquiries ? 'inquiry-monthlyInquiries-error' : undefined}><option value="">Prefer not to say</option>{inquiryVolumes.map(option => <option key={option}>{option}</option>)}</select>{error('monthlyInquiries')}</div>
      </div>
      <div className="form-field"><label htmlFor="inquiry-notes">What would you like automated?</label><textarea id="inquiry-notes" name="notes" rows={5} required maxLength={inquiryLimits.notes} aria-invalid={Boolean(errors.notes)} aria-describedby={`notes-hint${errors.notes ? ' inquiry-notes-error' : ''}`} /><small id="notes-hint">Describe the handoff you need help with. Do not include customer records, credentials, access codes or payment details.</small>{error('notes')}</div>
      <div className="inquiry-honeypot" aria-hidden="true"><label htmlFor="inquiry-fax">Leave this field empty</label><input id="inquiry-fax" name="fax" type="text" tabIndex={-1} autoComplete="off" /></div>
      <p className="demo-note">Submitting sends these details to our operator’s inbox so we can respond to this inquiry. It does not sign you up for marketing or purchase a service. See our <SiteLink className="text-link" href="/privacy-policy">Privacy Policy</SiteLink>.</p>
      <button className="button button-primary" type="submit">{!ready ? 'Loading form…' : pending ? 'Submitting…' : 'Send pilot inquiry'}</button>
    </fieldset>
    <p className="demo-note">Prefer email, or having trouble? <a className="text-link" href={`mailto:${contactEmail}`}>{contactEmail}</a>. No response-time guarantee.</p>
    <noscript><p>This form needs JavaScript. You can email the public address above instead.</p></noscript>
  </form>;
}
