import { ConnectButton } from "@rainbow-me/rainbowkit";
import home from "../assets/home.png"

export default function Home(){
    return(
    <div className="home">
        <div className="left-section">
        <h1>
        Unleash the Power<br/>of Your Words -<br/>Where Ideas Come<br/>To Life!
        </h1>
        <p>
        Experience a revolutionary platform that empowers writers to publish, trade, and review their work with ease.
        </p>
        <ConnectButton/>
        <div className="analytics"></div>
        </div>
        <div className="right-section">
            <img className="home-img" src={home}></img>
        </div>
    </div>)

}