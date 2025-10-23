import { useContext } from "react";
import { AuthContext } from "../../context";




function ProfilePages(){
    const {user,handleLogOut} = useContext(AuthContext);
    console.log(user);


    return (
        <div>
            <h3>{user?.displayName}</h3>
            <p>{user?.email}</p>
            <button onClick={handleLogOut}>LogOut</button>
        </div>
    )
}

export default ProfilePages;