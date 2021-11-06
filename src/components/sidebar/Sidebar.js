import React, {useEffect, useState} from 'react';
import {UserById} from "../api/api";

export default function Sidebar() {
    console.log('Hello from sidebar');
    //const {id} = useParams();
    const id = 1;
    //needs to be replaced by actual user ID of logged in user
    const [user, setUser] = useState();

    useEffect( async () => {
        const response = await UserById(id);
        setUser(response);
    }, [])


    return (
        <div className="userInfo">
          <img src={`${user?.profile_picture}`} alt="profilepicture" style={{width: 100}}/>
          {user?.username}
        </div>
    )
}