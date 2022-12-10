
import "./Home.css"
import insta from "../assets/instagram.png"
import tik from "../assets/tiktok.png"
import twitch from "../assets/twitch.png"
import youtube from "../assets/youtube.png"
import twitter from "../assets/twitter.png"

const Home = () => {

    return(
        <div className='homeBox'>
            <div className="socialsBox">
                <div className="socials">
                    <img className="twitch" src={twitch} alt="" srcset="" />
                    <h3>TWITCH</h3>
                </div>
                <div className="socials">
                <img className="twitch" src={insta} alt="" srcset="" />
                    <h3>TWITCH</h3>
                </div>
                <div className="socials">
                <img src="" alt="" srcset="" />
                    <h3>TWITCH</h3>
                </div>
                <div className="socials">
                <img src="" alt="" srcset="" />
                    <h3>TWITCH</h3>
                </div>
                <div className="socials">
                <img src="" alt="" srcset="" />
                    <h3>TWITCH</h3>
                </div>
            </div>
        </div>
    )

}

export default Home