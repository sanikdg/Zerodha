import React from "react";

function Universe() {
  return (
    <div className="container mt-5">
      {/* Heading */}
      <div className="row text-center">
        <div className="col-12">
          <h1>The Zerodha Universe</h1>
          <p className="text-muted">
            Extend your trading and investment experience even further with our
            partner platforms
          </p>
        </div>
      </div>

      {/* Universe items */}
      <div className="row text-center">
        <div className="col-4 p-3 mt-5 d-flex flex-column align-items-center">
          <img
            src="media/images/smallcaseLogo.png"
            alt="Smallcase"
            className="img-fluid"
            style={{ maxHeight: "60px" }}
          />
          <p className="text-muted mt-2">Thematic investment platform</p>
        </div>

        <div className="col-4 p-3 mt-5 d-flex flex-column align-items-center">
          <img
            src="media/images/streakLogo.png"
            alt="Streak"
            className="img-fluid"
            style={{ maxHeight: "60px" }}
          />
          <p className="text-muted mt-2">Algo and strategy platform</p>
        </div>

        <div className="col-4 p-3 mt-5 d-flex flex-column align-items-center">
          <img
            src="media/images/sensibullLogo.svg"
            alt="Sensibull"
            className="img-fluid"
            style={{ maxHeight: "60px" }}
          />
          <p className="text-muted mt-2">Options trading platform</p>
        </div>

        <div className="col-4 p-3 mt-5 d-flex flex-column align-items-center">
          <img
            src="media/images/zerodhaFundhouse.png"
            alt="Zerodha Fund House"
            className="img-fluid"
            style={{ maxHeight: "60px" }}
          />
          <p className="text-muted mt-2">Asset management</p>
        </div>

        <div className="col-4 p-3 mt-5 d-flex flex-column align-items-center">
          <img
            src="media/images/goldenpiLogo.png"
            alt="GoldenPi"
            className="img-fluid"
            style={{ maxHeight: "60px" }}
          />
          <p className="text-muted mt-2">Bond trading platform</p>
        </div>

        <div className="col-4 p-3 mt-5 d-flex flex-column align-items-center">
          <img
            src="media/images/dittoLogo.png"
            alt="Ditto"
            className="img-fluid"
            style={{ maxHeight: "60px" }}
          />
          <p className="text-muted mt-2">Insurance advisory</p>
        </div>
      </div>

      {/* CTA */}
      <div className="row text-center mt-5">
        <button
          className="btn btn-primary fs-5"
          style={{ width: "200px", margin: "0 auto" }}
        >
          Signup Now
        </button>
      </div>
    </div>
  );
}

export default Universe;
