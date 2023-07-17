// import { useState } from "react";
// import styled from "styled-components";

// export const Block = () => {
//   let { isOpen, setIsOpen } = useState(false);

//   const onClickBlock = () => {
//     setIsOpen(true);
//     console.log(isOpen);
//   };

//   if (!isOpen) {
//     return <SButton onClink={onClickBlock}></SButton>;
//   }
//   console.log("isOpenがtrue");

//   return;
// };

// const SButton = styled.button`
//   background-color: grey;
//   width: 50px;
//   height: 50px;
//   &:hover {
//     cursor: pointer;
//   }
// `;

import React from "react";

interface BlockProps {
  key: number;
  onClick: () => void;
  // isOpen: boolean;
  disabled?: boolean;
  state: "hide" | "empty" | number;
}

export const Block: React.FC<BlockProps> = (props) => {
  switch (props.state) {
    case "hide":
      return (
        <button
          style={{
            width: "50px",
            height: "50px",
            display: "inline-block",
            backgroundColor: "grey",
          }}
          onClick={props.onClick}
          disabled={false}
        />
      );
    case "empty":
      return (
        <button
          style={{
            width: "50px",
            height: "50px",
            backgroundColor: "white",
          }}
          onClick={props.onClick}
          disabled={true}
        />
      );
    default:
  }
};
