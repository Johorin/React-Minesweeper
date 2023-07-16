// import { Block } from "./components/atoms/button/Block";
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

import React, { FC } from "react";
import { Board } from "./components/organisms/Board";

export const App: FC = () => {
  return <Board />;
};
