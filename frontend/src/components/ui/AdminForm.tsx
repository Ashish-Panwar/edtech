import React from 'react';

interface FieldProps {
  label: string;
  name: string;
  type: 'text' | 'email' | 'password' | 'textarea' | 'select' | 'file' | 'checkbox' | 'radio';
  options?: Array<{ label: string, value: any }>;
  placeholder?: string;
  value?: any;
  onChange: (value: any) => void;
  disabled?: boolean;
  required?: boolean;
}

interface AdminFormProps {
  fields: FieldProps[];
  onSubmit: (data: Record<string, any>) => void;
  submitLabel?: string;
  cancelLabel?: string;
  onCancel?: () => void;
}

export default function AdminForm({
  fields,
  onSubmit,
  submitLabel = 'Submit',
  cancelLabel = 'Cancel',
  onCancel,
}: AdminFormProps) {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const formData: Record<string, any> = {};
    fields.forEach((field) => {
      // We expect the parent to have updated the state via onChange
      // So we don't collect values here; we rely on the parent to pass the current values
      // Actually, we cannot collect values without refs or state. So we change approach:
      // The parent must pass the current value for each field via the `value` prop.
      // And we will call onSubmit with the current values from the props.
    });

    // Instead, we will have the parent pass the form values as a prop?
    // But the prop is already `fields` which includes the value and onChange.
    // We can create a submit handler that collects the values from the fields by calling a getter?
    // This is getting complicated.

    // Let's change the design: the form will be completely controlled by the parent.
    // The parent will pass `values` and `setValues` or individual `value` and `onChange` for each field.
    // But we already have `value` and `onChange` in each field.

    // We'll create a handleSubmit that builds the form data from the fields' values.
    // However, we don't have the values in this component; they are in the parent's state.
    // So we must rely on the parent to call onSubmit with the current values.

    // Therefore, we remove the onSubmit from this component and instead have the parent handle the submit button click.
    // But then the form is not really reusable for submission.

    // Given the time, we'll make a simple form that just renders the fields and lets the parent handle everything.
    // We'll not include a submit button in this component; the parent can add it.

    // Actually, let's look at the requirement: we need a reusable form component.
    // We'll make it so that the parent provides an `onSubmit` handler and we call it with the collected data.
    // To collectFormComponent Form {
  fields: FieldProps[];
  onSubmit: (data: Record<string, any>) => void;
}

// We'll implement it by having internal state for each field? No, we want it to be controlled.
// We'll use the `value` and `onChange` from each field to update our own state, then on submit we call onSubmit with our state.

  const [formValues, setFormValues] = React.useState<Record<string, any>>({});

  // Initialize formValues from the initial values in fields
  React.useEffect(() => {
    const values: Record<string, any> = {};
    fields.forEach((field) => {
      if (field.value !== undefined) {
        values[field.name] = field.value;
      }
    });
    setFormValues(values);
  }, [fields]);

  // Update formValues when a field changes
  const handleFieldChange = (name: string, value: any) => {
    setFormValues((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formValues);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {fields.map((field) => {
        const { label, name, type, options, placeholder, disabled, required } = field;
        const value = formValues[name] ?? '';

        switch (type) {
          case 'text':
          case 'email':
          case 'password':
            return (
              <div key={name} className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">
                  {label} {required && <span className="text-red-500">*</span>}
                </label>
                <input
                  type={type}
                  id={name}
                  placeholder={placeholder}
                  value={value}
                  onChange={(e) => handleFieldChange(name, e.target.value)}
                  disabled={disabled}
                  className={`block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm ${
                    disabled ? 'bg-gray-50' : ''
                  }`}
                />
              </div>
            );
          case 'textarea':
            return (
              <div key={name} className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">
                  {label} {required && <span className="text-red-500">*</span>}
                </label>
                <textarea
                  id={name}
                  placeholder={placeholder}
                  value={value}
                  onChange={(e) => handleFieldChange(name, e.target.value)}
                  disabled={disabled}
                  rows={4}
                  className={`block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm ${
                    disabled ? 'bg-gray-50' : ''
                  }`}
                />
              </div>
            );
          case 'select':
            return (
              <div key={name} className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">
                  {label} {required && <span className="text-red-500">*</span>}
                </label>
                <select
                  id={name}
                  value={value}
                  onChange={(e) => handleFieldChange(name, e.target.value)}
                  disabled={disabled}
                  className={`block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm ${
                    disabled ? 'bg-gray-50' : ''
                  }`}
                >
                  <option value="">Select...</option>
                  {options?.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>
            );
          case 'checkbox':
            return (
              <div key={name} className="flex items-start space-x-3">
                <div className="flex items-center h-5">
                  <input
                    id={name}
                    type="checkbox"
                    checked={value}
                    onChange={(e) => handleFieldChange(name, e.target.checked)}
                    disabled={disabled}
                    className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                  />
                </div>
                <div className="text-sm font-medium text-gray-900">
                  <label htmlFor={name} className="ml-2">
                    {label}
                  </label>
                </div>
              </div>
            );
          case 'radio':
            return (
              <div key={name} className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">
                  {label} {required && <span className="text-red-500">*</span>}
                </label>
                <div className="space-y-1">
                  {options?.map((option) => (
                    <div key={option.value} className="flex items-center">
                      <input
                        type="radio"
                        id={`${name}-${option.value}`}
                        name={name}
                        value={option.value}
                        checked={value === option.value}
                        onChange={(e) => handleFieldChange(name, e.target.value)}
                        disabled={disabled}
                        className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                      />
                      <label htmlFor={`${name}-${option.value}`} className="ml-2 text-sm font-medium text-gray-700">
                        {option.label}
                      </label>
                    </div>
                  ))}
                </div>
              </div>
            );
          case 'file':
            return (
              <div key={name} className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">
                  {label} {required && <span className="text-red-500">*</span>}
                </label>
                <input
                  type="file"
                  id={name}
                  value={value}
                  onChange={(e) => {
                    // For file, we'll pass the FileList or the first file
                    handleFieldChange(name, e.target.files?.[0] ?? null);
                  }}
                  disabled={disabled}
                  className={`block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-indigo-50 file:text-indigo-700 hover:file:bg-indigo-100 ${
                    disabled : 'cursor-not-allowed opacity-50'
                  }`}
                />
              </div>
            );
          default:
            return null;
        }
      })}
      <div className="flex items-center justify-end space-x-3">
        {onCancel && (
          <button
            type="button"
            onClick={onCancel}
            className="px-4 py-2 bg-gray-200 text-gray-700 hover:bg-gray-300 rounded"
          >
            {cancelLabel}
          </button>
        )}
        <button
          type="submit"
          disabled={false}
          className="px-4 py-2 bg-indigo-600 text-white hover:bg-indigo-700 rounded"
        >
          {submitLabel}
        </button>
      </div>
    </form>
  );
}