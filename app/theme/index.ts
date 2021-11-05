import { createTheme, Theme } from "@material-ui/core/styles";

import sizes from "./sizes";
import typography from "./typography";
import overrides from "./overrides";

const theme: Theme = createTheme({
  spacing: (number: number) =>
    `${(sizes.lineHeight / sizes.fontSize / 4) * number}rem`,
  typography,
  overrides,
});

export default theme;
