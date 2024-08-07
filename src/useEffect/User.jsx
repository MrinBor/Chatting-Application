import React, { useEffect, useState } from 'react'

function User() {

    const [loading,setLoading] = useState(true);
    const [user,setUser] = useState({})

    function cb(){
        // console.log("I will run after Render")
        async function fetchUser( ) {
            const response  = await fetch("https://jsonplaceholder.typicode.com/todos/1");
            const user = await response.json();
            console.log("User DATA",user);
            setLoading(false)
            setUser(user)
        }

        fetchUser()
    }

    useEffect(cb,[]);
    console.log("Render");


    if(loading)
        return(
    <>
       <div>Profile Page</div>
       <div>...Loading</div>
    </>
        )

    if(loading==false)
        return(
    <>
       <div>Users ...</div>
       <div>{user.id}</div>
       <div>{user.userId}</div>
       <div>{user.title}</div>

       <div></div>
    </>
        )  


}

export default User;