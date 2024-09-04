#!/usr/bin/node
export default function cleanSet(set, startString) {
  // If startString is not provided or empty, return an empty string
  if (!startString || typeof startString !== 'string') {
    return '';
  }

  const filteredArray = [...set].filter((value) => value.startsWith(startString));

  const resultArray = filteredArray.map((value) => value.slice(startString.length));

  // Join the resulting values into a single string separated by hyphens
  return resultArray.join('-');
}
