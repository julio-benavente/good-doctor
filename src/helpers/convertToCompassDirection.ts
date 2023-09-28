export function convertToCompassDirection(latitude: number, longitude: number) {
  // Convert latitude to degrees, minutes, seconds
  const latDegrees = Math.floor(latitude);
  const latMinutesDecimal = (latitude - latDegrees) * 60;
  const latMinutes = Math.floor(latMinutesDecimal);
  const latSeconds = Math.round((latMinutesDecimal - latMinutes) * 60);

  // Determine latitude direction
  const latDirection = latitude >= 0 ? "N" : "S";

  // Convert longitude to degrees, minutes, seconds
  const lonDegrees = Math.floor(longitude);
  const lonMinutesDecimal = (longitude - lonDegrees) * 60;
  const lonMinutes = Math.floor(lonMinutesDecimal);
  const lonSeconds = Math.round((lonMinutesDecimal - lonMinutes) * 60);

  // Determine longitude direction
  const lonDirection = longitude >= 0 ? "E" : "W";

  // Construct the compass direction format strings
  const compassLat = `${latDegrees}° ${latMinutes}' ${latSeconds}" ${latDirection}`;
  const compassLng = `${lonDegrees}° ${lonMinutes}' ${lonSeconds}" ${lonDirection}`;

  return {
    compassLat,
    compassLng,
  };
}
