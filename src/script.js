const listEl = document.querySelectorAll(".questions-list li");

const showAnswer = (question) => {
  console.log("question");
};

const removeActive = () => {
  const activeState = [...document.querySelectorAll(".active")];
  activeState.map((item) => {
    // console.log(activeState);
    item.classList.remove("active");
  });
};

listEl.forEach((item, index) =>
  console.log(
    item.addEventListener("click", () => {
      removeActive();
      item.classList.toggle("active");
    })
  )
);
