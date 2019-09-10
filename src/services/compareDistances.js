export default function compareDistances(a, b) {
  const compareValueA = a.duration.value;
  const compareValueB = b.duration.value;

  let comparison = 0;

  if (compareValueA > compareValueB) {
    comparison = 1;
  } else if (compareValueA < compareValueB) {
    comparison = -1;
  }
  return comparison;
}
