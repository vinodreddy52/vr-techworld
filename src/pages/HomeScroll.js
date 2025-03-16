import React from "react";

const Home = () => {
  return (
    <div>
      <section id="home" style={{ height: "100vh", padding: "100px 20px", background: "#f4f4f4" }}>
        <h2>Home Section</h2>
      </section>
      <section id="about" style={{ height: "100vh", padding: "100px 20px", background: "#ddd" }}>
        <h2>About Section</h2>
      </section>
      <section id="pricing" style={{ height: "100vh", padding: "100px 20px", background: "#bbb" }}>
        <h2>Pricing Section</h2>
      </section>
      <section id="contact" style={{ height: "100vh", padding: "100px 20px", background: "#999" }}>
        <h2>Contact Section</h2>
      </section>
    </div>
  );
};

export default Home;
