module.exports = {
  // syntax: "postcss-scss",
  plugins: {
    autoprefixer: {},
    "postcss-pxtorem": {
      rootValue: 20,
      propList: ["*"],
      selectorBlackList: [/^(?!\.van-)/i]
    }
  }
};
