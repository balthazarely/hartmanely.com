import { forwardRef, useEffect, useState } from "react";
import Link from "next/link";
import { Squash as Hamburger } from "hamburger-react";
import { motion } from "framer-motion";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import { CaretDownIcon } from "@radix-ui/react-icons";
import useScrollPosition from "../../../hooks/useScrollPosition";
import { navigationLinks } from "@/lib/navigationLinks";
import { useWindowSize } from "react-use";
import { useRouter } from "next/router";
import { HiOutlineBuildingLibrary, HiOutlineSun } from "react-icons/hi2";
import { FaChevronDown, FaHandsHelping } from "react-icons/fa";

import clsx from "clsx";
import Image from "next/image";

const menuOpenAnimationVariant = {
  open: {
    opacity: 1,
    display: "block",
    transition: {
      staggerChildren: 0.05,
      ease: "easeInOut",
    },
  },
  closed: {
    opacity: 0,
    display: "none",
  },
};

const menuItemAnimationVariant = {
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
    y: 30,
    opacity: 0,
    transition: {
      staggerChildren: 1,
      ease: "easeInOut",
      type: "spring",
      stiffness: 50,
    },
  },
};

export function Header() {
  const scrollPosition = useScrollPosition();
  return (
    <>
      <header
        className={`fixed flex h-24 w-full items-center bg-gray-100 transition-height duration-200 md:h-28 ${
          scrollPosition < 200 ? "h-20 md:h-28" : "h-20 md:h-20"
        }`}
      >
        <div className="mx-auto w-full max-w-5xl px-4 sm:px-6 lg:px-8">
          <nav className="relative z-50 flex w-full justify-between  ">
            <div className="flex items-center md:gap-x-12">
              <Link href="/" aria-label="Home">
                <Image
                  width={100}
                  height={100}
                  src="/hei-logo.svg"
                  className="w-48"
                  alt="hei-logo"
                />
              </Link>
            </div>
            <div className="flex items-center ">
              <DesktopNavigation />
              <MobileNavigation />
            </div>
          </nav>
        </div>
      </header>
    </>
  );
}

const DesktopNavigation = () => {
  return (
    <div className="hidden md:block">
      <NavigationMenu.Root className="NavigationMenuRoot">
        <NavigationMenu.List className="NavigationMenuList">
          {navigationLinks.map((item: any, idx: number) => {
            return item.submenu ? (
              <NavigationMenu.Item key={idx}>
                <NavigationMenu.Trigger className="NavigationMenuTrigger text-sm font-semibold">
                  {item.title}
                  <CaretDownIcon className="CaretDown" aria-hidden />
                </NavigationMenu.Trigger>
                <NavigationMenu.Content className="NavigationMenuContent">
                  <ul className="List one">
                    {item?.submenu?.map((submenu: any, idx: number) => {
                      return (
                        <ListItem
                          key={idx}
                          href={submenu.link}
                          title={submenu.name}
                        >
                          {submenu.location}
                        </ListItem>
                      );
                    })}
                  </ul>
                  <Link
                    href={`/categories/${item.title
                      .toLowerCase()
                      .replace(/\s/g, "-")}`}
                  >
                    <div className="font-md flex items-center justify-start p-3 text-xs font-bold hover:bg-gray-100 ">
                      {item.title === "Redevelopment" && (
                        <HiOutlineBuildingLibrary className=" mr-1 text-xl text-cyan-600" />
                      )}
                      {item.title === "Consulting" && (
                        <FaHandsHelping className=" mr-1 text-xl text-cyan-600" />
                      )}
                      {item.title === "Renewable Energy" && (
                        <HiOutlineSun className=" mr-1 text-xl text-cyan-600" />
                      )}
                      See All {item.title} projects
                    </div>
                  </Link>
                </NavigationMenu.Content>
              </NavigationMenu.Item>
            ) : (
              <NavigationMenu.Item key={idx}>
                <NavigationMenu.Link
                  className="NavigationMenuTrigger text-sm font-semibold"
                  href={item.link}
                >
                  {item.title}
                </NavigationMenu.Link>
              </NavigationMenu.Item>
            );
          })}

          <NavigationMenu.Indicator className="NavigationMenuIndicator">
            <div className="Arrow" />
          </NavigationMenu.Indicator>
        </NavigationMenu.List>

        <div className="ViewportPosition">
          <NavigationMenu.Viewport className="NavigationMenuViewport" />
        </div>
      </NavigationMenu.Root>
    </div>
  );
};

const ListItem = forwardRef(
  ({ className, children, title, ...props }: any, forwardedRef) => (
    <li>
      <NavigationMenu.Link asChild>
        <a
          className={clsx("ListItemLink  hover:bg-gray-100", className)}
          {...props}
          ref={forwardedRef}
        >
          <div className="ListItemHeading mb-1 text-xs font-bold leading-none ">
            {title}
          </div>
          <div className="ListItemText text-xs">{children}</div>
        </a>
      </NavigationMenu.Link>
    </li>
  )
);
ListItem.displayName = "MyComponentTest";

