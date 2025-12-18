import LibraryModel from "../Models/Library.js";

const seedData = [
  {
    title: "GST Place of Supply for Services (IGST Act Sec 12 & 13)",
    tags: ["GST", "Place of Supply", "IGST", "Services"],
    summary: "Rules to determine place of supply for domestic and cross-border services including performance-based, immovable property, intermediary, OIDAR, and transportation.",
    citation: "IGST Act, 2017 — Sections 12 & 13",
    link: "https://cbic-gst.gov.in/pdf/igst-act.pdf",
  },
  {
    title: "GST Rate Notifications (Updated Schedule)",
    tags: ["GST", "Rates", "HSN"],
    summary: "Key rate slabs (0%, 5%, 12%, 18%, 28%) with common goods/services references and exemption highlights.",
    citation: "GST Rate Notifications (latest CBIC updates)",
    link: "https://cbic-gst.gov.in/central-tax-notifications.html",
  },
  {
    title: "GST Annual Return & Reconciliation (GSTR-9/9C)",
    tags: ["GST", "Compliance", "Annual Return"],
    summary: "Filing thresholds, due dates, audit applicability, and key reconciliation checkpoints between books and returns.",
    citation: "CGST Rules — Rule 80; GSTR-9/9C instructions",
    link: "https://cbic-gst.gov.in/",
  },
  {
    title: "Income Tax: Section 80C Deductions",
    tags: ["Income Tax", "80C", "Deductions"],
    summary: "Investments eligible for deduction up to ₹1.5L: PPF, ELSS, 5-yr FD, life insurance, principal on housing loan, tuition fees.",
    citation: "Income Tax Act — Section 80C",
    link: "https://incometaxindia.gov.in",
  },
  {
    title: "Income Tax: Section 80D Health Insurance",
    tags: ["Income Tax", "80D", "Health Insurance"],
    summary: "Premium deduction limits for self/family/senior citizens, preventive health check-up limit, and HUF applicability.",
    citation: "Income Tax Act — Section 80D",
    link: "https://incometaxindia.gov.in",
  },
  {
    title: "TDS Payment & Return Due Dates",
    tags: ["TDS", "Compliance", "Deadlines"],
    summary: "Monthly TDS deposit by 7th (30th April for March), quarterly TDS returns (24Q/26Q/27Q) and late fee/interest implications.",
    citation: "Income Tax Rules — Rule 30; Rule 31A",
    link: "https://incometaxindia.gov.in",
  },
  {
    title: "PF & ESI Compliance Snapshot",
    tags: ["PF", "ESI", "Labour"],
    summary: "Coverage thresholds, contribution rates, due dates (PF/ESI by 15th), and key returns/inspections readiness.",
    citation: "EPF Act 1952; ESI Act 1948",
    link: "https://www.epfindia.gov.in",
  },
  {
    title: "MSME Udyam Registration & Benefits",
    tags: ["MSME", "Registration", "Compliance"],
    summary: "Classification thresholds, registration steps on Udyam portal, benefits on credit, tenders, and delayed payment protection.",
    citation: "MSME Notification 2020; Udyam Rules",
    link: "https://udyamregistration.gov.in",
  },
  {
    title: "Board & Shareholder Meeting Essentials",
    tags: ["Companies Act", "Meetings", "Compliance"],
    summary: "Notice periods, quorum, virtual meeting provisions, and key board agenda items for compliance-heavy quarters.",
    citation: "Companies Act, 2013 — Sections 173, 174; Secretarial Standards",
    link: "https://www.mca.gov.in",
  }
];

const ensureSeed = async () => {
  const count = await LibraryModel.countDocuments();
  if (count === 0) {
    await LibraryModel.insertMany(seedData);
  }
};

export const searchLibrary = async (req, res) => {
  try {
    await ensureSeed();
    const { q = "", tag = "" } = req.query;
    const filter = {};
    if (q) filter.$text = { $search: q };
    if (tag) filter.tags = { $regex: tag, $options: "i" };

    const items = await LibraryModel.find(filter, q ? { score: { $meta: "textScore" } } : {})
      .sort(q ? { score: { $meta: "textScore" }, createdAt: -1 } : { createdAt: -1 })
      .lean();

    return res.json({ success: true, items });
  } catch (err) {
    return res.status(500).json({ success: false, message: "Failed to load library", error: err.message });
  }
};

export const addArticle = async (req, res) => {
  try {
    const { title, tags, summary, citation, link } = req.body;
    if (!title || !summary) {
      return res.status(400).json({ success: false, message: "Title and summary are required" });
    }
    const tagList = Array.isArray(tags) ? tags : (tags || "").split(",").map(t => t.trim()).filter(Boolean);
    const item = await LibraryModel.create({
      title,
      tags: tagList,
      summary,
      citation: citation || "",
      link: link || "",
      createdBy: req.admin?.id || null
    });
    return res.status(201).json({ success: true, item });
  } catch (err) {
    return res.status(500).json({ success: false, message: "Failed to add article", error: err.message });
  }
};

