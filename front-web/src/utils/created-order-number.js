export function createdOrderNumber(id) {
  return `#${id.slice(-6).toUpperCase()}`;
}
