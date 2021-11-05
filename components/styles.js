import styled from "styled-components";
import sizes from "../app/theme/sizes";
import Knife from "../app/Knife";

export const Wrap = styled.div`
  margin-bottom: ${Knife.getLineHeightInRems(
    sizes.fontSize,
    sizes.lineHeight,
    sizes.scaleFactor,
    6
  )};
`;
