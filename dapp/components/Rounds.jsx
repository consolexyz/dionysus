import Link from "next/link";
import React from "react";

function Rounds() {
  return (
    <section className="rounds">
      <div className="rounds-container">
        <div className="rounds-title">
          <h2>
            Steps to participate in the <span>$DION</span> presale
          </h2>
        </div>
        <div className="rounds_steps">
          <div className="steps">
            <h3>Step 1</h3>
            <p>
              Bridge ETH to Arbitrium to participate in the presale rounds.
              Minimum of 0.04ETH and maximum of 1ETH
            </p>
          </div>
          <div className="steps">
            <h3>Step 2</h3>
            <p>
              Deposit your ETH via the website and wait for it to be confirmed
              on chain. The contract accepts deposit until presale allocation is
              finished.
            </p>
          </div>
          <div className="steps">
            <h3>Step 3</h3>
            <p>
              The contract will send your $CAIFU token to your wallet after your
              deposit is confirmed.
            </p>
          </div>
        </div>
        <div className="rounds-btn btn">
          <Link href="/presale">Go to presale</Link>
        </div>
      </div>
    </section>
  );
}

export default Rounds;
