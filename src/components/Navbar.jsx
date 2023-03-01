import {NavLink } from 'react-router-dom';

const Navbar = () => {    
    const navbarStyle=({isActive})=>{
        return{
            color:isActive? "gray": "White",
            fontWeight:isActive? "bold":"normal"
        }
    }
    return (<>

        <div className='nav'>
            <dd><NavLink to={"/"} style={navbarStyle}>Home</NavLink></dd>
            <dd><NavLink to={"/business"} style={navbarStyle}>Business</NavLink></dd>
            <dd><NavLink to={"/entertainment"} style={navbarStyle}>Entertainment</NavLink></dd>
            <dd><NavLink to={"/general"} style={navbarStyle}>General</NavLink></dd>
            <dd><NavLink to={"health"} style={navbarStyle}>Health</NavLink></dd>
            <dd><NavLink to={"/science"} style={navbarStyle}>Science</NavLink></dd>
            <dd><NavLink to={"/sports"} style={navbarStyle}>Sports</NavLink></dd>
            <dd><NavLink to={"/technology"} style={navbarStyle}>Technology</NavLink></dd>
        </div>
        </>
    )
}


export default Navbar