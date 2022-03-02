const inputs = document.querySelectorAll(".input1");

function focusFunc() {
    console.log('3')
  let parent = this.parentNode;
  parent.classList.add("focus");
}

function blurFunc() {
    console.log('2')
  let parent = this.parentNode;
  if (this.value == "") {
    parent.classList.remove("focus");
  }
}

inputs.forEach((input) => {
    console.log('1')
  input.addEventListener("focus", focusFunc);
  input.addEventListener("blur", blurFunc);
});
console.log('script is here from animations file')