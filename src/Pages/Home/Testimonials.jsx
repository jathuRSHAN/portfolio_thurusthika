import data from "../../data/index.json";

export default function Testimonial() {
  return (
    <section className="testimonial--section" id="testimonial">
      <div className="portfolio--container-box">
        <div className="portfolio--container">
          {/* <p className="sub--title">Clients Feedback</p> */}
          <h2 className="sections--heading">Reference</h2>
        </div>
      </div>
      <div className="portfolio--section--container">
        {data?.testimonial?.map((item, index) => (
          <div key={index} className="testimonial--section--card">

            <div className="testimonial--section--card--author--detail">
              <a href={item.url}> <img src={item.src} alt="Avatar" /></a>
              <div>
                <a href={item.url}><p className="text-md testimonial--author--name">
                  {item.author_name}
                </p></a>
                <p className="text-md testimonial--author--designation">
                  {item.author_designation}
                </p>
              </div>
            </div>
            <p className="text-md">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
