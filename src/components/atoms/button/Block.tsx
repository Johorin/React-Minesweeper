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
}

export const Block: React.FC<BlockProps> = (props) => {
  const { onClick } = props;
  return (
    <button
      style={{
        width: "50px",
        height: "50px",
        display: "inline-block",
        backgroundColor: "grey"
      }}
      onClick={onClick}
    />
  );
};
