import React from "react";
import Navbar from "../component/navbar";
import Footer from "../component/footer";
import { BlockReveal, TextReveal } from "../component/ScrollReveal";
import ContactForm from "../component/contactForm";
export default function Taxation() {
    return (
        <>
            <Navbar />

            {/* Hero Section */}
            <div className="bg-gradient-to-br from-[#0C2B4E] to-[#1a3d66] text-white pt-30 pb-10 px-6 md:px-10">
                <div className="max-w-6xl mx-auto text-center">
                    <TextReveal delay={0.2} text="Accounting and Bookkeeping" className="font-bold text-4xl md:text-5xl lg:text-5xl mb-4" />
                    <br />
                    <TextReveal delay={0.4} text="What They Are, How They Work, and When They Are Used" className="text-lg md:text-xl text-gray-200 max-w-3xl" />
                </div>
            </div>

            <div className="bg-gray-50 min-h-screen">
                <div className="max-w-6xl mx-auto py-16 px-6 md:px-10">


                    <BlockReveal>
                        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-10 mb-8 hover:shadow-xl transition-shadow duration-300">
                            <div className="flex items-start gap-4 mb-6">
                                <div className="bg-[#0C2B4E] text-white rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0 text-xl font-bold">
                                    1
                                </div>
                                <div className="flex-1">
                                    <TextReveal delay={0.3} text="What is Bookkeeping?" className="font-bold text-2xl md:text-3xl text-[#0C2B4E] mb-4" />
                                </div>
                            </div>
                            <BlockReveal>
                                <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                                    Bookkeeping is the systematic process of recording all financial transactions that occur in a business. It serves as the first step in the accounting process and involves collecting day-to-day financial data such as sales,
                                    purchases, receipts, payments, and expenses. A key goal of bookkeeping is to maintain up-to-date, accurate records of every transaction so that financial information is available whenever required — whether for tax compliance,
                                    audits, or managerial review.
                                    A bookkeeper typically records transactions using standard journals, ledgers, and accounting software, following either a single-entry or double-entry system. In a double-entry system, each transaction affects at least two accounts (debit and credit),
                                    helping ensure that the overall books remain balanced.
                                </p>
                                <div className="text-gray-700 text-base md:text-lg leading-relaxed mt-4">

                                    Bookkeeping tasks include:
                                    <ul>

                                        <li>Recording cash receipts and payments</li>

                                        <li>Managing accounts payable and receivable</li>

                                        <li>Posting entries into journals and ledgers</li>

                                        <li>Reconciling bank statements and ledgers</li>

                                        <li>Generating basic financial records such as trial balances</li>
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
                                    <TextReveal delay={0.3} text="What is Accounting?" className="font-bold text-2xl md:text-3xl text-[#0C2B4E] mb-4" />
                                </div>
                            </div>
                            <BlockReveal>
                                <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                                    Accounting is broader in scope and involves interpreting, classifying, summarising, and reporting the financial information collected through bookkeeping.
                                    It transforms raw transactional data into meaningful financial reports that reflect a business’s financial position and performance over a specific period
                                </p>
                                <div className="text-gray-700 text-base md:text-lg leading-relaxed mt-4">
                                    The main functions of accounting include:
                                    <ul>

                                        <li>Preparing financial statements such as the income statement, balance sheet, and cash flow statement</li>

                                        <li>Analysing financial results to evaluate profitability and performance</li>

                                        <li>Advising management on budgeting, planning, and strategy</li>

                                        <li>Ensuring compliance with regulatory standards and tax laws</li>

                                        <li>Assisting in audit preparation and statutory reporting</li>
                                    </ul>
                                </div>
                            </BlockReveal>
                        </div>
                    </BlockReveal>

                    
                    <BlockReveal>
                        <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8 lg:p-10 mb-8 hover:shadow-xl transition-shadow duration-300">
                            <div className="flex flex-col sm:flex-row items-start gap-4 mb-6">
                                <div className="bg-[#0C2B4E] text-white rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0 text-xl font-bold">
                                    3
                                </div>
                                <div className="flex-1">
                                    <TextReveal delay={0.3} text="How they work together?" className="font-bold text-xl md:text-2xl lg:text-3xl text-[#0C2B4E] mb-4 md:mb-6" />
                                </div>
                                <div className="flex-1">
                                    <TextReveal delay={0.3} text="Bookkeeping and accounting are interdependent processes. Bookkeeping creates the organised financial data that accountants use to produce reports and analysis. Without accurate books, accounting results can be unreliable or misleading." 
                                    className="font-semibold text-xl md:text-xl lg:text-2xl text-[#0C2B4E] mb-4 md:mb-6" />
                                </div>
                            </div>
                            <BlockReveal>
                                <div className="space-y-6">
                                    <div className="flex flex-col sm:flex-row gap-4">
                                        <div className="bg-[#0C2B4E]/10 text-[#0C2B4E] rounded-lg w-10 h-10 flex items-center justify-center flex-shrink-0 font-bold">
                                            1
                                        </div>
                                        <div className="flex-1">
                                            <h4 className="font-semibold text-base md:text-lg text-gray-900 mb-2">Record</h4>
                                            <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                                                Bookkeeper logs transactions as they occur.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex flex-col sm:flex-row gap-4">
                                        <div className="bg-[#0C2B4E]/10 text-[#0C2B4E] rounded-lg w-10 h-10 flex items-center justify-center flex-shrink-0 font-bold">
                                            2
                                        </div>
                                        <div className="flex-1">
                                            <h4 className="font-semibold text-base md:text-lg text-gray-900 mb-2">Post</h4>
                                            <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                                                Entries are transferred into accounts in ledgers and trial balance
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex flex-col sm:flex-row gap-4">
                                        <div className="bg-[#0C2B4E]/10 text-[#0C2B4E] rounded-lg w-10 h-10 flex items-center justify-center flex-shrink-0 font-bold">
                                            3
                                        </div>
                                        <div className="flex-1">
                                            <h4 className="font-semibold text-base md:text-lg text-gray-900 mb-2">Summarise</h4>
                                            <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                                               Accountant compiles the data into formal financial statements.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex flex-col sm:flex-row gap-4">
                                        <div className="bg-[#0C2B4E]/10 text-[#0C2B4E] rounded-lg w-10 h-10 flex items-center justify-center flex-shrink-0 font-bold">
                                            4
                                        </div>
                                        <div className="flex-1">
                                            <h4 className="font-semibold text-base md:text-lg text-gray-900 mb-2">Analyse and Interpret</h4>
                                            <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                                                Accountant evaluates financial results and helps management with insights and decisions
                                            </p>
                                        </div>
                                    </div>

                                </div>
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
                                    <TextReveal delay={0.3} text="Conclusion" className="font-bold text-2xl md:text-3xl mb-4" />
                                </div>
                            </div>
                            <BlockReveal>
                                <p className="text-gray-100 text-base md:text-lg leading-relaxed">
                                    In summary, bookkeeping is the detailed daily recording of financial transactions, while accounting uses that recorded data to produce meaningful financial insights, reports, and strategic recommendations. Together, they form the backbone of sound financial management,
                                     helping businesses stay compliant, make informed decisions, and achieve long-term growth.
                                </p>
                                <div className="mt-6 pt-6 border-t border-white/20">
                                    <p className="text-gray-200 text-sm md:text-base italic">
                                        Our team of experts is here to guide you through every step of your tax journey, ensuring compliance and optimizing your financial outcomes.
                                    </p>
                                </div>
                            </BlockReveal>
                        </div>
                    </BlockReveal>

                </div>
            </div>
            
            <Footer />
        </>
    );
}