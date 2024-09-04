import PropTypes from "prop-types";
export default function WinnerBadge({ winner }) {
    return (
        <div className="relative w-96 mx-auto sm:w-full z-10 font-inter text-white">
            <svg
                width="69"
                height="77"
                viewBox="0 0 69 77"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="absolute top-1 -left-8 z-0 w-12"
            >
                <path
                    d="M68.5 72V5.5C68.5 2.73858 66.2614 0.5 63.5 0.5H5.68353C1.21323 0.5 -1.0104 5.91831 2.17118 9.05856L28.4181 34.9646C30.3925 36.9134 30.4029 40.0971 28.4413 42.0587L2.03553 68.4645C-1.11429 71.6143 1.11654 77 5.57107 77H63.5C66.2614 77 68.5 74.7614 68.5 72Z"
                    fill="#035B21"
                />
            </svg>

            <p className="bg-[#099C3B] relative z-10 text-center py-4 text-md sm:text-xl font-bold rounded-md mt-14">
                {winner === "X"
                    ? "Game over. X wins"
                    : winner === "O"
                    ? "Game over. O wins"
                    : "Game over. Draw"}
            </p>
            <svg
                width="68"
                height="77"
                viewBox="0 0 68 77"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="absolute top-1 -right-8 z-0 w-12"
            >
                <path
                    d="M0 71.5V5C0 2.23858 2.23858 0 5 0H62.8165C67.2868 0 69.5104 5.41831 66.3288 8.55856L40.0819 34.4646C38.1075 36.4134 38.0971 39.5971 40.0587 41.5587L66.4645 67.9645C69.6143 71.1143 67.3835 76.5 62.9289 76.5H5C2.23858 76.5 0 74.2614 0 71.5Z"
                    fill="#035B21"
                />
            </svg>
        </div>
    );
}

WinnerBadge.propTypes = {
    winner: PropTypes.string.isRequired,
};
