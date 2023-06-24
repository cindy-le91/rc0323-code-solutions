/* eslint-disable no-unused-vars -- Remove me */
import LinkedList from './lib/linked-list';

export default function prepend(list, value) {
  const head = new LinkedList(value);
  head.next = list;
  return head;
}
