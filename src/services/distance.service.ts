import { degreeToRadian } from "../utils/measurements";

export const calculateDistance = (
  destinationLat: number,
  destinationLon: number
): number => {
  const sourceLat: number = 33.893791;
  const sourceLon: number = 35.501778;

  if (
    (sourceLat == destinationLat && sourceLon == destinationLon) ||
    destinationLat < -90 ||
    destinationLat > 90 ||
    destinationLon < -180 ||
    destinationLon > 180
  ) {
    return 0;
  } else {
    const radius = 6371;

    const dLat = degreeToRadian(destinationLat - sourceLat);

    const dLon = degreeToRadian(sourceLon - destinationLon);

    const theta: number = sourceLon - destinationLon;

    const a: number =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(degreeToRadian(sourceLat)) *
        Math.cos(degreeToRadian(destinationLat)) *
        Math.sin(dLon / 2) *
        Math.sin(dLon / 2);

    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

    const distance = radius * c;

    return Math.round(distance);
  }
};
