import profile from "../assets/IMG_20260429_103015.jpg";

const Hero = () => {
  return (
    <section style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "40px", flexWrap: "wrap" }}>
      
      {/* TEXT */}
      <div>
        <h1 style={{ fontSize: "40px" }}>Hi, I'm Laxmi Mangal 👋</h1>
        <h3 style={{ color: "#9ca3af" }}>Aspiring Developer</h3>
        <p style={{ maxWidth: "400px" }}>
          I build clean and simple web applications with modern technologies.
        </p>
      </div>

      {/* IMAGE */}
      <img 
        src={profile} 
        alt="Laxmi" 
        style={{
          width: "200px",
          height: "200px",
          borderRadius: "50%",
          objectFit: "cover",
          border: "3px solid #fff",
          filter: "grayscale(100%)"
        }}
      />

    </section>
  );
};

export default Hero;