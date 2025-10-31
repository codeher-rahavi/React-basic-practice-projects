import { TaskManagerContext } from "@/context";
import { callLogoutApi } from "@/services";
import { LogOut } from "lucide-react";
import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";


function Header() {

    const {setUser} = useContext(TaskManagerContext);
    const navigate = useNavigate();
     
    async function handleLogout(){
        const response = await callLogoutApi();

        if(response?.success){
            setUser(null);
            navigate('/auth')
        }
    }

    return (
        <header className="border-b border-gray-200">
            <div className="container mx-auto h-16">
                <div className="flex items-center w-full justify-between h-16">
                    <div className="w-auto">
                        <h2>Task Manager</h2>
                    </div>
                    <div className="flex gap-4">
                        <Link className="font-semibold text-xl text-black " to={'/tasks/list'}>Tasks</Link>
                        <Link  className="font-semibold text-xl text-black " to={'/tasks/scrumBoard'}>ScrumBoard</Link>
                    </div>
                    <div>
                        <LogOut onClick={handleLogout} color="#000" className="cursor-pointer" />
                    </div>
                </div>

            </div>
        </header>
    )
}

export default Header;