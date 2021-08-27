import meditateGirl from "../images/meditate-girl.png";

function Main() {
  return (
    <main className="main" id="main">
      <section className="landing">
        <div className="landing__text-wrapper">
          <h1 className="landing__heading">
            <span>Your task. Done by data and web development students.</span>
            <span className="heading_span">For free!</span>
          </h1>
          <button className="cta cta_theme_dark landing__button">
            Delegate a task
          </button>
        </div>

        <img
          src={`${meditateGirl}`}
          alt="meditation-girl"
          className="landing__image"
        />
        <button className="cta cta_theme_dark landing__button show__device-mobile">
          Delegate a task
        </button>
      </section>
    </main>
  );
}

export default Main;