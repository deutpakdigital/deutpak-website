"use client";

const ServiceIntro = t => <>
    <section className="about-area pd-top-110 text-center text-lg-start">
      <div className="container">
        <div className="row justify-content-center justify-content-lg-start">
          <div className="col-xl-6 col-lg-6 col-md-8 align-self-center">
            <div className="thumb text-center">
              <img src={t.image} alt="img" />
            </div>
          </div>
          <div className="col-xl-6 col-lg-6 align-self-center">
            <div className="section-title style-2 mb-lg-0">
              <h4 className="sub-title">{t.title}</h4>
              <h2 className="title">{t.subtitle}</h2>
              {t.children}
            </div>
          </div>
        </div>
      </div>
    </section>
  </>;

export { ServiceIntro };
