export const menuOpenAnimationVariant = {
  open: {
    opacity: 1,
    // x: "0",
    display: "block",
    transition: {
      staggerChildren: 0.05,
      ease: "easeInOut",
      type: "spring",
      stiffness: 100,
    },
  },
  closed: {
    opacity: 0,
    display: "none",
    //  x: "100%"
  },
};

export const menuItemAnimationVariant = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      staggerChildren: 1,
      ease: "easeInOut",
      type: "spring",
      stiffness: 100,
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      staggerChildren: 1,
      ease: "easeInOut",
      type: "spring",
      stiffness: 100,
    },
  },
};
