import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight, Wrench, Shield, Award } from "lucide-react";
const Hero = () => {
  const scrollToProducts = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const productsSection = document.getElementById('products');
    if (productsSection) {
      productsSection.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };
  const scrollToContact = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };
  return <div className="relative overflow-hidden bg-gradient-to-br from-background via-muted to-card">
      {/* Cyber Grid Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
        backgroundImage: `
            linear-gradient(rgba(34, 197, 94, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(34, 197, 94, 0.1) 1px, transparent 1px)
          `,
        backgroundSize: '50px 50px'
      }}></div>
      </div>
      
      {/* Floating Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-32 -right-32 w-96 h-96 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute top-1/3 -left-32 w-80 h-80 bg-gradient-to-br from-accent/20 to-primary/20 rounded-full blur-3xl animate-float" style={{
        animationDelay: '3s'
      }}></div>
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-gradient-to-br from-primary/15 to-accent/15 rounded-full blur-3xl animate-float" style={{
        animationDelay: '1.5s'
      }}></div>
      </div>
      
      <div className="container mx-auto px-4 py-24 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="max-w-2xl mx-auto lg:mx-0 space-y-10 animate-fade-in">
            <div className="space-y-6">
              <div className="inline-flex items-center px-4 py-2 cyber-card bg-primary/20 rounded-full border border-primary/30 text-primary font-medium text-sm">
                <Award className="w-4 h-4 mr-2" />
                Official Honda Partner Since 2010
              </div>
              
              <h1 className="font-heading font-bold tracking-tight">
                <span className="block text-foreground">Toolkit assemblies for</span>
                <span className="block text-gradient animate-gradient-x">Automotive Industry</span>
              </h1>
              
              <p className="text-xl leading-relaxed mx-0 text-gray-300">Trusted supplier of automotive hand tools.                                          Engineering quality, durability, and precision for automotive professionals worldwide.</p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-6">
              <Button className="h-14 px-8 btn-gradient text-primary-foreground font-semibold rounded-xl neon-glow hover:shadow-cyber transform transition-all duration-300 hover:scale-105 relative overflow-hidden group" onClick={scrollToProducts}>
                <span className="relative z-10 flex items-center">
                  Explore Products
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
              </Button>
            </div>
            
            <div className="cyber-card p-6 rounded-2xl border border-primary/30 shadow-soft hover:shadow-cyber transition-all duration-300 group">
              <p className="font-semibold text-foreground flex items-center text-lg">
                <div className="h-10 w-10 rounded-full bg-gradient-to-r from-primary to-accent flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300 neon-glow">
                  <Shield className="h-5 w-5 text-primary-foreground" />
                </div>
                Approved Toolkit Supplier for Honda Motorcycles & Scooters India Ltd.
              </p>
            </div>
          </div>
          
          <div className="relative animate-fade-in" style={{
          animationDelay: '0.3s'
        }}>
            <div className="cyber-card rounded-3xl overflow-hidden shadow-cyber p-8 border border-primary/30 relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5"></div>
              
              <div className="relative z-10">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-heading font-bold text-foreground mb-2">Premium Tool Collection</h3>
                  <p className="text-muted-foreground">Engineered for Quality and Reliability</p>
                </div>
                
                <div className="grid grid-cols-2 gap-6">
                  {[{
                  name: "Screwdrivers",
                  icon: Wrench
                }, {
                  name: "Professional Spanners",
                  icon: Wrench
                }, {
                  name: "Box Wrenches",
                  icon: Wrench
                }, {
                  name: "Tool Bags & Kits",
                  icon: Wrench
                }].map((tool, index) => <div key={tool.name} className="flex flex-col items-center p-6 cyber-card rounded-2xl shadow-card hover:shadow-cyber transform transition-all duration-300 hover:scale-105 group border border-primary/20" style={{
                  animationDelay: `${index * 0.1}s`
                }}>
                      <div className="h-12 w-12 rounded-xl bg-gradient-to-r from-primary to-accent flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300 neon-glow">
                        <tool.icon className="h-6 w-6 text-primary-foreground" />
                      </div>
                      <span className="font-medium text-center text-sm text-foreground group-hover:text-gradient transition-all duration-300">{tool.name}</span>
                    </div>)}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>;
};
export default Hero;