const projectsList = [
    {
        name: "Service Catalog",
        imgName: "img_service_catalog.png",
        links: [{
            url: "https://www.utdallas.edu/oit/services/",
            label: "Website"
        }],
        description: `
            With 2 developers, I created a service catalog website to help over 20,000 users request IT services offered by the Office of Information Technology.

            For my part, I utilized React, HTML, and CSS to display the services from Cherwell REST API on the sidebar 
            in a way that will help the user find the desired service in under 1 minute.
        `,
    },
    {
        name: "CMovie",
        imgName: "img_cmovie.png",
        links: [
            {
                url: "https://www.huadylan.com/CMovie/",
                label: "Website"
            },
            {
                url: "https://github.com/DHua5922/CMovie",
                label: "Code"
            },
        ],
        description: `
            A website built with React to make it easier to search for movies to watch.
        `,
    },
    {
        name: "Chatterus",
        imgName: "img_chatterus.jpg",
        links: [
            {
                url: "https://chatterus.herokuapp.com/",
                label: "Website"
            },
            {
                url: "https://github.com/DHua5922/chatterus-frontend",
                label: "Front End Code"
            },
            {
                url: "https://github.com/DHua5922/chatterus-backend",
                label: "Back End Code"
            },
        ],
        description: `
            A website built with MERN stack (MongoDB, Express, React, Node.js) to allow users to chat with each other.
        `
    },
    {
        name: "newsgen",
        imgName: "img_news.jpg",
        links: [
            {
                url: "https://newsgen.herokuapp.com/",
                label: "Website"
            },
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
            A website for marking favorite news. 
            Front end was built with Next.js (React framework).
            Back end was built with Java, Spring Boot, and MySQL database.
        `
    },
];

export default projectsList;