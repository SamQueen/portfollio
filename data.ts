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
        alt: '',
    },
    {
        name: 'ABOUT APPLICATION',
        iconPath: './icons/circle-question.svg',
        alt: '',
    },
    {
        name: 'PROFESSIONAL PORTFOLIO',
        iconPath: './icons/user-tie-solid.svg',
        alt: '',
    },
    {
        name: 'AWARDS',
        iconPath: './icons/trophy.svg',
        alt: '',
    },
    {
        name: 'settings',
        iconPath: './icons/gear-solid.svg',
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
        gitLink: '',
        demoLink: '',
        imgPath: '/projects/figma.png',
        key: 'project1',
        background: '/projects/figma2.png',
        techStack: [
            '/icons/react.svg',
            typescript,
            '/icons/tailwindcss.svg',
            '/icons/github.svg',
        ]
    },
    {
        name: 'Neflix Clone - React App',
        desc: "Presenting a React-based portfolio project showcasing a Netflix-inspired streaming platform, integrated with the TMDB API for an extensive collection of movies and TV shows.",
        gitLink: '',
        demoLink: '',
        imgPath: '/projects/net.png',
        key: 'project2',
        background: '',
        techStack: [
            '/icons/react.svg',
            typescript,
            '/icons/tailwindcss.svg',
            '/icons/git.svg',
        ]
    },
    {
        name: 'Flexible Slide - NPM Package',
        desc: 'A responsive React carousel designed for integration into my Netflix clone project, encapsulated within an npm package for versatile usage across various projects.',
        gitLink: '',
        demoLink: '',
        imgPath: '/projects/npm.png',
        key: 'project3',
        background: '',
        techStack: [
            '/icons/react.svg',
            typescript,
            '/icons/git.svg',
        ]
    },
    {
        name: 'Picture Perfect - Next.js Project',
        desc: "An Instagram-inspired CRUD application enabling users to log in, share photos, comment on posts, and personalize their profiles.",
        gitLink: '',
        demoLink: '',
        imgPath: '/projects/pictureper.png',
        key: 'project4',
        background: '',
        techStack: [
            '/icons/next.svg',
            javascript,
            '/jobs/rasp.png',
        ]
    },
]