import React from "react";
import Navbar from "../component/navbar";
import Footer from "../component/footer";
import { BlockReveal, TextReveal } from "../component/ScrollReveal";
import ContactForm from "../component/contactForm";
export default function Audting() {
    return (
        <>
            <Navbar />

            {/* Hero Section */}
            <div className="bg-gradient-to-br from-[#0C2B4E] to-[#1a3d66] text-white pt-30 pb-10 px-6 md:px-10">
                <div className="max-w-6xl mx-auto text-center">
                    <TextReveal delay={0.2} text="Auditing and Assurance" className="font-bold text-4xl md:text-5xl lg:text-5xl mb-4" />
                    <br />
                    <TextReveal delay={0.4} text="What They Are, How They Work, and When They Are Used" className="text-lg md:text-xl text-gray-200 max-w-3xl" />
                </div>
            </div>

            <div className="bg-gray-50 min-h-screen">
                <div className="max-w-6xl mx-auto py-16 px-6 md:px-10">
                    {/* What is Taxation Section */}
                    <BlockReveal>
                        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-10 mb-8 hover:shadow-xl transition-shadow duration-300">
                            <div className="flex items-start gap-4 mb-6">
                                <div className="bg-[#0C2B4E] text-white rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0 text-xl font-bold">
                                    1
                                </div>
                                <div className="flex-1">
                                    <TextReveal delay={0.3} text="What is Auditing?" className="font-bold text-2xl md:text-3xl text-[#0C2B4E] mb-4" />
                                </div>
                            </div>
                            <BlockReveal>
                                <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                                    Auditing is the independent examination of an organisation’s financial statements, records, and underlying transactions to determine whether they are accurate, complete, and prepared in accordance with relevant accounting standards and legal requirements.
                                    The primary goal of an audit is to provide a reasonable assurance that the financial information presented gives a true and fair view of the entity’s financial position and performance. Audits are typically carried out by qualified professionals — such as Chartered Accountants —
                                    who follow rigorous procedures and standards defined under auditing frameworks like the Standards on Auditing (SAs)
                                </p>
                                <p className="text-gray-700 text-base md:text-lg leading-relaxed mt-4">
                                    In practice, auditors examine financial statements such as the balance sheet, income statement, and cash flow statement, test transactions and balances, check internal controls, and evaluate whether the systems and records are free from material misstatement. Audit work includes planning,
                                    risk assessment, evidence gathering, substantive testing, and reporting on findings.
                                </p>
                            </BlockReveal>
                            <BlockReveal>
                                <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                                    Accounting is broader in scope and involves interpreting, classifying, summarising, and reporting the financial information collected through bookkeeping.
                                    It transforms raw transactional data into meaningful financial reports that reflect a business’s financial position and performance over a specific period
                                </p>
                                <div className="text-gray-700 text-base md:text-lg leading-relaxed mt-4">
                                    The main functions of accounting include:
                                    <ul className = "list-disc p-5">

                                        <li>Verification of financial accuracy and compliance with laws and reporting standards.</li>

                                        <li>Detection and prevention of errors, fraud, and irregularities in financial records.</li>

                                        <li>Building credibility with stakeholders — including investors, regulators, lenders, and authorities.</li>

                                        <li>Strengthening internal control mechanisms and governance</li>
                                    </ul>
                                </div>
                            </BlockReveal>
                        </div>
                    </BlockReveal>


                    <BlockReveal>
                        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-10 mb-8 hover:shadow-xl transition-shadow duration-300">
                            <div className="flex items-start gap-4 mb-6">
                                <div className="bg-[#0C2B4E] text-white rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0 text-xl font-bold">
                                    2
                                </div>
                                <div className="flex-1">
                                    <TextReveal delay={0.3} text="What is Assurance?" className="font-bold text-2xl md:text-3xl text-[#0C2B4E] mb-4" />
                                </div>
                            </div>
                            <BlockReveal>
                                <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                                    Assurance services are broader professional engagements that aim to enhance the reliability and relevance of information used by decision-makers.
                                    While an audit is one form of assurance service, assurance itself includes a wider set of activities such as reviews, agreed-upon procedures, compliance checks, internal control assessments, and risk evaluations.
                                </p>
                                <p className="text-gray-700 text-base md:text-lg leading-relaxed mt-4">
                                    Assurance engagements build confidence in the quality of information by evaluating not just the financial statements but also the processes, systems, and controls that generate those numbers.
                                     The level of assurance provided can be reasonable (as in an audit) or limited (as in a review engagement, where analytical procedures and enquiries provide a moderate level of confidence).
                                     Assurance helps stakeholders — including management, investors, creditors, and regulators — to trust the validity of the data they rely on for important decisions. 
                                     It can apply to financial metrics as well as non-financial information, such as sustainability reports or internal performance indicators.
                                </p>
                            </BlockReveal>
                        </div>
                    </BlockReveal>


                    {/* Importance Section */}
                    <BlockReveal>
                        <div className="bg-gradient-to-br from-[#0C2B4E] to-[#1a3d66] text-white rounded-2xl shadow-xl p-8 md:p-10 mb-8">
                            <div className="flex items-start gap-4 mb-6">
                                <div className="bg-white text-[#0C2B4E] rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0 text-xl font-bold">
                                    4
                                </div>
                                <div className="flex-1">
                                    <TextReveal delay={0.3} text="How Auditing and Assurance Work Together" className="font-bold text-2xl md:text-3xl mb-4" />
                                </div>
                            </div>
                            <BlockReveal>
                                <p className="text-gray-100 text-base md:text-lg leading-relaxed">
                                    Auditing and assurance services often go hand in hand. An audit provides a detailed, systematic evaluation of financial records and generates an audit opinion through a formal report. 
                                    Assurance services — including audits — are designed to build credibility around that information. In essence, every audit is an assurance engagement, but not all assurance engagements take the full form of an audit.
                                </p>
                            </BlockReveal>
                        </div>
                    </BlockReveal>
                    <BlockReveal>
                        <div className="bg-gradient-to-br from-[#0C2B4E] to-[#1a3d66] text-white rounded-2xl shadow-xl p-8 md:p-10 mb-8">
                            <div className="flex items-start gap-4 mb-6">
                                <div className="bg-white text-[#0C2B4E] rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0 text-xl font-bold">
                                    4
                                </div>
                                <div className="flex-1">
                                    <TextReveal delay={0.3} text="When are they used?" className="font-bold text-2xl md:text-3xl mb-4" />
                                </div>
                            </div>
                            <BlockReveal>
                                <p className="text-gray-100 text-base md:text-lg leading-relaxed">
                                    Audits are often mandatory for organisations under company law, financial regulations, or for entities seeking external financing. 
                                    Assurance services, while sometimes voluntary, are increasingly used to validate not only financial reports but also risk management systems, internal controls, compliance frameworks, and specialised data like ESG (environmental, social, governance) reports.
                                    Both auditing and assurance play a vital role in promoting financial transparency, regulatory compliance, and stakeholder confidence — making them essential components of sound corporate governance and financial reporting.
                                </p>                            
                            </BlockReveal>
                        </div>
                    </BlockReveal>

                </div>
            </div>
            
            <Footer />
        </>
    );
}