import './footer.css'
import { Link } from "react-router-dom";
const Footer = () => {
    return (
        <div className='footer-container'>
            <div className='footer-header'>
                <h2>KUMI SHOP</h2>
            </div>
            <Link to="/contact" style={{textDecoration: 'none'}}><div className='hovercolor'>
                Contact us
            </div></Link>
            <div className='footer-centerbottom'>
                <div className='copyright'>
                © 2022 KUMI SHOP, Inc. All Rights Reserved.
                </div>
            </div>
            {/* <div>
                <a href=""
                    className="youtube">
                    <img className='icon' src='socials_icon/youtube.png'></img>
                    <img className='icon-hover' src='socials_icon/youtube_hover.png'></img>
                </a>
                <a href=""
                    className="facebook">
                    <img className='icon' src='socials_icon/facebook.png'></img>
                    <img className='icon-hover' src='socials_icon/facebook_hover.png'></img>
                </a>
                <a href="" 
                    className="twitter">
                    <img className='icon' src='socials_icon/twitter.png'></img>
                    <img className='icon-hover' src='socials_icon/twitter_hover.png'></img>
                </a>
                <a href=""
                    className="instagram">
                    <img className='icon' src='socials_icon/instagram.png'></img>
                    <img className='icon-hover' src='socials_icon/instagram_hover.png'></img>
                </a>
                <a href=""
                    className="discord">
                    <img className='icon' src='socials_icon/discord.png'></img>
                    <img className='icon-hover' src='socials_icon/discord_hover.png'></img>
                </a>
                <a href=""
                    className="tiktok">
                    <img className='icon' src='socials_icon/tiktok.png'></img>
                    <img className='icon-hover' src='socials_icon/tiktok_hover.png'></img>
                </a>
            </div> */}
        </div>
    )
}

export default Footer