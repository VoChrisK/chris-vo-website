'use server';

import { ApiPath } from "@/models/apiPaths";
import { getContent } from "@/utils/Strapi";
import React from "react";
import "./../../app/section.css";

export interface IAboutSectionProps {
  portraitPhoto: any;
  header: string;
}

export interface IAboutContent {
  Past_Description: string;
  Present_Description: string;
  Recreational_Description: string;
  Skills_Description: string;
}

const AboutSection: React.FC<IAboutSectionProps> = async ({ portraitPhoto, header }) => {
  const [{ 
    Past_Description, 
    Present_Description, 
    Recreational_Description, 
    Skills_Description 
  }]: IAboutContent[] = await getContent(ApiPath.About);
  const portraitPhotoUrl = process.env.NEXT_PUBLIC_STRAPI_URI + portraitPhoto[0].url;

  return (
    <div className="section h-screen">
      <h1 className="header">{ header }</h1>
      <div className="flex justify-around">
        <img className="w-[20.3125rem]" src={`${portraitPhotoUrl}`} />
        <div className="flex flex-col w-[53.125rem]">
          <p className="mb-6">{ Past_Description }</p>
          <p className="mb-6">{ Present_Description }</p>
          <p className="mb-6">{ Recreational_Description }</p>
          <p>{ Skills_Description }</p>
        </div>
      </div>
    </div>
  );
}

export default AboutSection;
