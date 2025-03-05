'use server';

import { ApiPath } from "@/models/apiPaths";
import { getContent } from "@/utils/Strapi";
import React from "react";

export interface IAboutContent {
  Description: string; 
}

const AboutSection: React.FC = async () => {
  const { Description }: IAboutContent = await getContent(ApiPath.About);

  return (
    <>
      <p>{ Description }</p>
    </>
  );
}

export default AboutSection;
