import MosaicA from "../../assets/img/mosaic_A.png";
import { useNavigate } from "react-router-dom";

function SpectacularEvent() {
  const navigate = useNavigate();
  return (
    <>
      {/* Event 1 */}

      <div
        className="Events--container transition"
        onClick={() => navigate("/Events/Corporate")}
      >
        <section>
          <h2 className="Events--mainSentence">Te creamos los eventos más</h2>
          <h2 className="Events--mainSentence blue">espectaculares</h2>
        </section>

        <section>
          <img
            src={MosaicA}
            alt="Real Madrid Champions"
            className="Events--mosaic--a"
          />
        </section>
      </div>
    </>
  );
}
export default SpectacularEvent;
