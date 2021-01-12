export function getCoord(elem) {
  var box = elem.getBoundingClientRect();

  return {
    top: box.top + window.pageYOffset,
    bottom: box.bottom + window.pageYOffset,
    left: box.left + window.pageXOffset,
  };
}
