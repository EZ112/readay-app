import * as Screen from ".";

const ROUTES = [
  {
    name: "StyleNav",
    Component: Screen.StyleNav,
    option: { title: "Style Guides" },
  },
  {
    name: "StyleButton",
    Component: Screen.StyleButton,
    option: { title: "Button" },
  },
  {
    name: "StyleColor",
    Component: Screen.StyleColor,
    option: { title: "Color" },
  },
  {
    name: "StyleTypography",
    Component: Screen.StyleTypography,
    option: { title: "Typography" },
  },
];

export { ROUTES };
