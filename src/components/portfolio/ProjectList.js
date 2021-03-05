export const projectsList = [
    {
        name: "newsgen",
        type: "Personal Project",
        startDate: "Jan 2021",
        endDate: "Feb 2021",
        imgName: "img_news.jpg",
        links: [
            {
                url: "https://github.com/DHua5922/newsgen-frontend",
                label: "Front End Code",
            },
            {
                url: "https://github.com/DHua5922/newsgen-backend",
                label: "Back End Code",
            },
        ],
        description: `
            Website for marking favorite news. Project was managed using ClickUp's Agile features.
            Front end was built with Next.js as React framework and styled with HTML, CSS, Tailwind, and Styled components.
            Back end was built with Java, Spring Boot, and MySQL.
        `
    },
    {
        name: "JournalSite",
        type: "Personal Project",
        startDate: "Oct 2020",
        endDate: "Dec 2020",
        imgName: "img_journal.png",
        links: [
            {
                url: "https://github.com/DHua5922/journalsite",
                label: "Front End Code"
            },
            {
                url: "https://github.com/DHua5922/journalsite-backend",
                label: "Back End Code"
            }
        ],
        description: "This is a website for users to write in online journals. Front-end was built with ReactJS. Back-end was built with Java and SpringBoot as microservice. The front-end was deployed to AWS S3 through GitHub Action for CI/CD, and the back-end was deployed to AWS EC2 through GitHub action for CI/CD and docker."
    },
    {
        name: "Service Catalog",
        type: "Work",
        startDate: "Dec 2019",
        endDate: "Mar 2020",
        imgName: "service_catalog.png",
        links: [{
            url: "https://www.utdallas.edu/oit/services/",
            label: "Website"
        }],
        description: `
            As a Junior Web Portal UI Developer, I worked with 2 developers to create a service catalog website that lets 
            over 20,000 students at UT Dallas use the IT services offered by the Office of Information Technology.

            For my part, I worked on the front-end using React.js, HTML, and CSS by displaying services from Cherwell REST API 
            on the sidebar and arranging the website in a way that will make the services easy to find. This website was 
            deployed to WordPress.

            I also maintain this website by changing or adding necessary features to make the website more useful.
        `,
    },
    {
        name: "Chatterus",
        type: "Personal Project",
        startDate: "Jun 2020",
        endDate: "Aug 2020",
        imgName: "img_chatterus.jpg",
        links: [
            {
                url: "https://chatterus.herokuapp.com/",
                label: "Website"
            },
            {
                url: "https://gitlab.com/DHua5922/chatterus-web",
                label: "Front End Code"
            },
            {
                url: "https://gitlab.com/DHua5922/gtext",
                label: "Back End Code"
            }
        ],
        description: `
            This website allows users to chat with each other. 

            For the front-end, the website was created with React, React Bootstrap, TypeScript, HTML, and Sass.

            For the back-end, the web service was created with Node.js and Express for deleting, creating, and accessing chats from MongoDB. 

            Both the website and the web service were deployed to Heroku using Docker and GitLab as DevOps tool for continuous integration &
            deployment.
        `
    }
]