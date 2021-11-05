class Knife {
  // Converts a px value to rems
  static convertToRemVal(baseInPx, val) {
    return val / baseInPx;
  }

  // Gets the font size in px for a certain place in the scale
  static getFontSize(baseFontSize, scaleFactor, scaleDegree) {
    if (!baseFontSize || !scaleFactor)
      throw new Error("invalid parameters specified");

    let newSize = baseFontSize;
    for (let i = 0; i < scaleDegree; i += 1) {
      newSize = newSize * scaleFactor;
    }
    return newSize;
  }

  // Gets the line height in px for a certain place in the scale
  static getLineHeight(baseFontSize, baseLineHeight, scaleFactor, scaleDegree) {
    if (!baseFontSize || !baseLineHeight || !scaleFactor)
      throw new Error("invalid parameters specified");

    const fontSize = Knife.getFontSize(baseFontSize, scaleFactor, scaleDegree);
    const lineHeightPX = baseLineHeight / 2;
    return Math.ceil(fontSize / lineHeightPX) * lineHeightPX;
  }

  // Gets the font size in rems for a certain place in the scale
  static getFontSizeInRems(baseFontSize, scaleFactor, scaleDegree) {
    if (!baseFontSize || !scaleFactor)
      throw new Error("invalid parameters specified");

    const px = Knife.getFontSize(baseFontSize, scaleFactor, scaleDegree);
    const rems = px / baseFontSize;
    return `${Math.round(rems * 1000) / 1000}rem`;
  }

  // Gets the line height in rems for a certain place in the scale
  static getLineHeightInRems(
    baseFontSize,
    baseLineHeight,
    scaleFactor,
    scaleDegree
  ) {
    if (!baseFontSize || !scaleFactor)
      throw new Error("invalid parameters specified");

    const px = Knife.getLineHeight(
      baseFontSize,
      baseLineHeight,
      scaleFactor,
      scaleDegree
    );

    const rems = Knife.convertToRemVal(baseFontSize, px);
    return `${Math.round(rems * 1000) / 1000}rem`;
  }

  // Gets the spacing number in px that can be multiplied for bigger sizes
  static getSpacing(baseFontSize, baseLineHeight, multiplier = 1) {
    if (!baseFontSize || !baseLineHeight)
      throw new Error("invalid parameters specified");

    return (baseLineHeight * multiplier) / baseFontSize;
  }

  // Gets the spacing number in rems that can be multiplied for bigger sizes
  static getSpacingInRems(baseFontSize, baseLineHeight, multiplier = 1) {
    return `${this.getSpacing(baseFontSize, baseLineHeight, multiplier)}rem`;
  }

  // Gets the font size and line height for a particular scale and a certain place in the scale
  static getTypeStyles(baseFontSize, baseLineHeight, scaleFactor, scaleDegree) {
    if (!baseFontSize || !baseLineHeight)
      throw new Error("invalid parameters specified");

    const fontSizeInRems = Knife.getFontSizeInRems(
      baseFontSize,
      scaleFactor,
      scaleDegree
    );
    const lineHeightInRems = Knife.getLineHeightInRems(
      baseFontSize,
      baseLineHeight,
      scaleFactor,
      scaleDegree
    );

    return {
      fontSize: fontSizeInRems,
      lineHeight: lineHeightInRems,
    };
  }
}

export default Knife;
