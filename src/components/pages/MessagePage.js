import React, {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import { OneMessageApi} from '../api/api';

export default function MessagePage(){


    const {id} = useParams();
    const [message, setMessage] = useState();

    useEffect( async () => {
        const response = await OneMessageApi(id);
        console.log(response);
        setMessage(response);
    }, [])


    return(
        <div className="messageBody">
        <h4>{message?.message}</h4>
        <p>Author: {message?.username}</p>
        <img src={`${message?.image_url}`} />
        </div>
    )
}