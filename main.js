let bottun = document.querySelector("button");
let span = document.querySelector("span");
bottun.onclick = () => {
  window.alert("جدع");
  span.innerHTML = parseInt(span.innerHTML) + 1;
};
