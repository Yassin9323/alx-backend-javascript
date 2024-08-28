#!/usr/bin/node
export default function loadBalancer(chinaDownload, USDownload) {
  return Promise.race([chinaDownload, USDownload])
    .then((result) => result)
    .catch((error) => {
      console.error(error);
    });
}
