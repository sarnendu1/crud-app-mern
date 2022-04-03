import { useState, useEffect } from 'react';
import { FormGroup, FormControl, InputLabel, Input, Button, makeStyles, Typography } from '@material-ui/core';
import { useHistory, useParams } from 'react-router-dom';
import { getUsers, editUser } from '../Service/api';
import FileBase64 from 'react-file-base64';

const initialValue = {
    image: '',
    name: '',
    username: '',
    email: '',
    phone: ''
}



const EditUser = () => {
    const [user, setUser] = useState(initialValue);
    const { image, name, username, email, phone } = user;
    const { id } = useParams();
    
    let history = useHistory();

    useEffect(() => {
        loadUserDetails();
    }, []);

    const loadUserDetails = async() => {
        const response = await getUsers(id);
        setUser(response.data);
    }

    const editUserDetails = async() => {
        const response = await editUser(id, user);
        history.push('/');
    }

    const onValueChange = (e) => {
        console.log(e.target.value);
        setUser({...user, [e.target.name]: e.target.value})
    }

    return (
        <div>
        <form className="container">
            <center><h3 >Edit User</h3></center>
            <label for="my-input">Name</label>
                <input type="text" onChange={(e) => onValueChange(e)} name='name' value={name} id="my-input" aria-describedby="my-helper-text"/>
                
                <label for="my-input">Username</label>
                <input type="text" onChange={(e) => onValueChange(e)} name='username' value={username} id="my-input" aria-describedby="my-helper-text" />
           
                <label for="my-input">Email</label>
                <input type="text" onChange={(e) => onValueChange(e)} name='email' value={email} id="my-input" aria-describedby="my-helper-text"/>
           
           
                <label for="my-input">Phone</label>
                <input type="text" onChange={(e) => onValueChange(e)} name='phone' value={phone} id="my-input" aria-describedby="my-helper-text"/>
                

               <div className="button" onClick={() => editUserDetails()}>Submit</div>
               </form>
               </div>
    )
}

export default EditUser;