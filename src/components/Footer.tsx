import React from 'react';
import { Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="relative z-10 bg-white/50 backdrop-blur-md mt-16 md:mt-24 pt-12 md:pt-20 pb-8 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16 mb-16">
          
          {/* Branding - Left */}
          <div className="flex flex-col items-center md:items-start justify-start text-center md:text-left">
            <div className="flex items-center gap-3 mb-6">
              <img 
                src={`${import.meta.env.BASE_URL}Logo Image/logo.png`} 
                alt="A.T. Plastics Industry Logo" 
                className="h-10 w-auto object-contain drop-shadow-sm" 
              />
              <span className="font-bold text-xl tracking-tight text-slate-900">
                A.T. Plastics
              </span>
            </div>
            <p className="text-slate-500 leading-relaxed text-sm md:pr-4 max-w-sm">
              Precision, perfection, and advanced injection plastic moulding. Delivering industrial excellence since 1995.
            </p>
          </div>

          {/* Contact Links - Center */}
          <div className="flex flex-col items-center justify-start text-center md:text-left">
            <div className="flex flex-col items-center md:items-start w-max">
              <h4 className="text-sm font-semibold text-slate-900 uppercase tracking-wider mb-6">Connect With Us</h4>
              
              <div className="flex flex-col space-y-4 items-center md:items-start">
                <a href="https://www.youtube.com/@a.tplasticsindustryagra6212" target="_blank" rel="noreferrer" className="flex items-center gap-3 text-slate-500 hover:text-red-600 transition-colors group">
                  <div className="p-2 rounded-lg bg-slate-100 group-hover:bg-red-50 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33 2.78 2.78 0 0 0 1.94 2c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.33 29 29 0 0 0-.46-5.33z"></path>
                      <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
                    </svg>
                  </div>
                  <span className="font-medium text-sm">YouTube Channel</span>
                </a>
                
                <a href="https://share.google/xEJTAWOpTUFBo8bT2" target="_blank" rel="noreferrer" className="flex items-center gap-3 text-slate-500 hover:text-primary transition-colors group">
                  <div className="p-2 rounded-lg bg-slate-100 group-hover:bg-primary/10 transition-colors">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <span className="font-medium text-sm">Find us on Google Maps</span>
                </a>
              </div>
            </div>
          </div>

          {/* Contact Numbers - Right */}
          <div className="flex flex-col items-center md:items-end justify-start text-center md:text-right">
            <div className="flex flex-col items-center md:items-start w-max">
              <h4 className="text-sm font-semibold text-slate-900 uppercase tracking-wider mb-6">Call Us</h4>
              <div className="flex flex-col md:flex-row items-center md:items-start gap-3 text-slate-500 group">
                <div className="p-2 rounded-lg bg-slate-100 group-hover:bg-accent/10 transition-colors md:mt-0.5">
                  <Phone className="w-4 h-4 text-accent" />
                </div>
                <div className="flex flex-col space-y-2 text-center md:text-left">
                  <a href="tel:+918006844519" className="font-medium text-sm hover:text-primary transition-colors">+91 8006844519</a>
                  <a href="tel:+916395210021" className="font-medium text-sm hover:text-primary transition-colors">+91 6395210021</a>
                </div>
              </div>
            </div>
          </div>

        </div>
        
        <div className="border-t border-slate-200 pt-8 flex items-center justify-center">
          <p className="text-slate-400 text-sm text-center">© {new Date().getFullYear()} A.T. Plastics Industry. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
