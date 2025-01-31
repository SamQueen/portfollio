import { NavOption, SlideItem } from "./types";
import swift from 'programming-languages-logos/src/swift/swift.svg'
import cpp from 'programming-languages-logos/src/cpp/cpp.png'
import python from 'programming-languages-logos/src/python/python.png'
import typescript from 'programming-languages-logos/src/typescript/typescript.png'
import javascript from 'programming-languages-logos/src/javascript/javascript.png'

// icons found at https://simpleicons.org/?q=redux

export const navOptions: NavOption[] = [
    {
        name: 'settings',
        iconPath: './icons/trophy.svg',
        alt: '',
    },
    {
        name: 'settings',
        iconPath: './icons/trophy.svg',
        alt: '',
    },
    {
        name: 'settings',
        iconPath: './icons/trophy.svg',
        alt: '',
    },
    {
        name: 'settings',
        iconPath: './icons/trophy.svg',
        alt: '',
    },
    {
        name: 'settings',
        iconPath: './icons/trophy.svg',
        alt: '',
    },
    {
        name: 'settings',
        iconPath: './icons/trophy.svg',
        alt: '',
    },
    {
        name: 'settings',
        iconPath: './icons/trophy.svg',
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
        imgPath: '/ghost.webp', 
        section: "ghost"},
    { 
        imgPath: '/ghost.webp', 
        section: "ghost"
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