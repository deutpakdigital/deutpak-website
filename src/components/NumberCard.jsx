"use client";

const NumberCard = i => <>
    <div className="col-xl-4 col-md-6 d-flex flex-column" style={{
    marginBottom: "30px"
  }}>
      <div className="single-service-inner single-app-service-inner-2 w-100 flex-grow-1 mb-0">
        <span>{i.number}</span>
        <div className="thumb">
          {i.image ? <img src={i.image} alt="img" /> : ""}
        </div>
        <h4>{i.title}</h4>
        <p>{i.details}</p>
      </div>
    </div>
  </>;

export { NumberCard };
