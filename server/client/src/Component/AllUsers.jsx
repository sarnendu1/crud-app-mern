import react, { useState, useEffect } from 'react';
import { Table, thead, td, Paper, tr, TableBody, Button, makeStyles } from '@material-ui/core'
import { getUsers, deleteUser } from '../Service/api';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import '../style.css';




const AllUsers = () => {
    const [users, setUsers] = useState([]);
    

    useEffect(() => {
        getAllUsers();
    }, []);

    const deleteUserData = async (id) => {
        await deleteUser(id);
        getAllUsers();
    }

    const getAllUsers = async () => {
        let response = await getUsers();
        setUsers(response.data);
    }

    return (
        <>
        <Link to="/add" exact><button className="addbutton">Add User</button></Link>
        <table className="table">
            <thead>
                <tr className="thead">
                    <th scope="col">Id</th>
                    <th scope="col">Name</th>
                    <th scope="col">Username</th>
                    <th scope="col">Email</th>
                    <th scope="col">Phone</th>
                    
                </tr>
            </thead>
            <tbody>
                {users.map((user) => (
                    <tr className="row" key={user.id}>
                        <td data-label="Id">{user._id}</td> {/* change it to user.id to use JSON Server */}
                        <td data-label="Name">{user.name}</td>
                        <td data-label="Username">{user.username}</td>
                        <td data-label="Email">{user.email}</td>
                        <td data-label="Phone">{user.phone}</td>
                        <td>
                          <Link to={`/edit/${user._id}`}>  <button className="edit" style={{marginRight:10}} ><EditIcon /></button></Link>
                            <button className="delete" onClick={() => deleteUserData(user._id)}><DeleteIcon /></button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
        </>
    )
}

export default AllUsers;