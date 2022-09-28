import { useNavigate } from "react-router-dom";
import React from "react";

function IntroSOMOS() {
  const navigate = useNavigate();

  return (
    <div
      className="Intro--SOMOS--background"
      onClick={() => {
        navigate(`/Home`, { state: true });
      }}
    >
      <p className="IntroSOMOS--sentence">
        Somos todo lo que está a punto de suceder
      </p>
    </div>
  );
}
export default IntroSOMOS;
