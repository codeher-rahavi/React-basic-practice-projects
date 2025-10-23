import { useContext } from "react";
import CommonForm from "../../components/commonForm";
import { loginFormControls } from "../../config";
import { AuthContext } from "../../context";
import { useNavigate } from "react-router-dom";


function LoginPages(){

    const {loginFormData,setLoginFormData,loginWithFirebase,setLoading} = useContext(AuthContext);
    
    const navigate = useNavigate();

    function handleLoginFormSubmit(event){
        event.preventDefault();

        loginWithFirebase()
        .then((result) =>{
           console.log(result,'result12345');
            if(result) {
                setLoading(false);
                navigate('/profile-page');
            }
        });

    }
    
    return (
        <div className="w-full font-semibold max-w-sm mx-auto rounded-lg shadow-md">
           <div className="px-6 py-5 mt-10">
                <h1>Welcone Back</h1>
                <p>Login Page</p>
                <CommonForm 
                    formControls={loginFormControls}
                    buttonText={'Login'}
                    formData={loginFormData}
                    setFormData={setLoginFormData}
                    onSubmit={handleLoginFormSubmit}
                />

           </div>
        </div>
    )
}

export default LoginPages;