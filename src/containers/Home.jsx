
import "./Home.css"
import insta from "../assets/instagram.png"
import tik from "../assets/tiktok.png"
import twitch from "../assets/twitch.png"
import youtube from "../assets/youtube.png"
import twitter from "../assets/twitter.png"

const Home = () => {

    return (
        <div className='homeBox'>
            <div className="socialsBox">
                <div className="socials">
                    <img className="twitch" src={twitch} alt="" srcset="" />
                    <a href="">TWITCH</a>
                </div>
                <div className="socials">
                    <img className="twitch" src={insta} alt="" srcset="" />
                    <a href="">INSTAGRAM</a>
                </div>
                <div className="socials">
                    <img src="" alt="" srcset="" />
                    <a href="">YOUTUBE</a>
                </div>
                <div className="socials">
                    <img src="" alt="" srcset="" />
                    <a href="">TIK TOK</a>
                </div>
                <div className="socials">
                    <img src="" alt="" srcset="" />
                    <a href="">TWITTER</a>
                </div>
            </div>
            <div className="video">
            <iframe width="600" height="340" src="https://www.youtube.com/embed/bBvicg_yeJc?autoplay=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
        </div>
    )

}

export default Home