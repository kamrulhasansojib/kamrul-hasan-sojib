import React from 'react';
import { Sliders, Circle, Sparkles, Grid, Eye, Check, X, RefreshCw } from 'lucide-react';
import { ImageCropStyle, BackgroundPattern, AccentGradient, ProfileData } from '../types';

interface HeroControlsProps {
  isOpen: boolean;
  onClose: () => void;
  cropStyle: ImageCropStyle;
  setCropStyle: (style: ImageCropStyle) => void;
  backgroundPattern: BackgroundPattern;
  setBackgroundPattern: (pattern: BackgroundPattern) => void;
  accentGradient: AccentGradient;
  setAccentGradient: (accent: AccentGradient) => void;
  profile: ProfileData;
  setProfile: React.Dispatch<React.SetStateAction<ProfileData>>;
  onReset: () => void;
}

export const HeroControls: React.FC<HeroControlsProps> = ({
  isOpen,
  onClose,
  cropStyle,
  setCropStyle,
  backgroundPattern,
  setBackgroundPattern,
  accentGradient,
  setAccentGradient,
  profile,
  setProfile,
  onReset
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg bg-zinc-950 border border-zinc-800 rounded-2xl p-6 shadow-2xl text-white max-h-[90vh] overflow-y-auto">
        
        {/* Header */}
        <div className="flex items-center justify-between pb-4 mb-6 border-b border-zinc-800">
          <div className="flex items-center gap-2">
            <Sliders className="w-5 h-5 text-cyan-400" />
            <h3 className="text-lg font-bold">Hero Section Customizer</h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Control Groups */}
        <div className="space-y-6">
          
          {/* 1. Image Treatment Crop Style */}
          <div>
            <label className="block text-xs font-semibold text-zinc-400 uppercase tracking-wider mb-2.5">
              Image Treatment (Crop Shape)
            </label>
            <div className="grid grid-cols-3 gap-2">
              <button
                type="button"
                onClick={() => setCropStyle('soft-blob')}
                className={`flex flex-col items-center justify-center p-3 rounded-xl border text-xs font-medium transition-all ${
                  cropStyle === 'soft-blob'
                    ? 'border-cyan-500 bg-cyan-950/40 text-cyan-300 shadow-md'
                    : 'border-zinc-800 bg-zinc-900/50 text-zinc-400 hover:border-zinc-700'
                }`}
              >
                <div className="w-8 h-8 rounded-[42%_58%_60%_40%/45%_42%_58%_55%] bg-gradient-to-tr from-blue-500 to-cyan-400 mb-2" />
                <span>Soft Organic Blob</span>
              </button>

              <button
                type="button"
                onClick={() => setCropStyle('circular')}
                className={`flex flex-col items-center justify-center p-3 rounded-xl border text-xs font-medium transition-all ${
                  cropStyle === 'circular'
                    ? 'border-cyan-500 bg-cyan-950/40 text-cyan-300 shadow-md'
                    : 'border-zinc-800 bg-zinc-900/50 text-zinc-400 hover:border-zinc-700'
                }`}
              >
                <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-blue-500 to-cyan-400 mb-2" />
                <span>Circular Crop</span>
              </button>

              <button
                type="button"
                onClick={() => setCropStyle('smooth-blob')}
                className={`flex flex-col items-center justify-center p-3 rounded-xl border text-xs font-medium transition-all ${
                  cropStyle === 'smooth-blob'
                    ? 'border-cyan-500 bg-cyan-950/40 text-cyan-300 shadow-md'
                    : 'border-zinc-800 bg-zinc-900/50 text-zinc-400 hover:border-zinc-700'
                }`}
              >
                <div className="w-8 h-8 rounded-[50%_50%_45%_55%/55%_45%_55%_45%] bg-gradient-to-tr from-blue-500 to-cyan-400 mb-2" />
                <span>Smooth Blob</span>
              </button>
            </div>
          </div>

          {/* 2. Background Pattern Behind Image Only */}
          <div>
            <label className="block text-xs font-semibold text-zinc-400 uppercase tracking-wider mb-2.5">
              Background Depth Pattern (Behind Image)
            </label>
            <div className="grid grid-cols-3 gap-2">
              <button
                type="button"
                onClick={() => setBackgroundPattern('grid')}
                className={`flex items-center justify-center gap-2 p-3 rounded-xl border text-xs font-medium transition-all ${
                  backgroundPattern === 'grid'
                    ? 'border-cyan-500 bg-cyan-950/40 text-cyan-300'
                    : 'border-zinc-800 bg-zinc-900/50 text-zinc-400 hover:border-zinc-700'
                }`}
              >
                <Grid className="w-4 h-4 text-cyan-400" />
                <span>Grid Pattern</span>
              </button>

              <button
                type="button"
                onClick={() => setBackgroundPattern('dot')}
                className={`flex items-center justify-center gap-2 p-3 rounded-xl border text-xs font-medium transition-all ${
                  backgroundPattern === 'dot'
                    ? 'border-cyan-500 bg-cyan-950/40 text-cyan-300'
                    : 'border-zinc-800 bg-zinc-900/50 text-zinc-400 hover:border-zinc-700'
                }`}
              >
                <Circle className="w-3.5 h-3.5 text-cyan-400" />
                <span>Dot Pattern</span>
              </button>

              <button
                type="button"
                onClick={() => setBackgroundPattern('none')}
                className={`flex items-center justify-center gap-2 p-3 rounded-xl border text-xs font-medium transition-all ${
                  backgroundPattern === 'none'
                    ? 'border-cyan-500 bg-cyan-950/40 text-cyan-300'
                    : 'border-zinc-800 bg-zinc-900/50 text-zinc-400 hover:border-zinc-700'
                }`}
              >
                <span>None (Pure Black)</span>
              </button>
            </div>
          </div>

          {/* 3. Border Ring & Glow Accent */}
          <div>
            <label className="block text-xs font-semibold text-zinc-400 uppercase tracking-wider mb-2.5">
              Rotating Border Ring Accent
            </label>
            <div className="grid grid-cols-2 gap-2">
              <button
                type="button"
                onClick={() => setAccentGradient('blue-cyan')}
                className={`flex items-center gap-2.5 p-3 rounded-xl border text-xs font-medium ${
                  accentGradient === 'blue-cyan'
                    ? 'border-cyan-500 bg-cyan-950/40 text-white'
                    : 'border-zinc-800 bg-zinc-900/50 text-zinc-400 hover:border-zinc-700'
                }`}
              >
                <div className="w-4 h-4 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400" />
                <span>Blue → Cyan</span>
              </button>

              <button
                type="button"
                onClick={() => setAccentGradient('emerald-teal')}
                className={`flex items-center gap-2.5 p-3 rounded-xl border text-xs font-medium ${
                  accentGradient === 'emerald-teal'
                    ? 'border-emerald-500 bg-emerald-950/40 text-white'
                    : 'border-zinc-800 bg-zinc-900/50 text-zinc-400 hover:border-zinc-700'
                }`}
              >
                <div className="w-4 h-4 rounded-full bg-gradient-to-r from-emerald-400 to-cyan-400" />
                <span>Emerald → Teal</span>
              </button>

              <button
                type="button"
                onClick={() => setAccentGradient('purple-pink')}
                className={`flex items-center gap-2.5 p-3 rounded-xl border text-xs font-medium ${
                  accentGradient === 'purple-pink'
                    ? 'border-purple-500 bg-purple-950/40 text-white'
                    : 'border-zinc-800 bg-zinc-900/50 text-zinc-400 hover:border-zinc-700'
                }`}
              >
                <div className="w-4 h-4 rounded-full bg-gradient-to-r from-purple-500 to-pink-500" />
                <span>Purple → Pink</span>
              </button>

              <button
                type="button"
                onClick={() => setAccentGradient('amber-orange')}
                className={`flex items-center gap-2.5 p-3 rounded-xl border text-xs font-medium ${
                  accentGradient === 'amber-orange'
                    ? 'border-amber-500 bg-amber-950/40 text-white'
                    : 'border-zinc-800 bg-zinc-900/50 text-zinc-400 hover:border-zinc-700'
                }`}
              >
                <div className="w-4 h-4 rounded-full bg-gradient-to-r from-amber-400 to-orange-500" />
                <span>Amber → Orange</span>
              </button>
            </div>
          </div>

          {/* 4. Live Text Profile Fields */}
          <div className="pt-2 border-t border-zinc-800 space-y-3">
            <div className="flex items-center justify-between">
              <label className="text-xs font-semibold text-zinc-400 uppercase tracking-wider">
                Availability Badge
              </label>
              <button
                type="button"
                onClick={() => setProfile(prev => ({ ...prev, availableForInternships: !prev.availableForInternships }))}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                  profile.availableForInternships ? 'bg-cyan-500' : 'bg-zinc-800'
                }`}
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                    profile.availableForInternships ? 'translate-x-6' : 'translate-x-1'
                  }`}
                />
              </button>
            </div>

            <div>
              <label className="block text-xs font-medium text-zinc-400 mb-1">Developer Name</label>
              <input
                type="text"
                value={profile.name}
                onChange={e => setProfile(prev => ({ ...prev, name: e.target.value }))}
                className="w-full px-3 py-2 rounded-lg bg-zinc-900 border border-zinc-800 text-sm text-white focus:outline-none focus:border-cyan-500"
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-zinc-400 mb-1">Role Title</label>
              <input
                type="text"
                value={profile.role}
                onChange={e => setProfile(prev => ({ ...prev, role: e.target.value }))}
                className="w-full px-3 py-2 rounded-lg bg-zinc-900 border border-zinc-800 text-sm text-white focus:outline-none focus:border-cyan-500"
              />
            </div>
          </div>

        </div>

        {/* Footer Actions */}
        <div className="flex items-center justify-between pt-6 mt-6 border-t border-zinc-800">
          <button
            type="button"
            onClick={onReset}
            className="flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-medium text-zinc-400 hover:text-white hover:bg-zinc-900 transition-colors"
          >
            <RefreshCw className="w-3.5 h-3.5" />
            <span>Reset Defaults</span>
          </button>

          <button
            type="button"
            onClick={onClose}
            className="px-5 py-2.5 rounded-xl text-xs font-semibold bg-cyan-400 text-black hover:bg-cyan-300 transition-colors shadow-lg shadow-cyan-500/20"
          >
            Apply & Close
          </button>
        </div>

      </div>
    </div>
  );
};
