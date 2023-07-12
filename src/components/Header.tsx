import { useAppContext } from "@/contexts/AppContext";
import styles from "@/styles/Header.module.css";
import Image from "next/image";
import Cart from "./Cart";
import { useState } from "react";

const Header = () => {
  const [isCartOpen, setCartOpen] = useState(false);
  const { selectedGames } = useAppContext();
  return (
    <>
      <Cart open={isCartOpen} onClose={() => setCartOpen(false)} />
      <header className={`${styles.header} container`}>
        <h1>Kazix Bet</h1>
        <div
          className={styles.cart}
          onClick={() => selectedGames.length > 0 && setCartOpen(true)}
        >
          <Image
            src="/img/voucher.png"
            height={40}
            width={40}
            alt="Football icon"
          />

          {selectedGames.length > 0 && <span>{selectedGames.length}</span>}
        </div>
      </header>
    </>
  );
};

export default Header;
