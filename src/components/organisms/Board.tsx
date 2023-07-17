// import { Block } from "../atoms/button/Block";
// import styled from "styled-components";
// // import { Router } from "./router/Router";

// // タイルフィールドを生成するメソッド
// const generateField = () => {
//   const tileNum = 5;
//   let blocks = [...Array(10)];
//   let rowBlocks = [];

//   for (let i = 0; i < tileNum; i++) {
//     rowBlocks.push(
//       <SLi>
//         <Block />
//       </SLi>
//     );
//   }
//   for (let j = 0; j < tileNum; j++) {
//     blocks.push(<SUl>{rowBlocks}</SUl>);
//   }
//   return blocks;
// };

// export default function App() {
//   // return <Router />;
//   return <div className="field-wrapper">{generateField()}</div>;
// }

// const SLi = styled.li`
//   list-style: none;
// `;

// const SUl = styled.ul`
//   display: flex;
//   margin: 0px;
//   height: 50px;
// `;

import React, { useState } from "react";
import { Block } from "../atoms/button/Block";

type boardType = "hide" | "empty" | "aroundBomsNum";

export const Board: React.FC = () => {
  const tileNum: number = 5;
  const [board, setBoard] = useState<boardType[][]>([
    ["hide", "hide", "hide", "hide", "hide"],
    ["hide", "hide", "hide", "hide", "hide"],
    ["hide", "hide", "hide", "hide", "hide"],
    ["hide", "hide", "hide", "hide", "hide"],
    ["hide", "hide", "hide", "hide", "hide"],
  ]);
  const [isStartedGame, setIsStartedGame] = useState(false);

  /**
   * 一番初めにクリックすると爆弾がないブロックがまとめて開かれる処理
   */
  const firstHandleClick = (row: number, col: number) => {
    const newBoard = [...board];

    // クリックされたブロックの上下左右のブロックを全部開ける
    for (let i = 0; i < tileNum; i++) {
      for (let j = 0; j < tileNum; j++) {
        if (i === row || j === col) {
          newBoard[i][j] = "empty";
        }
      }
    }
    setBoard(newBoard);
    setIsStartedGame(true);
    setBoms();
  };

  const setBoms = () => {};

  const secondHandleClick = (row: number, col: number) => {};

  return (
    <div>
      {board.map((row, rowIndex) => (
        <div
          key={rowIndex}
          style={{
            height: "50px",
          }}
        >
          {row.map((block, colIndex) => {
            if (isStartedGame) {
              return (
                <Block
                  key={colIndex}
                  onClick={() => secondHandleClick(rowIndex, colIndex)}
                  state={block}
                />
              );
            }
            return (
              <Block
                key={colIndex}
                onClick={() => firstHandleClick(rowIndex, colIndex)}
                state={block}
              />
            );
          })}
        </div>
      ))}
    </div>
  );
};
