const baseCustomers = [
  {
    id: 1,
    companyName: "NexaGrid Solutions",
    region: "APAC",
    planTier: "Enterprise",
    contractEnd: "2026-05-18",
    contractEndsInDays: 6,
    monthlyRevenue: 240000,
    nps: 5,
    healthScore: 42,
    churnRisk: 81,
    lastContact: "2026-04-16",
    aiSummary:
      "High-value account with declining usage, unresolved critical tickets, and contract renewal approaching soon.",
    churnFactors: [
      "Usage dropped for 3 consecutive months",
      "Two unresolved severe tickets",
      "NPS remains below 6",
      "Contract renewal due within 30 days"
    ],
    healthFactors: [
      "High ticket severity trend",
      "Low customer sentiment",
      "Contract renewal risk",
      "Reduced product usage"
    ],
    devices: [
      { id: 1, type: "Router", model: "NX-900", quantity: 12 },
      { id: 2, type: "Switch", model: "SW-Edge48", quantity: 26 },
      { id: 3, type: "Firewall", model: "FW-ProX", quantity: 4 }
    ],
    tickets: [
      {
        id: 101,
        subject: "Core switch packet drops",
        severity: "Critical",
        status: "In Progress",
        createdAt: "2026-04-11"
      },
      {
        id: 102,
        subject: "Router firmware rollback request",
        severity: "High",
        status: "Open",
        createdAt: "2026-04-14"
      }
    ],
    usageHistory: [
      { month: "Jan", usage: 82 },
      { month: "Feb", usage: 77 },
      { month: "Mar", usage: 65 },
      { month: "Apr", usage: 52 }
    ]
  },
  {
    id: 2,
    companyName: "CloudSpan Networks",
    region: "North America",
    planTier: "Growth",
    contractEnd: "2026-09-12",
    contractEndsInDays: 21,
    monthlyRevenue: 125000,
    nps: 8,
    healthScore: 78,
    churnRisk: 28,
    lastContact: "2026-04-18",
    aiSummary:
      "Stable account with healthy usage and quick ticket resolution. Renewal risk is currently low.",
    churnFactors: ["Minor support dependency", "One usage dip in March"],
    healthFactors: ["Strong NPS", "Consistent usage", "No critical tickets"],
    devices: [
      { id: 4, type: "Router", model: "NX-500", quantity: 8 },
      { id: 5, type: "Access Point", model: "AP-Mesh7", quantity: 18 }
    ],
    tickets: [
      {
        id: 201,
        subject: "VPN policy clarification",
        severity: "Low",
        status: "Resolved",
        createdAt: "2026-04-02"
      }
    ],
    usageHistory: [
      { month: "Jan", usage: 61 },
      { month: "Feb", usage: 64 },
      { month: "Mar", usage: 60 },
      { month: "Apr", usage: 66 }
    ]
  },
  {
    id: 3,
    companyName: "Vertex Secure Infra",
    region: "Europe",
    planTier: "Enterprise",
    contractEnd: "2026-07-04",
    contractEndsInDays: 14,
    monthlyRevenue: 198000,
    nps: 6,
    healthScore: 59,
    churnRisk: 54,
    lastContact: "2026-04-15",
    aiSummary:
      "Medium-risk account with mixed support patterns and slightly declining engagement.",
    churnFactors: [
      "Support burden increasing",
      "NPS dropped from 8 to 6",
      "Usage trending down slowly"
    ],
    healthFactors: [
      "Moderate usage decline",
      "Open high-severity ticket",
      "Sentiment cooling"
    ],
    devices: [
      { id: 6, type: "Switch", model: "SW-Core96", quantity: 14 },
      { id: 7, type: "Firewall", model: "FW-Enterprise", quantity: 6 }
    ],
    tickets: [
      {
        id: 301,
        subject: "Intermittent branch connectivity",
        severity: "High",
        status: "In Progress",
        createdAt: "2026-04-09"
      }
    ],
    usageHistory: [
      { month: "Jan", usage: 76 },
      { month: "Feb", usage: 74 },
      { month: "Mar", usage: 72 },
      { month: "Apr", usage: 69 }
    ]
  },
  {
    id: 4,
    companyName: "OrbitWave Systems",
    region: "Middle East",
    planTier: "Starter",
    contractEnd: "2026-10-15",
    contractEndsInDays: 90,
    monthlyRevenue: 64000,
    nps: 9,
    healthScore: 88,
    churnRisk: 15,
    lastContact: "2026-04-19",
    aiSummary:
      "Healthy and expanding account with strong satisfaction and upsell potential.",
    churnFactors: ["Low churn exposure"],
    healthFactors: [
      "Excellent NPS",
      "Usage rising steadily",
      "No unresolved major issues"
    ],
    devices: [{ id: 8, type: "Access Point", model: "AP-Lite", quantity: 22 }],
    tickets: [
      {
        id: 401,
        subject: "Onboarding documentation request",
        severity: "Low",
        status: "Resolved",
        createdAt: "2026-03-28"
      }
    ],
    usageHistory: [
      { month: "Jan", usage: 35 },
      { month: "Feb", usage: 42 },
      { month: "Mar", usage: 48 },
      { month: "Apr", usage: 55 }
    ]
  }
];

