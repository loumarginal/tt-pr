
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TranslatorForm from "@/components/TranslatorForm";

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-950 text-gray-100">
      <Navbar />
      <main className="flex-grow p-4 md:p-8">
        <div className="container mx-auto">
          <h1 className="text-3xl font-bold mb-8 text-center bg-gradient-to-r from-blue-400 to-purple-600 text-transparent bg-clip-text">
            Advanced AI Translation
          </h1>
          <TranslatorForm />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
