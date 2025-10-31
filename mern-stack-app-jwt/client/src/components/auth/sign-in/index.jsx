import CommonForm from "@/components/common-form";
import { signInFormControls } from "@/config";
import { callLoginUserApi } from "@/services";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

function SignIn(){
    const formData = useForm({
        defaultValues :{
            name : '',
            email:'',
        }
})

const navigate = useNavigate();

async function handleSubmit(getData){

    const data = await callLoginUserApi(getData);
    console.log('data',data);

    if(data?.success){
        toast.success('sign in successfull');
        navigate("/tasks/list")
    }else{
        toast.error('somthing went wrong ! please try again'); 
    }

}

    return (
        <CommonForm 
            formControls={signInFormControls}
            form={formData}
            handleSubmit={handleSubmit}
            btnText={'Sign In'}

        />
    );
}

export default SignIn;