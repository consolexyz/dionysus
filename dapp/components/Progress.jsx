import { useState, useEffect } from "react";
import abi from "../constants/abi.json";
import { useAccount } from "wagmi";
import { useMoralis, useWeb3Contract } from "react-moralis";

function Progress() {
  const { Moralis, isWeb3Enabled } = useMoralis();
  const { isDisconnected, isConnected } = useAccount();
  const [progressValue, setprogressValue] = useState(0);
  //contract call to get weiRaised
  const { runContractFunction: getweiAmount } = useWeb3Contract({
    abi: abi,
    contractAddress: process.env.NEXT_PUBLIC_CONTRACT_ADDRESS,
    functionName: "weiRaised",
    params: {},
  });
  const getPercent = (totalValue, raisedValue) => {
    return ((100 * raisedValue) / totalValue).toFixed(2);
  };

  useEffect(() => {
    if (isConnected) {
      const getweiRaised = async () => {
        if (isWeb3Enabled) {
          const weiAmount = (await getweiAmount()).toString();
          const valueRaised = Moralis.Units.FromWei(weiAmount);
          setprogressValue(getPercent(200, valueRaised));
        } else {
          console.log("connect your wallet");
        }
      };
      getweiRaised();
    }
  }, [isConnected, getweiAmount, isWeb3Enabled, Moralis.Units]);
  //function to caculate progress percent

  return (
    <>
      <div className="progress-container">
        <label htmlFor="progress" className="progress-label">
          <p>{`${progressValue}% Raised`}</p>
        </label>
        <progress
          value={progressValue}
          max="100"
          className="amount-progress"
          id="progress"
        >
          {progressValue}
        </progress>
      </div>
    </>
  );
}

export default Progress;
