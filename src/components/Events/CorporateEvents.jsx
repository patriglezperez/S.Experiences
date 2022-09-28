import MosaicB from "../../assets/img/mosaic_B.png";
import { useNavigate } from "react-router-dom";

function CorporateEvent() {
  const navigate = useNavigate();
  return (
    <>
      {/* Event 2 */}

      <div
        className="Events--container"
        onClick={() => navigate("/Events/Elegant")}
      >
        <section>
          <h2 className="Events--mainSentence">Te creamos los eventos más</h2>
          <h2 className="Events--mainSentence blue">corporativos</h2>
          <p className="Events--proyects">Ir a proyectos</p>
        </section>

        <section>
          <img src={MosaicB} alt="Santander" className="Events--mosaic--a" />
        </section>
      </div>
    </>
  );
}
export default CorporateEvent;