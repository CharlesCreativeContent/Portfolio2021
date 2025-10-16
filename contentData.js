// contentData.js
// Data object keyed by content title; values are the content properties.
// You can import this with: import contentData from "./contentData.js";

const contentData = {
  "Runware Pokémon Generator": {
    title: "Runware Pokémon Generator: AI Image and Video Generation",
    // Choose ONE type string; `project` | `video` was pseudo-syntax
    type: "video",
    subTitle: "JavaScript, Express.js, Runware SDK",
    keywords: "JavaScript Express.js Runware SDK",
    description:
      "Generates Pokémon-inspired images and an idle-animation video for a Pokédex entry using Runware (image gen) and Google Veo3 (video).",
    image: "https://www.youtube.com/embed/oQU5E0bBPYQ?si=rQvqDHQLhuS40uWw",
    url: "https://github.com/CharlesCreativeContent/runware-pokemon-generator",
    button: {
      "Code Repo": "https://github.com/CharlesCreativeContent/runware-pokemon-generator",
      "Watch Video": "https://youtu.be/oQU5E0bBPYQ",
    },
  },

  "Text-2-Video with BentoML": {
      "title": "Text-2-Video with BentoML",
      "type": "project",
      "subTitle": "Python, BentoML, XTTS, VLLM, SDXL-Turbo",
      "keywords": "Python BentoML XTTS VLLM SDXL-Turbo Text-to-Video",
      "image": "https://github.com/CharlesCreativeContent/myImages/blob/main/images/Happy_New_Year_Card.png?raw=true",
      "description": "Text-to-video pipeline and API using only open-source models, containerized for deployment on any cloud platform.",
      "url": "https://github.com/CharlesCreativeContent/BentoText2Video",
      "button": {
        "Code Repo": "https://github.com/CharlesCreativeContent/BentoText2Video"
      }
    },

  "GenUI with C1 API: How to Build with Generative UI":  {
      "title": "GenUI with C1 API: How to Build with Generative UI",
      "type": "video",
      "subTitle": "Generative UI, React, APIs",
      "keywords": "Generative UI C1 React APIs Thesys",
      "image": "https://www.youtube.com/embed/videoseries?si=le3cFJuQ-_NVNSPj&list=PLTX9b_8iXKiT1TO1skP7zymXCOsYJ7690",
      "description": "Learn how to build intelligent user interfaces using the C1 Generative UI API. Walkthrough of creating a GenUI app from scratch, enabling dynamic UI generation powered by modern backend logic.",
      "url": "https://docs.thesys.dev/",
      "button": {
        "Watch Series": "https://www.youtube.com/@ThesysDev/videos"
      }
    },
    "Building an AI Clinic Agent with Toolhouse": {
      "title": "Building an AI Clinic Agent with Toolhouse",
      "type": "video",
      "image": "https://www.youtube.com/embed/LwKPnH0198E?si=rQvqDHQLhuS40uWw",
      "subTitle": "Python, JavaScript, OpenAI, Toolhouse SDK",
      "keywords": "Python JavaScript OpenAI Toolhouse SDK RAG Agents",
      "description": "RAG pipeline that integrates tools like web scrapers, memory, and time management to solve communication challenges in health clinics.",
      "url": "https://github.com/CharlesCreativeContent/toolhouse-examples",
      "button": {
        "Code Repo": "https://github.com/CharlesCreativeContent/toolhouse-examples",
        "Watch Video": "https://www.youtube.com/watch?v=LwKPnH0198E"
      }
    },


"Ecommerce Application using Composable APIs from Elastic Path":{
      "title": "Ecommerce Application using Composable APIs from Elastic Path",
      "type": "video",
      "image": "https://www.youtube.com/embed/1dHhMwfqb9w?si=gYtnb6NQXfXoEuc_",
      "subTitle": "JavaScript, Bootstrap, Sass, Node.js & Express.js, jQuery",
      "keywords": "JavaScript Bootstrap Sass Node Express jQuery Elastic Path API Postman",
      "description": "Elastic Path’s API and Postman collection to create a functional e-commerce site with cart and checkout.",
      "url": "https://github.com/CharlesCreativeContent/elastic-path-demo",
      "button": {
        "Code Repo": "https://github.com/CharlesCreativeContent/elastic-path-demo",
        "Watch Video": "https://www.youtube.com/watch?v=1dHhMwfqb9w"
      }
    },


    "Travelara: Fullstack Travel App":{
      "title": "Travelara: Fullstack Travel App",
      "type": "video",
      "image": "https://www.youtube.com/embed/roHgcmC_oXg?si=gYtnb6NQXfXoEuc_",
      "subTitle": "JavaScript, Bootstrap, Sass, Node.js, & Express.js",
      "keywords": "JavaScript Bootstrap Sass Node Express Travel App",
      "description": "Platform to help build momentous milestones along with your friends and family. Demo account: demo@demo.com / password: demo.",
      "url": "https://github.com/CharlesCreativeContent/Demo-Day",
      "button": {
        "Code Repo": "https://github.com/CharlesCreativeContent/Demo-Day",
        "Watch Video": "https://www.youtube.com/watch?v=roHgcmC_oXg"
      }
    },
    "Scaling AI Model Deployment": {
      "title": "Scaling AI Model Deployment",
      "type": "talk",
      "image": "https://github.com/CharlesCreativeContent/myImages/blob/main/images/Scaling%20AI%20Model%20Deployment%20(1).png?raw=true",
      "subTitle": "Python & BentoML",
      "keywords": "BentoML MLOps Deployment Scaling",
      "description": "A DataForAI presentation on challenges that arise after deploying models and how to take them to production.",
      "url": "https://www.canva.com/design/DAGG2_I0Ad8/Im-89seUQuXj6_ylwbALvg/watch",
      "button": {
        "Watch Video": "https://www.canva.com/design/DAGG2_I0Ad8/Im-89seUQuXj6_ylwbALvg/watch"
      }
    },

    "How To Start Freelancing in 2022!": {
      "title": "How To Start Freelancing in 2022!",
      "type": "video",
      "image": "https://www.youtube.com/embed/68Li7ukgDKg?si=iceF8ZUfRvwzqOIa&amp;start=3235",
      "subTitle": "Community taught with @LeonNoel",
      "keywords": "Freelancing 100Devs Career",
      "description": "Class fifteen of a 30-week software engineering bootcamp offered on Twitch to help folks launch a new career in software engineering.",
      "url": "https://www.youtube.com/watch?v=68Li7ukgDKg&t=53m53s",
      "button": {
        "Watch Video": "https://www.youtube.com/watch?v=68Li7ukgDKg&t=53m53s"
      }
    },


    "Thesys: Generative UI API for Enhanced AI User Experience": {
      "title": "Thesys: Generative UI API for Enhanced AI User Experience",
      "type": "video",
      "subTitle": "Generative UI, Thesys C1",
      "keywords": "Thesys Generative UI C1 API UX",
      "description": "A walkthrough of Thesys’s Generative UI API—turning text-heavy AI outputs into interactive, actionable interfaces.",
      "image": "https://www.youtube.com/embed/0E9byceH6HM?start=9",
      "url": "https://www.youtube.com/watch?v=a_ftzwSoNN4",
      "button": {
        "Watch Video": "https://www.youtube.com/watch?v=a_ftzwSoNN4"
      }
    },
    "Pieces — How Developers Use AI in Their Workflow (1,000+ Attendees)": {
      "title": "Pieces — How Developers Use AI in Their Workflow (1,000+ Attendees)",
      "type": "event",
      "subTitle": "AI Assistants, Developer Productivity",
      "keywords": "Pieces Copilot Developer Workflow AI",
      "description": "Discover real-world AI integrations that help developers code faster, smarter, and more efficiently.",
      "image": "https://github.com/CharlesCreativeContent/myImages/blob/main/images/GXxCJH8XgAAYjLf.jpg?raw=true",
      "url": "https://pieces.app/",
      "button": {
        "Watch Video": "https://www.youtube.com/watch?v=4V7BEJ7edEA",
        "Join": "https://shawncharles.com/"
      }
    },
    "Go Beyond Chat: Visualize and Act on Your Data with Xano and Thesys":{
      "title": "Go Beyond Chat: Visualize and Act on Your Data with Xano and Thesys",
      "type": "video",
      "subTitle": "Generative UI, Xano, Thesys C1",
      "keywords": "Xano Thesys C1 Generative UI Data Actions",
      "description": "Live session by Xano + Thesys — a practical look at using Generative UI to query data and take action from within the interface.",
      "image": "https://www.youtube.com/embed/FsnqOqxQDyU?si=iceF8ZUfRvwzqOIa&amp;start=3235",
      "url": "https://www.xano.com/events/go-beyond-chat-visualize-and-act-on-your-data-with-thesys",
      "button": {
        "Watch Video": "https://www.youtube.com/watch?v=FsnqOqxQDyU",
        "Code Repo": "https://github.com/thesysdev/examples"
      }
    },
    "Build CoinGecko Analytics Agents powered by Thesys Generative UI":{
      "title": "Build CoinGecko Analytics Agents powered by Thesys Generative UI",
      "type": "video",
      "subTitle": "CoinGecko MCP, Thesys Generative UI",
      "keywords": "CoinGecko MCP Thesys C1 Analytics Agents",
      "description": "Workshop on integrating the CoinGecko MCP to turn natural-language questions into interactive, real-time analytics with Thesys Generative UI components.",
      "image": "https://www.youtube.com/embed/oZP61tui0O0?si=iceF8ZUfRvwzqOIa&amp;start=3235",
      "url": "https://medium.com/@ShawnBasquiat/building-a-coin-gecko-ai-dashboard-using-thesys-generative-ui-1c77820f4d36",
      "button": {
        "Watch Video": "https://www.youtube.com/@ShawnBasquiat",
        "Code Repo": "https://github.com/CharlesCreativeContent/CoinGecko-Thesys-MCP"
      }
    },
    "The Hunt 🎤🔥 (≈20,000 Attendees)":{
      "title": "The Hunt 🎤🔥 (≈20,000 Attendees)",
      "type": "event",
      "subTitle": "Career Strategies, Tech Job Market",
      "keywords": "The Hunt Career Job Search Tech Industry",
      "description": "Comprehensive guide offering strategies, tips, and insights for navigating the competitive tech industry job market.",
      "image": "https://github.com/CharlesCreativeContent/Portfolio2021/blob/main/images/Dark%20Blue%20and%20Yellow%20Modern%20Business%20Strategy%20Live%20Webinar%20Instagram%20Post.gif?raw=true",
      "url": "https://shawncharles.com/aboutme",
      "button": {
        "Join": "https://shawncharles.com/aboutme"
      }
    },
    "Daily.dev: Being a Dev in 2024 (3.4K Attendees)":{
      "title": "Daily.dev: Being a Dev in 2024 (3.4K Attendees)",
      "type": "event",
      "subTitle": "Developer Trends, Communities",
      "keywords": "daily.dev Developer Trends Communities",
      "description": "Explores the evolving landscape of software development—latest technologies, industry trends, and the skills required to succeed.",
      "image": "https://github.com/CharlesCreativeContent/myImages/raw/main/images/spaces/francesco-being-a-dev-in-2024.jpeg?raw=true",
      "url": "https://daily.dev/",
      "button": {
        "Join": "https://daily.dev/"
      }
    }

  // --- Add more entries below in the same shape ---
  // "Another Project Title": {
  //   title: "Another Project Title",
  //   type: "video", // or "project"
  //   subTitle: "Tech, Framework, APIs",
  //   keywords: "JavaScript Express.js Runware SDK",
  //   description: "One-sentence summary of what this does.",
  //   image: "https://example.com/preview.jpg",
  //   button: {
  //     "Code Repo": "https://github.com/yourname/your-repo",
  //     "Watch Video": "https://youtube.com/your-video",
  //   },
  // },
};

window.contentData = contentData;