import styled from "styled-components";
import Knife from "../app/Knife";
import sizes from "../app/theme/sizes";

export const PageWrap = styled.div`
  font-size: ${Knife.getFontSize(sizes.fontSize, sizes.scaleFactor, 0)}px;
  line-height: ${Knife.getLineHeight(
    sizes.fontSize,
    sizes.lineHeight,
    sizes.scaleFactor,
    0
  )}px;
  min-height: 100vh;
  padding: ${sizes.space(2)};
  text-align: left;
  max-width: 40rem;

  code {
    display: block;
    padding: ${sizes.space(1)};
    font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
      DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
  }
`;
