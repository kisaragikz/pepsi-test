import "./vdotest.css";
import vdo from './vdo/vdo.mp4'
const vdotest = () => {
  return (
    <div className="testvdo-container">
        <div className="testvdo-box">
            <video className="testvdo" loop muted controls playsInline poster="vdo/poster.png">
                <source src={vdo}></source>
            </video>
        </div>
        
        {/* <div className="testoverlay">
            <div className="testcontent">
                <h1>สดชื่นทุกสัมผัส</h1>
                <p>ดื่มด่ำความเย็นของรสชาติใหม่</p>
                <button className="testbutton">สั่งซื้อเลย</button>
            </div>
        </div> */}
    </div>
  );
};
export default vdotest;
