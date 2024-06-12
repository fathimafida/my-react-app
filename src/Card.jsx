import profilePic from "./assets/stuverse.png"
function Card(){
    return(

        <div className="card">
            <img className="card-img" src={profilePic} alt="random image"  width={"200px"}/>
            <h2 className="card-title">Random Image</h2>
            <p className="card-text">This is some random pics</p>
            </div>
    );
}

export default Card