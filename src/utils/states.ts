export const stateCoordinates: Record<string, [number, number]> = {
  AC: [-8.77, -70.55],
  AL: [-9.62, -36.82],
  AP: [1.41, -51.77],
  AM: [-3.07, -61.66],
  BA: [-12.96, -38.51],
  CE: [-3.71, -38.54],
  DF: [-15.83, -47.86],
  ES: [-19.19, -40.34],
  GO: [-15.98, -49.86],
  MA: [-2.55, -44.3],
  MT: [-12.64, -55.42],
  MS: [-20.51, -54.54],
  MG: [-18.1, -44.38],
  PA: [-5.53, -52.29],
  PB: [-7.06, -35.55],
  PR: [-24.89, -51.55],
  PE: [-8.28, -35.07],
  PI: [-8.28, -43.68],
  RJ: [-22.84, -43.15],
  RN: [-5.22, -36.52],
  RS: [-30.17, -53.5],
  RO: [-11.22, -62.8],
  RR: [1.89, -61.22],
  SC: [-27.33, -49.44],
  SP: [-23.55, -46.64],
  SE: [-10.57, -37.45],
  TO: [-10.25, -48.25],
};

export function getDistanceInKm(
  coord1: [number, number],
  coord2: [number, number]
) {
  const toRad = (value: number) => (value * Math.PI) / 180;

  const lat1 = coord1[0];
  const lon1 = coord1[1];
  const lat2 = coord2[0];
  const lon2 = coord2[1];

  const R = 6371;
  const dLat = toRad(lat2 - lat1);
  const dLon = toRad(lon2 - lon1);
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(toRad(lat1)) *
      Math.cos(toRad(lat2)) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);

  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  const distance = R * c;

  return distance;
}
