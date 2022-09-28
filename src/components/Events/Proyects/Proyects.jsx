import { useLocation } from "react-router-dom";

function Proyects() {
  const location = useLocation().pathname;

  return (
    <>
      {location ===
      ("/Events/Spectacular" || "/Events/Corporate" || "/Events/Elegant") ? (
        <p className="Events--proyects">Ir a proyectos</p>
      ) : (
        <p></p>
      )}
    </>
  );
}
export default Proyects;
