import "./Testimonial.css"
import user1 from "../../Images/user1.svg"
import user2 from "../../Images/user2.svg"

function Testimonial() {

  const testimonials = [
    {
      name: "Mary Smith",
      text: "I absolutely love the fruit juice! the flavors are so fresh and vibrate,and you can tell they use high_quality ingredient its a refreshingand healthy way to start my day”",
      img: user1
    },
    {
      name: "David Coffins",
      text: "Good : they were prompt in answering my question and ensured that my order was delivered quickly and in perfect condition”",
      img: user2
    }
  ]

  return (
    <section className="testimonials">

      {testimonials.map((item, index) => (
        <div className="testimonial-card" key={index}>

          <div className="avatar">
            <img src={item.img} alt={item.name} />
          </div>

          <div className="content">
            <p>{item.text}</p>
            <h4>{item.name}</h4>
          </div>

        </div>
      ))}

    </section>
  )
}

export default Testimonial