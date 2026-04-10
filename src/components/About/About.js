import about from "../../Images/about.svg";
import "./About.css"

function About(){

return(

<section className="about">

<div className="about-img">
<img src={about} alt=""/>
</div>

<div className="about-text">

<h2 className="abt-txt">ABOUT <span className="abt-sp">US</span></h2>

<p className="about-p">
"Revitalize your Sense With Nature's sweetness"
</p>

<p>
We believe in the power of nature bounty and aim to harness the natural
goodness of fruits to create refreshing and revitalizing juices that nourish
both the body and the soul.
</p>

<p>
We harness the sweetness of ripe,premium fruits to create beverages that
are naturally sweet and satisfying.
</p>

<p>
Each product is a nutritious powerhouse,delivering a concentrated dose
of vitamins,minerals and antioxidants that support your immune system,
boost energy levels,and contribute to overall vitality.
</p>
<button>View More</button>

</div>

</section>

);
}

export default About;
