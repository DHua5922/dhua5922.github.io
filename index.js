const projects = [
  {
    name: "iBrew",
    description:
      "iBrew is a responsive brewery discovery website built with HTML, CSS, and vanilla JavaScript. Users can search for breweries, sort results, view brewery details, open mapped locations, and generate a random brewery recommendation.",
    liveLink: "https://www.huadylan.com/iBrew",
    codeLink: "https://github.com/DHua5922/iBrew",
    imageLink: "./assets/iBrew-logo-400.png",
    imageSrcSet:
      "./assets/iBrew-logo-200.png 200w, ./assets/iBrew-logo-400.png 400w",
    imageAvifSrcSet:
      "./assets/iBrew-logo-200.avif 200w, ./assets/iBrew-logo-400.avif 400w",
    imageSizes: "200px",
    imageBackgroundStyle: `background: #66443d; background: linear-gradient(146deg,rgba(102, 68, 61, 1) 0%, rgba(130, 81, 70, 1) 41%, rgba(216, 138, 31, 1) 100%)`,
  },
];

const projectsContainerElem = document.querySelector(".projects");
const projectDetailsDialogElem = document.querySelector(
  "#project-details__popup",
);

const contactFormElem = document.querySelector("#contact-form");
const contactSubmitBtnElem = contactFormElem.querySelector(
  "button[type='submit']",
);

window.onload = () => {
  document.querySelector(".nav__menu-btn").addEventListener("click", () => {
    document
      .querySelector(".nav__links--expandable")
      .classList.toggle("expanded");
  });

  renderProjects();

  projectDetailsDialogElem
    .querySelector(".project-details__close-btn")
    .addEventListener("click", () => {
      projectDetailsDialogElem.close();
    });

  document.querySelector(".theme-toggle").addEventListener("click", () => {
    const currentTheme = document.documentElement.getAttribute("data-theme");
    const newTheme = currentTheme === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", newTheme);
  });

  contactFormElem.addEventListener("submit", contact);
};

function renderProjects() {
  projects.forEach((project, projectIndex) => {
    const buttonNode = document.createElement("button");
    buttonNode.style = project.imageBackgroundStyle;
    buttonNode.classList.add("project__content");
    buttonNode.type = "button";
    buttonNode.dataset.projectIndex = projectIndex;
    buttonNode.addEventListener("click", () => {
      renderProjectDetails(project);
      projectDetailsDialogElem.showModal();
    });
    buttonNode.innerHTML = `
        <div class="project__content--overlay">Click To See Details</div>
            <figure class="project__image--container">
              <picture>
                <source
                  type="image/avif"
                  srcset="${project.imageAvifSrcSet}"
                  sizes="${project.imageSizes}"
                >
                <img
                  src="${project.imageLink}"
                  srcset="${project.imageSrcSet}"
                  sizes="${project.imageSizes}"
                  width="200"
                  height="184"
                  loading="lazy"
                  decoding="async"
                  alt="${project.name} logo"
                  class="project__image"
                >
              </picture>
            </figure>
            <h3 class="project__name">${project.name}</h3>
      `;

    const listItemNode = document.createElement("li");
    listItemNode.classList.add("project");
    listItemNode.appendChild(buttonNode);

    projectsContainerElem.appendChild(listItemNode);
  });
}

function renderProjectDetails(project) {
  const projectNameElem = projectDetailsDialogElem.querySelector(
    ".project-details__name",
  );
  const projectImageElem = projectDetailsDialogElem.querySelector(
    ".project-details__image",
  );
  const projectDescriptionElem = projectDetailsDialogElem.querySelector(
    ".project-details__description",
  );
  const projectLiveLinkElem = projectDetailsDialogElem.querySelector(
    ".project-details__link--live-site",
  );
  const projectCodeLinkElem = projectDetailsDialogElem.querySelector(
    ".project-details__link--code",
  );

  projectNameElem.textContent = project.name;
  projectImageElem.src = project.imageLink;
  projectImageElem.srcset = project.imageSrcSet;
  projectImageElem.sizes = project.imageSizes;
  projectImageElem.width = 200;
  projectImageElem.height = 184;
  projectDescriptionElem.textContent = project.description;
  projectLiveLinkElem.href = project.liveLink;
  projectCodeLinkElem.href = project.codeLink;
}

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