function MobileNavigation() {
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);
  const [redevelopmentOpen, setRedevelopmentOpen] = useState(false);
  const [renewableEnergyOpen, setRenewableEnergyOpen] = useState(false);
  const [consultingOpen, setConsultingOpen] = useState(false);
  const { width } = useWindowSize();

  function navigateToMobileLink(e: any, link: any) {
    e.stopPropagation();
    router.push(link);
  }

  useEffect(() => {
    const handleRouteChange = () => {
      setMenuOpen(false);
    };
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  useEffect(() => {
    if (!menuOpen) {
      setRedevelopmentOpen(false);
      setRenewableEnergyOpen(false);
      setConsultingOpen(false);
    }
  }, [menuOpen]);

  useEffect(() => {
    if (width > 768) {
      setMenuOpen(false);
    }
  }, [width, menuOpen]);

  return (
    <div>
      <div className="relative z-50 block md:hidden">
        <Hamburger toggled={menuOpen} toggle={setMenuOpen} />
      </div>
      <motion.div
        className={` fixed top-0 left-0 z-40 h-full w-screen overflow-y-scroll  bg-white opacity-0  `}
        animate={menuOpen ? "open" : "closed"}
        variants={menuOpenAnimationVariant}
      >
        <div className="mt-24 ">
          <motion.div
            variants={menuItemAnimationVariant}
            className="mb-4 flex w-full cursor-pointer flex-col p-1  text-gray-800  hover:text-cyan-600"
          >
            <button
              aria-label="got-to-link"
              role="button"
              onClick={(e) => navigateToMobileLink(e, "/")}
              className="flex w-full items-center justify-center space-x-4 text-left"
            >
              <div className="text-2xl font-semibold">Home</div>
            </button>
          </motion.div>

          <MobileItemAccordian
            navigateToMobileLink={navigateToMobileLink}
            animationVariant={menuItemAnimationVariant}
            triggerOpen={setRedevelopmentOpen}
            open={redevelopmentOpen}
            name="Redevelopment"
          />
          <MobileItemAccordian
            navigateToMobileLink={navigateToMobileLink}
            animationVariant={menuItemAnimationVariant}
            triggerOpen={setConsultingOpen}
            open={consultingOpen}
            name="Consulting"
          />
          <MobileItemAccordian
            navigateToMobileLink={navigateToMobileLink}
            animationVariant={menuItemAnimationVariant}
            triggerOpen={setRenewableEnergyOpen}
            open={renewableEnergyOpen}
            name="Renewable Energy"
          />
          <motion.div
            variants={menuItemAnimationVariant}
            className="mb-4 flex w-full cursor-pointer flex-col p-1"
          >
            <button
              aria-label="go-to-link"
              role="button"
              onClick={(e) => navigateToMobileLink(e, "/about")}
              className="flex w-full items-center justify-center space-x-4 text-left  text-gray-800  hover:text-cyan-600"
            >
              <div className="text-2xl font-semibold">About</div>
            </button>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}

function MobileItemAccordian({
  animationVariant,
  triggerOpen,
  open,
  name,
  navigateToMobileLink,
}: any) {
  return (
    <motion.div
      variants={animationVariant}
      className="mb-4 flex w-full cursor-pointer  flex-col p-1"
      onClick={() => triggerOpen(!open)}
    >
      <button
        aria-label="open"
        role="button"
        className="flex w-full items-center justify-center text-gray-800  hover:text-cyan-600  "
      >
        <div className="text-2xl font-semibold">{name}</div>
        <div className="text-2xl font-semibold">
          <FaChevronDown
            className={`ml-1 text-base text-cyan-600 ${
              open ? "rotate-180" : "rotate-0"
            }`}
          />
        </div>
      </button>
      <div className={`mt-4 flex flex-col ${open ? "visible" : "hidden"}`}>
        {navigationLinks
          .filter((obj: any) => obj.title === name)[0]
          .submenu?.map((item: any) => {
            return (
              <button
                aria-label="navigate"
                role="button"
                className="mb-2 text-center text-gray-800  hover:text-cyan-600"
                key={item.name}
                onClick={(e) => navigateToMobileLink(e, item.link)}
              >
                {item.name}
              </button>
            );
          })}
        <button
          aria-label="navigate"
          role="button"
          className="mb-2 text-center text-gray-800  hover:text-cyan-600"
          onClick={(e) =>
            navigateToMobileLink(
              e,
              `/categories/${name.toLowerCase().replace(/\s/g, "-")}`
            )
          }
        >
          All {name} Projects
        </button>
      </div>
    </motion.div>
  );
}
