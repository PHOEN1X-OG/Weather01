import React from "react"
import Svg, { Path } from "react-native-svg"

const Temperatureicon = () => {
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
      d="M8 16a1 1 0 1 0 0 2 1 1 0 0 0 0-2Zm0 0 .007-4M8 17l.007.007M20 5a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm-8 12a4 4 0 1 1-7-2.646V6a3 3 0 0 1 6 0v8.354c.622.705 1 1.631 1 2.646Z"
    />
  </Svg>
);
}
export default Temperatureicon;
