import { JobType, NavOption, SlideItem } from "./types";
import cpp from 'programming-languages-logos/src/cpp/cpp.png'
import python from 'programming-languages-logos/src/python/python.png'
import typescript from 'programming-languages-logos/src/typescript/typescript.png'
import javascript from 'programming-languages-logos/src/javascript/javascript.png'

// icons found at https://simpleicons.org/?q=redux
// background images https://www.playstation.com/en-us/wallpapers/

export const navOptions: NavOption[] = [
    {
        name: 'HOME',
        iconPath: './icons/house-solid.svg',
        link: '',
        alt: '',
    },
    {
        name: 'ABOUT APPLICATION',
        iconPath: './icons/circle-question.svg',
        link: '',
        alt: '',
    },
    {
        name: 'PROFESSIONAL PORTFOLIO',
        iconPath: './icons/user-tie-solid.svg',
        link: '',
        alt: '',
    },
    {
        name: 'AWARDS',
        iconPath: './icons/trophy.svg',
        link: '',
        alt: '',
    },
    {
        name: 'settings',
        iconPath: './icons/gear-solid.svg',
        link: 'settings',
        alt: '',
    },
];

export const slideItems: SlideItem[] = [
    { 
        imgPath: '/projects/about.png', 
        section: "about" },
    { 
        imgPath: '/projects/skills3.png', 
        section: "skills"},
    { 
        imgPath: '/projects/experience.png', 
        section: "experience"},
    { 
        imgPath: '/projects/contact3.png', 
        section: "contact"},
    { 
        imgPath: '/projects/figma.png', 
        section: "project1"},
    { 
        imgPath: '/projects/net.png', 
        section: "project2"},
    { 
        imgPath: '/projects/pictureper.png', 
        section: "project4"},
    { 
        imgPath: '/projects/npm.png', 
        section: "project3"},
    { 
        imgPath: '/projects/aboutApp.png', 
        section: "info"
    },
];

export const skills = [
    {
        skillType: "Programming Languages",
        skillList: [
            {name: "Javascript", icon: javascript},
            {name: "Typescript", icon: typescript},
            {name: "C++", icon: cpp},
            {name: "Python", icon: python},
        ]
    },
    {
        skillType: "Frontend Frameworks/Libraries",
        skillList: [
            {name: "React", icon: '/icons/react.svg'},
            {name: "Next.js", icon: '/icons/next.svg'},
            {name: "Shadcn UI", icon: '/icons/shadcnui.svg'},
            {name: "D3.js", icon: '/icons/d3.svg'},
            {name: "Tailwind CSS", icon: '/icons/tailwindcss.svg'},
            {name: "JQuery", icon: '/icons/jquery.svg'},
        ]
    },
    {
        skillType: "State Management & Version Control",
        skillList: [
            {name: "Redux", icon: '/icons/redux.svg'},
            {name: "Git", icon: '/icons/git.svg'},
            {name: "Github", icon: '/icons/github.svg'},
        ]
    },
    {
        skillType: "CI/CD & Deployment",
        skillList: [
            {name: "Amazon AWS", icon: '/icons/aws.png'},
            {name: "Vercel", icon: '/icons/vercel.svg'},
            {name: "Netlify", icon: '/icons/netlify.svg'},
            {name: "GitHub Actions", icon: '/icons/githubactions.svg'},
            {name: "Heroku", icon: '/icons/heroku.png'}
        ]
    },
]

export const jobDetails: JobType[] = [
    {
        company: 'GBCS Group',
        title: 'Frontend Developer Intern',
        imgPath: '/jobs/gbcs.png',
        desc: 'This was a great learning opportunity. Not only did I gain new technical skills, but I also learned how to thrive in a startup environment. I had the incredible opportunity to lead a team of nine developers in building a large-scale Next.js application. I had the excellent opportunity of leading a team of 9 developers in the creation of a large-scale Next.js application.',
        techStack: [
            {name: 'Next.js', imgPath: '/icons/next.svg'},
            {name: 'Typescript', imgPath: typescript},
            {name: 'Javascript', imgPath: javascript},
            {name: 'React', imgPath: '/icons/react.svg'},
            {name: 'Tailwind CSS', imgPath: '/icons/tailwindcss.svg'},
            {name: 'D3', imgPath: '/icons/d3.svg'},
            {name: 'Github', imgPath: '/icons/github.svg'},
        ]
    },
    {
        company: 'Phoenix College NASA Ascend',
        title: 'Software Engineer Intern',
        imgPath: '/jobs/nasa.png',
        desc: 'I am glad to have had the opportunity to launch a weather balloon payload over 100,000 feet into the atmosphere. Working alongside a team of both skilled and novice engineers, we successfully achieved our flight goals and gathered valuable data on the limits of our atmosphere—all while learning in an engaging environment.',
        techStack: [
            {name: 'Python', imgPath: python},
            {name: 'C++', imgPath: cpp},
            {name: 'Raspberry Pi', imgPath: '/jobs/rasp.png'},
            {name: 'Arduino', imgPath: '/jobs/arduino.png'},
        ]
    },
]

