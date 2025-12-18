
import React from "react"
import { Calculator } from 'lucide-react';
import { Link } from "react-router-dom"
import Landing from "../Pages/Landing.jsx";
import About from "../Pages/About.jsx";
import Contact from "../Pages/contactUs.jsx";
export default function Footer() {
    return (
        <>
            <footer className="bg-[#0C2B4E] text-white py-16 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="grid md:grid-cols-4 gap-12 mb-12">
                        <div>
                            <div className="flex items-center mb-6">
                                <div className="bg-gradient-to-br from-[#1A3D64] to-[#1D546C] p-3 rounded-xl">
                                    <Calculator className="w-7 h-7 text-white" />
                                </div>
                                <span className="brand-font ml-3 text-2xl font-bold tracking-widest">Elite Advisers</span>
                            </div>
                            <p className="text-[#F4F4F4]/80">Your trusted partner in financial excellence and business growth.</p>
                        </div>
                        <div>
                            <h4 className="font-bold text-lg mb-4 text-white">Services</h4>
                            <ul className="space-y-3 text-[#F4F4F4]/80">
                                <li className="hover:text-white transition cursor-pointer">Taxation and return filing</li>
                                <li className="hover:text-white transition cursor-pointer">General Consultancy</li>
                                <li className="hover:text-white transition cursor-pointer">Accounting and BookKeeping</li>
                                <li className="hover:text-white transition cursor-pointer">Audit and Assurance</li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-bold text-lg mb-4 text-white">Quick Links</h4>
                            <ul className="space-y-3 text-[#F4F4F4]/80">
                                <li><Link to="/" className="hover:text-white transition">Home</Link></li>
                                <li><Link to="/about" className="hover:text-white transition">About Us</Link></li>
                                <li><Link to="/contact" className="hover:text-white transition">Contact</Link></li>

                            </ul>
                        </div>
                        <div>
                            <h4 className="font-bold text-lg mb-4 text-white">Connect With Us</h4>
                            <p className="text-[#F4F4F4]/80 mb-4">Follow us on social media for updates and insights</p>
                            <div className="flex space-x-4">
                                <a href="#" className="w-10 h-10 bg-[#1D546C] rounded-lg flex items-center justify-center hover:bg-[#1A3D64] transition">
                                    <span className="text-white font-bold">in</span>
                                </a>
                                <a href="#" className="w-10 h-10 bg-[#1D546C] rounded-lg flex items-center justify-center hover:bg-[#1A3D64] transition">
                                    <span className="text-white font-bold">X</span>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="border-t border-[#1D546C] pt-8 text-center text-[#F4F4F4]/80">
                        <p>&copy; 2025 Elite Advisers. All rights reserved.</p>
                    </div>
                </div>
            </footer>
        </>
    )
}
