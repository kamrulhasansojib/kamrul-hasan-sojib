import React, { useEffect } from 'react';
import { Link, useNavigate } from '../lib/router';
import { ArrowLeft } from 'lucide-react';
import { ServicesFull } from '../components/ServicesFull';

interface ServicesPageProps {
  onOpenContact?: () => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({ onOpenContact }) => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleOpenContact = () => {
    if (onOpenContact) {
      onOpenContact();
    } else {
      navigate('/#contact');
    }
  };

  return (
    <div className="pt-16 sm:pt-20 min-h-screen bg-black text-white">
      {/* Top Header Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-3 pb-1">
        <div className="flex items-center justify-between border-b border-zinc-800/60 pb-3">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-zinc-400 hover:text-cyan-400 transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span>Back to Portfolio Overview</span>
          </Link>
        </div>
      </div>

      {/* Full Services Component */}
      <ServicesFull onOpenContact={handleOpenContact} />
    </div>
  );
};
export default ServicesPage;
