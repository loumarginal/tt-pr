
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Privacy = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-950 text-gray-100">
      <Navbar />
      <main className="flex-grow p-4 md:p-8">
        <div className="container mx-auto max-w-4xl">
          <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
          
          <div className="space-y-6">
            <section className="space-y-3">
              <h2 className="text-xl font-semibold text-blue-400">Overview</h2>
              <p className="text-gray-300">
                Your privacy is important to us. This Privacy Policy explains how AI Translator collects, 
                uses, and safeguards your information when you use our translation service.
              </p>
            </section>
            
            <section className="space-y-3">
              <h2 className="text-xl font-semibold text-blue-400">Information We Collect</h2>
              <p className="text-gray-300">
                We collect the text you submit for translation. API keys you provide are stored locally 
                on your device and are not transmitted to our servers. We may collect anonymous usage 
                statistics to improve our service.
              </p>
            </section>
            
            <section className="space-y-3">
              <h2 className="text-xl font-semibold text-blue-400">How We Use Your Information</h2>
              <p className="text-gray-300">
                The text you submit for translation is processed through the selected AI service (DeepSeek 
                or Google Gemini) according to their respective terms of service. We do not store your 
                translated content on our servers.
              </p>
            </section>
            
            <section className="space-y-3">
              <h2 className="text-xl font-semibold text-blue-400">Data Security</h2>
              <p className="text-gray-300">
                We implement appropriate security measures to protect your personal information. However, 
                no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.
              </p>
            </section>
            
            <section className="space-y-3">
              <h2 className="text-xl font-semibold text-blue-400">Changes to This Policy</h2>
              <p className="text-gray-300">
                We may update our Privacy Policy from time to time. We will notify you of any changes by 
                posting the new Privacy Policy on this page.
              </p>
            </section>
            
            <section className="space-y-3">
              <h2 className="text-xl font-semibold text-blue-400">Contact Us</h2>
              <p className="text-gray-300">
                If you have any questions about this Privacy Policy, please contact us.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Privacy;
