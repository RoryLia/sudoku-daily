import React from "react";
import Board from "./components/Board";

function App() {
    return(
        <div className="app">
            <Header />
            <h1>Grand Sudoku</h1>
            <Board />
        </div>
    );
}

export default App;