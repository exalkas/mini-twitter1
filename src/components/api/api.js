import axios from "axios";


function api(){
    const url = 'https://elak-mini-twitter.herokuapp.com/messages';
    
    const response = axios.get(url);
    
    console.log(response.data);

    return response;

}