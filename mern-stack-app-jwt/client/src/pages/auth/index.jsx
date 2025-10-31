import SignIn from "@/components/auth/sign-in";
import SignUp from "@/components/auth/sign-up";
import CommonButton from "@/components/common-button";
import { useState } from "react";

function AuthPage() {

    const [isLoginView, setIsLoginView] = useState(true);


    return (
        <div className="flex flex-auto flex-col min-h-screen h-full">
            <div className="flex flex-col h-full justify-center items-center bg-white">
                <h3 className="text-3xl font-bold ">Welcome</h3>
                <div className="mt-4">{isLoginView ? <SignIn /> : <SignUp />}</div>
                <div className="mt-5">
                    <CommonButton onClick={(() => setIsLoginView(!isLoginView))}
                        buttonText={isLoginView ? "Switch to Sign Up" : "Switch to Sign In"}
                        type={'button'}
                        disabled={false}
                    >
                    </CommonButton>
                </div>
            </div>
        </div>
    )
}
export default AuthPage;
