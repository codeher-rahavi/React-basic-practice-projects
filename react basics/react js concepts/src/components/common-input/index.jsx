

function CommonInput({ label, onChange, name, id, value, placeholder,type }) {
    return <div>
        <label htmlFor={name}>{label}</label>
        <input name={name}
            id={id}
            type = {type || 'text'}
            placeholder={placeholder || "enter value here"}
            value={value}
            onChange={onChange} />
    </div>
}

export default CommonInput;
