import image from "./assets/rome1.jpeg" 
import "./index.css"
function Card(){
    return(
      
        <div className="card">
          <div className="card-img">  <img src={image} alt=""  /></div>
         
          <div className="card2-content">
            <div className="card-price">  $120</div>
            <div className="card-title"> Italy</div>
          </div>
          <div className="card-duration"> 
            <image src="https://i.pngimg.me/thumb/f/720/m2K9A0m2H7Z5H7G6.jpg" alt=""  />
             <p >10 days trip</p>
            </div>
   
          
        </div>
            
    );
}

export default Card
