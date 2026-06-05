export const snapshot = {
  platform: "Genesys",
  title: "Genesys Queue Leakage Index",
  domain: "CX operations",
  boardQuestion: "Which Genesys queues leak margin or trust through reroutes, callbacks, and consent gaps?",
  liveSurface: "https://genesys.kineticgain.com/",
  signals: [
  {
    "Confidence": 86,
    "Owner": "CX operations",
    "Recoverable": 19000,
    "Severity": 78,
    "Action": "Prioritize callback routing and staffing correction",
    "Name": "Callback abandonment loop",
    "Area": "service quality"
  },
  {
    "Confidence": 88,
    "Owner": "Compliance operations",
    "Recoverable": 0,
    "Severity": 81,
    "Action": "Attach recording and disclosure evidence",
    "Name": "Consent disclosure gap",
    "Area": "compliance"
  },
  {
    "Confidence": 82,
    "Owner": "Customer success",
    "Recoverable": 17000,
    "Severity": 69,
    "Action": "Separate VIP escalation path and monitor SLA drift",
    "Name": "VIP queue transfer leakage",
    "Area": "revenue"
  }
]
};
