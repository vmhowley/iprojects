import React from 'react'

export default function Input({
label,
name,
value,
onChange,
placeholder,
type = "text",
error,
}) {
return (
<div className="flex flex-col gap-1 w-full">
{label && <label className="text-sm font-medium text-gray-300">{label}</label>}


<input
name={name}
type={type}
value={value}
onChange={(e) => onChange(e.target)}
placeholder={placeholder}
className={`w-full px-3 py-2 rounded-xl border focus:outline-none focus:ring-2 transition-all
${error ? "border-red-500 focus:ring-red-300" : "border-gray-300 focus:ring-blue-300"}`}
/>


{error && <span className="text-xs text-red-500">{error}</span>}
</div>
);
}