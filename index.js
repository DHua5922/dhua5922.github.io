const projects = [
  {
    name: "iBrew",
    description:
      "iBrew is a responsive brewery discovery website built with HTML, CSS, and vanilla JavaScript. Users can search for breweries, sort results, view brewery details, open mapped locations, and generate a random brewery recommendation.",
    liveLink: "https://www.huadylan.com/iBrew",
    codeLink: "https://github.com/DHua5922/iBrew",
    imageLink: "./assets/images/projects/ibrew-logo/original.png",
    imageSrcSet:
      "./assets/images/projects/ibrew-logo/192.png 192w, ./assets/images/projects/ibrew-logo/384.png 384w",
    imageAvifSrcSet:
      "./assets/images/projects/ibrew-logo/192.avif 192w, ./assets/images/projects/ibrew-logo/384.avif 384w",
    imageWebpSrcSet:
      "./assets/images/projects/ibrew-logo/192.webp 192w, ./assets/images/projects/ibrew-logo/384.webp 384w",
    imageSizes: "192px",
    imageWidth: 192,
    imageHeight: 177,
    imageBackgroundStyle: `background: #3f220f; background: linear-gradient(146deg,rgba(63, 34, 15, 1) 0%, rgba(126, 65, 20, 1) 40%, rgba(225, 132, 24, 1) 72%, rgba(90, 126, 22, 1) 100%)`,
  },
  {
    name: "React Kit",
    description:
      "React Kit is a collection of reusable React components and hooks designed to streamline the development of modern web applications. It provides a set of pre-built UI elements and utilities to enhance productivity and maintainability.",
    liveLink: "https://www.huadylan.com/react-kit",
    codeLink: "https://github.com/DHua5922/react-kit",
    imageLink: "./assets/images/projects/react-kit-logo/original.png",
    imageSrcSet:
      "./assets/images/projects/react-kit-logo/192.png 192w, ./assets/images/projects/react-kit-logo/384.png 384w",
    imageAvifSrcSet:
      "./assets/images/projects/react-kit-logo/192.avif 192w, ./assets/images/projects/react-kit-logo/384.avif 384w",
    imageWebpSrcSet:
      "./assets/images/projects/react-kit-logo/192.webp 192w, ./assets/images/projects/react-kit-logo/384.webp 384w",
    imageSizes: "192px",
    imageWidth: 192,
    imageHeight: 192,
    imageBackgroundStyle: `background: #0f172a; background: linear-gradient(146deg,rgba(15, 23, 42, 1) 0%, rgba(14, 116, 144, 1) 52%, rgba(34, 211, 238, 1) 100%)`,
  },
  {
    name: "React Native Kit",
    description:
      "React Native Kit is a collection of reusable React Native components and hooks designed to streamline the development of mobile applications. It provides a set of pre-built UI elements and utilities to enhance productivity and maintainability.",
    liveLink: "https://www.huadylan.com/react-native-kit",
    codeLink: "https://github.com/DHua5922/react-native-kit",
    imageLink: "./assets/images/projects/react-native-kit-logo/original.png",
    imageSrcSet:
      "./assets/images/projects/react-native-kit-logo/192.png 192w, ./assets/images/projects/react-native-kit-logo/384.png 384w",
    imageAvifSrcSet:
      "./assets/images/projects/react-native-kit-logo/192.avif 192w, ./assets/images/projects/react-native-kit-logo/384.avif 384w",
    imageWebpSrcSet:
      "./assets/images/projects/react-native-kit-logo/192.webp 192w, ./assets/images/projects/react-native-kit-logo/384.webp 384w",
    imageSizes: "192px",
    imageWidth: 192,
    imageHeight: 192,
    imageBackgroundStyle: `background: #111827; background: linear-gradient(146deg,rgba(17, 24, 39, 1) 0%, rgba(67, 56, 202, 1) 52%, rgba(6, 182, 212, 1) 100%)`,
  },
  {
    name: "JS TS Kit",
    description:
      "JS TS Kit is a collection of reusable functions and classes that can be used in frontend and backend to streamline development and improve code maintainability.",
    liveLink: "https://www.huadylan.com/js-ts-kit",
    codeLink: "https://github.com/DHua5922/js-ts-kit",
    imageLink: "./assets/images/projects/js-ts-kit-logo/original.png",
    imageSrcSet:
      "./assets/images/projects/js-ts-kit-logo/192.png 192w, ./assets/images/projects/js-ts-kit-logo/384.png 384w",
    imageAvifSrcSet:
      "./assets/images/projects/js-ts-kit-logo/192.avif 192w, ./assets/images/projects/js-ts-kit-logo/384.avif 384w",
    imageWebpSrcSet:
      "./assets/images/projects/js-ts-kit-logo/192.webp 192w, ./assets/images/projects/js-ts-kit-logo/384.webp 384w",
    imageSizes: "192px",
    imageWidth: 192,
    imageHeight: 192,
    imageBackgroundStyle: `background: #0f172a; background: linear-gradient(146deg,rgba(15, 23, 42, 1) 0%, rgba(37, 99, 235, 1) 52%, rgba(250, 204, 21, 1) 100%)`,
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
                ${
                  project.imageAvifSrcSet
                    ? `<source
                        type="image/avif"
                        srcset="${project.imageAvifSrcSet}"
                        sizes="${project.imageSizes}"
                      >`
                    : ""
                }
                ${
                  project.imageWebpSrcSet
                    ? `<source
                        type="image/webp"
                        srcset="${project.imageWebpSrcSet}"
                        sizes="${project.imageSizes}"
                      >`
                    : ""
                }
                <img
                  src="${project.imageLink}"
                  srcset="${project.imageSrcSet}"
                  sizes="${project.imageSizes}"
                  width="${project.imageWidth}"
                  height="${project.imageHeight}"
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
  const projectAvifSourceElem = projectDetailsDialogElem.querySelector(
    ".project-details__source--avif",
  );
  const projectWebpSourceElem = projectDetailsDialogElem.querySelector(
    ".project-details__source--webp",
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
  projectAvifSourceElem.srcset = project.imageAvifSrcSet;
  projectAvifSourceElem.sizes = project.imageSizes;
  projectWebpSourceElem.srcset = project.imageWebpSrcSet;
  projectWebpSourceElem.sizes = project.imageSizes;
  projectImageElem.src = project.imageLink;
  projectImageElem.srcset = project.imageSrcSet;
  projectImageElem.sizes = project.imageSizes;
  projectImageElem.width = project.imageWidth;
  projectImageElem.height = project.imageHeight;
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
