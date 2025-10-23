



function CommonInput({type,name,placeholder,value,onChange, className}){
    return (
        <input type={type || 'text'}
        placeholder={placeholder || 'Enter a value'}
        value = {value}
        name={name}
        onChange={onChange}
        className={className || 'w-full block px-5 mt-2 p-3 mb-1 text-black border rounded-lg '}
        />
    )  
}
export default CommonInput;