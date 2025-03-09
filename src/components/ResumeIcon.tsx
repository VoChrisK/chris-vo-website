import React, { useState } from "react";

interface ResumeIconProps {
  resumeIcons: any;
}

export const ResumeIcon: React.FC<ResumeIconProps> = ({ resumeIcons }) => {
  const [ resumeIconUrl, setResumeIconUrl ] = useState(resumeIcons[0].url)

  const handleOnMouseOver = () => {
    setResumeIconUrl(resumeIcons[1].url);
  }

  const handleonMouseOut = () => {
    setResumeIconUrl(resumeIcons[0].url);
  }

  return (
    <a 
      className="w-[2.375rem]"
      onMouseOver={() => handleOnMouseOver()}
      onMouseOut={() => handleonMouseOut()}
    >
      <img src={`${process.env.NEXT_PUBLIC_STRAPI_URI + resumeIconUrl}`} />
    </a>
  );
}
