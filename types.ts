import { StaticImageData } from "next/image";

export type NavOption = {
    name: string;
    iconPath: string;
    alt: string;
}

export type SlideItem = {
    imgPath: string;
    section: string;
}

export type JobType = {
    company: string;
    title: string;
    imgPath: string;
    desc: string;
    techStack: { name: string; imgPath: string | StaticImageData }[];
}