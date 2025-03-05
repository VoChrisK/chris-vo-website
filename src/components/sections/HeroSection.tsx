'use server';

import { ApiPath } from "@/models/apiPaths";
import { getContent } from "@/utils/Strapi";
import React from "react";

export interface IHeroSectionProps {
  heroImages: any
}

export interface IHeroContent {
  Name: string;
  Introduction: string;
  Description: string; 
}

const HeroSection: React.FC<IHeroSectionProps> = async ({ heroImages }) => {
  const { Name, Introduction, Description }: IHeroContent = await getContent(ApiPath.Heroes);
  const randomHeroImage = heroImages[Math.floor(Math.random() * 4)];
  const heroImageUrl = process.env.NEXT_PUBLIC_STRAPI_URI + randomHeroImage.url;

  return (
    <div className="h-screen bg-no-repeat bg-cover bg-[50%]" style={{ backgroundImage: `url(${heroImageUrl})` }}>
      <h3>{ Introduction }</h3>
      <h1>{ Name }</h1>
      <p>{ Description }</p>
    </div>
  );
}

export default HeroSection;