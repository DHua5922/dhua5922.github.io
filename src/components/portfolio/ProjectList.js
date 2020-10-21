import IgnitePresentation from "../../document/acm_ignite_presentation.pdf";

export const projectsList = [
    {
        name: "Service Catalog",
        type: "Work",
        startDate: "Dec 2019",
        endDate: "Mar 2020",
        imgName: "service_catalog.png",
        website: "https://www.utdallas.edu/oit/services/",
        technologies: ["React.js", "HTML", "CSS"],
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
        website: "https://chatterus.herokuapp.com/",
        githubUrl: "https://github.com/DHua5922/chatterus-web",
        technologies: ["MongoDB", "React", "TypeScript", "Express", "Node.js", "React Bootstrap", "Sass", "HTML", "Heroku", "GitLab", "Docker", "MERN"],
        description: `
            This website allows users to chat with each other. 

            For the front-end, the website was created with React, React Bootstrap, TypeScript, HTML, and Sass.

            For the back-end, the web service was created with Node.js and Express for deleting, creating, and accessing chats from MongoDB. 

            Both the website and the web service were deployed to Heroku using Docker and GitLab as DevOps tool for continuous integration &
            deployment.
        `
    },
    {
        name: "iNews",
        type: "Personal Project",
        startDate: "Jan 2020",
        endDate: "May 2020",
        imgName: "img_news.jpg",
        website: "http://seenews.herokuapp.com/",
        githubUrl: "https://github.com/DHua5922/iNews-frontend",
        technologies: ["Angular", "TypeScript", "Python", "Django", "PostgreSQL", "HTML5", "Sass", "Bootstrap 4", "Heroku", "Docker"],
        description: `
            This website shows news to users so that users can be informed of current events, such as the growing 
            issue with the coronavirus.

            For the front-end, the website was created with Angular, TypeScript, Bootstrap 4, HTML5, and Sass. The website was 
            automatically deployed to Heroku by uploading code to the master branch on GitHub.

            For the back-end, the web service was created with Python and Django for deleting, adding, and accessing favorite news 
            from Heroku Postgres (cloud PostgreSQL) database. The web service was deployed to Heroku using Docker.
        `
    },
    {
        name: "AR Sphere",
        type: "Collaborative Project",
        startDate: "Sep 2019",
        endDate: "Dec 2019",
        imgName: "img_arsphere.png",
        videoName: "video_arsphere.mp4",
        presentation: IgnitePresentation,
        technologies: ["Unity", "Microsoft Azure", "Blob Storage", "Agile"],
        description: `
            For ACM Ignite, I worked with 4 experienced developers to make an Android application for placing 3D models in the 
            virtual world and generating seed money. ACM Ignite also cultivates an entrepreneurial mindset in participants. 
            
            Because of my previous experience with Unity in ACM Projects, I led the front-end team for designing the homepage 
            using Unity. I also stored files for 3D models in Blob Storage using Microsoft Azure as cloud computing service.

            As part of the Agile process, my team and I reported our progress on the project to ACM Ignite officers during 
            weekly online standups.

            At presentation night, we presented our work to 4 judges who awarded us first place and $500. 
        `
    },
    {
        name: "NutriFind",
        type: "Personal Project",
        startDate: "Dec 2019",
        endDate: "Dec 2019",
        imgName: "img_nutrition.jpg",
        githubUrl: "https://github.com/DHua5922/NutriFind",
        website: "https://www.huadylan.com/NutriFind/",
        technologies: ["Vue.js", "HTML5", "CSS3", "BootstrapVue"],
        description: `
            In this website, users can see nutritional information of food or drinks. 

            HTML5, CSS3, and BootstrapVue were used to design the website. Vue.js was used to retrieve nutritional information 
            from the Edamam Food Database API.
        `
    },
    {
        name: "Project Morse",
        type: "Collaborative Project",
        startDate: "Nov 2019",
        endDate: "Nov 2019",
        imgName: "img_morse.png",
        githubUrl: "https://github.com/DHua5922/Project-Morse",
        technologies: ["Java", "Android Studio", "XML"],
        description: `
            For UTD Hackathon, I worked with three students to build an Android app within 24 hours that allows 
            those who are deaf to communicate more efficiently.

            2 students were new to Android Studio, so I led a workshop for teaching them the basics of how to 
            use Android Studio.

            Java was used to convert text speech to Morse code and vibrate the phone based on the Morse code.
            The appearance of the application was formatted with XML. This application was made using Android Studio.
        `
    },
    {
        name: "Simple Grocery List",
        type: "Personal Project",
        startDate: "Aug 2019",
        endDate: "Nov 2019",
        imgName: "img_shoppinglist.jpg",
        android_app: "https://play.google.com/store/apps/details?id=com.dylanhua.simplebuylist&hl=en_US",
        technologies: ["Java", "Android Studio", "SQL", "SQLite database", "XML"],
        description: `
            This Android application makes it easy for users to make several lists of items to buy at different stores.  

            Items are retrieved and modified from SQLite database using SQL. The appearance of the application was formatted
            with XML. Switching grocery lists and responding to taps are done with Java. This application was made using Android 
            Studio.
        `
    },
    {
        name: "Inventory List",
        type: "Personal Project",
        startDate: "May 2019",
        endDate: "Jun 2019",
        imgName: "img_inventorylist.jpg",
        android_app: "https://play.google.com/store/apps/details?id=com.dylanhua.inventorylist&hl=en_US",
        technologies: ["Android Studio", "Kotlin", "SQL", "SQLite database", "XML"],
        description: `
            This Android application is for managing your inventories. Whether you are a college student or are traveling, 
            you can use this application to track how much items you have.
            
            Items are retrieved and modified from SQLite database using SQL. The appearance of the application was formatted
            with XML. Switching inventory lists and responding to taps are done with Kotlin. This application was made using 
            Android Studio.
        `
    },
    {
        name: "ARcade",
        type: "Collaborative Project",
        startDate: "Sep 2017",
        endDate: "Dec 2017",
        imgName: "img_switcher.png",
        githubUrl: "https://github.com/DHua5922/Model-Switcher",
        technologies: ["C#", "Unity", "Vuforia", "Agile Scrum"],
        description: `
            For ACM Projects, I worked with 5 others to merge 3 augmented reality games into a single Android application. 

            For my part, I created the Model Switcher game using C#, Unity, and Vuforia for displaying the President, slime, 
            knight, and dinosaur on a $1 bill in augmented reality. The camera in the Android phone needs to be positioned 
            correctly for the model to show up on the $1 bill.

            During the 5 build nights and other meetings, I was involved in the Agile Scrum process for enhancing my model
            switcher game and reporting my progress on the game.
            
            After merging the games and presenting our application, the 3 judges chose us as winners of ACM Projects 
            because our project is original and can be expanded for business pursposes. 
        `
    },
]