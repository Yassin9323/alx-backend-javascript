#!/usr/bin/node

export default function getResponseFromAPI() {
  return new Promise((resolve, reject) => {
    const success = true;
    if (success) {
      resolve('');
    } else {
      reject(Error('Error'));
    }
  });
}
