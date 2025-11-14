function InputField({
  label,
  type = "text",
  value,
  onChange,
  placeholder = "",
  required = false
}) {
  return (
    <div className="input-field">
      {label && <label>{label}</label>}
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
      />
    </div>
  );
}

export default InputField;
