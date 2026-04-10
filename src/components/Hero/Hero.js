import "./Hero.css"
import nuture from "../../Images/nuture.svg"

function Hero(){
return(

<section className="hero">

<div className="hero-text">

<h1>
NOURISH <span>YOUR BODY</span> <br/>
DELIGHT <span>YOUR PALATE</span>
</h1>

<p className="sub">
Our product are carefully crafted using only the freshest,<br/>
high quality fruits ensuring that every sip delivers a<br/>
delicious and refreshing experience
</p>

<button>Shop now</button>

<div className="hero-stats">

<div>
<h3>1200+</h3>
<p className="p3">Product reviews</p>
</div>

<div>
<h3>300+</h3>
<p className="p3">Member crew</p>
</div>

<div>
<h3>100+</h3>
<p className="p3">Fresh product</p>
</div>

</div>

</div>

<div className="hero-img">
<img src={nuture} alt=""/>
</div>

</section>

)
}

export default Hero;
