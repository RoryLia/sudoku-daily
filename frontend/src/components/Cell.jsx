//Cada cédula do Sudoku
import React from "react";

function Cell({ row, col }) {
    return(
        <div className="cell">
            {`${row}-${col}`}
        </div>
    );
}

export default Cell;