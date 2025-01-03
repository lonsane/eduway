import React from "react";
import styles from "./App.module.css";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import { Projects } from "./components/Projects/Projects";
import { Contact } from "./components/Contact/Contact";
import { About } from "./components/About/About";

function App() {
  return (
    <div className={styles.App}>
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
