export enum ImageFilename {
  Hero1 = 'hero_image_1.jpg',
  Hero2 = 'hero_image_2.jpg',
  Hero3 = 'hero_image_3.jpg',
  Hero4 = 'hero_image_4.jpg',
  Portrait = 'portrait_photo.jpg',
  ResumeIcon1 = 'resume_icon_1.png',
  ResumeIcon2 = 'resume_icon_2.png',
  Favicon = 'favicon.png'
}

export interface Image {
  id: number,
  name: string,
  width: number,
  height: number,
  url: string
}