'use server';

import React from "react";

export interface IAboutContent {
  Description: string; 
}

const AboutSection: React.FC = async () => {
  const data = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_URI}/api/abouts`);
  const aboutContent = await data.json();
  const { Description }: IAboutContent = aboutContent.data[0];

  return (
    <>
      <p>{ Description }</p>
    </>
  );
}

export default AboutSection;
