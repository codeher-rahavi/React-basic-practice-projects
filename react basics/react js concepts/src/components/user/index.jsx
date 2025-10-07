import { useEffect, useState } from "react"




export default function Users() {

    const [UsersList, setUserList] = useState([]);
    const [pending,setPending] = useState(false);

    async function fetchAllUsers() {
        try {
            setPending(true)
            const apiResponse = await fetch('https://dummyjson.com/users');
            const result = await apiResponse.json();

            if (result?.users) {
                setUserList(result?.users)
                setPending(false)
            }
            else {
                setUserList([]);
                setPending(false)
            }
        }
        catch (e) {
            console.log(e.message);
        }
    }

    // function handleFetchListOfUsers(){
    //     fetchAllUsers();
    // }
    // useEffect(() => {
    //     fetchAllUsers()
    // }, []);

    console.log(UsersList);

    if(pending){
        return <h1>Fetching users please wait!!</h1>
    }
    return <div>
        <h1>All User Lists</h1>
        <button onClick={fetchAllUsers}>Fetch users list</button>
        <ul>
            {
                UsersList && UsersList.length > 0 ? UsersList.map(userItem =>
                    <li key={userItem?.id}><p>{userItem?.firstName} {userItem?.lastName}</p></li>
                )
                    : null
            }
        </ul>
    </div>
}