let bottun = document.querySelector("button");
let span = document.querySelector("span");
let press = 0;
if (localStorage.getItem("presses")) {
  press = localStorage.presses;
  span.innerHTML = press;
}
bottun.onclick = () => {
  if (!localStorage.getItem("presses")) {
    localStorage.setItem("presses", 0);
  }
  press++;
  window.alert(`دي الضغطة رقم ${press}`);
  span.innerHTML = press;
  localStorage.presses = press.toString();
};
