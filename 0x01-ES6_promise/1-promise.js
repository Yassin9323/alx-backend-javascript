#!/usr/bin/node

export default function getFullResponseFromAPI(success) {
  return new Promise((resolve, reject) => {
    // const value = success;
    if (success) {
      resolve({
        status: 200,
        body: 'Success',
      });
    } else {
      reject(Error('The fake API is not working currently'));
    }
  });
}
