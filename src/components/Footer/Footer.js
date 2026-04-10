import "./Footer.css"
import logo from "../../Images/footlogo.svg";
import contactIcon from "../../Images/call.svg";
import location from "../../Images/Location.svg";
import mailIcon from "../../Images/mail.svg";

function Footer(){

return(

<footer className="footer">

<div className="footer-grid">

<div className="logo">
   <img src={logo} alt=""/>  
{/* <h2>Sweetwater</h2> */}
</div>

<div className="Quick">
<h2>Links</h2>
<p>About us</p>
<p>Terms & Condition</p>
<p>Privacy Policy</p>
<p>Contact Us</p>
<p>Blog</p>
</div>

<div>
<h3>CONTACT INFO</h3>
<div className="info"><img src={location} alt="Contact Icon"/> <p>211_213 Lorem lpsum,fruit city 7077,US </p></div>
<div className="info"><img src={contactIcon} alt="Contact Icon"/> <p>09065730996</p></div>
<div className="info"><img src={mailIcon} alt="Contact Icon"/> <p>info@sweetwater.com.ng</p></div>
</div>

</div>

</footer>

)

};

export default Footer;