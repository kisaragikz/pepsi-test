import "./VdoPage.css";
import vdo from './vdo/vdo.mp4'
const VdoPage = () => {
  return (
    <div className="vdo-container">
        <video className="vdo" autoPlay loop controls muted poster="vdo/poster.png">
            <source src={vdo}></source>
        </video>
    </div>
  );
};
export default VdoPage;
