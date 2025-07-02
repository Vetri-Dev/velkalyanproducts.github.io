
import React from 'react';
import ProductCard from './ProductCard';
import { Wrench, ShoppingBag, Package } from 'lucide-react';

const ProductGrid = () => {
  const products = [
    {
      id: 'precision-screwdrivers',
      title: 'Precision Screwdrivers',
      description: 'Professional-grade screwdrivers engineered for precise torque and durability.',
      icon: <Wrench className="w-6 h-6 text-velkalyan-blue" />,
      features: [
        'Chrome vanadium steel construction',
        'Ergonomic grip handles',
        'Magnetic tips for easy handling',
        'Multiple size options available'
      ]
    },
    {
      id: 'professional-spanners',
      title: 'Professional Spanners',
      description: 'High-quality spanners designed for optimal grip and torque control.',
      icon: <Wrench className="w-6 h-6 text-velkalyan-blue" />,
      features: [
        'Forged chrome-molybdenum steel',
        'Precision machined openings',
        '15° offset for knuckle clearance',
        'Chrome-plated finish'
      ]
    },
    {
      id: 'box-wrenches',
      title: 'Box Wrenches',
      description: 'Durable box wrenches that provide superior leverage for challenging tasks.',
      icon: <Wrench className="w-6 h-6 text-velkalyan-blue" />,
      features: [
        'Double-ended design for versatility',
        'Heat-treated alloy steel construction',
        'Chrome plating resists corrosion',
        'Sizes to fit Honda specifications'
      ]
    },
    {
      id: 'spark-plug-wrenches',
      title: 'Spark Plug Wrenches',
      description: 'Specialized wrenches for precise and safe spark plug installation and removal.',
      icon: <Wrench className="w-6 h-6 text-velkalyan-blue" />,
      features: [
        'Rubber insert to protect ceramic',
        'Hex design for improved torque',
        'Deep socket design for access',
        'Size-specific for Honda engines'
      ]
    },
    {
      id: 'professional-tool-bags',
      title: 'Professional Tool Bags',
      description: 'Durable, organized tool storage solutions for automotive professionals.',
      icon: <ShoppingBag className="w-6 h-6 text-velkalyan-blue" />,
      features: [
        'Heavy-duty canvas construction',
        'Multiple compartments for organization',
        'Reinforced handles and seams',
        'Custom foam inserts available'
      ]
    },
    {
      id: 'tool-sets-kits',
      title: 'Tool Sets & Kits',
      description: 'Comprehensive tool collections designed specifically for Honda maintenance.',
      icon: <Package className="w-6 h-6 text-velkalyan-blue" />,
      features: [
        'Curated selection for specific models',
        'Carrying case included',
        'All tools meet Honda specifications',
        'Available for different service levels'
      ]
    },
  ];

  return (
    <section id="products" className="section-padding bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-block px-3 py-1 text-sm font-medium bg-velkalyan-blue/10 text-velkalyan-blue rounded-full mb-3">Our Products</span>
          <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-velkalyan-blue to-velkalyan-blue/70 bg-clip-text text-transparent">Our Premium Product Range</h2>
          <p className="text-velkalyan-gray">
            Explore our lineup of professional-grade hand tools engineered to meet the exacting 
            standards of automotive professionals.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div 
              key={index}
              id={product.id}
              className="transform transition-all duration-300 hover:translate-y-[-5px]"
              style={{
                animationDelay: `${index * 100}ms`,
                animation: 'fade-in 0.5s ease-out forwards',
                opacity: 0
              }}
            >
              <ProductCard 
                title={product.title}
                description={product.description}
                icon={product.icon}
                features={product.features}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;
