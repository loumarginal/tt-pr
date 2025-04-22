
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Terms = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-950 text-gray-100">
      <Navbar />
      <main className="flex-grow p-4 md:p-8">
        <div className="container mx-auto max-w-4xl">
          <h1 className="text-3xl font-bold mb-6">Terms of Service</h1>
          
          <div className="space-y-6">
            <section className="space-y-3">
              <h2 className="text-xl font-semibold text-blue-400">Agreement to Terms</h2>
              <p className="text-gray-300">
                By accessing or using AI Translator, you agree to be bound by these Terms of Service and all applicable 
                laws and regulations. If you do not agree with any of these terms, you are prohibited from using this service.
              </p>
            </section>
            
            <section className="space-y-3">
              <h2 className="text-xl font-semibold text-blue-400">Use License</h2>
              <p className="text-gray-300">
                Permission is granted to temporarily use this software for personal, non-commercial transitory viewing only. 
                This is the grant of a license, not a transfer of title.
              </p>
            </section>
            
            <section className="space-y-3">
              <h2 className="text-xl font-semibold text-blue-400">API Usage</h2>
              <p className="text-gray-300">
                You are responsible for providing your own API keys for DeepSeek and Google Gemini services. 
                Your use of these services is subject to their respective terms and conditions.
              </p>
            </section>
            
            <section className="space-y-3">
              <h2 className="text-xl font-semibold text-blue-400">Disclaimer</h2>
              <p className="text-gray-300">
                AI Translator is provided "as is". We make no warranties, expressed or implied, and hereby 
                disclaim all warranties, including without limitation, implied warranties or conditions of 
                merchantability, fitness for a particular purpose, or non-infringement of intellectual property.
              </p>
            </section>
            
            <section className="space-y-3">
              <h2 className="text-xl font-semibold text-blue-400">Limitations</h2>
              <p className="text-gray-300">
                In no event shall AI Translator be liable for any damages arising out of the use or inability 
                to use the service, even if we have been notified of the possibility of such damages.
              </p>
            </section>
            
            <section className="space-y-3">
              <h2 className="text-xl font-semibold text-blue-400">Revisions</h2>
              <p className="text-gray-300">
                We may update these Terms of Service at any time without notice. By using this service, 
                you are agreeing to be bound by the then-current version of these Terms of Service.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Terms;
