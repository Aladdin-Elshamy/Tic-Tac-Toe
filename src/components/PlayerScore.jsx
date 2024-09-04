import PropTypes from "prop-types";

export default function PlayerScore({ score, player }) {
    return (
        <div
            className={`${
                player == "X"
                    ? "bg-playerX"
                    : player == "O"
                    ? "bg-playerO"
                    : "bg-[#BCDBF9]"
            } flex uppercase p-2 items-center justify-center rounded-md`}
        >
            <div className="flex flex-col text-center font-medium gap-[5px] ">
                {player == "Draw" ? (
                    <span className="text-sm">Draw</span>
                ) : (
                    <span className="text-sm">player {player}</span>
                )}

                <span className="font-semibold text-3xl">{score}</span>
            </div>
        </div>
    );
}

PlayerScore.propTypes = {
    score: PropTypes.number.isRequired,
    player: PropTypes.string.isRequired,
};
