'use client';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin, faAngellist } from "@fortawesome/free-brands-svg-icons";
import React from "react";
import { ResumeIcon } from "./ResumeIcon";

interface StickyFooterProps {
  resumeIcons: any;
}

export const StickyFooter: React.FC<StickyFooterProps> = ({ resumeIcons }) => {
  return (
    <div className="flex fixed bottom-0 left=0 w-screen z-1 justify-between p-2">
      <nav className="flex justify-around w-[15.625rem]">
        <FontAwesomeIcon className="h-9" icon={faGithub} />
        <FontAwesomeIcon className="h-9" icon={faLinkedin} />
        <FontAwesomeIcon className="h-9" icon={faAngellist} />
        <ResumeIcon resumeIcons={resumeIcons} />
      </nav>
      <nav className="mr-[2rem]">
        <a href="mailto:vo.chris.k@gmail.com">vo.chris.k@gmail.com</a>
      </nav>
    </div>
  );
}