export const projects = [
    {
        name: 'Startup 3 -  React App',
        desc: 'A fully responsive web application developed based on the provided Figma design, ensuring seamless user experience and pixel-perfect implementation. The project includes attention to detail in translating the design into functional code, with optimized performance and cross-browser compatibility.',
        gitLink: 'https://github.com/SamQueen/figma-practice',
        demoLink: 'https://figmapractice22.netlify.app/',
        imgPath: '/projects/figma.png',
        key: 'project1',
        background: '/projects/figma2.png',
        techStack: [
            {name: 'React', imgPath: '/icons/react.svg'},
            {name: 'Typescript', imgPath: typescript},
            {name: 'Tailwind CSS', imgPath: '/icons/tailwindcss.svg'},
            {name: 'Github', imgPath: '/icons/github.svg'},
        ]
    },
    {
        name: 'Neflix Clone - React App',
        desc: "Presenting a React-based portfolio project showcasing a Netflix-inspired streaming platform, integrated with the TMDB API for an extensive collection of movies and TV shows.",
        gitLink: 'https://github.com/SamQueen/movie-app',
        demoLink: 'https://havesomemovies.netlify.app/?fbclid=IwAR1NxYMgHKLDX7DU7Hs3bIVy6HOL7WeyrPtP-ks2y2xzFR1ZBnCcL4F4CwA',
        imgPath: '/projects/net.png',
        key: 'project2',
        background: '',
        techStack: [
            {name: 'React', imgPath: '/icons/react.svg'},
            {name: 'Typescript', imgPath: typescript},
            {name: 'Tailwind CSS', imgPath: '/icons/tailwindcss.svg'},
            {name: 'Git Version Control', imgPath: '/icons/git.svg'},
        ]
    },
    {
        name: 'Flexible Slide - NPM Package',
        desc: 'A responsive React carousel designed for integration into my Netflix clone project, encapsulated within an npm package for versatile usage across various projects.',
        gitLink: 'https://github.com/SamQueen/react-flexible-slide',
        demoLink: 'https://www.npmjs.com/package/react-flexible-slide?activeTab=readme',
        imgPath: '/projects/npm.png',
        key: 'project3',
        background: '',
        techStack: [
            {name: 'React', imgPath: '/icons/react.svg'},
            {name: 'Typescript', imgPath: typescript},
            {name: 'Git Version Control', imgPath: '/icons/git.svg'},
        ]
    },
    {
        name: 'Picture Perfect - Next.js Project',
        desc: "An Instagram-inspired CRUD application enabling users to log in, share photos, comment on posts, and personalize their profiles.",
        gitLink: 'https://github.com/SamQueen/Picture-Perfect-Client',
        demoLink: 'https://www.pictureper.com/sign-in',
        imgPath: '/projects/pictureper.png',
        key: 'project4',
        background: '',
        techStack: [
            {name: 'Next.js', imgPath: '/icons/next.svg'},
            {name: 'Javascript', imgPath: javascript},
            {name: 'express', imgPath: '/icons/expressjs.svg'},
            {name: 'Node JS', imgPath: '/icons/nodedotjs.svg'},
            {name: 'MySQL', imgPath: '/icons/mysql.svg'},
            {name: 'AWS', imgPath: '/icons/aws.png'},
        ]
    },
]

export const settingOptions = [
    {
        name: "Theme",
        path: "",
        imgPath: "/setting-icons/palette-solid.svg",
    },
    {
        name: "Background Select",
        path: "",
        imgPath: "/setting-icons/image-solid.svg",
    },
    {
        name: "Sound Effects",
        path: "",
        imgPath: "/setting-icons/headphones-solid.svg",
    },
    {
        name: "Trophy System and Controls",
        path: "",
        imgPath: "/icons/trophy.svg",
    },
    {
        name: "Username & Avatar Profile",
        path: "",
        imgPath: "/setting-icons/user-solid.svg",
    },
    {
        name: "Login Settings",
        path: "",
        imgPath: "/setting-icons/arrow-right-to-bracket-solid.svg",
    },
    {
        name: "Parental Controls",
        path: "",
        imgPath: "/setting-icons/lock-solid.svg",
    },
    {
        name: "Network",
        path: "",
        imgPath: "/setting-icons/wifi-solid.svg",
    },
    {
        name: "Devices",
        path: "",
        imgPath: "/setting-icons/gamepad-solid.svg",
    },
    {
        name: "USB Storage Devices",
        path: "",
        imgPath: "/setting-icons/usb-brands-solid.svg",
    },
    {
        name: "External Keyboard",
        path: "",
        imgPath: "/setting-icons/keyboard-solid.svg",
    },
    {
        name: "Turn off Device",
        path: "",
        imgPath: "/setting-icons/power-off-solid.svg",
    },
    
]

export const socials = [
    {
        link: 'https://www.linkedin.com/in/samuel-queen-599298272/',
        imgPath: '/social-icons/linkedin.png'
    },
    {
        link: 'https://github.com/SamQueen',
        imgPath: '/social-icons/github.png'
    },
    {
        link: '',
        imgPath: '/social-icons/gmail.png'
    },
    {
        link: 'http://upwork.com/',
        imgPath: '/social-icons/upwork.png'
    },
]