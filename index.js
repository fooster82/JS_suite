const h1 = document.querySelector("h1");

h1.addEventListener("click", () => {
  h1.style.backgroundColor = "red"
});

h1.addEventListener("mouseout", () => {
  h1.style.backgroundColor = "grey"
});

////////////////////////////////////////

const h2 = document.querySelector("h2");

h2.addEventListener("mouseenter", () => {
  h2.textContent = "Hello there, I hope you enjoy!"
});

////////////////////////////////////////

body = document.querySelector("body");

body.addEventListener("keydown", () => {
  var x = event.key;
  body.append(x)
});

////////////////////////////////////////

lis = document.querySelectorAll("li");
ps = document.querySelectorAll("p");

lis[0].addEventListener("click", () => {
  if(ps[0].style.fontWeight === "normal") {
    ps[0].setAttribute("style", "font-size: 50px; font-weight: bolder")
  } else {
    ps[0].setAttribute("style", "font-size: 20px; font-weight: normal")
  }
});

lis[1].addEventListener("click", () => {
  if(ps[1].style.fontWeight === "normal") {
    ps[1].setAttribute("style", "font-size: 50px; font-weight: bolder")
  } else {
    ps[1].setAttribute("style", "font-size: 20px; font-weight: normal")
  }
});


lis[2].addEventListener("click", () => {
  if(ps[2].style.fontWeight === "normal") {
    ps[2].setAttribute("style", "font-size: 50px; font-weight: bolder")
  } else {
    ps[2].setAttribute("style", "font-size: 20px; font-weight: normal")
  }
});





// lis[2].addEventListener("click", () => {
  //   ps[2].setAttribute("style", "font-size: 50px; font-weight: bolder")
  // });