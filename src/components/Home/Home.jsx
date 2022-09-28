import React from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <section
      className="Home--container"
      onClick={() => navigate("/Events/Spectacular")}
    >
      <div alt="background" id="background-photo"></div>

      <p className="Home--sentence">
        Haz <b>scroll</b> para vivir la experiencia o descubre nuestros
        <b> proyectos</b> en el menú.
      </p>
    </section>
  );
}
export default Home;
