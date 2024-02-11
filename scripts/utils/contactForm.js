const displayModal = () => {
  const photographName = document.querySelector(
    ".photograph-header__name"
  ).textContent;
  
  const modal = document.querySelector(".contact-modal");
  const header = modal.querySelector("h2");
  const name = modal.querySelector(".contact-modal__name");
  name.textContent = photographName;
  modal.style.display = "block";
  header.focus();
};

const closeModal = () => {
  const btn = document.querySelector(".photograph-header__btn");
  const modal = document.querySelector(".contact-modal");
  modal.style.display = "none";
  btn.focus();
};

const submitForm = (e) => {
  e.preventDefault();

  const name = document.querySelector("#name");
  const surname = document.querySelector("#surname");
  const email = document.querySelector("#email");
  const message = document.querySelector("#message");

  console.log("Name", name.value);
  console.log("Surname", surname.value);
  console.log("Email", email.value);
  console.log("Message", message.value);

  closeModal();
};
