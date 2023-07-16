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

export const Board: React.FC = () => {
  const [board, setBoard] = useState<boolean[][]>([
    [true, true, true, true, true],
    [true, true, true, true, true],
    [true, true, true, true, true],
    [true, true, true, true, true],
    [true, true, true, true, true]
  ]);

  const handleClick = (row: number, col: number) => {
    const newBoard = [...board];

    newBoard[row][col] = false; // クリックされたブロックを開ける
    // if (row > 0) newBoard[row - 1][col] = false; // 上のブロック
    // if (row < board.length - 1) newBoard[row + 1][col] = false; // 下のブロック
    // if (col > 0) newBoard[row][col - 1] = false; // 左のブロック
    // if (col < board[row].length - 1) newBoard[row][col + 1] = false; // 右のブロック

    // fix
    // クリックされたブロックの上のブロックを全部開ける
    // クリックされたブロックの右のブロックを全部開ける
    // クリックされたブロックの下のブロックを全部開ける
    // クリックされたブロックの左のブロックを全部開ける

    setBoard(newBoard);
    console.log(board);
  };

  return (
    <div>
      {board.map((row, rowIndex) => (
        <div
          key={rowIndex}
          style={{
            height: "50px"
          }}
        >
          {row.map((block, colIndex) => (
            <Block
              key={colIndex}
              onClick={() => handleClick(rowIndex, colIndex)}
            />
          ))}
        </div>
      ))}
    </div>
  );
};
