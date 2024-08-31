export default function Select({ label, ...props }) {
  return (
    <div>
      {label && <label className="text-sm md:text-base">{label}</label>}
      <select {...props}></select>
    </div>
  );
}
