import Modal from "../../components/Modal";
import Header from "../../components/Header";
import NoSsr from "../../components/NoSSR";
import Countdown, { zeroPad } from "react-countdown";
import { useBalance, useAccount } from "wagmi";
import { React, useState, useEffect } from "react";
import { useMoralis } from "react-moralis";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import Progress from "../../components/Progress";

function Presale() {
  //states to change the ui depending on wallet connection
  const [openModal, setopenModal] = useState(false);
  const [amount, setAmount] = useState("");
  const { enableWeb3, isWeb3Enabled, web3EnableError, deactivateWeb3 } =
    useMoralis();
  const { address, isConnecting, isDisconnected, isConnected } = useAccount();
  const { data } = useBalance({ addressOrName: address });

  //on countdown complete event
  const Completionist = () => <span>Presale Over</span>;
  //functions to handle the countdown timer
  const renderer = ({ days, hours, minutes, completed }) => {
    if (completed) {
      return <Completionist />;
    } else {
      return (
        <div className="countdown-container">
          <div className="countdown countdown_days">
            <span>{zeroPad(days)}</span>
            <p>Days</p>
          </div>
          <div className="countdown countdown_hours">
            <span>{zeroPad(hours)}</span>
            <p>Hours</p>
          </div>
          <div className="countdown countdown_minutes">
            <span>{zeroPad(minutes)}</span>
            <p>Minutes</p>
          </div>
        </div>
      );
    }
  };

  //useeffect to stop scroll when modal is open
  useEffect(() => {
    if (openModal) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "scroll";
    }
  }, [openModal]);
  //useeffect to enable web3 once wallet is connected
  useEffect(() => {
    if (isConnected) {

      enableWeb3();
    } else if (isDisconnected) {
      deactivateWeb3();
    }
  }, [isConnected, isDisconnected]);

  //handling the confirm buy
  const confirmBuy = (e) => {
    e.preventDefault();
     setopenModal(true);
  };

  //formatting you-get value
  let youGet = amount / 0.00002;

  return (
    <>
      {/* wrapped the entire presale page in no server side rendering to prevent hydration error */}
      <NoSsr>
        <Header />
        <section className="presale" id="presale">
          <ToastContainer position="top-center" />
          <div className="presale-container">
            <div className="presale-title">
              <h2>PRESALE</h2>
            </div>
            <div className="presale-info">
              <div className="presale-info_price">
                <p>$Dion price:</p>
                <h4>$0.03</h4>
              </div>
              <div className="presale-info_rounds">
                <p>Round ends in:</p>
                <h4>
                  <Countdown
                    date={new Date("2023-01-10T12:00:00-06:00")}
                    renderer={renderer}
                  />
                </h4>
              </div>
              <div className="presale-info_supply">
                <p>Presale Supply:</p>
                <h4>10,000,000</h4>
              </div>
            </div>
            {/* {isWeb3Enabled ? <Progress /> : ""} */}
            <p className="minmax">
              Minimum of 0.04eth and Maximum of 1eth per wallet
            </p>
            <div className="presale-form_container">
              <form action="#" className="presale-form" onSubmit={confirmBuy}>
                <div className="input-group">
                  <label htmlFor="amount">
                    Balance ~
                    <span id="balance">
                      {data?.formatted || "ETH"} {data?.symbol}
                    </span>
                  </label>
                  <input
                    // min={0.04}
                    // max={1}
                    id="amount"
                    onChange={(e) => {
                      setAmount(e.target.value);
                    }}
                    value={amount}
                    type="number"
                    required
                    autoComplete="off"
                    placeholder="Enter Amount in ETH"
                    disabled={isConnecting || isDisconnected}
                  />
                </div>
                {isDisconnected ? (
                  <div className="connect p-btn">
                    <ConnectButton />
                  </div>
                ) : (
                  <button type="submit" className="presale-btn" >
                    Buy
                  </button>
                )}
                {openModal && (
                  <Modal
                    setopenModal={setopenModal}
                    amount={amount}
                    dion={youGet}
                  />
                )}
              </form>
            </div>
          </div>
        </section>
      </NoSsr>
    </>
  );
}

export default Presale;
