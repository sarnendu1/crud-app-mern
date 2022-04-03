import { AppBar, Toolbar, makeStyles } from '@material-ui/core';
import { Link } from 'react-router-dom';
import '../style.css';



const NavBar = () => {
    
    return (
        <div position="static" className="header">
            
                
                <Link className="tabs" to="/" exact><h3>Sarnendu Crud App</h3></Link>
                
            
        </div>
    )
}

export default NavBar;