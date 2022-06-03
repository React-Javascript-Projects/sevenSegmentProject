import React from "react";
import "./SevenSegment.css";
import Segment from "./Segment";
const SevenSegment = (props) => {
  let theNumber = [
    "s1,s2,s3,s5,s6,s7",
    "s3,s6",
    "s1,s3,s4,s5,s7",
    "s1,s3,s4,s6,s7",
    "s2,s3,s4,s6",
    "s1,s2,s4,s6,s7",
    "s1,s2,s4,s5,s6,s7",
    "s1,s3,s6",
    "s1,s2,s3,s4,s5,s6,s7",
    "s1,s3,s2,s4,s6,s7",
  ];

  const segments = ["s1", "s2", "s3", "s4", "s5", "s6", "s7"];
  return (
    <div className="grid">
      {segments.map((segment, index) => (
        <Segment
          key={segment}
          HL={index === 0 || index === 3 || index === 6 ? "true" : "false"}
          style={{
            gridArea: segment,
            backgroundColor:
              theNumber[props.num].split(",").find((s) => s === segment) &&
              "red",
          }}
        />
      ))}
    </div>
  );
};

export default SevenSegment;
