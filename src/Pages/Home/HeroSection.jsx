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
            Bachelor of the Science of Engineering Honours Specialised in Electrical and Electronics Engineering
            <br /> University of Jaffna
          </p>
        </div>
        <div className="hero--section--button">
          <a href="https://www.linkedin.com/in/thurusthika-nesalingam-8a2524143/" target="_blank"><button className="btn btn-primary">Get In Touch</button> </a>
          <a href="https://drive.google.com/file/d/1vWwMkcRViPoP1DM242josPHY39tVkVYx/view?usp=sharing" target="_blank"><button className="btn btn-primary"> Download CV</button></a>
        </div>

      </div>

    </section>
  );
}
