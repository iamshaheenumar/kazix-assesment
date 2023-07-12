import { ReactNode, createContext, useContext, useState } from "react";

interface IGame {
  id: string;
  result: string;
  team1: string;
  team2: string;
  pt: number;
}

interface AppContextData {
  selectedGames: IGame[];
  onGameClick: (game: IGame) => void;
}

interface AppProviderProps {
  children: ReactNode;
}

const AppContext = createContext<AppContextData>({
  selectedGames: [],
  onGameClick: () => "",
});

const AppProvider = ({ children }: AppProviderProps) => {
  const [selectedGames, setSelectedGames] = useState<IGame[]>([]);

  const handleGameClick = (game: IGame) => {
    const chosenGame = selectedGames.find((item) => item.id === game.id);

    if (chosenGame && chosenGame.result === game.result) {
      setSelectedGames((prev) => prev.filter((item) => item.id !== game.id));
    } else if (chosenGame && chosenGame.result !== game.result) {
      setSelectedGames((prev) => [
        ...prev.filter((item) => item.id !== game.id),
        game,
      ]);
    } else {
      setSelectedGames((prev) => [...prev, game]);
    }
  };

  return (
    <AppContext.Provider
      value={{ selectedGames, onGameClick: handleGameClick }}
    >
      {children}
    </AppContext.Provider>
  );
};

const useAppContext = () => useContext(AppContext);

export { AppProvider, useAppContext };
