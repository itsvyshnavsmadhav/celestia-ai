"use client";

import React, { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Construct the email body matching the form fields
    const body = `Name: ${name}
Email: ${email}
Company: ${company || "Not provided"}

Message:
${message}`;

    const gmailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=contact@celestia-ai.ai&su=${encodeURIComponent(
      subject || "New Enquiry from Contact Form"
    )}&body=${encodeURIComponent(body)}`;

    window.open(gmailLink, '_blank');
  };

  return (
    <>
      <Header />
      <main className="pt-[104px] min-h-screen flex items-center justify-center bg-background py-12 md:py-16 px-5 md:px-8 relative z-10">
        <div className="w-full max-w-6xl flex flex-col lg:flex-row gap-12 lg:gap-20 items-center lg:items-start justify-between relative z-20">
          
          {/* Left Column */}
          <div className="w-full lg:w-1/2 flex flex-col justify-center pt-2 md:pt-8 text-center lg:text-left">
            <span className="font-hanken text-[12px] md:text-[13px] font-bold tracking-widest text-[#B88D5E] uppercase block mb-4 mx-auto lg:mx-0">
              CONTACT US
            </span>
            <h1 className="font-hanken text-[36px] md:text-[56px] font-bold tracking-tight text-on-surface leading-[1.1] mb-5 md:mb-6">
              Let&apos;s <span className="text-[#D4A373]">Talk</span>
            </h1>
            <p className="font-inter text-[15px] md:text-[18px] text-on-surface-variant mb-10 max-w-lg mx-auto lg:mx-0 leading-relaxed">
              Tell us about your project and we&apos;ll get back to you within a day.
            </p>

            <div className="flex flex-col gap-6 md:gap-8 mx-auto lg:mx-0 max-w-xs md:max-w-full text-left">
              {/* Feature 1 */}
              <div className="flex items-start gap-5">
                <div className="w-12 h-12 rounded-xl bg-surface-container-low border border-outline/20 shadow-sm flex items-center justify-center text-[#D4A373] shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>
                </div>
                <div className="flex flex-col">
                  <h3 className="font-hanken text-[18px] font-bold text-on-surface mb-1">Prototype on day 0</h3>
                  <p className="font-inter text-[14px] text-on-surface-variant">You see something working before you commit</p>
                </div>
              </div>
              
              {/* Feature 2 */}
              <div className="flex items-start gap-5">
                <div className="w-12 h-12 rounded-xl bg-surface-container-low border border-outline/20 shadow-sm flex items-center justify-center text-[#D4A373] shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path><polyline points="9 12 11 14 15 10"></polyline></svg>
                </div>
                <div className="flex flex-col">
                  <h3 className="font-hanken text-[18px] font-bold text-on-surface mb-1">Live in 5-6 weeks</h3>
                  <p className="font-inter text-[14px] text-on-surface-variant">Kickoff to production, not a project that drags on</p>
                </div>
              </div>

              {/* Feature 3 */}
              <div className="flex items-start gap-5">
                <div className="w-12 h-12 rounded-xl bg-surface-container-low border border-outline/20 shadow-sm flex items-center justify-center text-[#D4A373] shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
                </div>
                <div className="flex flex-col">
                  <h3 className="font-hanken text-[18px] font-bold text-on-surface mb-1">Risk free engagement</h3>
                  <p className="font-inter text-[14px] text-on-surface-variant">No upfront commitment, we carry the risk, not you</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column Form */}
          <div className="w-full lg:w-[55%] bg-surface-container rounded-3xl p-6 sm:p-8 md:p-12 shadow-[0_10px_40px_rgba(0,0,0,0.2)] border border-outline/20">
            <div className="mb-6 md:mb-8 text-center lg:text-left">
              <h2 className="font-hanken text-[24px] md:text-[32px] font-bold tracking-tight text-on-surface mb-2">
                Send us a message
              </h2>
              <p className="font-inter text-[14px] text-on-surface-variant">
                Fill out the form below and we&apos;ll get back to you soon.
              </p>
            </div>

            <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {/* Full Name */}
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-[#9CA3AF]">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                  </div>
                  <input 
                    type="text" 
                    placeholder="Full Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full pl-11 pr-4 py-3.5 rounded-xl border border-outline/20 bg-surface-container-lowest focus:bg-surface-container focus:outline-none focus:border-[#DFBE82] focus:ring-1 focus:ring-[#DFBE82] transition-colors placeholder:text-on-surface-variant text-[14px] font-inter text-on-surface"
                    required
                  />
                </div>

                {/* Work Email */}
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-[#9CA3AF]">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                  </div>
                  <input 
                    type="email" 
                    placeholder="Work Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full pl-11 pr-4 py-3.5 rounded-xl border border-outline/20 bg-surface-container-lowest focus:bg-surface-container focus:outline-none focus:border-[#DFBE82] focus:ring-1 focus:ring-[#DFBE82] transition-colors placeholder:text-on-surface-variant text-[14px] font-inter text-on-surface"
                    required
                  />
                </div>
              </div>

              {/* Company Name */}
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-[#9CA3AF]">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="2" width="16" height="20" rx="2" ry="2"></rect><path d="M9 22v-4h6v4"></path><path d="M8 6h.01"></path><path d="M16 6h.01"></path><path d="M12 6h.01"></path><path d="M12 10h.01"></path><path d="M12 14h.01"></path><path d="M16 10h.01"></path><path d="M16 14h.01"></path><path d="M8 10h.01"></path><path d="M8 14h.01"></path></svg>
                </div>
                <input 
                  type="text" 
                  placeholder="Company Name"
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                  className="w-full pl-11 pr-4 py-3.5 rounded-xl border border-outline/20 bg-surface-container-lowest focus:bg-surface-container focus:outline-none focus:border-[#DFBE82] focus:ring-1 focus:ring-[#DFBE82] transition-colors placeholder:text-on-surface-variant text-[14px] font-inter text-on-surface"
                />
              </div>

              {/* Subject */}
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-[#9CA3AF]">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"></path><line x1="7" y1="7" x2="7.01" y2="7"></line></svg>
                </div>
                <input 
                  type="text" 
                  placeholder="Subject"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  className="w-full pl-11 pr-4 py-3.5 rounded-xl border border-outline/20 bg-surface-container-lowest focus:bg-surface-container focus:outline-none focus:border-[#DFBE82] focus:ring-1 focus:ring-[#DFBE82] transition-colors placeholder:text-on-surface-variant text-[14px] font-inter text-on-surface"
                  required
                />
              </div>

              {/* Tell us about your project */}
              <div className="relative">
                <div className="absolute top-4 left-0 pl-4 flex items-start pointer-events-none text-[#9CA3AF]">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path></svg>
                </div>
                <textarea 
                  rows={5}
                  placeholder="Tell us about your project"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full pl-11 pr-4 py-3.5 rounded-xl border border-outline/20 bg-surface-container-lowest focus:bg-surface-container focus:outline-none focus:border-[#DFBE82] focus:ring-1 focus:ring-[#DFBE82] transition-colors resize-y placeholder:text-on-surface-variant text-[14px] font-inter text-on-surface"
                  required
                ></textarea>
              </div>

              {/* Button */}
              <button 
                type="submit"
                className="w-full mt-2 py-3.5 rounded-xl bg-[#E3C78B] hover:bg-[#d6b779] text-[#2B3544] font-medium font-inter transition-colors flex items-center justify-center gap-2"
              >
                Send Message
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
              </button>
              
              <div className="flex items-center justify-center gap-1.5 mt-3 text-[#9CA3AF]">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
                <span className="font-inter text-[12px]">We respect your privacy. No spam, ever.</span>
              </div>
            </form>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