const companyPrefixes = [
  "Astra",
  "BluePeak",
  "CoreBridge",
  "DeltaSpan",
  "EchoNet",
  "FluxCore",
  "GridLine",
  "Helio",
  "IonWave",
  "Juno",
  "KitePoint",
  "Luma",
  "MetroLink",
  "Nova",
  "Opti",
  "Pulse",
  "Quantum",
  "Rapid",
  "Signal",
  "Titan",
  "Ultra",
  "Vector",
  "Wave",
  "Zenith"
];

const companySuffixes = [
  "Networks",
  "Systems",
  "Secure",
  "Labs",
  "Dynamics",
  "Digital",
  "Works",
  "Connect",
  "Infra",
  "Cloud"
];

const regions = ["APAC", "North America", "Europe", "Middle East"];
const planTiers = ["Starter", "Growth", "Enterprise"];
const deviceCatalog = [
  { type: "Router", model: "NX-500" },
  { type: "Router", model: "NX-900" },
  { type: "Switch", model: "SW-Core96" },
  { type: "Switch", model: "SW-Edge48" },
  { type: "Firewall", model: "FW-ProX" },
  { type: "Firewall", model: "FW-Enterprise" },
  { type: "Access Point", model: "AP-Mesh7" },
  { type: "Access Point", model: "AP-Lite" }
];

function rotate(array, index) {
  return array[index % array.length];
}

function makeUsageSeries(start, drop) {
  return [
    { month: "Jan", usage: Math.max(25, start) },
    { month: "Feb", usage: Math.max(22, start - drop) },
    { month: "Mar", usage: Math.max(20, start - drop * 2) },
    { month: "Apr", usage: Math.max(18, start - drop * 3) }
  ];
}

function buildCustomer(index) {
  const prefix = rotate(companyPrefixes, index);
  const suffix = rotate(companySuffixes, index * 3);
  const region = rotate(regions, index);
  const planTier = rotate(planTiers, index + 1);
  const riskBase = 18 + ((index * 11) % 72);
  const churnRisk = Math.min(92, riskBase);
  const healthScore = Math.max(34, 95 - churnRisk + (index % 9));
  const nps = Math.max(4, Math.min(10, Math.round(healthScore / 12)));
  const revenueMultiplier = planTier === "Enterprise" ? 3.2 : planTier === "Growth" ? 1.8 : 1;
  const monthlyRevenue = Math.round((42000 + (index % 17) * 8500) * revenueMultiplier);
  const contractEndsInDays = 4 + ((index * 7) % 120);
  const contractMonth = String(((index % 9) + 4)).padStart(2, "0");
  const contractDay = String(((index * 3) % 24) + 4).padStart(2, "0");
  const severity = churnRisk >= 70 ? "Critical" : churnRisk >= 45 ? "High" : "Low";
  const ticketStatus = churnRisk >= 60 ? "In Progress" : "Resolved";
  const usageStart = 92 - (index % 18) * 2;
  const usageDrop = churnRisk >= 60 ? 7 : churnRisk >= 35 ? 4 : 1;

  return {
    id: index + 5,
    companyName: `${prefix}${index + 1} ${suffix}`,
    region,
    planTier,
    contractEnd: `2026-${contractMonth}-${contractDay}`,
    contractEndsInDays,
    monthlyRevenue,
    nps,
    healthScore,
    churnRisk,
    lastContact: `2026-04-${String(((index * 5) % 22) + 1).padStart(2, "0")}`,
    aiSummary:
      churnRisk >= 70
        ? "Account shows strong churn signals driven by support friction, low sentiment, and renewal pressure."
        : churnRisk >= 45
          ? "Account needs proactive engagement due to moderate risk and softening usage."
          : "Account is stable with healthy usage and low near-term churn exposure.",
    churnFactors:
      churnRisk >= 70
        ? [
            "Declining monthly usage",
            "Open high-severity support issue",
            "Renewal approaching soon",
            "Customer sentiment below target"
          ]
        : churnRisk >= 45
          ? [
              "Usage slowing down",
              "Support load increasing",
              "NPS slightly reduced"
            ]
          : ["Healthy adoption", "Low support burden", "Renewal timeline still comfortable"],
    healthFactors:
      healthScore >= 75
        ? ["Strong NPS", "Healthy adoption", "No critical support concerns"]
        : healthScore >= 55
          ? ["Moderate engagement", "Support follow-up needed", "Mixed usage signals"]
          : ["Low sentiment", "Escalated ticket trend", "Contract risk and falling product usage"],
    devices: [
      {
        id: 5000 + index * 2,
        ...rotate(deviceCatalog, index),
        quantity: 4 + (index % 18)
      },
      {
        id: 5001 + index * 2,
        ...rotate(deviceCatalog, index + 3),
        quantity: 2 + (index % 12)
      }
    ],
    tickets: [
      {
        id: 7000 + index,
        subject: `${rotate(["Switch latency", "Firewall policy update", "Router packet drops", "AP onboarding support"], index)} case`,
        severity,
        status: ticketStatus,
        createdAt: `2026-04-${String(((index * 2) % 24) + 1).padStart(2, "0")}`
      }
    ],
    usageHistory: makeUsageSeries(usageStart, usageDrop)
  };
}

