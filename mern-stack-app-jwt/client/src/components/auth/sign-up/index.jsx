import CommonForm from "@/components/common-form";
import { signUpFormControls } from "@/config";
import { CallRegisterUserApi } from "@/services";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

function SignUp(){
    
    const formData = useForm({
        defaultValues : {
            name : '',
            email : '',
            password : '',
        }
    });

const navigate = useNavigate();

    async function handleSubmit(getData){
        console.log(getData);

        const data = await CallRegisterUserApi(getData)

        console.log('data',data);
        if(data?.success){
           toast.success("User registration successful;")
           navigate("/tasks/list")
        }else{
            toast.error("some error occured")
        }
        
    }

    return (
        <div>
        <CommonForm 
        formControls={signUpFormControls}
        form = {formData}
        handleSubmit={handleSubmit}
        btnText={'Sign Up'}
        />
        </div>

        
    );
}

export default SignUp;