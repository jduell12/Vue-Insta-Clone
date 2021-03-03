module.exports = {
  extends: ["plugin:vue/vue3-recommended"],
  rules: {
    indent: ["warn", 4],
    "vue/html-indent": [
      "warn",
      4,
      {
        attribute: 1,
        baseIndent: 1,
        closeBracket: 0,
        alignAttributesVertically: true,
        ignores: [],
      },
    ],
  },
};
