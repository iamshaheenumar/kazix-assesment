import Image from "next/image";
import styles from "@/styles/HightlightGameCard.module.css";
import { useAppContext } from "@/contexts/AppContext";
import { toast } from "react-hot-toast";

interface HighlightGameCardProps {
  id: string;
  competetion: string[];
  team1: string;
  team2: string;
  team1Goals: number;
  team2Goals: number;
  team1WinPt: number;
  team2WinPt: number;
  drawPt: number;
}

const HighlightGameCard = (props: HighlightGameCardProps) => {
  const { selectedGames, onGameClick } = useAppContext();

  const handleSelection = (choice: string, pt: number) => {
    onGameClick({
      id: props.id,
      team1: props.team1,
      team2: props.team2,
      result: choice,
      pt,
    });
  };

  const selectedOption = selectedGames.find((game) => game.id === props.id);
  return (
    <div className={styles.highlightGameCard}>
      <div className={styles.highlightGameComp}>
        <Image
          src="/img/icon-1.png"
          height={16}
          width={16}
          alt="Competetion icon"
        />
        <ul>
          {props.competetion.map((d, i) => (
            <li key={i}>{d}</li>
          ))}
        </ul>
      </div>

      <div className={styles.highlightGameTeams}>
        <span>{props.team1}</span>
        <span>-</span>
        <span>{props.team2}</span>
      </div>

      <div className={styles.highlightGameScore}>
        <span>{props.team1Goals}</span>
        <span>{props.team2Goals}</span>
      </div>

      <div className={styles.highlightGameBettingOptions}>
        <div
          className={
            selectedOption?.result === "1"
              ? styles.highlightGameBetSelected
              : ""
          }
          onClick={() => handleSelection("1", props.team1WinPt)}
        >
          <span>1</span>
          <span>{props.team1WinPt}</span>
        </div>
        <div
          className={
            selectedOption?.result === "D"
              ? styles.highlightGameBetSelected
              : ""
          }
          onClick={() => handleSelection("D", props.drawPt)}
        >
          <span>Draw</span>
          <span>{props.drawPt}</span>
        </div>
        <div
          className={
            selectedOption?.result === "2"
              ? styles.highlightGameBetSelected
              : ""
          }
          onClick={() => handleSelection("2", props.team2WinPt)}
        >
          <span>2</span>
          <span>{props.team2WinPt}</span>
        </div>
      </div>
    </div>
  );
};

export default HighlightGameCard;
