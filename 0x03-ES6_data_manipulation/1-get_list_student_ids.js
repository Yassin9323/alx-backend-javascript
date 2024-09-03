#!/usr/bin/node

export default function getListStudentIds(arrOfObjs) {
  if (!(arrOfObjs instanceof Array)) {
    return [];
  }
  return arrOfObjs.map((x) => x.id);
}
