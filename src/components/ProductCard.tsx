
import React from 'react';
import { Button } from "@/components/ui/button";
import { InfoIcon, Star } from "lucide-react";

interface ProductCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  features: string[];
}

const ProductCard: React.FC<ProductCardProps> = ({ title, description, icon, features }) => {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="group relative cyber-card rounded-2xl overflow-hidden shadow-card hover:shadow-cyber transition-all duration-500 border border-primary/20 hover:border-primary/40 transform hover:-translate-y-2">
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      
      <div className="relative p-8">
        <div className="flex justify-between items-start mb-6">
          <div className="relative">
            <div className="h-16 w-16 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center shadow-soft group-hover:shadow-neon transition-all duration-300 group-hover:scale-110 border border-primary/30">
              {icon}
            </div>
            <div className="absolute -top-1 -right-1 h-6 w-6 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center neon-glow">
              <Star className="h-3 w-3 text-primary-foreground" />
            </div>
          </div>
        </div>
        
        <div className="mb-6">
          <h3 className="text-2xl font-heading font-bold mb-3 text-foreground group-hover:text-gradient transition-all duration-300">{title}</h3>
          <p className="text-muted-foreground leading-relaxed">{description}</p>
        </div>
        
        <div className="mb-8 cyber-card p-5 rounded-xl border border-primary/30">
          <div className="text-sm font-semibold mb-3 flex items-center text-foreground">
            <InfoIcon className="w-4 h-4 mr-2 text-primary" />
            <span>Premium Features</span>
          </div>
          <ul className="space-y-3">
            {features.map((feature, index) => (
              <li key={index} className="text-sm text-muted-foreground flex items-start group/item">
                <div className="w-5 h-5 mr-3 rounded-full bg-gradient-to-r from-primary to-accent flex items-center justify-center flex-shrink-0 mt-0.5 group-hover/item:scale-110 transition-transform duration-200 neon-glow">
                  <svg className="w-3 h-3 text-primary-foreground" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                  </svg>
                </div>
                <span className="group-hover/item:text-foreground transition-colors duration-200">{feature}</span>
              </li>
            ))}
          </ul>
        </div>
        
        <Button 
          className="w-full h-12 font-semibold btn-gradient text-primary-foreground border-0 rounded-xl shadow-soft hover:shadow-cyber transition-all duration-300 transform hover:scale-[1.02] relative overflow-hidden group/btn"
          onClick={scrollToContact}
        >
          <span className="relative z-10">Request Information</span>
          <div className="absolute inset-0 bg-gradient-to-r from-accent to-primary opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></div>
        </Button>
      </div>
    </div>
  );
};

export default ProductCard;
