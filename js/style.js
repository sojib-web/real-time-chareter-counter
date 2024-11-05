const textArea = document.getElementById("textarea");
const totalCounter = document.getElementById("total-counter");
const remainingCounter = document.getElementById("remaining-counter");

// @ts-ignore
textArea.addEventListener("keyup", () => {
  updateCounter();
});

const updateCounter = () => {
  // @ts-ignore
  totalCounter.innerText = textArea.value.length;

  // @ts-ignore
  remainingCounter.innerText =
    // @ts-ignore
    textArea.getAttribute("maxlength") - textArea.value.length;
};

updateCounter();
