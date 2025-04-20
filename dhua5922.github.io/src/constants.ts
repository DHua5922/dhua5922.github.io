const LINKEDIN_URL = "https://www.linkedin.com/in/dylanhua/";
const GITHUB_URL = "https://github.com/DHua5922";

const ABOUT_SECTION_ID = "about";
const PORTFOLIO_SECTION_ID = "portfolio";
const CONTACT_SECTION_ID = "contact";

const SCROLL_BEHAVIOR = "smooth";

const PORTFOLIO_IMAGES_FOLDER_PATH = "src/assets/portfolio";

const projects = [
  {
    name: "Service Catalog",
    imgName: "img_service_catalog.png",
    links: [
      {
        href: "https://www.utdallas.edu/oit/services/",
        children: "Website",
      },
    ],
    description:
      "With 2 developers, I created a service catalog website to help over 20,000 users request IT services offered by the Office of Information Technology. This will allow the user find the desired service in under 1 minute",
  },
  {
    name: "CMovie",
    imgName: "img_cmovie.png",
    links: [
      {
        href: "https://www.huadylan.com/CMovie/",
        children: "Website",
      },
      {
        href: "https://github.com/DHua5922/CMovie",
        children: "Code",
      },
    ],
    description: "A website built with React for searching movies.",
  },
];

export {
  LINKEDIN_URL,
  GITHUB_URL,
  ABOUT_SECTION_ID,
  PORTFOLIO_SECTION_ID,
  CONTACT_SECTION_ID,
  SCROLL_BEHAVIOR,
  PORTFOLIO_IMAGES_FOLDER_PATH,
  projects,
};
