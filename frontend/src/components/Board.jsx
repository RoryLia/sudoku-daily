//Tabuleiro 9x9
import React from "react";
import Cell from "./Cell";
import "../styles/board.css";

function Board(){
    const rows = Array.from({ length : 9 }, (_, i) => i);
    const cols = Array.from({ length : 9 }, (_, i) => i);

    return(
        <div className="board">
            {rows.map((r) =>
                cols.map((c) => <Cell key={`${r}-${c}`} row={r} col={c} />)
            )}
        </div>
    );
}

export default Board;