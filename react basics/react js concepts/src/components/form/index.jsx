import { useState } from "react";


function FormComponent() {
    const [nameValue, setNameValue] = useState('');
    const [emailvalue,setEmailValue]= useState('');

    const [formData,setFormData]= useState({
        name :'',
        email:''
    })

    function handleInputChange(event) {
        //console.log(event);
        const { value } = event.target;
        //setNameValue(event.target.value) or
        setNameValue(value);
    }

    function handleSubmit(event){
        event.preventDefault();

        //call api here and pass the name value here
        console.log(nameValue,emailvalue,"namevalue");
    }

    console.log(formData);

    function handleOnChange(event){
        console.log(event.target.name);
        const {name,value}= event.target;
        setFormData({
            ...formData,
            [name] : value
        })
    }
    function handleEmailChange(event){
        const {value} = event.target;
        setEmailValue(value);
    }
    return <div>
        <h1>Form</h1>
        <form onSubmit={handleSubmit}>
            <input value={formData.name}
                name="name"
                id="name"
                placeholder="Enter Your Name"
                onChange={handleOnChange}
            />
          
            <input value={formData.email}
            type="email"
            name="email"
            id="name"
            placeholder="Enter your email"
            onChange={handleOnChange}/>
              
            <button type="submit">Submit</button>

        </form>

        
    </div>
}
export default FormComponent;