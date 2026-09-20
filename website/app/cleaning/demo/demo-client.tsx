'use client';

import { useState } from 'react';
import { demoCases, processCleaningLead } from '../demo-model';
import type { DemoResult } from '../demo-model';

export function CleaningDemo() {
  const [selected, setSelected] = useState(0);
  const [processedIds, setProcessedIds] = useState<string[]>([]);
  const [result, setResult] = useState<DemoResult | null>(null);
  const lead = demoCases[selected].lead;
  function run() {
    const next = processCleaningLead(lead, processedIds);
    setResult(next);
    setProcessedIds((ids) => ids.includes(lead.testId) ? ids : [...ids, lead.testId]);
  }
  return <div className="cleaning-demo">
    <div className="demo-input">
      <label htmlFor="demo-case">Choose a fictional inquiry</label>
      <select id="demo-case" value={selected} onChange={(event) => { setSelected(Number(event.target.value)); setResult(null); }}>
        {demoCases.map((item, index) => <option key={item.lead.testId} value={index}>{item.label}</option>)}
      </select>
      <dl className="lead-details">
        <dt>Test ID</dt><dd>{lead.testId}</dd><dt>Name</dt><dd>{lead.firstName} (fictional)</dd>
        <dt>Reply email</dt><dd>{lead.replyEmail || 'Missing'}</dd><dt>ZIP</dt><dd>{lead.zip}</dd>
        <dt>Clean</dt><dd>{lead.service} · {lead.frequency}</dd><dt>Home</dt><dd>{lead.bedrooms} bedrooms · {lead.bathrooms} bathrooms</dd>
        <dt>Requested timing</dt><dd>{lead.timing}</dd>
      </dl>
      <p className="demo-note">Demo coverage: ZIP 78701 only. This is an illustrative rule, not a real service-area claim. All records are fictional.</p>
      <div className="button-row"><button className="button button-primary" onClick={run}>Run this case</button><button className="button button-secondary" onClick={() => { setProcessedIds([]); setResult(null); }}>Reset demo</button></div>
      <p className="demo-note">Run the same case twice to see duplicate protection. Reset clears this session’s local test history.</p>
    </div>
    <div className="demo-output" aria-live="polite" aria-atomic="true">
      {!result ? <div className="demo-empty"><p className="eyebrow">READY TO TRY</p><h2>Inspect the next step.</h2><p>Run a case to see the proposed reply, owner task, quote checklist, and log.</p></div> : <>
        <p className="result-status">{result.status}</p><p>{result.reason}</p>
        <section><h2>Reply draft preview</h2>{result.draft ? <><p><strong>Subject:</strong> {result.draft.subject}</p><pre className="draft-preview">{result.draft.body}</pre></> : <p>No draft prepared for this run.</p>}</section>
        <section><h2>Internal follow-up task</h2><p>{result.task ?? 'No new task. Review the original record.'}</p></section>
        {result.quoteChecklist.length > 0 && <section><h2>Quote preparation</h2><ul>{result.quoteChecklist.map((item) => <li key={item}>{item}</li>)}</ul></section>}
        <section><h2>Status log preview</h2><dl className="lead-details"><dt>Test ID</dt><dd>{result.log.testId}</dd><dt>Status</dt><dd>{result.log.status}</dd><dt>Booking</dt><dd>{result.bookingStatus}</dd><dt>Email sent</dt><dd>No</dd></dl></section>
        <p className="demo-note">Browser simulation only. No Gmail draft, Google Task, spreadsheet row, AI output, quote, or booking was created in an external account.</p>
      </>}
    </div>
  </div>;
}
