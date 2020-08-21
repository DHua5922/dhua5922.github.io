import IgnitePresentation from "../../document/acm_ignite_presentation.pdf";

export const projectsList = [
    {
        name: "Chatterus",
        type: "Personal Project",
        startDate: "Jun 2020",
        endDate: "Aug 2020",
        imgName: "img_chatterus.png",
        website: "https://chatterus.herokuapp.com/",
        description: `This website allows users to chat with each other. The website was created using React, React Bootstrap, HTML, and Sass. The API for modifying chats and retrieving messages from NoSQL MongoDB database was constructed using Node.js and Express.js. Full stack: MERN`
    },
    {
        name: "iNews",
        type: "Personal Project",
        startDate: "Jan 2020",
        endDate: "May 2020",
        imgName: "img_news.png",
        website: "http://seenews.herokuapp.com/",
        description: "This website shows news to users so that the users can be informed of current events, such as the growing issue with the coronavirus. The website was built with Python, Django, Heroku, Heroku Postgres, Angular, Typescript, Bootstrap 4, HTML5, and Sass. Android application was built with NativeScript, Angular, and XML. It will appear on Google Play soon."
    },
    {
        name: "AR Sphere",
        type: "Collaborative Project",
        startDate: "Sep 2019",
        endDate: "Dec 2019",
        imgName: "img_arsphere.png",
        videoName: "video_arsphere.mp4",
        presentation: IgnitePresentation,
        description: "For ACM Ignite, I worked with four other students to make an Android application for placing 3D models in the virtual world. Any models placed by the user can be seen by other users. Because of my previous experience with Unity, I was put in charge of designing the login page and model interaction using Unity. At presentation night, we presented our work to four judges who awarded us first place.  The app was built with Microsoft Azure, ASP.NET Core, Unity, Spatial Anchors, Microsoft SQL, and Blob Storage."
    },
    {
        name: "NutriFind",
        type: "Personal Project",
        startDate: "Dec 2019",
        endDate: "Dec 2019",
        imgName: "img_nutrition.jpg",
        githubUrl: "https://github.com/DHua5922/NutriFind",
        website: "https://www.huadylan.com/NutriFind/",
        description: "Website where users can see information, such as nutrients, about a particular food or drink by entering the name in the search bar. The appearance was designed with HTML5, CSS3, and BootstrapVue. Axios and vue.js were used to call information from the Edamam Food Database API."
    },
    {
        name: "Project Morse",
        type: "Collaborative Project",
        startDate: "Nov 2019",
        endDate: "Nov 2019",
        imgName: "img_morse.jpg",
        githubUrl: "https://github.com/DHua5922/Project-Morse",
        description: "For UTD Hackathon, I worked with three students from the University of Texas at Arlington to build an Android app within one day that allows those who are deaf to communicate more efficiently. The app converts text speech to Morse code, and the phone vibrates based on the Morse code.  The app was built with Java, Android Studio, and XML."
    },
    {
        name: "Simple Grocery List",
        type: "Personal Project",
        startDate: "Aug 2019",
        endDate: "Nov 2019",
        imgName: "img_shoppinglist.png",
        android_app: "https://play.google.com/store/apps/details?id=com.dylanhua.simplebuylist&hl=en_US",
        description: "This Android application that is easy to use helps users make several lists of items to buy at different stores.  The app was built with Java, C++, SQL, Room database, and XML."
    },
    {
        name: "Inventory List",
        type: "Personal Project",
        startDate: "May 2019",
        endDate: "Jun 2019",
        imgName: "img_inventorylist.png",
        android_app: "https://play.google.com/store/apps/details?id=com.dylanhua.inventorylist&hl=en_US",
        description: "This android application is for managing your inventories. Whether you are a college student or are traveling, you can use this application to track how much items you have. Inventory List is built with Kotlin and SQL."
    },
    {
        name: "ARcade",
        type: "Collaborative Project",
        startDate: "Sep 2017",
        endDate: "Dec 2017",
        imgName: "img_switcher.png",
        githubUrl: "https://github.com/DHua5922/Model-Switcher",
        description: "For ACM Projects, I worked with 4 others to create an augmented reality application. After brainstorming ideas, we decided that each of us create our own game in augmented reality so that we can merge all the games into a single application. This led me to create the Model Switcher game. After merging the games and presenting our application, the 3 judges chose us as winners of ACM Projects because our project is original and can be expanded for business pursposes.  This game displays the unique animations of the President, slime, knight, and dinosaur on a $1 bill when the three-dimensional models are triggered to appear in augmented reality."
    }
]