import { useContext, useEffect } from "react";
import CommonForm from "../../components/commonForm";
import { registerFormControls } from "../../config";
import { AuthContext } from "../../context";
import { updateProfile } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import auth from "../../firebaseConfig";



function RegisterPages() {

    const { registerFormData,
        setRegisterFormData,
        registerWithFirebase,
        setLoading } = useContext(AuthContext);

    const navigate = useNavigate();

    console.log(registerFormData);


    function handleRegisterFormSubmit(event) {
        event.preventDefault();

        registerWithFirebase()
            .then((result) => {
                if (result?.user) {
                    updateProfile(result?.user, {
                        displayName: registerFormData.name,
                    }).then(() => {
                        console.log(auth.currentUser.displayName, 'auth.currentUser');


                        if (auth.currentUser.displayName) {
                            setLoading(false);
                            navigate('/profile-page');
                        }
                    })

                    // navigate("/profile-page");
                }
            })
            .catch((error) => console.log(error));

    }



    return (
        <div className="w-full font-semibold max-w-sm mx-auto rounded-lg shadow-md">
            <div className="px-6 py-5 ">
                <h3>Welcome Back</h3>
                <p>Register Page</p>
                <CommonForm
                    formControls={registerFormControls}
                    formData={registerFormData}
                    setFormData={setRegisterFormData}
                    onSubmit={handleRegisterFormSubmit}
                    buttonText={'Save'}
                />
            </div>
        </div>
    )
}

export default RegisterPages;