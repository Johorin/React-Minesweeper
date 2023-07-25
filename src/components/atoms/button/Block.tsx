// import React from "react";

// interface BlockProps {
//   key: number;
//   onClick: () => void;
// }

// export const Block: React.FC<BlockProps> = (props) => {
//   const { onClick } = props;
//   return (
//     <button
//       style={{
//         width: "50px",
//         height: "50px",
//         display: "inline-block",
//         backgroundColor: "grey"
//       }}
//       onClick={onClick}
//     />
//   );
// };

import React from "react";
import { blockStates } from "../../../global/consts/reducer";

interface BlockProps {
  key: number;
  onClick: () => void;
  state:
    | "default"
    | "emptyVisible"
    | "emptyHidden"
    | "bombVisible"
    | "bombHidden"
    | "aroundBomsNumVisible"
    | "aroundBomsNumHidden";
  disabled?: boolean;
}

export const Block: React.FC<BlockProps> = (props) => {
  switch (props.state) {
    case "default":
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
    case "emptyHidden":
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
    case "aroundBomsNumHidden":
    default:
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
  }
};
