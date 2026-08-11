import React, { useState } from 'react';
import { Mail, Send, CheckCircle2, Copy, Check, MapPin, Github, Linkedin, Facebook, Sparkles, Loader2, AlertCircle } from 'lucide-react';
import { ProfileData } from '../types';
import { AnimatedMovingLines } from './AnimatedMovingLines';

interface ContactSectionProps {
  profile: ProfileData;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ profile }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'Inquiry',
    inquiryType: 'Internship / Job Offer',
    message: ''
  });

  const [copied, setCopied] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profile.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage(null);

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        },
        body: JSON.stringify({
          access_key: '4f3278c0-90d4-4b39-be17-54aa94ee3c6f',
          name: formData.name,
          email: formData.email,
          subject: `${formData.inquiryType} from ${formData.name}`,
          inquiry_type: formData.inquiryType,
          message: formData.message,
          from_name: 'Portfolio Contact Form'
        })
      });

      const result = await response.json();

      if (result.success) {
        setSubmitted(true);
        setFormData({
          name: '',
          email: '',
          subject: 'Inquiry',
          inquiryType: 'Internship / Job Offer',
          message: ''
        });
      } else {
        setErrorMessage(result.message || 'Failed to send message. Please try again later.');
      }
    } catch (err) {
      console.error('Web3Forms submit error:', err);
      setErrorMessage('Network error occurred. Please check your connection and try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-black text-white relative overflow-hidden">
      {/* Moving Wave Lines Animated Background */}
      <AnimatedMovingLines />

      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[450px] bg-cyan-600/5 blur-[180px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-semibold bg-cyan-950/60 text-cyan-400 border border-cyan-500/20 mb-3">
            <Mail className="w-4 h-4" />
            <span>Get In Touch</span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight">
            Interested in Hiring or Collaborating?
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-5xl mx-auto items-stretch">
          
          {/* Left Contact Details Card (5 cols) */}
          <div className="lg:col-span-5 p-8 rounded-2xl bg-zinc-950 border border-zinc-800/80 space-y-8 shadow-xl h-full flex flex-col justify-between">
            <div>
              <span className="inline-block px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-semibold bg-cyan-950 text-cyan-300 border border-cyan-500/30 mb-3">
                ● Direct Channel
              </span>
              <h3 className="text-2xl font-bold text-white">Let's connect!</h3>
              <p className="text-zinc-300 text-base mt-2 leading-relaxed">
                Reach out for technical interviews, internship inquiries, or project discussions.
              </p>
            </div>

            {/* Email Copy Card */}
            <div className="p-4 rounded-xl bg-zinc-900 border border-zinc-800 space-y-2">
              <span className="text-xs text-zinc-500 uppercase tracking-wider font-semibold">Email Address</span>
              <div className="flex items-center justify-between gap-2">
                <span className="text-sm font-mono text-cyan-300 truncate">{profile.email}</span>
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="p-2 rounded-lg bg-zinc-800 text-zinc-300 hover:text-white hover:bg-zinc-700 transition-colors shrink-0 cursor-pointer"
                  title="Copy Email"
                >
                  {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {/* Location & Status */}
            <div className="space-y-3 text-sm text-zinc-300">
              <div className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>{profile.location}</span>
              </div>
              <div className="flex items-center gap-3">
                <Sparkles className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>{profile.internshipType}</span>
              </div>
            </div>

            {/* Socials */}
            <div className="pt-4 border-t border-zinc-900">
              <span className="text-xs text-zinc-500 uppercase tracking-wider font-semibold block mb-3">Profiles</span>
              <div className="flex flex-wrap items-center gap-3">
                <a
                  href={profile.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-zinc-900 text-xs font-medium text-zinc-300 hover:text-white hover:bg-zinc-800 border border-zinc-800 transition-all"
                >
                  <Github className="w-4 h-4 text-cyan-400" />
                  <span>GitHub</span>
                </a>
                <a
                  href={profile.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-zinc-900 text-xs font-medium text-zinc-300 hover:text-white hover:bg-zinc-800 border border-zinc-800 transition-all"
                >
                  <Linkedin className="w-4 h-4 text-cyan-400" />
                  <span>LinkedIn</span>
                </a>
                {profile.facebookUrl && (
                  <a
                    href={profile.facebookUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-zinc-900 text-xs font-medium text-zinc-300 hover:text-white hover:bg-zinc-800 border border-zinc-800 transition-all"
                  >
                    <Facebook className="w-4 h-4 text-cyan-400" />
                    <span>Facebook</span>
                  </a>
                )}
              </div>
            </div>

          </div>

          {/* Right Interactive Form (7 cols) */}
          <div className="lg:col-span-7 p-8 rounded-2xl bg-zinc-950 border border-zinc-800/80 shadow-xl h-full flex flex-col justify-between">
            {submitted ? (
              <div className="text-center py-12 space-y-4 my-auto">
                <div className="w-16 h-16 rounded-full bg-cyan-950 border border-cyan-500/40 text-cyan-400 mx-auto flex items-center justify-center">
                  <CheckCircle2 className="w-8 h-8 text-cyan-400" />
                </div>
                <h3 className="text-2xl font-bold text-white">Message sent successfully!</h3>
                <p className="text-zinc-400 text-sm max-w-md mx-auto leading-relaxed">
                  Thank you for reaching out! Your inquiry has been delivered via Web3Forms. I will review your message and get back to you promptly.
                </p>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="px-6 py-2.5 rounded-xl text-xs font-semibold bg-zinc-900 text-cyan-300 border border-zinc-800 hover:bg-zinc-800 transition-colors cursor-pointer"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col justify-between h-full space-y-4">
                
                {errorMessage && (
                  <div className="p-3.5 rounded-xl bg-red-950/80 border border-red-500/40 text-red-300 text-xs flex items-center gap-2.5">
                    <AlertCircle className="w-4 h-4 text-red-400 shrink-0" />
                    <span>{errorMessage}</span>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-zinc-400 mb-1.5">Your Name</label>
                    <input
                      type="text"
                      required
                      disabled={isSubmitting}
                      placeholder="Jane Doe"
                      value={formData.name}
                      onChange={e => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-zinc-900 border border-zinc-800 text-sm text-white focus:outline-none focus:border-cyan-500 transition-colors disabled:opacity-50"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-zinc-400 mb-1.5">Your Email</label>
                    <input
                      type="email"
                      required
                      disabled={isSubmitting}
                      placeholder="jane@company.com"
                      value={formData.email}
                      onChange={e => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-zinc-900 border border-zinc-800 text-sm text-white focus:outline-none focus:border-cyan-500 transition-colors disabled:opacity-50"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-zinc-400 mb-1.5">Inquiry Reason</label>
                  <select
                    disabled={isSubmitting}
                    value={formData.inquiryType}
                    onChange={e => setFormData({ ...formData, inquiryType: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-zinc-900 border border-zinc-800 text-sm text-white focus:outline-none focus:border-cyan-500 transition-colors cursor-pointer disabled:opacity-50"
                  >
                    <option value="Internship / Job Offer">Internship / Job Offer</option>
                    <option value="Project">Freelance / Contract Project</option>
                    <option value="General">General Chat</option>
                  </select>
                </div>

                <div className="flex-1 flex flex-col min-h-[140px]">
                  <label className="block text-xs font-medium text-zinc-400 mb-1.5">Message</label>
                  <textarea
                    rows={5}
                    required
                    disabled={isSubmitting}
                    placeholder="Hi Kamrul, we'd love to invite you for an interview..."
                    value={formData.message}
                    onChange={e => setFormData({ ...formData, message: e.target.value })}
                    className="w-full flex-1 px-4 py-3 rounded-xl bg-zinc-900 border border-zinc-800 text-sm text-white focus:outline-none focus:border-cyan-500 transition-colors resize-none min-h-[120px] disabled:opacity-50"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-bold text-sm sm:text-base text-black bg-gradient-to-r from-cyan-400 via-teal-300 to-blue-400 hover:from-cyan-300 hover:to-blue-300 shadow-[0_0_20px_rgba(56,189,248,0.25)] hover:shadow-[0_0_30px_rgba(56,189,248,0.45)] transition-all active:scale-95 cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin text-black" />
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
};
