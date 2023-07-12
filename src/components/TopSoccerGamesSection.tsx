import Image from "next/image";
import TopGameCard from "./TopGameCard";
import styles from "@/styles/TopSoccerGamesSection.module.css";
import { TOP_GAMES } from "@/constants";

const TopSoccerGamesSection = () => {
    return (
        <section className={`container ${styles.topGamesSection}`}>
            <div className={styles.topGamesHeader}>
                <h2>Top Soccer Games</h2>

                <div className={styles.topGamesHeaderActions}>
                    <button className={styles.buttonPrimary}>View All</button>
                    <button className={styles.buttonIcon}>
                        <Image
                            src="/img/cheveron-left.png"
                            height={11.53}
                            width={7.44}
                            alt="Left icon"
                        />
                    </button>
                    <button className={styles.buttonIcon}>
                        <Image
                            src="/img/cheveron-right.png"
                            height={11.53}
                            width={7.44}
                            alt="Right icon"
                        />
                    </button>
                </div>
            </div>

            <div className={styles.topGamesList}>
                {TOP_GAMES.map((game, i) => (
                    <TopGameCard key={game.gameId} {...game} />
                ))}
            </div>
        </section>
    );
};

export default TopSoccerGamesSection;
