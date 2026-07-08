// By Oskar Wickström
// Licensed under the MIT License (https://github.com/owickstrom/the-proportional-web/blob/main/LICENSE.md)

window.addEventListener("load", () => {
  const asides = [...document.querySelectorAll("aside")];
  asides.forEach((aside, i) => {
    const anchor = aside.previousElementSibling;
    const name = `--paragraph-before-aside-${i}`;
    anchor.style.anchorName = name;
    aside.style.positionAnchor = name;
  });
});
