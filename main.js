let bottun = document.querySelector(".press");
let bottun2 = document.querySelector(".reset");
let bottun3 = document.querySelector(".go_out");
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
bottun2.onclick = () => {
  localStorage.clear();
  location.reload();
};
bottun3.onclick = () => {
  window.close();
};
