# Genesys Queue Leakage Index

Genesys Queue Leakage Index is a Kinetic Gain platform-signal repo for **Genesys**. It turns synthetic cx operations signals into a board-ready view of exposure, savings, investment priority, and the story leaders can tell.

## Board question

> Which Genesys queues leak margin or trust through reroutes, callbacks, and consent gaps?

## What it scores

- **Callback abandonment loop** — service quality; owner: CX operations; next action: Prioritize callback routing and staffing correction
- **Consent disclosure gap** — compliance; owner: Compliance operations; next action: Attach recording and disclosure evidence
- **VIP queue transfer leakage** — revenue; owner: Customer success; next action: Separate VIP escalation path and monitor SLA drift

## Run locally

`ash
npm test
npm start
npm start -- --json
`

## Example output

`	ext
# Genesys Queue Leakage Index
Genesys: watch posture, risk score from synthetic signals, recoverable or protected value surfaced for executive review.
`

## Data posture

This repo uses synthetic demonstration data only. It does not connect to live Genesys tenants, export customer records, or store credentials.

## Portfolio connection

- Platform signal: $(System.Collections.Hashtable.Platform)
- Domain: $(System.Collections.Hashtable.Domain)
- Live surface family: [https://genesys.kineticgain.com/](https://genesys.kineticgain.com/)
- Apex: [https://kineticgain.com/](https://kineticgain.com/)
- Portfolio: [https://portfolio.kineticgain.com/](https://portfolio.kineticgain.com/)
