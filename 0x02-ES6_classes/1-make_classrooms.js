#!/usr/bin/node
import ClassRoom from './0-classroom';

export default function initializeRooms() {
  const arr = [];

  const x = new ClassRoom(10);
  const y = new ClassRoom(10);
  const z = new ClassRoom(10);

  arr.push(x, y, z);

  return arr;
  
//   another solution
//   return [19, 20, 34].map((size) => new ClassRoom(size));
}
