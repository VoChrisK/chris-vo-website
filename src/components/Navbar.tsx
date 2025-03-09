'use client';

import { ApiPath } from "@/models/apiPaths";
import { getContent } from "@/utils/Strapi";
import React, { useEffect, useState } from "react";
import "../app/navbar.css";

export interface INavbarProps {
  cvLogo: any
}

interface INavbarContent {
  Navigation_Links: string;
}

export const Navbar: React.FC<INavbarProps> = ({ cvLogo }) => {
  const [ navbarContent, setNavbarContent ] = useState<INavbarContent[]>([]);

  useEffect(() => {
    const getNavbarContent = async () => {
      const contentRes = await getContent(ApiPath.Navbar);
      const content: INavbarContent[] = contentRes.map(({ Navigation_Links }: any) => ({ Navigation_Links }));

      setNavbarContent(content)
    }

    getNavbarContent();
  }, []);

  const link = "https://chrisvo.dev/";
  const cvLogoUrl = process.env.NEXT_PUBLIC_STRAPI_URI + cvLogo[0].url;

  return (
    <nav className="flex fixed justify-between items-center bg-background h-[4rem] w-screen">
      <a className="ml-[1.875rem]" href={`${link}`}>
        <img className="
          w-[3.125rem] 
          h-[1.875rem] 
          p-[0.3125rem] 
          border-[3px] 
          border-solid 
          border-primary 
          bg-background 
          rounded-xl
        " 
        src={`${cvLogoUrl}`} />
      </a>
      <ul className="navigation-list flex justify-between w-[37.5rem] mr-[1.875rem]">
        {
          navbarContent.map((content) => <li className="navigation-link"><a>{ content.Navigation_Links }</a></li>)
        }
      </ul>
    </nav>
  );
}
