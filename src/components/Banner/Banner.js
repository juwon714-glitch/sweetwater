import "./Banner.css"
import bonus from "../../Images/bonus.svg";
import special from "../../Images/special.svg";
import bonus1 from "../../Images/bonus1.svg";

function Banner(){
return(

<section className="banner">

<div className="banner-img">
    <div><img src={special} alt="Special" /></div>
    <div><img src={bonus1} alt="Bonus 1" /></div>
    <div><img src={bonus} alt="Bonus" /></div>
</div>

</section>

)
}

export default Banner;