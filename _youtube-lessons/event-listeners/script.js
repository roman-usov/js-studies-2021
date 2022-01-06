const divs = document.querySelectorAll("div");

function addGlobalEventListener(type, selector, callback) {
  document.addEventListener(type, (e) => {
    if (e.target.matches(selector)) callback(e);
  });
}

addGlobalEventListener("click", "div", (e) => {
  console.log("hi");
});

const newDiv = document.createElement("div");
newDiv.style.width = 200 + "px";
newDiv.style.height = 200 + "px";
newDiv.style.backgroundColor = "purple";
document.body.append(newDiv);
