import React, { useState } from 'react';
import { siteConfig } from '../config/siteConfig';
import { CheckCircle2, AlertCircle, Send, Phone, Lock, Clock } from 'lucide-react';

interface QuoteFormProps {
  initialService?: string;
  isModal?: boolean;
  onSuccess?: () => void;
}

export function QuoteForm({ initialService = '', isModal = false, onSuccess }: QuoteFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    serviceNeeded: initialService || siteConfig.services[0]?.title || 'Kitchen Remodeling',
    propertyLocation: '',
    projectDescription: '',
    preferredContact: 'phone',
    timeline: 'Within 1-2 months',
    budgetRange: '$25,000 - $50,000',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) errs.name = 'Please provide your full name.';
    if (!formData.phone.trim()) {
      errs.phone = 'Phone number is required so we can schedule your estimate.';
    } else if (!/^[0-9+()\-.\s]{7,20}$/.test(formData.phone)) {
      errs.phone = 'Please enter a valid phone number.';
    }
    if (!formData.email.trim()) {
      errs.email = 'Email address is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Please enter a valid email address.';
    }
    if (!formData.propertyLocation.trim()) {
      errs.propertyLocation = 'Please share your neighborhood or city (e.g. Arlington, Clarendon).';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    // Simulate real submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      if (onSuccess) {
        setTimeout(onSuccess, 3500);
      }
    }, 700);
  };

  if (isSubmitted) {
    return (
      <div className="bg-white rounded-xl p-8 text-center border border-emerald-200 shadow-sm animate-fade-in">
        <div className="w-16 h-16 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
          <CheckCircle2 className="w-10 h-10" />
        </div>
        <h3 className="text-2xl font-heading font-bold text-[#142B3A] mb-2">
          Estimate Request Received!
        </h3>
        <p className="text-neutral-600 text-sm max-w-md mx-auto mb-6">
          Thank you, <span className="font-semibold text-neutral-900">{formData.name}</span>.
          Our Arlington project specialist will review your project details and reach out via{' '}
          <span className="font-semibold text-neutral-900">{formData.preferredContact}</span>{' '}
          within 2 business hours.
        </p>

        <div className="bg-[#F7F4EE] rounded-lg p-4 max-w-md mx-auto text-left text-xs text-neutral-700 space-y-1 mb-6 border border-neutral-200">
          <div><span className="font-semibold">Service:</span> {formData.serviceNeeded}</div>
          <div><span className="font-semibold">Location:</span> {formData.propertyLocation}</div>
          <div><span className="font-semibold">Estimated Timeline:</span> {formData.timeline}</div>
          <div><span className="font-semibold">Direct Phone:</span> {siteConfig.contact.phone}</div>
        </div>

        <button
          type="button"
          onClick={() => {
            setIsSubmitted(false);
            setFormData({
              name: '',
              phone: '',
              email: '',
              serviceNeeded: initialService || siteConfig.services[0]?.title || 'Kitchen Remodeling',
              propertyLocation: '',
              projectDescription: '',
              preferredContact: 'phone',
              timeline: 'Within 1-2 months',
              budgetRange: '$25,000 - $50,000',
            });
          }}
          className="text-xs text-[#D96B32] hover:underline font-semibold"
        >
          Submit another inquiry
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className={`bg-white rounded-xl ${
        isModal ? 'p-6' : 'p-6 sm:p-8'
      } border border-neutral-200 shadow-sm text-left`}
    >
      <div className="mb-6">
        <h3 className="text-xl sm:text-2xl font-heading font-bold text-[#142B3A]">
          Request Your Free In-Home Estimate
        </h3>
        <p className="text-xs sm:text-sm text-neutral-600 mt-1">
          Detailed itemized pricing. No high-pressure sales. Guaranteed response within 2 business hours.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
        {/* Full Name */}
        <div>
          <label htmlFor="name" className="block text-xs font-semibold text-neutral-700 mb-1">
            Full Name *
          </label>
          <input
            id="name"
            type="text"
            required
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className={`w-full px-3.5 py-2.5 text-sm rounded-lg border ${
              errors.name ? 'border-red-500 bg-red-50/20' : 'border-neutral-300'
            } focus:border-[#D96B32] focus:ring-1 focus:ring-[#D96B32] transition-colors`}
          />
          {errors.name && (
            <p className="text-[11px] text-red-600 mt-1 flex items-center gap-1">
              <AlertCircle className="w-3 h-3" /> {errors.name}
            </p>
          )}
        </div>

        {/* Phone Number */}
        <div>
          <label htmlFor="phone" className="block text-xs font-semibold text-neutral-700 mb-1">
            Phone Number *
          </label>
          <input
            id="phone"
            type="tel"
            required
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            className={`w-full px-3.5 py-2.5 text-sm rounded-lg border ${
              errors.phone ? 'border-red-500 bg-red-50/20' : 'border-neutral-300'
            } focus:border-[#D96B32] focus:ring-1 focus:ring-[#D96B32] transition-colors`}
          />
          {errors.phone && (
            <p className="text-[11px] text-red-600 mt-1 flex items-center gap-1">
              <AlertCircle className="w-3 h-3" /> {errors.phone}
            </p>
          )}
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className="block text-xs font-semibold text-neutral-700 mb-1">
            Email Address *
          </label>
          <input
            id="email"
            type="email"
            required
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className={`w-full px-3.5 py-2.5 text-sm rounded-lg border ${
              errors.email ? 'border-red-500 bg-red-50/20' : 'border-neutral-300'
            } focus:border-[#D96B32] focus:ring-1 focus:ring-[#D96B32] transition-colors`}
          />
          {errors.email && (
            <p className="text-[11px] text-red-600 mt-1 flex items-center gap-1">
              <AlertCircle className="w-3 h-3" /> {errors.email}
            </p>
          )}
        </div>

        {/* Property Location */}
        <div>
          <label htmlFor="propertyLocation" className="block text-xs font-semibold text-neutral-700 mb-1">
            Neighborhood / City *
          </label>
          <input
            id="propertyLocation"
            type="text"
            required
            placeholder="e.g. Lyon Village, Arlington, VA"
            value={formData.propertyLocation}
            onChange={(e) => setFormData({ ...formData, propertyLocation: e.target.value })}
            className={`w-full px-3.5 py-2.5 text-sm rounded-lg border ${
              errors.propertyLocation ? 'border-red-500 bg-red-50/20' : 'border-neutral-300'
            } focus:border-[#D96B32] focus:ring-1 focus:ring-[#D96B32] transition-colors`}
          />
          {errors.propertyLocation && (
            <p className="text-[11px] text-red-600 mt-1 flex items-center gap-1">
              <AlertCircle className="w-3 h-3" /> {errors.propertyLocation}
            </p>
          )}
        </div>
      </div>

      {/* Service Needed & Timeline */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
        <div>
          <label htmlFor="serviceNeeded" className="block text-xs font-semibold text-neutral-700 mb-1">
            Primary Service Needed
          </label>
          <select
            id="serviceNeeded"
            value={formData.serviceNeeded}
            onChange={(e) => setFormData({ ...formData, serviceNeeded: e.target.value })}
            className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-neutral-300 bg-white focus:border-[#D96B32] focus:ring-1 focus:ring-[#D96B32] transition-colors"
          >
            {siteConfig.services.map((svc) => (
              <option key={svc.id} value={svc.title}>
                {svc.title}
              </option>
            ))}
            <option value="Multiple Services / Whole Home">Multiple Services / Whole Home</option>
            <option value="Other Renovation Inquiry">Other Renovation Inquiry</option>
          </select>
        </div>

        <div>
          <label htmlFor="timeline" className="block text-xs font-semibold text-neutral-700 mb-1">
            Target Timeline
          </label>
          <select
            id="timeline"
            value={formData.timeline}
            onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
            className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-neutral-300 bg-white focus:border-[#D96B32] focus:ring-1 focus:ring-[#D96B32] transition-colors"
          >
            <option value="Ready Immediately">Ready immediately (urgent)</option>
            <option value="Within 1-2 months">Within 1 – 2 months</option>
            <option value="Within 3-6 months">Within 3 – 6 months</option>
            <option value="Planning / Future Stage">Just gathering estimates & planning</option>
          </select>
        </div>
      </div>

      {/* Project Description */}
      <div className="mb-4">
        <label htmlFor="projectDescription" className="block text-xs font-semibold text-neutral-700 mb-1">
          Tell Us About Your Project (Scope, Ideas, or Special Requests)
        </label>
        <textarea
          id="projectDescription"
          rows={isModal ? 3 : 4}
          value={formData.projectDescription}
          onChange={(e) => setFormData({ ...formData, projectDescription: e.target.value })}
          className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-neutral-300 focus:border-[#D96B32] focus:ring-1 focus:ring-[#D96B32] transition-colors"
        />
      </div>

      {/* Preferred Contact Method */}
      <div className="mb-6">
        <span className="block text-xs font-semibold text-neutral-700 mb-2">
          Preferred Contact Method
        </span>
        <div className="flex flex-wrap gap-4 text-xs font-medium text-neutral-700">
          <label className="flex items-center gap-1.5 cursor-pointer">
            <input
              type="radio"
              name="preferredContact"
              value="phone"
              checked={formData.preferredContact === 'phone'}
              onChange={() => setFormData({ ...formData, preferredContact: 'phone' })}
              className="accent-[#D96B32]"
            />
            <span>Phone Call</span>
          </label>
          <label className="flex items-center gap-1.5 cursor-pointer">
            <input
              type="radio"
              name="preferredContact"
              value="text"
              checked={formData.preferredContact === 'text'}
              onChange={() => setFormData({ ...formData, preferredContact: 'text' })}
              className="accent-[#D96B32]"
            />
            <span>Text / SMS</span>
          </label>
          <label className="flex items-center gap-1.5 cursor-pointer">
            <input
              type="radio"
              name="preferredContact"
              value="email"
              checked={formData.preferredContact === 'email'}
              onChange={() => setFormData({ ...formData, preferredContact: 'email' })}
              className="accent-[#D96B32]"
            />
            <span>Email</span>
          </label>
        </div>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full py-3.5 px-6 bg-[#D96B32] hover:bg-[#BF5A24] active:scale-[0.99] text-white font-semibold text-sm sm:text-base rounded-lg transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer disabled:opacity-75"
      >
        {isSubmitting ? (
          <>
            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
            <span>Sending...</span>
          </>
        ) : (
          <>
            <Send className="w-4 h-4" />
            <span>Send</span>
          </>
        )}
      </button>

      {/* Trust & Privacy Notice */}
      <div className="mt-4 pt-4 border-t border-neutral-100 flex flex-col sm:flex-row items-center justify-between text-[11px] text-neutral-500 gap-2">
        <div className="flex items-center gap-1">
          <Lock className="w-3 h-3 text-neutral-400" />
          <span>Your privacy is protected.</span>
        </div>
        <div className="flex items-center gap-1">
          <Clock className="w-3 h-3 text-[#D96B32]" />
          <span>Response within 2 business hours</span>
        </div>
      </div>
    </form>
  );
}
