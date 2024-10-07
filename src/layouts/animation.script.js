var body = document.getElementById("starshine"),
  template = document.getElementsByClassName("template shine")[0],
  stars = 300,
  sparkle = 3;

var size = "small";
var createStar = function () {
  let star = template.cloneNode(true);

  star.removeAttribute("id");
  Object.assign(star.style, {
    top: Math.random() * 100 + "%",
    left: Math.random() * 100 + "%",
    webkitAnimationDelay: Math.random() * sparkle + "s",
    mozAnimationDelay: Math.random() * sparkle + "s",
  });
  star.classList.add(size);
  body.appendChild(star);
};

for (var i = 0; i < stars; i++) {
  if (i % 2 === 0) {
    size = "small";
  } else if (i % 3 === 0) {
    size = "medium";
  } else {
    size = "large";
  }

  createStar();
}
