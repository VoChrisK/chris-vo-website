'use server';

import React from "react";
import HeroSection from "./sections/HeroSection";
import { StickyFooter } from "./StickyFooter";
import { getImages } from "@/utils/Strapi";

const ImageProvider: React.FC = async () => {
  const images = await getImages();
  const heroImages = images.filter((image: any) => image.name.startsWith('hero_image'));

  return (
    <>
      <HeroSection heroImages={heroImages} />
      <StickyFooter />
    </>
  );
}

export default ImageProvider;
