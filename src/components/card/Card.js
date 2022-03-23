import "./Card.scss";

import { data } from "../../helpers/data";

console.log(data)
function Card() {
  return (
    <div className="card-container">
        {data.map((card)=>{
            // console.log(card.id)
            return(
              <div className="cards" key={card.id}>
                  <div className="title">
                        <h2>{card.title}</h2>
                        
                  </div>
                  <div className="img-div">
                      <img src={card.image} alt={card.title} />
                  </div>
                  <div className="card-over">
                      <p>
                          {card.desc}
                      </p>
                  </div>
              </div>  
            )
        })}
        
    </div>
  )
}

export default Card;
