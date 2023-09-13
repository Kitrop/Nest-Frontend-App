"use client"

import styles from '../styles/main.module.css'
import HeaderLinks from "@/components/HeaderLinks";
import {getCookie, setCookie} from "cookies-next";
import {CookiesProvider} from "react-cookie";


const Header= () => {

  return (
    <CookiesProvider>
      <header className={styles.header}>
        <HeaderLinks />
      </header>
    </CookiesProvider>
  );
};

export default Header;