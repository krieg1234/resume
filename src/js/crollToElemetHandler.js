export const crollToElemetHandler = (scrollTarget) => (e) => {
  const targetIdPage = `${scrollTarget}-page`;
  const scrollTo = document.getElementById(targetIdPage).offsetTop;
  window.scrollTo(0, scrollTo);
};
