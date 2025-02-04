"use client"
import Slider from '../components/Slider'
import Navigator from "@/components/Navigator";
import { useEffect } from "react";
import AboutSection from "@/components/sections/AboutSection";

import { disableBottom, disableNav, disableSlide, enableNav, enableSlide, setSection } from "@/lib/slice";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/lib/store";
import SkillsSection from "@/components/sections/SkillsSection";
import ExperienceSection from "@/components/sections/ExperienceSection";
import ContactSection from "@/components/sections/ContactSection";
import ProjectSection from '@/components/sections/ProjectSection';

export default function Home() {
  // redux tools
  const focusNav = useSelector((state: RootState) => state.focusNav);
  const focusSlider = useSelector((state: RootState) => state.focusSlide);
  const focusBottom = useSelector((state: RootState) => state.focusBottom);
  const activeSection = useSelector((state: RootState) => state.activeSection);
  const dispatch = useDispatch();

  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      
      if (event.key === 'w' || event.key === 'ArrowUp') {
        if (focusSlider) {
          dispatch(enableNav());
          dispatch(disableSlide());
        }

        if (focusBottom) {
          dispatch(enableSlide());
          dispatch(disableBottom());
          dispatch(setSection(''));
        }
      }

      if (event.key === 's' || event.key === 'ArrowDown') {
        
        if (focusNav) {
          dispatch(disableNav());
          dispatch(enableSlide());
        }
      }
    }

    window.addEventListener("keydown", handleKeyPress);

    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    }
  }, [focusNav, focusSlider, focusBottom]);

  return (
    <div 
      className="bg-[#4c6cd7] w-screen h-screen px-5 relative bg-center bg-cover overflow-x-hidden overflow-y-auto pb-20" 
      style={{ backgroundImage: 'url(/ps4background3.jpg)'}}
    >

        {/* <LoadingScreen /> */}

        <div className={`${focusBottom && 'translate-y-[-200%]'} duration-500`}>
          <Navigator showNav={focusNav} />
          <Slider 
            focusSlider={focusSlider}
          />
        </div>


        {(activeSection === 'about') && (
          <AboutSection />
        )}

        {(activeSection === 'skills') && (
          <SkillsSection />
        )}

        {(activeSection === 'experience') && (
          <ExperienceSection />
        )}

        {(activeSection === 'contact') && (
          <ContactSection />
        )}

        {(activeSection === 'project1') && (
          <ProjectSection projectKey={activeSection} />
        )}

        {(activeSection === 'project2') && (
          <ProjectSection projectKey={activeSection} />
        )}

        {(activeSection === 'project3') && (
          <ProjectSection projectKey={activeSection} />
        )}

        {(activeSection === 'project4') && (
          <ProjectSection projectKey={activeSection} />
        )}
    </div>
  );
}
