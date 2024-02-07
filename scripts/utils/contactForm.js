const displayModal = () => {
  const modal = document.querySelector(".contact-modal");
  modal.style.display = "block";
};

const closeModal = () => {
  const modal = document.querySelector(".contact-modal");
  modal.style.display = "none";
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
