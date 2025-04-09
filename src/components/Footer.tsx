import React from 'react';
import { Wrench, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-velkalyan-blue text-white">
      <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-5">
              <Wrench className="h-6 w-6 text-velkalyan-red mr-2" />
              <span className="text-xl font-bold">Velkalyan Products</span>
            </div>
            <p className="text-sm opacity-80 mb-6">
              Precision engineering for automotive excellence. 
              Trusted supplier of quality hand tools to Honda Motorcycles & Scooters India Ltd.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-velkalyan-red transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-white hover:text-velkalyan-red transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-white hover:text-velkalyan-red transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-white hover:text-velkalyan-red transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-5">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <a href="#products" className="text-sm opacity-80 hover:opacity-100 hover:text-velkalyan-red transition-colors">
                  Our Products
                </a>
              </li>
              <li>
                <a href="#about" className="text-sm opacity-80 hover:opacity-100 hover:text-velkalyan-red transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#partnership" className="text-sm opacity-80 hover:opacity-100 hover:text-velkalyan-red transition-colors">
                  Honda Partnership
                </a>
              </li>
              <li>
                <a href="#contact" className="text-sm opacity-80 hover:opacity-100 hover:text-velkalyan-red transition-colors">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="text-sm opacity-80 hover:opacity-100 hover:text-velkalyan-red transition-colors">
                  Career Opportunities
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-5">Product Categories</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-sm opacity-80 hover:opacity-100 hover:text-velkalyan-red transition-colors">
                  Screwdrivers
                </a>
              </li>
              <li>
                <a href="#" className="text-sm opacity-80 hover:opacity-100 hover:text-velkalyan-red transition-colors">
                  Spanners
                </a>
              </li>
              <li>
                <a href="#" className="text-sm opacity-80 hover:opacity-100 hover:text-velkalyan-red transition-colors">
                  Box Wrenches
                </a>
              </li>
              <li>
                <a href="#" className="text-sm opacity-80 hover:opacity-100 hover:text-velkalyan-red transition-colors">
                  Spark Plug Wrenches
                </a>
              </li>
              <li>
                <a href="#" className="text-sm opacity-80 hover:opacity-100 hover:text-velkalyan-red transition-colors">
                  Tool Bags
                </a>
              </li>
              <li>
                <a href="#" className="text-sm opacity-80 hover:opacity-100 hover:text-velkalyan-red transition-colors">
                  Tool Sets & Kits
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-5">Support</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-sm opacity-80 hover:opacity-100 hover:text-velkalyan-red transition-colors">
                  Technical Support
                </a>
              </li>
              <li>
                <a href="#" className="text-sm opacity-80 hover:opacity-100 hover:text-velkalyan-red transition-colors">
                  Product Warranty
                </a>
              </li>
              <li>
                <a href="#" className="text-sm opacity-80 hover:opacity-100 hover:text-velkalyan-red transition-colors">
                  Request a Catalog
                </a>
              </li>
              <li>
                <a href="#" className="text-sm opacity-80 hover:opacity-100 hover:text-velkalyan-red transition-colors">
                  Distributor Login
                </a>
              </li>
              <li>
                <a href="#" className="text-sm opacity-80 hover:opacity-100 hover:text-velkalyan-red transition-colors">
                  FAQ
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-white/20">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm opacity-80 mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} Velkalyan Products. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-sm opacity-80 hover:opacity-100 transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-sm opacity-80 hover:opacity-100 transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-sm opacity-80 hover:opacity-100 transition-colors">
                Sitemap
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
