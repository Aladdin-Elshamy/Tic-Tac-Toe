import PropTypes from "prop-types";
import { useContext } from "react";
import { SquareContext } from "../context/SquareContextProvider";
export default function Square({ index }) {
    const { squares, handleClick } = useContext(SquareContext);
    return (
        <button
            className={`${
                squares[index] == "X" ? "text-playerX" : "text-playerO"
            } h-20 font-fredoka font-extrabold text-6xl flex items-center justify-center bg-squareBg rounded-md`}
            onClick={() => handleClick(index)}
        >
            {squares[index]}
        </button>
    );
}

Square.propTypes = {
    index: PropTypes.number.isRequired,
};
