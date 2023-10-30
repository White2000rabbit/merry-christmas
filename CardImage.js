'use strict';

function CardImage() {
  return React.createElement(
    "li",
    { className: "card" },
    React.createElement("img", { src: "img/photo-card-1.jpg", width: "185", height: "100", alt: "" })
  );
}