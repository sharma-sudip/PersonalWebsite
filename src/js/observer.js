let animationHelper = (selector, classes) => {
  let intersectionObserver = new IntersectionObserver((entries) => {
    entries.forEach((item) => {
      if (item.isIntersecting) {
        classes.forEach((className) => {
          let elements = document.querySelectorAll(selector);
          if (elements?.length > 1) {
            elements.forEach((element) => {
              element.classList.add(className);
            });
          } else {
            item.target.classList.add(className);
          }
        });
      }
    });
  });
  intersectionObserver.observe(document.querySelector(selector));
};

export { animationHelper };
