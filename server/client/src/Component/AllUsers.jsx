import react, { useState, useEffect } from 'react';
import { Table, TableHead, TableCell, Paper, TableRow, TableBody, Button, makeStyles } from '@material-ui/core'
import { getUsers, deleteUser } from '../Service/api';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';

const useStyles = makeStyles({

    button: {
        width:'fit-content',
        background:'#602AC3',
        color:'white',
        textDecoration: 'none',
        float:'right',
        marginRight:'86px',
        marginTop:'50px',
        marginBottom:'10px',
        "&:hover": {
            backgroundColor: '#602AC3'
          }
    },
    
    
    table: {
        width: '90%',
        margin: '50px 0 0 50px',
        borderRadius:'10px',
        
    },
    thead: {
        
        '& > *': {
            fontSize: 20,
            background: '#f50057',
            color: '#FFFFFF'
            
        }
    },
    delete: {
        color:'white',
        background:'red',
        
    },
    row: {
        '& > *': {
            fontSize: 18
        }
    }
})


const AllUsers = () => {
    const [users, setUsers] = useState([]);
    const classes = useStyles();

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
        <Link to="/add" exact><Button className={classes.button}>Add User</Button></Link>
        <Table className={classes.table}>
            <TableHead>
                <TableRow className={classes.thead}>
                    <TableCell>Id</TableCell>
                    <TableCell>Name</TableCell>
                    <TableCell>Username</TableCell>
                    <TableCell>Email</TableCell>
                    <TableCell>Phone</TableCell>
                    <TableCell></TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {users.map((user) => (
                    <TableRow className={classes.row} key={user.id}>
                        <TableCell>{user._id}</TableCell> {/* change it to user.id to use JSON Server */}
                        <TableCell>{user.name}</TableCell>
                        <TableCell>{user.username}</TableCell>
                        <TableCell>{user.email}</TableCell>
                        <TableCell>{user.phone}</TableCell>
                        <TableCell>
                            <Button color="primary"  variant="contained" style={{marginRight:10}} component={Link} to={`/edit/${user._id}`}><EditIcon /></Button> {/* change it to user.id to use JSON Server */}
                            <Button className={classes.delete} variant="contained" onClick={() => deleteUserData(user._id)}><DeleteIcon /></Button> {/* change it to user.id to use JSON Server */}
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
        </>
    )
}

export default AllUsers;