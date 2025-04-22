
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Mail } from "lucide-react";

const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you for your message! We'll get back to you soon.");
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-950 text-gray-100">
      <Navbar />
      <main className="flex-grow p-4 md:p-8">
        <div className="container mx-auto max-w-2xl">
          <Card className="border-gray-800 bg-gray-900">
            <CardHeader>
              <div className="flex items-center gap-2">
                <Mail className="h-5 w-5 text-blue-400" />
                <CardTitle>Contact Us</CardTitle>
              </div>
              <CardDescription>
                Have questions or feedback? Fill out the form below to get in touch with our team.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input id="name" placeholder="Your name" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="Your email" required />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Input id="subject" placeholder="Message subject" required />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea 
                    id="message" 
                    placeholder="Tell us how we can help..." 
                    className="min-h-[120px]" 
                    required 
                  />
                </div>
              </form>
            </CardContent>
            <CardFooter>
              <Button type="submit" onClick={handleSubmit}>
                Send Message
              </Button>
            </CardFooter>
          </Card>
          
          <div className="mt-8 text-center">
            <h3 className="text-xl font-semibold mb-2">Other Ways to Reach Us</h3>
            <p className="text-gray-400">
              Email: support@aitranslator.com<br />
              Business Hours: Monday-Friday, 9AM-5PM GMT
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
