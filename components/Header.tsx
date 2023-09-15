"use client"

import styles from '../styles/main.module.css'
import HeaderLinks from "@/components/HeaderLinks";
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