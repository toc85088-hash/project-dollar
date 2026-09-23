'use client';

import { useState } from 'react';

const questions = [
  { key: 'channel', label: 'Where do inquiries arrive?', options: ['Website inquiry form', 'Email inbox', 'Existing booking / CRM system', 'Several channels — choose one for the pilot'] },
  { key: 'handoff', label: 'Which handoff needs attention first?', options: ['Preparing an initial reply', 'Gathering details for a quote', 'Following up after an estimate', 'Handing an accepted quote to booking'] },
  { key: 'tools', label: 'What should the workflow work with?', options: ['Google tools', 'Microsoft tools', 'Existing cleaning / scheduling software', 'Not decided — needs a compatibility review'] },
  { key: 'service', label: 'Choose one service to start with', options: ['Recurring residential cleaning', 'One-time standard cleaning', 'Deep cleaning', 'Move-out cleaning'] },
] as const;

type Choices = Record<typeof questions[number]['key'], string>;

export function PilotBriefBuilder({ brandName, setupPrice }: { brandName: string; setupPrice: string }) {
  const [choices, setChoices] = useState<Choices>({ channel: questions[0].options[0], handoff: questions[1].options[0], tools: questions[2].options[0], service: questions[3].options[0] });
  const [brief, setBrief] = useState('');
  const [downloaded, setDownloaded] = useState(false);
  function download() {
    const url = URL.createObjectURL(new Blob([brief], { type: 'text/plain;charset=utf-8' }));
    const link = document.createElement('a');
    link.href = url;
    link.download = 'cleaning-pilot-brief.txt';
    link.click();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
    setDownloaded(true);
  }
  return <div className="pilot-builder">
    <form onSubmit={(event) => {
      event.preventDefault();
      setBrief(`${brandName} — Residential Cleaning Pilot Brief\n\nPlanning only. Not an application, booking, quote, or service agreement.\n\nPublished pilot setup range: ${setupPrice}. Final fee and scope require written agreement before work. Software costs and ongoing support are not included.\n\n${questions.map((question) => `${question.label}\n${choices[question.key]}`).join('\n\n')}\n\nProposed boundary\nOne inquiry source, one service type, an owner-reviewed reply draft, a follow-up task, and a status record. Quote and booking approval stay with the business owner.\n\nBefore any connection\nConfirm service area, required fields, approved reply wording, current software compatibility, permissions, plan limits, and a manual fallback. Use fictional records first. Agree timing, payment, cancellation and acceptance terms separately; no purchase is authorized by this brief.\n\nAcceptance checks\nComplete inquiry; missing reply address; out-of-area inquiry; duplicate inquiry; tool failure; manual recovery. No automatic sends or confirmed bookings.\n\nNo personal or customer data is included. This file was generated locally and has not been submitted.`);
      setDownloaded(false);
    }}>
      {questions.map((question) => <div className="form-field" key={question.key}><label htmlFor={`pilot-${question.key}`}>{question.label}</label><select id={`pilot-${question.key}`} value={choices[question.key]} onChange={(event) => { setChoices({ ...choices, [question.key]: event.target.value }); setBrief(''); setDownloaded(false); }}>{question.options.map((option) => <option key={option}>{option}</option>)}</select></div>)}
      <button className="button button-primary" type="submit">Create my planning brief</button>
      <p className="demo-note">These choices stay in this page’s memory. No account, email address, customer details, or submission is required. Refreshing clears the page.</p>
    </form>
    <div className="pilot-result" aria-live="polite">
      {brief ? <><h3>Your brief is ready to save</h3><pre className="draft-preview">{brief}</pre><button type="button" className="button button-secondary" onClick={download}>Download brief (.txt)</button>{downloaded && <p role="status">Download requested. Nothing was submitted to us.</p>}</> : <><h3>One workflow. A defined boundary.</h3><p>Choose the first handoff to explore. You will get a plain-text brief to save and review, not a sales signup.</p><p>Do not include customer records, access codes, payment details, or account credentials.</p></>}
    </div>
  </div>;
}
