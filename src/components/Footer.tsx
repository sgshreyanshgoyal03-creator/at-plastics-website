import React from 'react';
import { Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="relative z-10 glass mt-20 pt-16 pb-8 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-12 mb-12 text-center items-start">
        {/* Branding */}
        <div className="flex flex-col items-center">
          <div className="flex items-center justify-center gap-3 mb-6">
            <img src={`${import.meta.env.BASE_URL}Logo Image/logo.png`} alt="A.T. Plastics Industry Logo" className="h-12 w-auto object-contain drop-shadow-[0_0_8px_rgba(0,0,0,0.1)]" />
            <span className="font-bold text-2xl tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-slate-900 to-primary">A.T. Plastics Industry</span>
          </div>
          <p className="text-slate-600 leading-relaxed max-w-sm mx-auto">
            Precision, perfection, and advanced injection plastic moulding. Established in 1995.
          </p>
        </div>

        {/* Contact Links */}
        <div className="flex flex-col items-center space-y-6">
          <h4 className="text-xl font-bold text-slate-900 mb-2">Connect With Us</h4>
          
          <div className="flex flex-col items-start gap-1">
            <a href="https://www.youtube.com/@a.tplasticsindustryagra6212" target="_blank" rel="noreferrer" className="flex items-center gap-3 text-slate-600 hover:text-[#FF0000] transition-colors group">
              <div className="p-2 rounded-full glass group-hover:bg-[#FF0000]/20 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                  <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33 2.78 2.78 0 0 0 1.94 2c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.33 29 29 0 0 0-.46-5.33z"></path>
                  <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
                </svg>
              </div>
              <span>YouTube Channel</span>
            </a>
            
            <a href="https://share.google/xEJTAWOpTUFBo8bT2" target="_blank" rel="noreferrer" className="flex items-center gap-3 text-slate-600 hover:text-primary transition-colors group">
              <div className="p-2 rounded-full glass group-hover:bg-primary/20 transition-colors">
                <MapPin className="w-5 h-5" />
              </div>
              <span>Find us on Google Maps</span>
            </a>
          </div>
        </div>

        {/* Contact Numbers */}
        <div className="flex flex-col items-center space-y-6">
          <h4 className="text-xl font-bold text-slate-900 mb-2">Call Us</h4>
          <div className="flex items-center gap-3 text-slate-700 group">
            <div className="p-2 rounded-full glass">
              <Phone className="w-5 h-5 text-accent" />
            </div>
            <div className="flex flex-col gap-1 text-left">
              <a href="tel:+918006844519" className="hover:text-primary transition-colors">+91 8006844519</a>
              <a href="tel:+916395210021" className="hover:text-primary transition-colors">+91 6395210021</a>
            </div>
          </div>
        </div>
      </div>
      
      <div className="border-t border-slate-200 pt-8 text-center text-slate-500 text-sm">
        <p>© 1995 - {new Date().getFullYear()} A.T. Plastics Industry. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
