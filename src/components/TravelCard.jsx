

function TravelCard(props){
    return(
    
        <div className="travel-card">
          <img src={props.image} alt="" />
          <div className="travel-details">
            <h3>{props.place}</h3>
            <p>{props.price}</p>
          </div>

          <div className="travel-days">
            <img src="public/travelicon.jpg" alt="" />
            <p>{props.duration}</p>
          </div>
        </div>
      
            
    );
}

export default TravelCard