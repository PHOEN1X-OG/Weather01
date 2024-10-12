import React from "react"
import Svg, { Path } from "react-native-svg"

const Locationicon = () => {
    return(
  <Svg
    width={30}
    height={30}
    fill="none"
    viewBox="0 0 24 24"
  >
    <Path
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12 21c3.5-3.6 7-6.824 7-10.8C19 6.224 15.866 3 12 3s-7 3.224-7 7.2 3.5 7.2 7 10.8Z"
    />
    <Path
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
    />
  </Svg>
);
};
export default Locationicon;
