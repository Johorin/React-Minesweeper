import React, { useState } from "react";
import { Block } from "../atoms/button/Block";
import { HIDE, BOMBVISIBLE, BOMBHIDDEN, EMPTY, AROUNDBOMSNUM, AROUNDBOMSNUMHIDDEN } from "../../global"

type boardType = "hide" | "empty" | "aroundBomsNum";

const tileNum: number = 5;
const [board, setBoard] = useState<boardType[][]>([
  ["hide", "hide", "hide", "hide", "hide"],
  ["hide", "hide", "hide", "hide", "hide"],
  ["hide", "hide", "hide", "hide", "hide"],
  ["hide", "hide", "hide", "hide", "hide"],
  ["hide", "hide", "hide", "hide", "hide"],
]);
const setBoms = () => {
  let newBoard = [...board];
  let hideCount: number = 0;
  let bomsNum = Math.floor((tileNum * tileNum) / 2); // 設置する爆弾の数
  // const hideState: string = "hide";
  const hideState: string = "hide";

  // // ブロックが連鎖的に削除された後、消されずに残ったブロックを数える
  // for (let i = 0; i < tileNum; i++) {
  //   for (let j = 0; j < tileNum; j++) {
  //     if (newBoard[i][j] === hideState) {
  //       hideCount++;
  //     }
  //   }
  // }
  // bomsNum = Math.floor((3 / 4) * hideCount);
  newBoard.fill('bombHidden')
};

const arrayShuffle = (array: Array<string>) => {
  for (let i = array.length - 1; 0 < i; i--) {
    // 0〜(i+1)の範囲で値を取得
    let r = Math.floor(Math.random() * (i + 1));

    // 要素の並び替えを実行
    let tmp = array[i];
    array[i] = array[r];
    array[r] = tmp;
  }
  return array;
};

export const Board: React.FC = () => {
  const [isStartedGame, setIsStartedGame] = useState(false);

  setBoms();

  /**
   * 一番初めにクリックすると爆弾がないブロックがまとめて開かれる処理
   */
  const firstHandleClick = (row: number, col: number) => {
    let newBoard = [...board];

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
