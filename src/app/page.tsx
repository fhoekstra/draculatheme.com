"use client";

import "./index.scss";

import AppsList from "src/components/appsList";
import Hero from "src/components/hero";
import { fadeInUp } from "src/lib/framerMotion";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <>
      <Hero />
      <motion.div
        variants={fadeInUp}
        initial="initial"
        animate="animate"
        exit="exit"
        className="page-wrapper home"
      >
        <aside className="sidebar"></aside>
        <div className="sections-wrapper">
          <section id="discover">
            <div className="title-wrapper">
              <h3 className="title s">Discover</h3>
              <h4 className="title t">
                Browse the ever-growing selection of apps supported!
              </h4>
            </div>
            <AppsList />
          </section>
        </div>
      </motion.div>
    </>
  );
};

export default Home;
