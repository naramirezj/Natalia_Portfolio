import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    java,
    ember,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    threejs,
    cp_logo,
    c_logo,
    kotlin,
    python,
    r,
    marketanalysis,
    map,
    cslovers,
    spacegame,
    portfolio_optimization_ml
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "skills",
      title: "Skills",
    },
    {
      id: "works",
      title: "Works",
    },
    {
      id: "experience",
      title: "Experience",
    },
    {
      id: "nataliaAgent",
      title: "Natalia AI"
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Java",
      icon: java,
      description: "Spring Boot framework for Back-End development"
    },
    {
      title: "Ember.js",
      icon: ember,
      description: "Front-End development"
    },
    {
      title: "Docker",
      icon: docker,
      description: "Running containers for server instances and testing"
    },
    {
      title: "C++",
      icon: cp_logo,
      description: "Algorithm definition"
    },
    {
      title: "C",
      icon: c_logo,
      description: "Operating Systems, CUDA, and MyRoC"

    },
    {
      title: "Kotlin",
      icon: kotlin,
      description: "Mobile Software Development in Android Studio"
    },
    {
      title: "React",
      icon: reactjs,
      description: "Front-end Development, used to build this page"
    },
    {
      title: "Python",
      icon: python,
      description: "Data Analysis and Machine Learning Models"
    },
    {
      title: "R",
      icon: r,
      description: "Data Cleaning and Visualizations Design"
    },
    {
      title: "TypeScript",
      icon: typescript,
      description: "Backend development, used to create NataliaAI"
    }


  ];
  
  const technologies = [
    {
      name: "Java",
      icon: java,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  

  const projects = [
    {
      name: "AirBnb Market Analysis",
      description:
        "Shiny App that displays interactive visualizations to perform an Airbnb market analysis in four Californian cities: Big Bear Lake, Big Bear City, Joshua Tree, and Yucca Valley. Users can explore key metrics like nightly rate and occupancy based on different property features, such as number of rooms and bathrooms, and compare revenue across cities. Data cleaning and visualizations were done in R.",
      tags: [
        {
          name: "R",
          color: "blue-text-gradient",
        },
        {
          name: "Shiny",
          color: "green-text-gradient",
        },
        {
          name: "MarketAnalysis",
          color: "pink-text-gradient",
        },
      ],
      image: marketanalysis,
      source_code_link: "https://github.com/naramirezj/SoftwareDev_Project",
    },
    {
      name: "IGE Off-Campus Program Visualization",
      description:
        "Shiny application that shows six interactive visualizations for current and future Grinnell students interested in learning more about off-campus programs offered by the Institute for Global Engagement. I developed the main map visualiation using leaflet, it displays the location of all available off-campus programs in the form of clusters that when clicked show individual city markers.",
      tags: [
        {
          name: "OffCampusPrograms",
          color: "blue-text-gradient",
        },
        {
          name: "Shiny",
          color: "green-text-gradient",
        },
        {
          name: "Map",
          color: "pink-text-gradient",
        },
      ],
      image: map,
      source_code_link: "https://caitlinabreu.shinyapps.io/IGE_and_Off_Campus_Study_Visualizations/",
    },
    {
      name: "CSLovers",
      description:
        "Android App developed using Kotlin and Android Studio that personalizes engineering job search. It prompts the user for working preferences such as location, level of experience, and subject. Then, the app displays a personalized list of open jobs. The user can click and aply for a job or save it as a 'loved' job for later.",
      tags: [
        {
          name: "Android",
          color: "blue-text-gradient",
        },
        {
          name: "Kotlin",
          color: "green-text-gradient",
        },
        {
          name: "Engineering",
          color: "pink-text-gradient",
        },
      ],
      image: cslovers,
      source_code_link: "https://github.com/naramirezj/CSLovers",
    },
    {
      name: "Space Shooting Web Game",
      description:
        "Web Game built using WebGL and Kotlin where the user is a spaceship and must eliminate all aliens by shooting them. All objects were rendered as quads through GLSL and given physics to interact with each other. The user can move up, down, left, right by 'propulsion' and shoot the aliens following the spaceship using space.",
      tags: [
        {
          name: "WebGL",
          color: "blue-text-gradient",
        },
        {
          name: "Kotlin",
          color: "green-text-gradient",
        },
        {
          name: "GLSL",
          color: "pink-text-gradient",
        },
      ],
      image: spacegame,
      source_code_link: "https://github.com/naramirezj/SpaceShootingGame",
    },
    {
      name: "Neural Network Portfolio Optimization",
      description:
        "Prediction of future returns by portfolio assets over a period of three years. Subsequently, compared if a weighted portfolio based on volatility minimization through Mean-Variance optimization has a lesser predicted risk than a non-weighted portfolio.",
      tags: [
        {
          name: "Python",
          color: "blue-text-gradient",
        },
        {
          name: "Pandas",
          color: "green-text-gradient",
        },
        {
          name: "Neural Network Architecture",
          color: "pink-text-gradient",
        },
      ],
      image: portfolio_optimization_ml,
      source_code_link: "https://github.com/sford6023/ML-Final-Project/blob/main/Portfolio_Optimization_Diversified_Final.ipynb",
    }
  ];
  
  export { services, technologies, projects };