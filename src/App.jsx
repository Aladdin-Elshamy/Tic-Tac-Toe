import Board from "./components/Board";
import "./index.css";

function App() {
    return (
        <main className="min-h-screen flex items-center justify-center bg-screenBg relative">
            <h1 className="hidden lg:flex fixed text-9xl flex-col font-bold -left-4 -bottom-[75px]">
                <span className="relative z-10 top-14 text-playerO">tic.</span>
                <span className="relative z-30 text-playerX">tac.</span>
                <span className="relative z-10 bottom-14 text-playerO">
                    toe.
                </span>
            </h1>
            <div className="py-4">
                <Board />
            </div>
        </main>
    );
}

export default App;
