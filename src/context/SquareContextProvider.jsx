import PropTypes from "prop-types";
import { createContext, useState } from "react";
import useLocalStorage from "@/hooks/useLocalStorage";
import { calculateWinner } from "@/utilities/utilities.functions";
export const SquareContext = createContext();
export default function SquareContextProvider({ children }) {
    const [squares, setSquares] = useLocalStorage(
        "squares",
        Array(9).fill(null)
    );
    const [xIsNext, setXIsNext] = useLocalStorage("xIsNext", true);
    const [isNewGame, setIsNewGame] = useState(true);

    const [winner, setWinner] = useLocalStorage("winners", {
        playerX: 0,
        playerO: 0,
        draw: 0,
    });
    function resetGame() {
        setIsNewGame(true);
        setXIsNext(true);
    }
    function handleClick(i) {
        const newSquares = squares.slice();

        if (calculateWinner(newSquares) || !newSquares.includes(null)) {
            return;
        }
        newSquares[i] = xIsNext ? "X" : "O";
        if (calculateWinner(newSquares) && !newSquares.includes(null)) {
            setSquares(newSquares);
            setXIsNext(!xIsNext);
            return;
        } else if (!newSquares.includes(null) && !calculateWinner(newSquares)) {
            setWinner({ ...winner, draw: winner.draw + 1 });
            resetGame();
        } else if (calculateWinner(newSquares) === "X") {
            setWinner({ ...winner, playerX: winner.playerX + 1 });
            resetGame();
        } else if (calculateWinner(newSquares) === "O") {
            setWinner({ ...winner, playerO: winner.playerO + 1 });
            resetGame();
        }

        setSquares(newSquares);
        setXIsNext(!xIsNext);
    }

    return (
        <SquareContext.Provider
            value={{
                squares,
                setSquares,
                handleClick,
                xIsNext,
                setXIsNext,
                isNewGame,
                setIsNewGame,
                winner,
                setWinner,
            }}
        >
            {children}
        </SquareContext.Provider>
    );
}

SquareContextProvider.propTypes = {
    children: PropTypes.node.isRequired,
};
