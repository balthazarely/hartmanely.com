export const mobileNavWrapperAnimation = {
  initial: { y: "15px", opacity: 0 },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
      ease: "easeInOut",
      type: "spring",
      stiffness: 100,
    },
  },
};

export const mobileLinkAccordianOpen = {
  height: "auto",
  opacity: 1,
  display: "block",
  transition: {
    height: {
      duration: 0.2,
    },
    opacity: {
      duration: 0.1,
    },
  },
};

export const mobileLinkAccordianClosed = {
  height: 0,
  opacity: 0,
  transition: {
    height: {
      duration: 0.2,
    },
    opacity: {
      duration: 0.1,
    },
  },
  transitionEnd: {
    display: "none",
  },
};
