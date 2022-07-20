import React, { useCallback, useState } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import "./App.css";
import particlesOptions from "./particles.json";

function App() {
  const particlesInit = useCallback((main) => {
    loadFull(main);
  }, []);

  return (
    <>
      <section id="header">
        <div className="container header">
            <h1>Hello</h1>
        </div>
      </section>
      <section>
        <Particles options={particlesOptions} init={particlesInit} />
      </section>
    </>
  );
}

export default App;
