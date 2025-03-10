'use server';

import React from "react";
import HeroSection from "./sections/HeroSection";
import { StickyFooter } from "./StickyFooter";
import { getContent, getImages } from "@/utils/Strapi";
import { Navbar } from "./Navbar";
import AboutSection from "./sections/AboutSection";
import { ApiPath } from "@/models/apiPaths";

interface IHeader {
  About_Header: string;
  Experience_Header: string;
  Projects_Header: string;
}

const ImageProvider: React.FC = async () => {
  const [{ About_Header, Experience_Header, Projects_Header }]: IHeader[] = await getContent(ApiPath.Header);
  const images = await getImages();
  const heroImages = images.filter((image: any) => image.name.startsWith('hero_image'));
  const portraitPhoto = images.filter((image: any) => image.name.startsWith('portrait_photo'));
  const cvLogo = images.filter((image: any) => image.name.startsWith('cv_logo'));
  const resumeIcons = images.filter((image: any) => image.name.startsWith('resume_icon'));

  return (
    <>
      <Navbar cvLogo={cvLogo} />
      <HeroSection heroImages={heroImages} />
      <AboutSection portraitPhoto={portraitPhoto} header={About_Header} />
      <StickyFooter resumeIcons={resumeIcons} />
    </>
  );
}

export default ImageProvider;
