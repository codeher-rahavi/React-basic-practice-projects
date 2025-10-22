import { useState } from "react";
import { loginFormElements } from "../../config";
import CommonForm from "../common-form";



const initalFormData = {
    email: "",
    password: "",
};

function LoginComponent() {

    const [loginFormData, setLoginFormData] = useState(initalFormData);

    function onHandleSubmit(event) {
        event.preventDefault();
        console.log(initalFormData);

        //api logic and database logic
        setLoginFormData(initalFormData);
    }

    return <div>
        <h1>login page / component</h1>
        <CommonForm formData={loginFormData}
            setFormData={setLoginFormData}
            formControls={loginFormElements}
            onHandleSubmit={onHandleSubmit}
            buttonText={'Login'} />
    </div>
}

export default LoginComponent;