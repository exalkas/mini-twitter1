import React, {useEffect, useState} from 'react';
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
                {element?.message}
            </div>
        ))
    }
    </div>
    )
}