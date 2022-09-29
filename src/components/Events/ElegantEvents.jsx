import MosaicC from "../../assets/img/mosaic_C.png";
import { useNavigate } from "react-router-dom";
import BottomArrow from "../BottomArrow/BottomArrow";

function SpectacularEvent() {
  return (
    <>
      {/* Event 3  */}
      <div className="Events--container">
        <section id="n3">
          <h2 className="Events--mainSentence">Te creamos los eventos más</h2>
          <h2 className="Events--mainSentence blue">elegantes</h2>
        </section>

        <section>
          <img src={MosaicC} alt="Corner Loewe" className="Events--mosaic--a" />
        </section>
      </div>

      <BottomArrow />
    </>
  );
}
export default SpectacularEvent;
