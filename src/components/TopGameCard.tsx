import Image from "next/image";
import styles from "@/styles/TopGameCard.module.css";
import { useAppContext } from "@/contexts/AppContext";

interface TopGameCardProps {
  gameId: string;
  tournament: string;
  team1: string;
  team2: string;
  time: string;
  team1WinPt: number;
  team2WinPt: number;
  drawPt: number;
}

const TopGameCard = (props: TopGameCardProps) => {
  const { selectedGames, onGameClick } = useAppContext();
  const selectedOption = selectedGames.find((game) => game.id === props.gameId);

  const handleGameClick = (choice: string, pt: number) => {
    onGameClick({
      id: props.gameId,
      team1: props.team1,
      team2: props.team2,
      result: choice,
      pt,
    });
  };

  return (
    <div className={styles.topGameCard}>
      <div className={styles.topGameCardHeader}>
        <div className={styles.topGameCardTournament}>
          <Image
            src="/img/football-icon.png"
            height={18}
            width={18}
            alt="Football icon"
          />
          <h6>{props.tournament}</h6>
        </div>

        <Image
          src="/img/live-icon.png"
          height={14}
          width={14}
          alt="Live icon"
        />
      </div>
      <div className={styles.topGameCardTime}>
        <span>{props.time}</span>
        <Image
          src="/img/P-icon.png"
          height={16}
          width={16}
          alt="Football Jersey icon"
        />
        <Image
          src="/img/sports-icon-5.png"
          height={16}
          width={16}
          alt="graph icon"
        />
      </div>
      <div className={styles.topGameCardTeams}>
        <div className={styles.topGameCardTeamName}>
          <Image
            src="/img/team-logo-1.png"
            height={15}
            width={15}
            alt="Team logo"
          />

          <p>{props.team1}</p>
        </div>
        <div className={styles.topGameCardTeamName}>
          <Image
            src="/img/team-logo-2.png"
            height={15}
            width={15}
            alt="Team logo"
          />
          <p>{props.team2}</p>
        </div>
      </div>
      <p className={styles.topGameOdds}>1/2</p>
      <div className={styles.topGameBettingOptions}>
        <div
          className={
            selectedOption?.result === "1" ? styles.topGameSelected : ""
          }
          onClick={() => handleGameClick("1", props.team1WinPt)}
        >
          <span>1</span>
          <span>{props.team1WinPt}</span>
        </div>
        <div
          className={
            selectedOption?.result === "D" ? styles.topGameSelected : ""
          }
          onClick={() => handleGameClick("D", props.drawPt)}
        >
          <span>Draw</span>
          <span>{props.drawPt}</span>
        </div>
        <div
          className={
            selectedOption?.result === "2" ? styles.topGameSelected : ""
          }
          onClick={() => handleGameClick("2", props.team2WinPt)}
        >
          <span>2</span>
          <span>{props.team2WinPt}</span>
        </div>
        <div className={styles.downButton}>
          <Image
            src="/img/cheveron-down.png"
            height={14}
            width={14}
            alt="Down icon"
          />
        </div>
      </div>
    </div>
  );
};

export default TopGameCard;
