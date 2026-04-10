import special1 from "../../Images/Special1.svg";
import special2 from "../../Images/Special2.svg";
import special3 from "../../Images/Special3.svg";
import "./Special.css"

function Special(){

return(

<section className="special">

<h1 className="make">What Make Us <span className="highlight">Special?</span></h1>

<div className="grid-img">
<div className="special-grid">

<div className="grid">
<h3>100% Naturally</h3>
<p>
we believe in the power of nature and strive to provide our
customer with beverages that are free from artificial additives
we do not add any artificial flavors,colors,or enhance to our 
products.our focus is on preserving the natural flavors,
nutrients and goodness found in the fruit themselves.
</p>
</div>

<div className="grid">
<h3>Variety and innovation</h3>
<p>
our team of experts is constantly innovating and introducing
new and exciting blends to keep your palate delighted
</p>
</div>

<div className="grid">
<h3>Fast delivery</h3>
<p>
we strive to provide a seamless,efficient delivery experience for 
our customer with real_time tracking and customer support 
</p>
</div>

</div>
<div className="special-img">
    <div><img src={special1} alt="Special 1" /></div>
    <div><img src={special2} alt="Special 2" /></div>
    <div><img src={special3} alt="Special 3" /></div>
</div>
</div>
</section>

)

}

export default Special;