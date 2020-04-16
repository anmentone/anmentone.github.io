document
  .querySelector(".item__minimize")
  .addEventListener("click", function () {
    var display = document.querySelector(".hero-body").style.display;

    if (display !== "none") {
      document.querySelector(".hero-body").style.display = "none";
      document.querySelector(".hero-foot").style.display = "none";
    } else {
      document.querySelector(".hero-body").style.display = "block";
      document.querySelector(".hero-foot").style.display = "block";
    }
  });

document
  .querySelector(".item__maximize")
  .addEventListener("click", function (e) {
    document.querySelector("body").classList.toggle("body__padding");
    document
      .querySelector("#terminal__container")
      .classList.toggle("terminal__max");
  });
