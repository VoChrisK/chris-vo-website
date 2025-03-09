import { ApiPath } from "@/models/apiPaths";

export const getContent = async (contentPath: ApiPath) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_URI}${contentPath}`);
  const content = await res.json();

  return content.data;
}

export const getImages = async () => {
  const data = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_URI}/api/upload/files`);
  const images = await data.json();

  return images;
}
