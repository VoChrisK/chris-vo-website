"use client"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import React from "react";

interface StickyFooterProps {

}

export const StickyFooter: React.FC<StickyFooterProps> = () => {
  return (
    <div className="flex fixed bottom-0 left=0 w-screen z-1 justify-between px-4">
      <nav className="flex">
        <FontAwesomeIcon className="h-9" icon={faGithub} />
        <FontAwesomeIcon className="h-9" icon={faLinkedin} />
      </nav>
      <nav className="items-center">
        <a href="mailto:vo.chris.k@gmail.com">vo.chris.k@gmail.com</a>
      </nav>
    </div>
  );
}
