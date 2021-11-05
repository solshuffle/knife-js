import { Typography } from "@material-ui/core";
import Knife from "../app/Knife";
import sizes from "../app/theme/sizes";
import { Wrap } from "./styles";

// Sizes that are set to start with
const baseFontSize = sizes.fontSize;
const baseLineHeight = sizes.lineHeight;
const scaleFactor = sizes.scaleFactor;

// Knife functions
const convertToRemVal = Knife.convertToRemVal(25, baseFontSize);
const getFontSize = Knife.getFontSize(baseFontSize, scaleFactor, 2);
const getLineHeight = Knife.getLineHeight(
  baseFontSize,
  baseLineHeight,
  scaleFactor,
  2
);
const getFontSizeInRems = Knife.getFontSizeInRems(baseFontSize, scaleFactor, 2);
const getLineHeightInRems = Knife.getLineHeightInRems(
  baseFontSize,
  baseLineHeight,
  scaleFactor,
  2
);
const getSpacing = Knife.getSpacing(baseFontSize, baseLineHeight, 4);
const getSpacingInRems = Knife.getSpacingInRems(
  baseFontSize,
  baseLineHeight,
  4
);
const getTypeStyles = Knife.getTypeStyles(
  baseFontSize,
  baseLineHeight,
  scaleFactor,
  2
);

export const Example = () => (
  <>
    <Typography variant="h1" gutterBottom>
      Knife
    </Typography>

    <Wrap>
      <Typography variant="h3">Font variables</Typography>
      <Typography variant="body1">baseFontSize = {baseFontSize}</Typography>
      <Typography variant="body1">baseLineHeight = {baseLineHeight}</Typography>
      <Typography variant="body1">scaleFactor = {scaleFactor}</Typography>
    </Wrap>
    <Wrap>
      <Typography variant="h3">Knife function results</Typography>
      <Typography variant="body1">Convert to rem: {convertToRemVal}</Typography>
      <Typography variant="body1">Get font size: {getFontSize}</Typography>
      <Typography variant="body1">Get line height: {getLineHeight}</Typography>
      <Typography variant="body1">
        Get font size in rems: {getFontSizeInRems}
      </Typography>
      <Typography variant="body1">
        Get line height in rems: {getLineHeightInRems}
      </Typography>
      <Typography variant="body1">Get spacing: {getSpacing}</Typography>
      <Typography variant="body1">
        Get spacing in rems: {getSpacingInRems}
      </Typography>
      <Typography variant="body1">
        Get type styles:
        <li>font-size: {getTypeStyles.fontSize}</li>
        <li>
          line-height:
          {getTypeStyles.lineHeight}
        </li>
      </Typography>
    </Wrap>
  </>
);
