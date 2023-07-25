// import React, { useState } from "react";
// import { Block } from "../atoms/button/Block";

// export const Board: React.FC = () => {
//   const [board, setBoard] = useState<boolean[][]>([
//     [true, true, true, true, true],
//     [true, true, true, true, true],
//     [true, true, true, true, true],
//     [true, true, true, true, true],
//     [true, true, true, true, true]
//   ]);

//   const handleClick = (row: number, col: number) => {
//     const newBoard = [...board];

//     newBoard[row][col] = false; // クリックされたブロックを開ける
//     // if (row > 0) newBoard[row - 1][col] = false; // 上のブロック
//     // if (row < board.length - 1) newBoard[row + 1][col] = false; // 下のブロック
//     // if (col > 0) newBoard[row][col - 1] = false; // 左のブロック
//     // if (col < board[row].length - 1) newBoard[row][col + 1] = false; // 右のブロック

//     // fix
//     // クリックされたブロックの上のブロックを全部開ける
//     // クリックされたブロックの右のブロックを全部開ける
//     // クリックされたブロックの下のブロックを全部開ける
//     // クリックされたブロックの左のブロックを全部開ける

//     setBoard(newBoard);
//     console.log(board);
//   };

//   return (
//     <div>
//       {board.map((row, rowIndex) => (
//         <div
//           key={rowIndex}
//           style={{
//             height: "50px"
//           }}
//         >
//           {row.map((block, colIndex) => (
//             <Block
//               key={colIndex}
//               onClick={() => handleClick(rowIndex, colIndex)}
//             />
//           ))}
//         </div>
//       ))}
//     </div>
//   );
// };

import React, { useState } from "react";
import { Block } from "../atoms/button/Block";
import { blockStates } from "../../global/consts/reducer";

// TODO: なんかblockStatesの名前空間が見つからないと怒られる
// type boardType = blockStates.DEFAULT | blockStates.EMPTY_VISIBLE;
type boardType =
  | "default"
  | "emptyVisible"
  | "emptyHidden"
  | "bombVisible"
  | "bombHidden"
  | "aroundBomsNumVisible"
  | "aroundBomsNumHidden";

const tileNum: number = 5;
const boardRowArray = new Array<boardType>(tileNum).fill("default");

/**
 * 爆弾を設置する
 */
const setBoms = () => {
  // const hideState: string = blockStates.DEFAULT;
  // const emptyHidden: string = blockStates.EMPTY_HIDDEN;
  // const bombHidden: string = blockStates.BOMB_HIDDEN;
  // const aroundBomsNumHidden: string = blockStates.AROUND_BOMS_NUM_HIDDEN;
  // // let newBoard: boardType[][] = [...board];
  // let bomsNum = Math.floor((tileNum * tileNum) / 2); // 設置する爆弾の数
  // let setBombsCount = 0; // 設置された爆弾をカウント
  // // 指定された数の爆弾を盤面の前から並べる
  // outer: for (let i = 0; i < tileNum; i++) {
  //   for (let j = 0; j < tileNum; j++) {
  //     // 指定された数の爆弾が設置し終わったら終了
  //     if (setBombsCount === bomsNum) break outer;
  //     newBoard[i][j] = "bombHidden"; // 爆弾設置
  //     setBombsCount++;
  //   }
  // }
  // console.log(newBoard);
  // return;
  // newBoard = shuffleBoard（newBoard）；
  // newBoard.fill("bombHidden");
};

/**
 * 盤面をシャッフルする
 */
const shuffleBoard = (array: Array<boardType[]>) => {
  // // 二次元配列盤面を一度一次元に直す
  // let linerArray: Array<boardType> = [];
  // for (let i = 0; i < tileNum; i++) {
  //   // linerArray += array[i];
  //   linerArray = [...linerArray, ...array[i]];
  // }
  // for (let i = linerArray.length - 1; i >= 0; i--) {
  //   // 0〜(i+1)の範囲で値を取得（Math.random()は0〜1未満をランダムに取得する）
  //   let r = Math.floor(Math.random() * (i + 1));
  //   // 要素の並び替えを実行
  //   let tmp = linerArray[i];
  //   linerArray[i] = linerArray[r];
  //   linerArray[r] = tmp;
  // }
  // return array;
};

export const Board: React.FC = () => {
  const [isStartedGame, setIsStartedGame] = useState(false);
  // デフォルトのゲーム盤
  const [board, setBoard] = useState<Array<boardType[]>>(() => {
    return new Array<Array<boardType>>(tileNum).fill(boardRowArray);
  });

  // 初めに爆弾をセット
  // setBoms();

  /**
   * 一番初めにクリックした時の処理
   */
  const firstHandleClick = (row: number, col: number) => {
    const hideState = blockStates.DEFAULT;
    const emptyHidden = blockStates.EMPTY_HIDDEN;

    const newBoard: boardType[][] = board.map((rowArray) =>
      rowArray.map((tile) => hideState)
    );
    // 下の書き方ではboardの二次元要素以降については参照渡しになってしまうので注意
    // let newBoard: boardType[][] = [...board];

    // クリックされたブロックの上下左右のブロックを全部開ける
    for (let i = 0; i < tileNum; i++) {
      for (let j = 0; j < tileNum; j++) {
        if (i === row || j === col) {
          newBoard[i][j] = emptyHidden;
        }
      }
    }

    // 開いた後の盤面をセットし、ゲーム開始フラグセット
    setBoard(newBoard);
    setIsStartedGame(true);
  };

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
              // console.log("isStartedGame");
              return (
                <Block
                  key={colIndex}
                  onClick={() => secondHandleClick(rowIndex, colIndex)}
                  state={block}
                />
              );
            }
            // console.log("isNotStartedGame");
            // console.log(board);
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
