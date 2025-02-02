import { JobType, NavOption, SlideItem } from "./types";
import cpp from 'programming-languages-logos/src/cpp/cpp.png'
import python from 'programming-languages-logos/src/python/python.png'
import typescript from 'programming-languages-logos/src/typescript/typescript.png'
import javascript from 'programming-languages-logos/src/javascript/javascript.png'

// icons found at https://simpleicons.org/?q=redux

export const navOptions: NavOption[] = [
    {
        name: 'settings',
        iconPath: './icons/house-solid.svg',
        alt: '',
    },
    {
        name: 'settings',
        iconPath: './icons/circle-question.svg',
        alt: '',
    },
    {
        name: 'settings',
        iconPath: './icons/user-tie-solid.svg',
        alt: '',
    },
    {
        name: 'settings',
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
        imgPath: '/projects/npm.png', 
        section: "project3"},
    { 
        imgPath: '/projects/pictureper.png', 
        section: "proj3ct4"},
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
        skillType: "More Tools",
        skillList: [
            {name: "Redux", icon: '/icons/redux.svg'},
            {name: "Git", icon: '/icons/git.svg'},
            {name: "Github", icon: '/icons/github.svg'},
        ]
    },
    {
        skillType: "CI/CD & Deployment",
        skillList: [
            {name: "Vercel", icon: '/icons/vercel.svg'},
            {name: "Netlify", icon: '/icons/netlify.svg'},
            {name: "GitHub Actions", icon: '/icons/githubactions.svg'},
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