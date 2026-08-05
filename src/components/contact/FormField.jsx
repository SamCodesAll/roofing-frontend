/**
 * <FormField label="Full Name" htmlFor="name" error={errors.name} required>
 *   <input id="name" {...register('name')} className="input-field" />
 * </FormField>
 */
const FormField = ({ label, htmlFor, error, required, children, className = '' }) => (
  <div className={className}>
    <label htmlFor={htmlFor} className="mb-1.5 block text-sm font-semibold text-[var(--color-text-primary)]">
      {label}
      {required && <span className="text-[var(--color-accent-500)]"> *</span>}
    </label>
    {children}
    {error && (
      <p role="alert" className="mt-1.5 text-xs font-medium text-red-600">
        {error.message}
      </p>
    )}
  </div>
);

export default FormField;
