import React from "react";
import Link from "next/link";

function Cta() {
  return (
    <>
      <div className="cta-container">
        <div className="cta-title">
          <h1>
          Dionysus
          </h1>
        </div>
        <div className="cta-text">
          <p>
            Only the selected few will enter into the casino on this day, are
            you one of them?
          </p>
        </div>
        <div className="cta-btn btn">
          <Link href="/presale">Enter App&#8594;</Link>
        </div>
      </div>
    </>
  );
}

export default Cta;
