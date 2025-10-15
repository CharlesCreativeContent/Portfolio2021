// contentData.js
// Data object keyed by content title; values are the content properties.
// You can import this with: import contentData from "./contentData.js";

const contentData = {
  "Runware Pokémon Generator": {
    title: "Runware Pokémon Generator: AI Image and Video Generation",
    // Choose ONE type string; `project` | `video` was pseudo-syntax
    type: "project",
    subTitle: "JavaScript, Express.js, Runware SDK",
    keywords: "JavaScript Express.js Runware SDK",
    description:
      "Generates Pokémon-inspired images and an idle-animation video for a Pokédex entry using Runware (image gen) and Google Veo3 (video).",
    image: "https://github.com/CharlesCreativeContent/runware-pokemon-generator/raw/main/public/runware.gif?raw=true",
    url: "https://github.com/CharlesCreativeContent/runware-pokemon-generator",
    button: {
      "Code Repo": "https://github.com/CharlesCreativeContent/runware-pokemon-generator",
      "Watch Video": "https://youtu.be/oQU5E0bBPYQ",
    },
  },

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