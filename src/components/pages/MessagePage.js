import React, {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';

export default function MessagePage(){


    const {id} = useParams();
    const [message, setMessage] = useState();

    useEffect( async () => {
        const response = await OneMessageApi({id});
        console.log(response);
        setMessage(response);
    }, [])



    return(
        <div>
        <h4>{message.message}</h4>
        <img src={`${message?.image_url}`} />
        <br/>
        {message.date}
        </div>
    )
}