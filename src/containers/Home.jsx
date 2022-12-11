
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
                <a href="https://www.twitch.tv/el_hasky" className="socials">
                    <img className="twitch" src={twitch} alt="TWITCH" />
                    <h3 className="socialName" href="">TWITCH</h3>
                </a>
                <a href="https://www.instagram.com/_el_hasky/" className="socials">
                    <img className="twitch" src={insta} alt="INSTAGRAM" />
                    <h3 className="socialName" href="">INSTAGRAM</h3>
                </a>
                <a href="https://www.youtube.com/channel/UCThB3b_r8PfhsRklureaykw" className="socials">
                    <img className="twitch" src={youtube} alt="YOUTUBE" />
                    <h3 className="socialName" href="">YOUTUBE</h3>
                </a>
                <a href="https://www.tiktok.com/@el_hasky" className="socials">
                    <img className="twitch" src={tik} alt="TIK TOK" />
                    <h3 className="socialName" href="">TIK TOK</h3>
                </a>
                <a href="https://twitter.com/EL_HASKY" className="socials">
                    <img className="twitch" src={twitter} alt="TWITTER" />
                    <h3 className="socialName" href="">TWITTER</h3>
                </a>
            </div>
            <div className="video">
                <iframe width="800" height="450" src="https://www.youtube.com/embed/bBvicg_yeJc?autoplay=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
            </div>
        </div>
    )

}

export default Home