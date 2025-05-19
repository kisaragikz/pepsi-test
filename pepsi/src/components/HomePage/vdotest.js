import "./vdotest.css";
import vdo from './vdo/vdo.mp4'
const vdotest = () => {
  return (
    <div className="testvdo-container">
        <video className="testvdo" loop muted controls playsInline="vdo/poster.png">
            <source src={vdo}></source>
        </video>
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
