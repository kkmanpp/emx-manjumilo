export const getImageSrc = (url) => {
  if (process.env.PRODUCT_DATA_SOURCE === "Strapi") {
    // Add Strapi base URL only if the URL is relative
    if (url.startsWith("/")) {
      return `${process.env.NEXT_PUBLIC_STRAPI_URL}${url}`;
    }
    return url; // Return as-is for absolute URLs
  }

  return url; // For the public directory, simply return the URL as-is
};
