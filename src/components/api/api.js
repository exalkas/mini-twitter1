import axios from "axios";


export async function MessagesApi(){ // to fetch all messages 

    const url = 'https://elak-mini-twitter.herokuapp.com/messages';
    
    const response = await axios.get(url);
    
    //  console.log('response.data');
     
     return response.data;
    }
    
export async function OneMessageApi(id){ // to fetch one messages by it's ID
        
    const url = 'https://elak-mini-twitter.herokuapp.com/messages/'+id;
        
    const response = await axios.get(url);
        
    // console.log(response.data);
   
    return response.data;

}

export async function AllUsers(){ // to fetch all users
    
    const url = 'https://elak-mini-twitter.herokuapp.com/users';
    
    const response = await axios.get(url);
    
    // console.log(response.data);
    
    return response.data;
    
}

export async function UserById(id){ // to fetch one user by his-her ID
    
    const url = 'https://elak-mini-twitter.herokuapp.com/users/'+id;
    
    const response = await axios.get(url);
    
    // console.log(response.data);
    
    return response.data;
    
}
export async function AllMessagesByUserId(id){ // to fetch all messages belonging to one user
        
    const url = 'https://elak-mini-twitter.herokuapp.com/users/'+id+'/messages';
        
    const response = await axios.get(url);
        
    // console.log(response.data);
   
    return response.data;

}