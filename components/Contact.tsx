import React, { useState } from "react";
import {
  Mail,
  Github,
  Linkedin,
  Send,
  CheckCircle2,
  AlertCircle,
  Loader2,
} from "lucide-react";

const Contact: React.FC = () => {
  const [status, setStatus] = useState<
    "IDLE" | "SENDING" | "SUCCESS" | "ERROR"
  >("IDLE");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("SENDING");

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/mgowzlra", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setStatus("SUCCESS");
        form.reset();
      } else {
        const data = await response.json();
        setErrorMessage(
          data.errors?.map((e: any) => e.message).join(", ") ||
            "Something went wrong."
        );
        setStatus("ERROR");
      }
    } catch (error) {
      setErrorMessage(
        "Failed to connect to the server. Please try again later."
      );
      setStatus("ERROR");
    }
  };

  return (
    <section id="contact" className="py-24 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Info Side */}
          <div>
            <h2 className="text-5xl md:text-6xl font-bold mb-8">
              Let's Connect
            </h2>
            <p className="text-gray-400 text-lg mb-12 max-w-md">
              I'm always open to discussing new projects, creative ideas, or
              opportunities to be part of your vision. Reach out through the
              form or my social profiles.
            </p>

            <div className="space-y-6">
              <a
                href="mailto:kamrulhasansojib1931@gmail.com"
                className="flex items-center gap-4 group"
              >
                <div className="w-12 h-12 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center text-blue-400 group-hover:bg-blue-500 group-hover:text-white transition-all">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase font-bold tracking-widest">
                    Email me at
                  </p>
                  <p className="text-white font-medium">
                    kamrulhasansojib1931@gmail.com
                  </p>
                </div>
              </a>

              <a
                href="https://github.com/kamrulhasansojib"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 group"
              >
                <div className="w-12 h-12 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center text-blue-400 group-hover:bg-blue-500 group-hover:text-white transition-all">
                  <Github className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase font-bold tracking-widest">
                    Find me on
                  </p>
                  <p className="text-white font-medium">
                    github.com/kamrulhasansojib
                  </p>
                </div>
              </a>

              <a
                href="https://www.linkedin.com/in/kamrul-hasan-sojib-/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 group"
              >
                <div className="w-12 h-12 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center text-blue-400 group-hover:bg-blue-500 group-hover:text-white transition-all">
                  <Linkedin className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase font-bold tracking-widest">
                    Connect with me
                  </p>
                  <p className="text-white font-medium">
                    linkedin.com/in/kamrul-hasan-sojib-
                  </p>
                </div>
              </a>
            </div>
          </div>

          {/* Form Side */}
          <div className="bg-white/5 border border-white/10 rounded-3xl p-8 md:p-12 relative overflow-hidden">
            {status === "SUCCESS" ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-12 animate-in fade-in zoom-in duration-500">
                <div className="w-20 h-20 bg-green-500/10 rounded-full flex items-center justify-center text-green-500 mb-6">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="text-3xl font-bold mb-4">Message Sent!</h3>
                <p className="text-gray-400 mb-8 max-w-xs">
                  Thank you for reaching out. I'll get back to you as soon as
                  possible at the email address you provided.
                </p>
                <button
                  onClick={() => setStatus("IDLE")}
                  className="px-8 py-3 bg-white/10 hover:bg-white/20 rounded-xl font-bold transition-all"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-2">
                      Your Name
                    </label>
                    <input
                      required
                      name="name"
                      type="text"
                      placeholder="Enter Your Name"
                      className="w-full px-6 py-4 bg-[#0a0a0a] border border-white/10 rounded-xl text-white placeholder:text-gray-600 focus:outline-none focus:border-blue-500 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-2">
                      Email Address
                    </label>
                    <input
                      required
                      name="email"
                      type="email"
                      placeholder="Enter Email Address"
                      className="w-full px-6 py-4 bg-[#0a0a0a] border border-white/10 rounded-xl text-white placeholder:text-gray-600 focus:outline-none focus:border-blue-500 transition-colors"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">
                    Message
                  </label>
                  <textarea
                    required
                    name="message"
                    rows={5}
                    placeholder="Tell me about your project..."
                    className="w-full px-6 py-4 bg-[#0a0a0a] border border-white/10 rounded-xl text-white placeholder:text-gray-600 focus:outline-none focus:border-blue-500 transition-colors resize-none"
                  ></textarea>
                </div>

                {status === "ERROR" && (
                  <div className="flex items-center gap-3 p-4 bg-red-500/10 border border-red-500/20 rounded-xl text-red-400 text-sm">
                    <AlertCircle className="w-5 h-5 shrink-0" />
                    <p>{errorMessage}</p>
                  </div>
                )}

                <button
                  disabled={status === "SENDING"}
                  type="submit"
                  className="w-full bg-blue-500 hover:bg-blue-600 disabled:bg-blue-500/50 disabled:cursor-not-allowed text-white font-bold py-5 rounded-xl flex items-center justify-center gap-3 transition-all active:scale-95 shadow-xl shadow-blue-500/20"
                >
                  {status === "SENDING" ? (
                    <>
                      Sending... <Loader2 className="w-5 h-5 animate-spin" />
                    </>
                  ) : (
                    <>
                      Send Message <Send className="w-5 h-5" />
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

export default Contact;
