import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, Home as HomeIcon, Sparkles } from 'lucide-react';
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
    <div className="pt-20 min-h-screen bg-black text-white">
      {/* Top Header Breadcrumb Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-4">
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-zinc-800/80 pb-4">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm font-semibold text-zinc-400 hover:text-cyan-400 transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span>Back to Portfolio Overview</span>
          </Link>

          <div className="flex items-center gap-2 text-xs font-mono text-zinc-400">
            <Link to="/" className="hover:text-zinc-200 transition-colors flex items-center gap-1">
              <HomeIcon className="w-3.5 h-3.5" />
              <span>Home</span>
            </Link>
            <span>/</span>
            <span className="text-cyan-400 font-semibold flex items-center gap-1">
              <Sparkles className="w-3 h-3" />
              <span>Full Services</span>
            </span>
          </div>
        </div>
      </div>

      {/* Full Services Component */}
      <ServicesFull onOpenContact={handleOpenContact} />
    </div>
  );
};
export default ServicesPage;
