import './featured.css'
import schweppesbr from './img/schweppes.png'
import pepsibr from './img/pepsi.png'
import spritebr from './img/sprite.png'
import fantabr from './img/fanta.png'
import danone from './img/danone.png'
import mondelez from './img/mondelez.png'
import icons from './img/Icons.png'

const Featured = ()=>{
    return(
        <div className='featured-container'>
            <div className='featured-top'>
                <div className='boxf schweppes'>
                    <img className='fimg' src={icons} width="35%"></img>
                    <p>Key Visuals</p>
                </div>
                <div className='boxf schweppes'>
                    <img className='fimg' src={icons} width="50%"></img>
                    <p>Package Design</p>
                </div>
                <div className='boxf pepsi'>
                    <img className='fimg' src={icons} width="35%"></img>
                    <p>Motion & Animation (2D/3D)</p>
                </div>
                <div className='boxf sprite'>
                    <img className='fimg' src={icons} width="35%"></img>
                    <p>Storyboard</p>
                </div>
                <div className='boxf fanta'>
                    <img className='fimg' src={icons} width="35%"></img>
                    <p>OOH & Print Media</p>
                </div>
            </div>
            <div className='featured-bot'>
                <div className='boxf schweppes'>
                    <img className='fimg' src={icons} width="35%"></img>
                    <p>POSM Design</p>
                </div>
                <div className='boxf schweppes'>
                    <img className='fimg' src={icons} width="50%"></img>
                    <p>Retouching</p>
                </div>
                <div className='boxf pepsi'>
                    <img className='fimg' src={icons} width="35%"></img>
                    <p>Brand Identity</p>
                </div>
                <div className='boxf sprite'>
                    <img className='fimg' src={icons} width="35%"></img>
                    <p>Display & Experience Design</p>
                </div>
                <div className='boxf fanta'>
                    <img className='fimg' src={icons} width="35%"></img>
                    <p>AI-Powered Visuals</p>
                </div>
            </div>
            
        </div>  
    )
}
export default Featured