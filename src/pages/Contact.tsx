import React, { useState } from 'react';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Card } from '@/components/ui/Card';
import { FormField } from '@/components/ui/FormField';
import { Button } from '@/components/ui/Button';
import { Mail, MapPin, Send, CheckCircle, AlertCircle } from 'lucide-react';
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
    <div className="py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <SectionHeading
          eyebrow="Get In Touch"
          title="Contact DYUTI 2027 Secretariat"
          subtitle="Reach out to the conference convenors for inquiries regarding paper submissions, registrations, or academic partnerships."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Contact Details Column */}
          <div className="lg:col-span-5 space-y-6">
            <Card>
              <h3 className="font-display font-bold text-xl text-slate-900 mb-4 flex items-center gap-2">
                <Mail className="w-5 h-5 text-[#0f4c47]" />
                <span>Conference Coordinators</span>
              </h3>
              <div className="space-y-4">
                {CONFERENCE_DATA.contacts.map((contact, idx) => (
                  <div key={idx} className="border-l-2 border-[#0f4c47] pl-3 py-1">
                    <p className="font-display font-bold text-slate-900 m-0">{contact.name}</p>
                    <p className="text-xs text-slate-500 m-0">{contact.role}</p>
                    <p className="text-xs text-slate-500 m-0">{contact.department}</p>
                    {contact.email && (
                      <a
                        href={`mailto:${contact.email}`}
                        className="text-xs text-[#0f4c47] font-semibold hover:underline mt-1 block"
                      >
                        {contact.email}
                      </a>
                    )}
                  </div>
                ))}
              </div>
            </Card>

            <Card>
              <h4 className="font-display font-bold text-lg text-slate-900 mb-3 flex items-center gap-2">
                <MapPin className="w-5 h-5 text-[#d97706]" />
                <span>Mailing Address</span>
              </h4>
              <p className="text-sm text-slate-600 leading-relaxed m-0">
                <strong>{CONFERENCE_DATA.hostInstitution}</strong><br />
                Rajagiri P.O, Kalamassery, Kochi, Kerala, India - 683104
              </p>
              <div className="mt-3 pt-3 border-t border-slate-100 text-xs text-slate-500">
                Email: <a href="mailto:dyuti@rajagiri.edu" className="text-[#0f4c47] font-semibold">dyuti@rajagiri.edu</a>
              </div>
            </Card>
          </div>

          {/* Contact Form Column */}
          <div className="lg:col-span-7">
            <Card>
              <h3 className="font-display font-bold text-xl text-slate-900 mb-1">
                Send an Inquiry Message
              </h3>
              <p className="text-xs text-slate-500 mb-6">
                Fill out the form below and our secretariat will respond as soon as possible.
              </p>

              {feedback && (
                <div
                  className={`p-4 rounded-xl mb-6 flex items-center gap-2.5 text-sm ${
                    feedback.type === 'success'
                      ? 'bg-emerald-50 text-emerald-800 border border-emerald-200'
                      : 'bg-red-50 text-red-800 border border-red-200'
                  }`}
                >
                  {feedback.type === 'success' ? (
                    <CheckCircle className="w-5 h-5 text-emerald-600 shrink-0" />
                  ) : (
                    <AlertCircle className="w-5 h-5 text-red-600 shrink-0" />
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
                      className="w-full px-4 py-2.5 rounded-lg border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#0f4c47] focus:border-transparent transition-all"
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
                      className="w-full px-4 py-2.5 rounded-lg border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#0f4c47] focus:border-transparent transition-all"
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
                    className="w-full px-4 py-2.5 rounded-lg border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#0f4c47] focus:border-transparent transition-all"
                  />
                </FormField>

                <FormField label="Your Message / Query" id="message" required>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Please specify your query regarding registration, abstract submission, or accommodation..."
                    className="w-full px-4 py-2.5 rounded-lg border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#0f4c47] focus:border-transparent transition-all"
                  />
                </FormField>

                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto"
                  icon={<Send className="w-4 h-4" />}
                >
                  {isSubmitting ? 'Sending Message...' : 'Submit Inquiry'}
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};