export const customers = [
  ...baseCustomers,
  ...Array.from({ length: 216 }, (_, index) => buildCustomer(index))
];

export const suggestedQueries = [
  "Show all customers with health score below 50",
  "Which accounts are likely to churn in the next 90 days?",
  "List Enterprise customers in APAC with low NPS",
  "Why is NexaGrid Solutions marked high risk?",
  "Which customers have contracts expiring soon and unresolved tickets?"
];

const USE_MOCK = true;
const API_BASE_URL = "http://127.0.0.1:5000";

export async function askQuestion(question, chatHistory) {
  if (USE_MOCK) {
    await new Promise((resolve) => setTimeout(resolve, 500));

    const lowerQuestion = question.toLowerCase();

    if (lowerQuestion.includes("health score below 50")) {
      const lowHealthCustomers = customers
        .filter((customer) => customer.healthScore < 50)
        .slice(0, 5)
        .map((customer) => customer.companyName)
        .join(", ");
      return `Customers below health score 50 include: ${lowHealthCustomers}. Main reasons are low NPS, unresolved severe tickets, and renewal risk.`;
    }

    if (lowerQuestion.includes("churn")) {
      return "Top churn-risk accounts include NexaGrid Solutions, Vertex Secure Infra, and several renewal-sensitive enterprise accounts. Drivers include usage decline, support burden, and contract proximity.";
    }

    if (lowerQuestion.includes("apac")) {
      return "APAC enterprise accounts with weaker sentiment are visible in the customer table and risk queue. NexaGrid Solutions remains the top APAC concern due to low NPS and renewal pressure.";
    }

    if (lowerQuestion.includes("why is nexagrid")) {
      return "NexaGrid Solutions is marked high risk because its contract ends soon, usage fell sharply, NPS is low, and severe tickets remain open.";
    }

    if (lowerQuestion.includes("expiring")) {
      return "The most urgent renewal accounts are the ones with less than 30 days left and active support issues. Start with NexaGrid Solutions and the high-risk enterprise accounts on the Renewals page.";
    }

    const previousUserMessages = chatHistory.filter(
      (item) => item.role === "user"
    ).length;

    return (
      'Mock AI response for "' +
      question +
      '". Follow-up context is available from ' +
      previousUserMessages +
      " earlier user question(s)."
    );
  }

  const response = await fetch(API_BASE_URL + "/ai/query", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      question,
      history: chatHistory
    })
  });

  const data = await response.json();
  return data.answer;
}

export async function getCustomers() {
  if (USE_MOCK) {
    return customers;
  }

  const response = await fetch(API_BASE_URL + "/customers");
  return response.json();
}
