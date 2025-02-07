import { StaticImageData } from "next/image";

export type NavOption = {
    name: string;
    iconPath: string;
    alt: string;
    link: string;
}

export type SlideItem = {
    imgPath: string;
    section: string;
}

export type TechStack = {
    name: string;
    imgPath: string | StaticImageData;
}

export type JobType = {
    company: string;
    title: string;
    imgPath: string;
    desc: string;
    techStack: TechStack[];
}