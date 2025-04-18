export default function HeroSection() {
  return (
    <section id="heroSection" className="hero--section">
      <div className="hero--section--img">
        <img src="./img/hero_img.png" alt="Hero Section" />
      </div>
      <div className="hero--section--content--box">
        <div className="hero--section--content">
          <p className="section--title">Hey, I'm THURUSTHIKA NESALINGAM</p>
          <h1 className="hero--section--title">
            <span className="hero--section-title--color">ELECTRICAL AND ELECTRONICS</span>{" "}
            <br />
            ENGINEER
          </h1>
          <p className="hero--section-description">
            Bachelor of the Science of Engineering honors Specialised in Electrical and Electronics Engineering
            <br /> University of Jaffna
          </p>
        </div>
        <div className="hero--section--button">
          <button className="btn btn-primary">Get In Touch</button>
          <button className="btn btn-primary"> Download CV</button>
        </div>

      </div>

    </section>
  );
}
