/** @type {import('prettier').Config} */
module.exports = {
  semi: false,
  trailingComma: "es5",
  singleQuote: false,
  tabWidth: 2,
  useTabs: false,
  plugins: [require.resolve("prettier-plugin-tailwindcss")],
}
