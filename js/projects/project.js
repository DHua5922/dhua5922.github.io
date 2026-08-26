const projectsContainerElem = document.querySelector(".projects");
const projectDetailsDialogElem = document.querySelector(
  "#project-details__popup",
);

window.addEventListener("DOMContentLoaded", () => {
  renderProjects();

  projectDetailsDialogElem
    .querySelector(".project-details__close-btn")
    .addEventListener("click", () => {
      projectDetailsDialogElem.close();
    });
});

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
    buttonNode.innerHTML = projectDisplayHtml(project);

    const listItemNode = document.createElement("li");
    listItemNode.classList.add("project");
    listItemNode.appendChild(buttonNode);

    projectsContainerElem.appendChild(listItemNode);
  });
}

function projectDisplayHtml({
  imageAvifSrcSet,
  imageWebpSrcSet,
  imageLink,
  imageSrcSet,
  imageSizes,
  imageWidth,
  imageHeight,
  name,
}) {
  return `
        <div class="project__content--overlay">Click To See Details</div>
            <figure class="project__image--container">
              <picture>
                ${
                  imageAvifSrcSet
                    ? `<source
                        type="image/avif"
                        srcset="${imageAvifSrcSet}"
                        sizes="${imageSizes}"
                      >`
                    : ""
                }
                ${
                  imageWebpSrcSet
                    ? `<source
                        type="image/webp"
                        srcset="${imageWebpSrcSet}"
                        sizes="${imageSizes}"
                      >`
                    : ""
                }
                <img
                  src="${imageLink}"
                  srcset="${imageSrcSet}"
                  sizes="${imageSizes}"
                  width="${imageWidth}"
                  height="${imageHeight}"
                  loading="lazy"
                  decoding="async"
                  alt="${name} logo"
                  class="project__image"
                >
              </picture>
            </figure>
            <h3 class="project__name">${name}</h3>
  `;
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
  projectImageElem.alt = `${project.name} logo`;
  projectDescriptionElem.textContent = project.description;
  projectLiveLinkElem.href = project.liveLink;
  projectCodeLinkElem.href = project.codeLink;
}
