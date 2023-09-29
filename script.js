const form = document.querySelector("form");
const eInput = form.querySelector(".email input");
const pInput = form.querySelector(".password input");

eInput.addEventListener("keyup", checkEmail);
pInput.addEventListener("keyup", checkPass);

function checkEmail() {
  let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  let errorTxt = eInput.nextElementSibling;

  if (!eInput.value.match(pattern)) {
    errorTxt.textContent = eInput.value ? "Enter a valid email address" : "Email can't be blank";
    form.classList.add("shake", "error");
  } else {
    errorTxt.textContent = "";
    form.classList.remove("shake");
  }
}

function checkPass() {
  let errorTxt = pInput.nextElementSibling;

  if (pInput.value === "") {
    errorTxt.textContent = "Password can't be blank";
    form.classList.add("shake", "error");
  } else {
    errorTxt.textContent = "";
    form.classList.remove("shake");
  }
}

window.addEventListener("pagehide", function () {
  // تنفيذ أي إجراءات إضافية هنا إذا كان ذلك ضروريًا عند إخفاء الصفحة
});

window.addEventListener("visibilitychange", function () {
  if (document.visibilityState === "hidden") {
    // تنفيذ أي إجراءات إضافية هنا إذا كان ذلك ضروريًا عند تغيير حالة الرؤية
  }
});

form.onsubmit = (e) => {
  e.preventDefault();
  if (!form.classList.contains("error")) {
    window.location.href = form.getAttribute("action");
  }
};
