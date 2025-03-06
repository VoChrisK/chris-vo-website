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
    <div 
      className="h-screen flex justify-center items-center" 
      style={{ 
        background: `linear-gradient(rgba(0,0,0,.5),rgba(0,0,0,.5)), url(${heroImageUrl})`, 
        backgroundRepeat: 'no-repeat', 
        backgroundSize: 'cover', 
        backgroundPosition: '50%' 
      }}
    >
      <div className="flex flex-col justify-center items-center text-center w-[53.125rem]">
        <h3>{ Introduction }</h3>
        <h1 className="text-6xl">{ Name }</h1>
        <p>{ Description }</p>
      </div>
    </div>
  );
}

export default HeroSection;