import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "../public/assets/logo.png";
import { ConnectButton } from "@rainbow-me/rainbowkit";

function Header() {
  const [openMenu, setopenMenu] = useState(false);
  //handling the hamburger menu
  const handleMenu = () => {
    setopenMenu(!openMenu);
  };
  const menuItems = (
    <div className="menu_items">
      <Link href="/presale">
        <a>Presale</a>
      </Link>
      <div className="connect">
        <ConnectButton />
      </div>
    </div>
  );
  return (
    <>
      <div className="navbar-container">
        <nav>
          <div className="nav-container">
            <div className="nav-logo">
              <Link href="/">
               Dionysus
              </Link>
            </div>
            <div className="menu">{menuItems}</div>
            <button
              className={openMenu ? "hamburger active-hamburger" : "hamburger"}
              onClick={handleMenu}
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </nav>
        {openMenu && <div className="nav-dropdown">{menuItems}</div>}
      </div>
    </>
  );
}

export default Header;
