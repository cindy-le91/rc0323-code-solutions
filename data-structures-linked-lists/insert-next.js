/* eslint-disable no-unused-vars -- Remove me */
import LinkedList from './lib/linked-list';

export default function insertNext(list, value) {
  const next = list.next;
  list.next = new LinkedList(value);
  if (next !== null) {
    list.next.next = next;
  }
}
