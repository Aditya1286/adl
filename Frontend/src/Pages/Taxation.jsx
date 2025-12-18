import React from "react";
import Navbar from "../component/navbar.jsx";
import Footer from "../component/footer.jsx";
import { BlockReveal, TextReveal } from "../component/ScrollReveal.jsx";
import ContactForm from "../component/contactForm.jsx";
export default function Taxation() {
    return (
        <>
            <Navbar />
            
            {/* Hero Section */}
            <div className="bg-gradient-to-br from-indigo-700 via-indigo-800 to-indigo-900 text-white pt-30 pb-10 px-6 md:px-10">
                <div className="max-w-6xl mx-auto text-center">
                    <TextReveal delay={0.2} text="Taxation & Return Filing" className="font-bold text-4xl md:text-5xl lg:text-5xl mb-4" />
                    <br />
                    <TextReveal delay={0.4} text="Expert guidance for your tax compliance and financial planning needs" className="text-lg md:text-xl text-gray-200 max-w-3xl" />
                </div>
            </div>

            <div className="bg-gray-50 min-h-screen">
                <div className="max-w-6xl mx-auto py-16 px-6 md:px-10">
                    
                    {/* What is Taxation Section */}
                    <BlockReveal>
                        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-10 mb-8 hover:shadow-xl transition-shadow duration-300">
                            <div className="flex items-start gap-4 mb-6">
                                <div className="bg-indigo-600 text-white rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0 text-xl font-bold">
                                    1
                                </div>
                                <div className="flex-1">
                                    <TextReveal delay={0.3} text="What is Taxation?" className="font-bold text-2xl md:text-3xl text-indigo-900 mb-4" />
                                </div>
                            </div>
                            <BlockReveal>
                                <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                                    Taxation is the system by which governments collect money from individuals and organizations — called "taxes" — to fund public goods and services (such as roads, schools, healthcare, and national defense), as well as regulatory and welfare functions.
                                    In most countries, taxation is imposed on various kinds of economic activity: earnings (income tax), profits, consumption (sales tax, GST), property, etc. Generally,
                                    a key principle of income tax is that people whose income exceeds certain thresholds pay taxes at progressive or slab-based rates: the more you earn, the higher your relative contribution.
                                </p>
                                <p className="text-gray-700 text-base md:text-lg leading-relaxed mt-4">
                                    In India, income tax is a form of direct tax — levied on individuals, companies, Hindu Undivided Families (HUFs), etc. The income earned over a financial year (which runs from April 1 to March 31) is aggregated, deductions and exemptions (if eligible) applied,
                                    and the remaining "taxable income" is taxed according to prevailing slab rates or tax regime.
                                </p>
                            </BlockReveal>
                        </div>
                    </BlockReveal>

                    {/* What is Return Filing Section */}
                    <BlockReveal>
                        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-10 mb-8 hover:shadow-xl transition-shadow duration-300">
                            <div className="flex items-start gap-4 mb-6">
                                <div className="bg-indigo-600 text-white rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0 text-xl font-bold">
                                    2
                                </div>
                                <div className="flex-1">
                                    <TextReveal delay={0.3} text="What is Return Filing?" className="font-bold text-2xl md:text-3xl text-indigo-900 mb-4" />
                                </div>
                            </div>
                            <BlockReveal>
                                <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                                    A tax return is a formal document submitted by a taxpayer to the tax authorities, declaring the total income earned during a financial year, any taxes already paid (e.g. via withholding, advance tax),
                                    deductions or exemptions claimed, and ultimately the tax liability — or refund, if more tax was paid than owed.
                                </p>
                                <p className="text-gray-700 text-base md:text-lg leading-relaxed mt-4">
                                    In India, this document is generally called an Income Tax Return (ITR). There are multiple versions of ITR — ITR-1, ITR-2, ITR-3, up to ITR-7 — and the correct form depends on factors like the nature of income (salary, business profit, capital gains, foreign income, etc.),
                                    residential status, and whether the taxpayer is individual, HUF, firm, company, etc.
                                </p>
                            </BlockReveal>
                        </div>
                    </BlockReveal>

                    {/* How Return Filing Works Section */}
                    <BlockReveal>
                        <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8 lg:p-10 mb-8 hover:shadow-xl transition-shadow duration-300">
                            <div className="flex flex-col sm:flex-row items-start gap-4 mb-6">
                                <div className="bg-indigo-600 text-white rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0 text-xl font-bold">
                                    3
                                </div>
                                <div className="flex-1">
                                    <TextReveal delay={0.3} text="How Return Filing Works: The Process" className="font-bold text-xl md:text-2xl lg:text-3xl text-indigo-900 mb-4 md:mb-6" />
                                </div>
                            </div>
                            <BlockReveal>
                                <div className="space-y-6">
                                    <div className="flex flex-col sm:flex-row gap-4">
                                        <div className="bg-[#0C2B4E]/10 text-[#0C2B4E] rounded-lg w-10 h-10 flex items-center justify-center flex-shrink-0 font-bold">
                                            1
                                        </div>
                                        <div className="flex-1">
                                            <h4 className="font-semibold text-base md:text-lg text-gray-900 mb-2">Collect Information</h4>
                                            <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                                                Before filing, a taxpayer needs to gather documents such as salary slips, bank statements, interest certificates, Form 16 (if salaried), Form 26AS / Annual Information Statement (showing tax deducted at source — TDS), proofs of investments/deductions (under sections like 80C, etc.), and details of other income (rental, capital gains, business profit, etc.)
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex flex-col sm:flex-row gap-4">
                                        <div className="bg-[#0C2B4E]/10 text-[#0C2B4E] rounded-lg w-10 h-10 flex items-center justify-center flex-shrink-0 font-bold">
                                            2
                                        </div>
                                        <div className="flex-1">
                                            <h4 className="font-semibold text-base md:text-lg text-gray-900 mb-2">Choose Correct ITR Form and Tax Regime</h4>
                                            <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                                                Based on income sources and residential status, select the appropriate ITR form (e.g. ITR-1 for salary + one house property; a different ITR if you have business income, capital gains, etc.). Also choose between applicable tax regimes (old vs. new, where relevant).
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex flex-col sm:flex-row gap-4">
                                        <div className="bg-[#0C2B4E]/10 text-[#0C2B4E] rounded-lg w-10 h-10 flex items-center justify-center flex-shrink-0 font-bold">
                                            3
                                        </div>
                                        <div className="flex-1">
                                            <h4 className="font-semibold text-base md:text-lg text-gray-900 mb-2">Compute Taxable Income</h4>
                                            <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                                                Sum up all income sources, subtract deductions/exemptions you are eligible for, to arrive at taxable income. Then apply applicable slab/rate of tax.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex flex-col sm:flex-row gap-4">
                                        <div className="bg-[#0C2B4E]/10 text-[#0C2B4E] rounded-lg w-10 h-10 flex items-center justify-center flex-shrink-0 font-bold">
                                            4
                                        </div>
                                        <div className="flex-1">
                                            <h4 className="font-semibold text-base md:text-lg text-gray-900 mb-2">File the ITR</h4>
                                            <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                                                This can be done online (e-filing) using the official portal, by uploading a JSON/utility-generated file, or — in limited cases — by physical submission of a printed form.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex flex-col sm:flex-row gap-4">
                                        <div className="bg-[#0C2B4E]/10 text-[#0C2B4E] rounded-lg w-10 h-10 flex items-center justify-center flex-shrink-0 font-bold">
                                            5
                                        </div>
                                        <div className="flex-1">
                                            <h4 className="font-semibold text-base md:text-lg text-gray-900 mb-2">Verification / E-verification</h4>
                                            <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                                                Once filed, the return must be verified (for instance via Aadhaar OTP / electronic method or by sending ITR-V if done offline) to complete the process.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex flex-col sm:flex-row gap-4">
                                        <div className="bg-[#0C2B4E]/10 text-[#0C2B4E] rounded-lg w-10 h-10 flex items-center justify-center flex-shrink-0 font-bold">
                                            6
                                        </div>
                                        <div className="flex-1">
                                            <h4 className="font-semibold text-base md:text-lg text-gray-900 mb-2">Processing by Tax Department</h4>
                                            <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                                                The tax authority reviews the filed return, reconciles with TDS, advance tax/ self-assessment data. If you've paid excess tax, you may get a refund; if not enough tax was paid, you may need to pay additional tax or interest.
                                            </p>
                                        </div>
                                    </div>
                                </div>
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
                                    <TextReveal delay={0.3} text="Importance & Role of Professionals" className="font-bold text-2xl md:text-3xl mb-4" />
                                </div>
                            </div>
                            <BlockReveal>
                                <p className="text-gray-100 text-base md:text-lg leading-relaxed">
                                    Filing taxes and returns — especially for businesses, expatriates, investments, capital gains or foreign income — can be complex. Professional firms offer services such as business taxation, auditing, corporate compliance, expatriate taxation, transfer pricing, etc. This reflects how professional expertise can help taxpayers navigate complex regulations,
                                    choose correct filings, reduce liability legally, and ensure compliance — thereby reducing risk of error, penalty or unnecessary tax burden.
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
            <ContactForm/>
            <Footer />
        </>
    );
}