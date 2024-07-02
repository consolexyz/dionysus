
import Link from "next/link";
import { ConnectButton } from "@rainbow-me/rainbowkit";

function Header() {
  return (
    <>

      <nav>
        <div className="nav-container">
          <div className="nav-logo">
            <Link href="/">
              Dionysus
            </Link>
          </div>
          <div className="connect">
            <ConnectButton />
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;
