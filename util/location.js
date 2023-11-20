import { GOOGLE_MAP_API_KEY } from "@env";

//The .env adds a ";" at the end of the API key which cause issue, currently solve the issue in the this way
const API_KEY = GOOGLE_MAP_API_KEY.replace(/;$/, "");

export function getMapPreview(lat, lng) {
  const imagePreviewURL = `https://maps.googleapis.com/maps/api/staticmap?center=${lat},${lng}&zoom=14&size=400x200&maptype=roadmap&markers=color:red%7Clabel:S%7C${lat},${lng}&key=${API_KEY}`;

  return imagePreviewURL;
}

export async function getAddress(lat, lng) {
  const URL = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=${API_KEY}&enable_address_descriptor=true`;

  const response = await fetch(URL);

  if (!response.ok) {
    throw new Error("Failed to fetch address!");
  }

  const data = await response.json();
  const address = data.results[0].formatted_address;
  return address;
}
