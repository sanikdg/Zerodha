import React from "react";

function Stats() {
  return (
    <div className="container p-3">
      <div className="row p-5">
        <div className="col-6 p-5">
          <h1 className="fs-2 mb-5">Trust with confidence</h1>

          <h2 className="fs-4">Customer-first always</h2>
          <p className="text-muted">
            That's why 1.3+ crore customers trust Zerodha with ₹3.5+ lakh crores
            worth of equity investments.
          </p>

          <h2 className="fs-4">No spam or gimmicks</h2>
          <p className="text-muted">
            No gimmicks, spam, "gamification", or annoying push notifications.
          </p>

          <h2 className="fs-4">The Zerodha universe</h2>
          <p className="text-muted">
            A complete ecosystem of fintech services tailored to your needs.
          </p>

          <h2 className="fs-4">Do better with money</h2>
          <p className="text-muted">
            Tools that help you invest responsibly and confidently.
          </p>
        </div>

        <div className="col-6 p-5">
          <img
            src="media/images/ecosystem.png"
            alt="Zerodha fintech ecosystem"
            style={{ width: "90%" }}
          />

          <div className="text-center">
            <button className="btn btn-link mx-5 p-0">
              Explore our products{" "}
              <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
            </button>

            <button className="btn btn-link p-0">
              Try Kite demo{" "}
              <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Stats;
