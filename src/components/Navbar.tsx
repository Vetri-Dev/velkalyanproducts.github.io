
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X, Wrench, ShoppingBag } from "lucide-react";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <a href="/" className="flex items-center space-x-2">
              <Wrench className="h-7 w-7 text-velkalyan-red" />
              <span className="text-3xl font-bold text-velkalyan-blue">Velkalyan Products</span>
            </a>
          </div>
          
          
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#products" className="text-velkalyan-blue hover:text-velkalyan-red font-medium transition-colors">
              Products
            </a>
            <a href="#about" className="text-velkalyan-blue hover:text-velkalyan-red font-medium transition-colors">
              About Us
            </a>
            <a href="#contact" className="text-velkalyan-blue hover:text-velkalyan-red font-medium transition-colors">
              Contact
            </a>
          </nav>
          
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="outline" className="flex items-center space-x-2">
              <ShoppingBag className="h-4 w-4" />
              <span>Catalog</span>
            </Button>
            <Button className="bg-velkalyan-red hover:bg-velkalyan-red/90">Request Quote</Button>
          </div>
          
          <div className="md:hidden">
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      <div 
        className={cn(
          "md:hidden fixed inset-x-0 top-16 bg-white shadow-md transition-all duration-300 ease-in-out z-40",
          isMenuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0 pointer-events-none"
        )}
      >
        <div className="px-4 py-6 space-y-4">
          <a 
            href="#products" 
            className="block py-2 px-4 text-velkalyan-blue hover:bg-velkalyan-light rounded-md"
            onClick={() => setIsMenuOpen(false)}
          >
            Products
          </a>
          <a 
            href="#about" 
            className="block py-2 px-4 text-velkalyan-blue hover:bg-velkalyan-light rounded-md"
            onClick={() => setIsMenuOpen(false)}
          >
            About Us
          </a>
          <a 
            href="#contact" 
            className="block py-2 px-4 text-velkalyan-blue hover:bg-velkalyan-light rounded-md"
            onClick={() => setIsMenuOpen(false)}
          >
            Contact
          </a>
          <div className="pt-4 flex flex-col space-y-3">
            <Button variant="outline" className="flex justify-center items-center space-x-2 w-full">
              <ShoppingBag className="h-4 w-4" />
              <span>Catalog</span>
            </Button>
            <Button className="w-full bg-velkalyan-red hover:bg-velkalyan-red/90">Request Quote</Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
