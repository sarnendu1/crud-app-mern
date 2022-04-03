import react, { useState } from 'react';
import { FormGroup, FormControl, InputLabel, Input, Button, makeStyles, Typography } from '@material-ui/core';
import { addUser } from '../Service/api';
import { useHistory } from 'react-router-dom';

const initialValue = {

    image: '',
    name: '',
    username: '',
    email: '',
    phone: '',

}



const AddUser = () => {
    const [user, setUser] = useState(initialValue);
    const { image, name, username, email, phone } = user;
    
    let history = useHistory();

    const onValueChange = (e) => {
        console.log(e.target.value);
        setUser({...user, [e.target.name]: e.target.value})
    }
    const onImageChange = (base64) => {
        console.log(base64);
        setUser({...user, [base64.target.name]: base64})
    }

    const addUserDetails = async() => {
        await addUser(user);
        history.push('/');
    }

    return (
        <div>
        <form className="container" >
            <center><h3>Add User</h3></center>
            {/* <FormControl>
                <InputLabel htmlFor="my-input">Image</InputLabel>
                <Input onChange={(e) => onValueChange(e)} type='file' name='name' value={name} id="my-input" />
            </FormControl> */}
            
                
                <label for="my-input">Name</label>
                <input type="text" onChange={(e) => onValueChange(e)} name='name' value={name} id="my-input" />
                
                <label for="my-input">Username</label>
                <input type="text" onChange={(e) => onValueChange(e)} name='username' value={username} id="my-input" />
           
                <label for="my-input">Email</label>
                <input type="text" onChange={(e) => onValueChange(e)} name='email' value={email} id="my-input" />
           
           
                <label for="my-input">Phone</label>
                <input type="text" onChange={(e) => onValueChange(e)} name='phone' value={phone} id="my-input" />
                

               <div className="button" onClick={() => addUserDetails()}>Submit</div>
            
        </form>
        </div>
    )
}

export default AddUser;