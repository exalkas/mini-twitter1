import React, {useEffect, useState} from 'react';
import {NavLink} from 'react-router-dom'
import {MessagesApi} from "../api/api";

export default function Home() {

    const [message, setMessage] = useState();

    useEffect( async () => {
        const response = await MessagesApi();
        console.log(response);
        setMessage(response);
    }, [])

    return (
    <div className="messageBody">
    {
        message?.map((element, id) => (
            <div key={id}>
                <h4><NavLink to={`/MessagePage/${element?.message_id}`}>{element?.message}</NavLink></h4>
            </div>
        ))
    }
    </div>
    )
}