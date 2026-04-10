import "./Navbar.css"
import logo from "../../Images/logo.svg";
import search from "../../Images/Search.svg";

function Navbar(){
return(
<nav className="navbar">

 {/* issue with logo */}
<div className="logo">
<p>Sweetwater</p>
<img  className="sweet" src={logo} alt=""/>
</div>

<ul className="nav-links">
<li>Shop</li>
<li>Blog</li>
<li>Contact</li>
</ul>

<div className="nav-icons">
<button className="search">
    <img src={search} alt="Search"/>
    Search</button>
<span>🛒</span>
<span>❤</span>
</div>

</nav>
)
}

export default Navbar;