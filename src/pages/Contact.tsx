import React, { useState } from 'react';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { FormField } from '@/components/ui/FormField';
import { Button } from '@/components/ui/Button';
import { Mail, MapPin, Send, CheckCircle, AlertCircle, Sparkles } from 'lucide-react';
import { CONFERENCE_DATA } from '@/data/conference';
import { apiService } from '@/lib/api';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [feedback, setFeedback] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFeedback(null);

    const res = await apiService.submitContactMessage(formData);
    setIsSubmitting(false);

    if (res.success) {
      setFeedback({ type: 'success', text: res.message });
      setFormData({ name: '', email: '', phone: '', message: '' });
    } else {
      setFeedback({ type: 'error', text: res.message });
    }
  };

  return (
    <div className="py-16 sm:py-24 bg-[#041412] text-slate-100 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <SectionHeading
          eyebrow="Direct Secretariat"
          eyebrowVariant="gold-luxury"
          title="Contact DYUTI 2027 Secretariat"
          subtitle="Reach out directly to the conference convenors for inquiries regarding paper submissions, delegate registrations, or institutional partnerships."
          dark
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Contact Details Column */}
          <div className="lg:col-span-5 space-y-6">
            <div className="rounded-3xl p-8 bg-gradient-to-b from-[#082a26]/90 to-[#041513]/95 border border-amber-500/30 backdrop-blur-xl shadow-luxury-md">
              <h3 className="font-cinzel font-bold text-xl text-white mb-5 flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-amber-500/15 border border-amber-400/30 flex items-center justify-center text-amber-300">
                  <Mail className="w-5 h-5" />
                </div>
                <span>Conference Coordinators</span>
              </h3>
              <div className="space-y-4">
                {CONFERENCE_DATA.contacts.map((contact, idx) => (
                  <div key={idx} className="border-l-2 border-amber-400/60 pl-3.5 py-1 bg-white/5 rounded-r-xl">
                    <p className="font-display font-semibold text-white text-sm m-0">{contact.name}</p>
                    <p className="text-xs text-slate-300 m-0">{contact.role}</p>
                    <p className="text-xs text-slate-400 m-0">{contact.department}</p>
                    {contact.email && (
                      <a
                        href={`mailto:${contact.email}`}
                        className="text-xs text-amber-300 font-mono hover:underline mt-1 block"
                      >
                        {contact.email}
                      </a>
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-3xl p-8 bg-gradient-to-b from-[#082a26]/90 to-[#041513]/95 border border-emerald-500/30 backdrop-blur-xl shadow-luxury-md">
              <h4 className="font-cinzel font-bold text-lg text-white mb-3 flex items-center gap-2.5">
                <MapPin className="w-5 h-5 text-amber-400" />
                <span>Mailing &amp; Venue Address</span>
              </h4>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed m-0 font-normal">
                <strong>{CONFERENCE_DATA.hostInstitution}</strong><br />
                Rajagiri P.O, Kalamassery, Kochi, Kerala, India - 683104
              </p>
              <div className="mt-4 pt-3 border-t border-white/10 text-xs text-slate-300">
                Official Email: <a href="mailto:dyuti@rajagiri.edu" className="text-amber-300 font-semibold font-mono">dyuti@rajagiri.edu</a>
              </div>
            </div>
          </div>

          {/* Contact Form Column */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl p-8 sm:p-10 bg-gradient-to-b from-[#082a26]/90 to-[#041513]/95 border border-amber-500/30 backdrop-blur-xl shadow-luxury-md">
              <span className="inline-flex items-center gap-1.5 text-xs font-cinzel font-bold uppercase tracking-widest text-amber-300 mb-2">
                <Sparkles className="w-3.5 h-3.5 text-amber-400" /> Inquiry Form
              </span>
              <h3 className="font-cinzel font-bold text-2xl text-white mb-2">
                Send an Inquiry Message
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 mb-6 font-normal">
                Submit your query below and our organizing committee will respond promptly.
              </p>

              {feedback && (
                <div
                  className={`p-4 rounded-xl mb-6 flex items-center gap-2.5 text-sm ${
                    feedback.type === 'success'
                      ? 'bg-emerald-950/80 text-emerald-200 border border-emerald-500/40'
                      : 'bg-red-950/80 text-red-200 border border-red-500/40'
                  }`}
                >
                  {feedback.type === 'success' ? (
                    <CheckCircle className="w-5 h-5 text-emerald-400 shrink-0" />
                  ) : (
                    <AlertCircle className="w-5 h-5 text-red-400 shrink-0" />
                  )}
                  <span>{feedback.text}</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <FormField label="Full Name" id="name" required>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Dr. Jane Smith"
                      className="w-full px-4 py-3 rounded-xl bg-black/40 border border-amber-500/30 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400 transition-all"
                    />
                  </FormField>

                  <FormField label="Email Address" id="email" required>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="name@university.edu"
                      className="w-full px-4 py-3 rounded-xl bg-black/40 border border-amber-500/30 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400 transition-all"
                    />
                  </FormField>
                </div>

                <FormField label="Mobile / WhatsApp Number" id="phone">
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+91 98765 43210"
                    className="w-full px-4 py-3 rounded-xl bg-black/40 border border-amber-500/30 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400 transition-all"
                  />
                </FormField>

                <FormField label="Your Inquiry Message" id="message" required>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Specify your inquiry regarding abstract submission, conference schedule, registration, or accommodation..."
                    className="w-full px-4 py-3 rounded-xl bg-black/40 border border-amber-500/30 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400 transition-all"
                  />
                </FormField>

                <Button
                  type="submit"
                  variant="gold"
                  size="lg"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto"
                  icon={<Send className="w-4 h-4 text-slate-950" />}
                >
                  {isSubmitting ? 'Sending Message...' : 'Submit Inquiry'}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

