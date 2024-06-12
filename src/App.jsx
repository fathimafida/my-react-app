import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import Food from   "./Food.jsx"
import Card from "./Card.jsx";
import Text from "./sss.jsx"  
import TravelCard from "./components/TravelCard.jsx";
import "./index.css"
import "./App.css"
import travelPic1 from "./assets/rome1.jpeg"
import travelPic2 from "./assets/london1.jpeg"
import travelPic3 from "./assets/europe1.jpeg"
import travelPic4 from "./assets/switzerland.jpg"
import travelPic5 from "./assets/malaysia.jpg"
import travelPic6 from "./assets/iceland.jpeg"
function App() {
  return (
    <>
    <div className="header"><h5>Top Selling</h5>
    <h1>Top Destinations</h1></div>
    <div className="container">
      
      
    <TravelCard place="Rome,Italy" duration="10 Days Trip" price="$5,42k" image={travelPic1} />
    <TravelCard place="London,uk" duration="12 Days Trip"   price="$4.2k" image={travelPic2}/>
    <TravelCard place="Europe " duration="28 Days Trip"   price="$15k"  image={travelPic3}/>
          
    <TravelCard place="Switzerland" duration="1 Month Trip" price="$223.00k" image={travelPic4} />
    <TravelCard place="Malaysia" duration="15 Days Trip"   price="$34.55k" image={travelPic5}/>
    <TravelCard place="Iceland" duration="5 Days Trip"   price="$234.78k"  image={travelPic6}/>
    {/* <Text/>
      <Header/>
      <Food/>
      <Footer/> */}
   </div>
    </>
  )
}

export default App
