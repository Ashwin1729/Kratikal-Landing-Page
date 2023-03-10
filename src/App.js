import React from "react";
import Initial from "./components/Initial";
import Overview from "./components/Overview";
import WhyKratikal from "./components/WhyKratikal";
import WhyChooseUs from "./components/WhyChooseUs";
import Benefits from "./components/Benefits";
import CodeReview from "./components/CodeReview";
import Faq from "./components/Faq";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Initial />
      <Overview />
      <WhyKratikal />
      <WhyChooseUs />
      <Benefits />
      <CodeReview />
      <Faq />
      <Footer />
    </div>
  );
}

export default App;
