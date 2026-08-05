import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { HiCheckCircle, HiPaperClip, HiXCircle } from 'react-icons/hi2';
import Button from '@components/ui/Button';
import FormField from './FormField';
import { useToast } from '@hooks/useToast';
import { submitQuoteRequest } from '@services/quoteService';
import { SERVICE_OPTIONS, CONTACT_METHOD_OPTIONS } from '@data/formOptions';

const PHONE_PATTERN = /^[\d\s()+-]{7,20}$/;
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const QuoteForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({ mode: 'onBlur' });
  const { showToast } = useToast();
  const [submitted, setSubmitted] = useState(false);

  const photoFiles = watch('photos');
  const photoCount = photoFiles?.length || 0;

  const onSubmit = async (data) => {
    try {
      await submitQuoteRequest(data);
      setSubmitted(true);
      showToast({ message: "Quote request received — we'll be in touch shortly!", variant: 'success' });
      reset();
    } catch {
      showToast({ message: 'Something went wrong. Please call us directly.', variant: 'error' });
    }
  };

  if (submitted) {
    return (
      <div className="card flex flex-col items-center gap-3 p-10 text-center">
        <HiCheckCircle className="text-5xl text-[var(--color-success-500)]" />
        <h3 className="font-heading text-xl font-bold text-[var(--color-text-primary)]">
          Request Received!
        </h3>
        <p className="max-w-sm text-sm text-[var(--color-text-secondary)]">
          Thanks for reaching out — a member of our team will contact you within one business day,
          sooner for emergencies.
        </p>
        <Button variant="outline" onClick={() => setSubmitted(false)} className="mt-2">
          Submit Another Request
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="card space-y-5 p-6 sm:p-8">
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <FormField label="Full Name" htmlFor="name" required error={errors.name}>
          <input
            id="name"
            type="text"
            className="input-field"
            placeholder="Jane Smith"
            {...register('name', { required: 'Please enter your name', minLength: { value: 2, message: 'Name is too short' } })}
          />
        </FormField>

        <FormField label="Phone Number" htmlFor="phone" required error={errors.phone}>
          <input
            id="phone"
            type="tel"
            className="input-field"
            placeholder="(352) 555-0173"
            {...register('phone', { required: 'Please enter your phone number', pattern: { value: PHONE_PATTERN, message: 'Enter a valid phone number' } })}
          />
        </FormField>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <FormField label="Email Address" htmlFor="email" required error={errors.email}>
          <input
            id="email"
            type="email"
            className="input-field"
            placeholder="jane@example.com"
            {...register('email', { required: 'Please enter your email', pattern: { value: EMAIL_PATTERN, message: 'Enter a valid email address' } })}
          />
        </FormField>

        <FormField label="Property Address" htmlFor="address" required error={errors.address}>
          <input
            id="address"
            type="text"
            className="input-field"
            placeholder="123 Main St, Ocala, FL"
            {...register('address', { required: 'Please enter your property address' })}
          />
        </FormField>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <FormField label="Service Needed" htmlFor="service" required error={errors.service}>
          <select
            id="service"
            className="input-field"
            defaultValue=""
            {...register('service', { required: 'Please select a service' })}
          >
            <option value="" disabled>Select a service</option>
            {SERVICE_OPTIONS.map((option) => (
              <option key={option} value={option}>{option}</option>
            ))}
          </select>
        </FormField>

        <FormField label="Preferred Contact Method" htmlFor="preferredContact" required error={errors.preferredContact}>
          <select
            id="preferredContact"
            className="input-field"
            defaultValue=""
            {...register('preferredContact', { required: 'Please select a contact method' })}
          >
            <option value="" disabled>Select a method</option>
            {CONTACT_METHOD_OPTIONS.map((option) => (
              <option key={option} value={option}>{option}</option>
            ))}
          </select>
        </FormField>
      </div>

      <FormField label="Photos of the Issue (optional)" error={errors.photos}>
        <label className="flex cursor-pointer items-center justify-between rounded-[var(--radius-md)] border border-dashed border-[var(--color-border-strong)] px-4 py-3 text-sm text-[var(--color-text-secondary)] transition-colors hover:border-[var(--color-primary-400)]">
          <span className="flex items-center gap-2">
            <HiPaperClip />
            {photoCount > 0 ? `${photoCount} photo${photoCount > 1 ? 's' : ''} selected` : 'Attach photos (optional)'}
          </span>
          <span className="font-semibold text-[var(--color-primary-600)]">Browse</span>
          <input type="file" accept="image/*" multiple className="hidden" {...register('photos')} />
        </label>
      </FormField>

      <FormField label="Message (optional)" htmlFor="message" error={errors.message}>
        <textarea
          id="message"
          rows={4}
          className="input-field resize-none"
          placeholder="Tell us a bit more about what's going on..."
          {...register('message')}
        />
      </FormField>

      {Object.keys(errors).length > 0 && (
        <div className="flex items-center gap-2 rounded-lg bg-red-50 px-3 py-2 text-xs font-medium text-red-600">
          <HiXCircle className="shrink-0" />
          Please fix the highlighted fields before submitting.
        </div>
      )}

      <Button type="submit" variant="primary" size="lg" loading={isSubmitting} className="w-full">
        {isSubmitting ? 'Submitting...' : 'Request Free Quote'}
      </Button>
      <p className="text-center text-xs text-[var(--color-text-muted)]">
        We respect your privacy — your information is never sold or shared.
      </p>
    </form>
  );
};

export default QuoteForm;
