export default function compareDistances(a, b) {
  const distanceA = a.distance.value;
  const distanceZ = b.distance.value;

  let comparison = 0;

  if (distanceA > distanceZ) {
    comparison = 1;
  } else if (distanceA < distanceZ) {
    comparison = -1;
  }
  return comparison;
}
