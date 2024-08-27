#!/usr/bin/node

export default function uploadPhoto(filename) {
  return new Promise((resolve, reject) => {
    const value = false;
    if (value) {
      resolve(filename);
    } else {
      reject(Error(`${filename} cannot be processed`));
    }
  });
}
