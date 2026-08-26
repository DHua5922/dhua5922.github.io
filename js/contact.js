const contactFormElem = document.querySelector("#contact-form");
const contactSubmitBtnElem = contactFormElem.querySelector(
  "button[type='submit']",
);

window.addEventListener("DOMContentLoaded", () => {
  contactFormElem.addEventListener("submit", contact);
});

async function contact(event) {
  event.preventDefault();

  contactSubmitBtnElem.disabled = true;
  contactSubmitBtnElem.innerHTML = `
    <div class="spinner" role="status">
      <span class="sr-only text-light">Sending Message...</span>
    </div>
  `;

  const nameInputElem = contactFormElem.querySelector("#name-input");
  const emailInputElem = contactFormElem.querySelector("#email-input");
  const messageInputElem = contactFormElem.querySelector("#message-input");

  const nameErrorMsgElem = contactFormElem.querySelector("#name-error-message");
  const emailErrorMsgElem = contactFormElem.querySelector(
    "#email-error-message",
  );
  const messageErrorMsgElem = contactFormElem.querySelector(
    "#message-error-message",
  );

  const nameValue = nameInputElem.value.trim();
  const emailValue = emailInputElem.value.trim();
  const messageValue = messageInputElem.value.trim();

  nameErrorMsgElem.classList.remove("show");
  emailErrorMsgElem.classList.remove("show");
  messageErrorMsgElem.classList.remove("show");

  if (!nameValue) {
    nameErrorMsgElem.classList.add("show");
    nameInputElem.ariaInvalid = "true";
  } else {
    nameErrorMsgElem.classList.remove("show");
    nameInputElem.ariaInvalid = "false";
  }

  if (!emailValue) {
    emailErrorMsgElem.classList.add("show");
    emailInputElem.ariaInvalid = "true";
  } else {
    emailErrorMsgElem.classList.remove("show");
    emailInputElem.ariaInvalid = "false";
  }

  if (!messageValue) {
    messageErrorMsgElem.classList.add("show");
    messageInputElem.ariaInvalid = "true";
  } else {
    messageErrorMsgElem.classList.remove("show");
    messageInputElem.ariaInvalid = "false";
  }

  if (!nameValue || !emailValue || !messageValue) {
    resetContactButton();
    return;
  }

  const success = contactFormElem.querySelector(
    ".contact-form__success-message",
  );
  const error = contactFormElem.querySelector(".contact-form__error-message");

  try {
    await emailjs.sendForm(
      "service_pmf0ef9",
      "template_9xgl1n8",
      contactFormElem,
    );
    success.classList.add("show");
    error.classList.remove("show");
  } catch (err) {
    console.error(err);
    success.classList.remove("show");
    error.classList.add("show");
  }

  resetContactButton();
}

function resetContactButton() {
  contactSubmitBtnElem.disabled = false;
  contactSubmitBtnElem.innerHTML = "Send Message";
}
