export default function swapFront(list) {
  if (list.next === null) {
    return list;
  }
  const next = list.next;
  const nexter = list.next.next;
  next.next = list;
  list.next = nexter;
  return next;
}
