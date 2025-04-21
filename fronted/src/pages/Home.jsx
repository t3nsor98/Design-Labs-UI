import React from "react";
import Hero from "../components/landing/Hero";
import Features from "../components/landing/Features";
import ComponentPreview from "../components/landing/ComponentPreview";
import CallToAction from "../components/landing/CallToAction";

const Home = () => {
  return (
    <>
      <Hero />
      <Features />
      <ComponentPreview />
      <CallToAction />
    </>
  );
};

export default Home;
