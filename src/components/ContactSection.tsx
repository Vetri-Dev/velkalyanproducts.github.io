
import React from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Send } from 'lucide-react';

const ContactSection = () => {
  return (
    <section id="contact" className="section-padding bg-velkalyan-light">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
          <p className="text-velkalyan-gray">
            Interested in our tools? Have questions about our products or partnership with Honda? 
            Reach out to our team for more information.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-6">Send Us a Message</h3>
            <form className="space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-velkalyan-blue mb-1">
                    Your Name
                  </label>
                  <Input
                    id="name"
                    placeholder="Enter your name"
                    className="w-full"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-velkalyan-blue mb-1">
                    Email Address
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                    className="w-full"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="company" className="block text-sm font-medium text-velkalyan-blue mb-1">
                  Company
                </label>
                <Input
                  id="company"
                  placeholder="Enter your company name"
                  className="w-full"
                />
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-velkalyan-blue mb-1">
                  Subject
                </label>
                <Input
                  id="subject"
                  placeholder="What's this regarding?"
                  className="w-full"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-velkalyan-blue mb-1">
                  Message
                </label>
                <Textarea
                  id="message"
                  placeholder="Tell us how we can help you..."
                  className="w-full min-h-[120px]"
                />
              </div>
              
              <Button className="w-full bg-velkalyan-red hover:bg-velkalyan-red/90">
                <Send className="mr-2 h-4 w-4" />
                Send Message
              </Button>
            </form>
          </div>
          
          <div className="space-y-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Corporate Office</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <MapPin className="h-5 w-5 text-velkalyan-red mr-3 mt-1" />
                  <div>
                    <p className="text-velkalyan-gray">
                      123 Industrial Area, Phase II <br />
                      New Delhi, 110001, India
                    </p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <Phone className="h-5 w-5 text-velkalyan-red mr-3" />
                  <p className="text-velkalyan-gray">+91 11 2345 6789</p>
                </div>
                
                <div className="flex items-center">
                  <Mail className="h-5 w-5 text-velkalyan-red mr-3" />
                  <p className="text-velkalyan-gray">info@velkalyan.com</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Business Hours</h3>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-velkalyan-gray">Monday - Friday:</span>
                  <span className="font-medium">9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-velkalyan-gray">Saturday:</span>
                  <span className="font-medium">10:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-velkalyan-gray">Sunday:</span>
                  <span className="font-medium">Closed</span>
                </div>
              </div>
            </div>
            
            <div className="bg-velkalyan-blue p-6 rounded-lg shadow-md text-white">
              <h3 className="text-xl font-semibold mb-4 text-white">Become a Distributor</h3>
              <p className="mb-4 opacity-90">
                Interested in distributing Velkalyan tools? We're expanding our network across India.
              </p>
              <Button variant="outline" className="bg-transparent text-white border-white hover:bg-white/10">
                Request Distributor Info
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
