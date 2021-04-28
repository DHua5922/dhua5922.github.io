const projectsList = [
    {
        name: "Service Catalog",
        imgName: "img_service_catalog.png",
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
            This website was built with React to make it easier to search for movies to watch.
        `,
    },
    {
        name: "Stock Predictor",
        imgName: "img_stock.jpg",
        links: [
            {
                url: "https://stock-decider.herokuapp.com/",
                label: "Website"
            },
            {
                url: "https://github.com/DHua5922/StockPredictionMW2-4",
                label: "Code"
            }
        ],
        description: `
            In a Scrum team of 5, I built a stock predictor website that decides whether a stock is good or bad depending on the headlines. Throughout this internship, I added features, such as displaying stock quote from Finnhub API, for the website based on the tickets from Jira. I also improved code from pull requests and reported my progress in bi-weekly stand up meetings. The front-end was created with React, HTML, and CSS. The back-end was created with Node.js and Express. Stock data was retrieved from Finnhub's API.
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
            This website allows users to chat with each other. The website was built with MERN stack (MongoDB, Express, Node.js, and React).
        `
    },
    {
        name: "newsgen",
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
];

export default projectsList;