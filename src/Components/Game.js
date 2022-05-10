import { Component } from "react";
import Square from "./Square";
import "./Game.css";

const board = ["X", null, null, null, "O", "O", null, null, "X"];

class Game extends Component {
  constructor(){
    super();
    this.state  = {board : ["X", null, null, null, "O", "O", null, null, "X"]}

  } 
  render() {
    const squares = this.state.board.map((val, ind) => <Square key={ind} value={val} />);
console.log(squares)
    return (
      <div className="tic-tac-toe-game">
        <h1>Tic Tac Toe</h1>
        <div className="Board">{squares}</div>
      </div>
    );
  }
}

export default Game;
