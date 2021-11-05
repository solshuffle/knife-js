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
  padding-left: 10%;
  text-align: left;
  max-width: 35rem;
  box-sizing: content-box;

  code {
    display: block;
    padding: ${sizes.space(1)};
    font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
      DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
  }
`;
