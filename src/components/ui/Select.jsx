export default function Select({ label, labelClassName, ...props }) {
  return (
    <div>
      {label && (
        <label className={`text-sm md:text-base ${labelClassName}`}>
          {label}
        </label>
      )}
      <select {...props}></select>
    </div>
  );
}
