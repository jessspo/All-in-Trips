import { useState } from "react";
import { css } from "@emotion/react";
// import ClipLoader from "react-spinners/ClipLoader";
import BeatLoader from "react-spinners/BeatLoader";
import { BarLoader } from "react-spinners";

// Can be a string as well. Need to ensure each key-value pair ends with ;
const override = css`
  display: block;
  margin: 0 auto;
  border-color: white;
`;

function Spinner() {
  let [loading] = useState(true);
  let [color, setColor] = useState();

  return (
    <div className="sweet-loading">

      <BeatLoader color="#ffff" loading={loading} css={override} size={30} />
      <br />
    </div>
  );
}

export default Spinner;