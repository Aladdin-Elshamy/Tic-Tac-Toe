import { SquareContext } from "@/context/SquareContextProvider";
import Square from "./Square";
import { useContext } from "react";
import usePrevState from "@/hooks/usePrevState";
import { defineWinner } from "@/utilities/utilities.functions";
import PlayerScore from "./PlayerScore";
import WinnerBadge from "./WinnerBadge";
export default function Board() {
    const {
        xIsNext,
        setXIsNext,
        isNewGame,
        setSquares,
        setIsNewGame,
        winner,
        setWinner,
    } = useContext(SquareContext);
    const [prevState] = usePrevState(winner);
    const realWinner = defineWinner(winner, prevState);
    const squareElements = Array.from({ length: 9 }, (_, i) => (
        <Square key={i} index={i} />
    ));
    const lastWinner = realWinner || window.localStorage.getItem("lastWinner");
    console.log(lastWinner);
    return (
        <div className="container w-[90vw] bg-boardBg md:max-w-xl rounded-3xl p-6 sm:p-16">
            <div className="grid grid-cols-3 gap-4 pb-14">
                <PlayerScore score={winner.playerX} player="X" />
                <PlayerScore score={winner.draw} player="Draw" />
                <PlayerScore score={winner.playerO} player="O" />
            </div>
            <div className="grid rows-auto gap-4 grid-cols-3">
                {squareElements}
            </div>
            <div className={`${isNewGame ? "hidden" : "block"}`}>
                {xIsNext ? (
                    <p className="bg-playerX text-center py-4 text-xl font-bold rounded-md mt-14">
                        X turn
                    </p>
                ) : (
                    <p className="bg-playerO text-center py-4 text-xl font-bold rounded-md mt-14">
                        O turn
                    </p>
                )}
            </div>
            {lastWinner && isNewGame && <WinnerBadge winner={lastWinner} />}
            <div
                className={`${
                    isNewGame ? "block" : "hidden"
                } w-[104%] relative -left-[2%] -right-[2%]`}
            >
                <button
                    className="bg-[#f4f6f5] w-full text-center py-4 text-xl font-semibold rounded-md mt-14"
                    onClick={() => {
                        setSquares(Array(9).fill(null));
                        setIsNewGame(false);
                        setXIsNext(true);
                    }}
                >
                    New Game
                </button>
                <button
                    className="text-[#f4f6f5] bg-[#F4F6F54A] w-full text-center py-4 text-xl font-semibold rounded-md mt-2"
                    onClick={() => {
                        setWinner({
                            playerX: 0,
                            playerO: 0,
                            draw: 0,
                        });
                        setSquares(Array(9).fill(null));
                        setIsNewGame(false);
                        setXIsNext(true);
                    }}
                >
                    Reset Score
                </button>
            </div>
        </div>
    );
}
