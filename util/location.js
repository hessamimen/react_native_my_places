import { GOOGLE_MAP_API_KEY } from "@env";

//The .env adds a ";" at the end of the API key which cause issue, currently solve the issue in the this way
const API_KEY = GOOGLE_MAP_API_KEY.replace(/;$/, "");

export function getMapPreview(lat, lng) {
  const imagePreviewURL = `https://maps.googleapis.com/maps/api/staticmap?center=${lat},${lng}&zoom=14&size=400x200&maptype=roadmap&markers=color:red%7Clabel:S%7C${lat},${lng}&key=${API_KEY}`;

  return imagePreviewURL;
}
