import { useAppContext } from "@/contexts/AppContext";
import styles from "@/styles/Cart.module.css";

interface CartProps {
  open: boolean;
  onClose: () => void;
}

const Cart = (props: CartProps) => {
  const { selectedGames } = useAppContext();

  const sum = selectedGames.reduce((accumulator, object) => {
    return accumulator + object.pt;
  }, 0);

  if (!props.open) return "";
  return (
    <div className={styles.backdrop}>
      <div className={styles.modal}>
        <div className={styles.modalHeader}>
          <h2>Vouchers</h2>
          <span onClick={props.onClose}>close</span>
        </div>
        <div className={styles.modalBody}>
          {selectedGames.map((game) => (
            <div className={styles.cartItem}>
              <div>
                <h6>
                  {game.result === "1" && `${game.team1} Win`}
                  {game.result === "2" && `${game.team2} Win`}
                  {game.result === "D" && "Draw"}
                </h6>
                <span className={styles.team}>
                  {game.team1} - {game.team2}
                </span>
              </div>

              <div>{game.pt}</div>
            </div>
          ))}
          <hr />
          <div className={styles.cartItem}>
            <div>
              <h6>Total</h6>
            </div>
            <span>{sum.toFixed(2)}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
