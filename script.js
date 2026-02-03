// Elements

const envelope = document.getElementById("envelope-container");
const letter = document.getElementById("letter-container");
const btnYes = document.querySelector(".btn[alt='Yes']");
const btnNo = document.querySelector(".button-no");
const letterTitle = document.getElementById("letter-title");
const letterCat = document.getElementById("letter-cat");
const letterButtons = document.getElementById("letter-buttons");
const finalText = document.getElementById("final-text");
const confirmDate = document.getElementById("confirm-date");
const confirmText = document.getElementById("confirm-text");

//  Click Envelope

envelope.addEventListener("click", () => {
  envelope.style.display = "none";
  letter.style.display = "flex";

  setTimeout(() => {
    document.querySelector(".letter-window").classList.add("open");
  }, 50);
});

// Logic to make YES button to grow

let yesScale = 1;

btnYes.style.position = "relative";
btnYes.style.transformOrigin = "center center";
btnYes.style.transition = "transform 0.3s ease";

btnNo.addEventListener("click", () => {
  yesScale += 2;

  if (btnYes.style.position !== "fixed") {
    btnYes.style.position = "fixed";
    btnYes.style.top = "50%";
    btnYes.style.left = "50%";
    btnYes.style.transform = `translate(-50%, -50%) scale(${yesScale})`;
  } else {
    btnYes.style.transform = `translate(-50%, -50%) scale(${yesScale})`;
  }
});

// YES is clicked

btnYes.addEventListener("click", () => {
  letterTitle.textContent = "I knew you'd say YES! 😌✨ ";
  letterCat.src = "eff4be08d90db3e8d30a322101e945ae.gif";

  document.querySelector(".letter-window").classList.add("final");

  letterButtons.style.display = "none";

  finalText.style.display = "block";
});

// Confirm date clickec
confirmDate.addEventListener("click", () => {
  console.log("confirm date clicked");

  const plan = document.querySelector('input[name="plan"]:checked');
  if (!plan) {
    alert("Pick what we’re going to do, Cutie! 💕");
    return;
  }
  selectedPlan = plan.value;
  console.log(plan.value);

  finalText.style.display = "none";

  confirmText.style.display = "block";
});
