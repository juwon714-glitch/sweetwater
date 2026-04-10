import "./Product.css"
import passion from "../../Images/passion.svg";
import strawberry from "../../Images/Strawberry.svg";
import tropical from "../../Images/tropical.svg";
import berry from "../../Images/box.svg";
import watermelon from "../../Images/me.svg";
import orange from "../../Images/orange.svg";
import rating from "../../Images/star_rating.svg";
function Products(){

return(

<section className="products">

<div className="products-header">
<h2 className="featured">Featured <span>Products</span></h2>

<div className="products-categories">
    <h1 className="Best">Best Sellers</h1>
    <h1 className="Top ">Top Trending</h1>
    <h1 className="Top">Top Rates</h1>
</div>
</div>

<div className="product-grid">

<div className="card">
<img src={passion} alt=""/>
<h3>Passion Fruit Slushie</h3>
<p className="rating"><img src={rating} alt=""/>(58)</p>
<p className="price">$8.00</p>
</div>

<div className="card">
<img src={orange}alt=""/>
<h3>Orange Slushie</h3>
<p className="rating"><img src={rating} alt=""/>(276)</p>
<p className="price">$15.00</p>
</div>

<div className="card">
<img src={tropical}alt=""/>
<h3>Tropical Box</h3>
<p className="rating"><img src={rating} alt=""/>(386)</p>
<p className="price">$89.00</p>
</div>

<div className="card">
<img src={berry} alt=""/>
<h3>Berries Box (S-5kg)</h3>
<p className="rating"><img src={rating} alt=""/>(186)</p>
<p className="price">$30.00</p>
</div>

<div className="card">
<img src={watermelon} alt=""/>
<h3>Watermelon Slushie</h3>
<p className="rating"><img src={rating} alt=""/>(273)</p>
<p className="price">$7.00</p>
</div>

<div className="card">
<img src={strawberry} alt=""/>
<h3>Strawberry Slushie</h3>
<p className="rating"><img src={rating} alt=""/>(276)</p>
<p className="price">$89.00</p>
</div>

</div>

</section>

)

}

export default Products;
