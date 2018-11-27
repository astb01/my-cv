module.exports = {
  extends: "airbnb-base",
  parserOptions: {
    ecmaVersion: 2018
  },
  rules: {
    semi: ["error", "always"],
    quotes: ["error", "double"]
  },
  env: {
    commonjs: true,
    node: true,
    mocha: true
  },
  overrides: [
    {
      files: "*-spec.js",
      rules: {
        "no-unused-expressions": "off",
        quotes: "off"
      }
    }
  ]
};
