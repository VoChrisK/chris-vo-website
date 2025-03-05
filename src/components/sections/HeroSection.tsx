'use server';

import React from "react";

export interface IHeroContent {
  Name: string;
  Introduction: string;
  Description: string; 
}

const HeroSection: React.FC = async () => {
  const data = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_URI}/api/heroes`);
  const heroContent = await data.json();
  const { Name, Introduction, Description }: IHeroContent = heroContent.data[0];

  return (
    <>
      <h3>{ Introduction }</h3>
      <h1>{ Name }</h1>
      <p>{ Description }</p>
    </>
  );
}

export default HeroSection;
