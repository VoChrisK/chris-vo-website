'use server';

import React from "react";
import HeroSection from "./sections/HeroSection";
import { StickyFooter } from "./StickyFooter";
import { getImages } from "@/utils/Strapi";
import { Navbar } from "./Navbar";

const ImageProvider: React.FC = async () => {
  const images = await getImages();
  const heroImages = images.filter((image: any) => image.name.startsWith('hero_image'));
  const cvLogo = images.filter((image: any) => image.name.startsWith('cv_logo'));
  const resumeIcons = images.filter((image: any) => image.name.startsWith('resume_icon'));

  return (
    <>
      <Navbar cvLogo={cvLogo} />
      <HeroSection heroImages={heroImages} />
      <StickyFooter resumeIcons={resumeIcons} />
    </>
  );
}

export default ImageProvider;
