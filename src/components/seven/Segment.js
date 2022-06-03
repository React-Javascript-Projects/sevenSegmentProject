import styled from "styled-components";

const Segment = styled.div`
  width: ${(props) => (props.HL === "true" ? "70%" : "95%")};
  height: ${(props) => (props.HL === "true" ? "55%" : "170%")};
  clip-path: ${(props) =>
    props.HL === "true"
      ? "polygon(86% 0, 100% 50%, 86% 100%, 14% 100%, 0% 50%, 14% 0%)"
      : "polygon(50% 0, 100% 14%, 100% 86%, 50% 100%, 0 86%, 0 14%);"};
  background-color: rgb(46, 45, 45);
  margin-top: ${(props) => (props.HL === "true" ? "0%" : "-99%")};
  margin-left: ${(props) => (props.HL === "true" ? "14%" : "0%")};
`;

export default Segment;
