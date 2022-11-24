import Banner from "../components/Banner";
import aboutData from "../__mocks__/aboutData";
import Collapse from "../components/Collapse";
import imageBanner from "../assets/img/aboutbannerDesktop.png";

const About = () => {
  const content = (title) => {
    switch (title) {
      case "fiability":
        return aboutData.fiability;
      case "respect":
        return aboutData.respect;
      case "service":
        return aboutData.service;
      case "sécurity":
        return aboutData.security;
      default:
        console.log("default");
        break;
    }
  };

  return (
    <main className="main">
      <section className="about">
        <Banner image={imageBanner} />
        <div className="about__dropdowns">
          <Collapse title="fiabilité" content={content("fiability")} />
          <Collapse title="respect" content={content("respect")} />
          <Collapse title="service" content={content("service")} />
          <Collapse title="sécurité" content={content("sécurity")} />
        </div>
      </section>
    </main>
  );
};

export default About;