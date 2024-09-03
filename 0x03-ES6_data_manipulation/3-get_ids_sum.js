#!/usr/bin/node

export default function getStudentIdsSum(arr) {
  return arr.reduce((acc, obj) => acc + obj.id, 0);
}
