import { forwardRef, Fragment, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Popover, Transition } from "@headlessui/react";
import { Container } from "@/components/LayoutComponents";
import Hamburger from "hamburger-react";
import { motion } from "framer-motion";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import classNames from "classnames";
import { CaretDownIcon } from "@radix-ui/react-icons";
import useScrollPosition from "../../../hooks/useScrollPosition";
import { navigationLinks } from "@/lib/navigationLinks";
import {
  mobileLinkAccordianClosed,
  mobileLinkAccordianOpen,
  mobileNavWrapperAnimation,
} from "@/lib/animations";
import { useLocation, useLockBodyScroll, useToggle } from "react-use";
import { useRouter } from "next/router";
import { HiOutlineBuildingLibrary, HiOutlineSun } from "react-icons/hi2";
import { FaChevronDown, FaHandsHelping } from "react-icons/fa";
import { log } from "console";

export function Header() {
  const scrollPosition = useScrollPosition();
  return (
    <>
      <header
        className={` fixed flex h-24 w-full items-center bg-gray-100 transition-height duration-200 md:h-28 ${
          scrollPosition < 200 ? "h-20 md:h-28" : "h-20 md:h-20"
        }`}
      >
        <div className="mx-auto w-full max-w-5xl px-4 sm:px-6 lg:px-8">
          <nav className="relative z-50 flex w-full justify-between  ">
            <div className="flex items-center md:gap-x-12">
              <Link href="/" aria-label="Home">
                <img className="w-48" src="/hei-logo.svg" alt="hei-logo" />
              </Link>
            </div>
            <div className="flex items-center gap-x-5 md:gap-x-8">
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
                  <Link href={`/categories/${item.title.toLowerCase()}`}>
                    <div className="font-md flex items-center justify-start p-3 text-xs font-bold hover:bg-gray-100 ">
                      {item.title === "Redevelopment" && (
                        <HiOutlineBuildingLibrary className=" mr-1 text-xl text-cyan-600" />
                      )}
                      {item.title === "Renewable Energy" && (
                        <HiOutlineSun className=" mr-1 text-xl text-cyan-600" />
                      )}
                      {item.title === "Consulting" && (
                        <FaHandsHelping className=" mr-1 text-xl text-cyan-600" />
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
          className={classNames("ListItemLink  hover:bg-gray-100", className)}
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
  const buttonRef = useRef<HTMLButtonElement | any>(null);

  const [locked, toggleLocked] = useToggle(false);
  useLockBodyScroll(locked);

  function closeMobileNav() {
    console.log(buttonRef);
    buttonRef.current?.click();
  }

  // const {pathname} = useLocation();
  // useEffect(() => {
  //   setOpen(false); // Close the navigation panel
  // }, [ pathname ]);

  useEffect(() => {
    toggleLocked(false);
  }, [router.asPath]);

  // useEffect(() => {
  //   console.log(buttonRef.current.dataset.headlessuiState);
  // }, [locked]);

  return (
    <Popover className="block  md:hidden">
      <Popover.Button
        className="relative z-50 flex h-8 w-8 items-center justify-center outline-0  [&:not(:focus-visible)]:focus:outline-none"
        aria-label="Toggle Navigation"
        ref={buttonRef}
      >
        {({ open }) => (
          <div>
            <Hamburger toggled={open} onToggle={() => toggleLocked()} />
          </div>
        )}
      </Popover.Button>
      <Transition.Root>
        <Transition.Child
          as={Fragment}
          enter="duration-150 ease-out"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="duration-100 ease-in"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Popover.Panel
            as="div"
            className="fixed top-0 left-0 z-20 flex h-full w-full origin-top flex-col  items-center justify-start  bg-white p-4 pt-24 text-lg tracking-tight text-slate-900  shadow-xl ring-1 ring-slate-900/5"
          >
            <motion.div
              variants={mobileNavWrapperAnimation}
              initial="initial"
              animate="animate"
              className="flex w-full flex-col gap-4 overflow-y-scroll "
            >
              <MobileNavItem
                title="Home"
                submenu=""
                link="/"
                closeMobileNav={closeMobileNav}
              />
              {navigationLinks.map((item: any, idx: number) => {
                return (
                  <MobileNavItem
                    key={idx}
                    title={item.title}
                    submenu={item.submenu}
                    link={item.link}
                    closeMobileNav={closeMobileNav}
                  />
                );
              })}
            </motion.div>
          </Popover.Panel>
        </Transition.Child>
      </Transition.Root>
    </Popover>
  );
}

const MobileNavItem = ({ title, submenu, link, closeMobileNav }: any) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {link ? (
        <motion.div
          variants={mobileNavWrapperAnimation}
          className="flex w-full cursor-pointer flex-col  p-1"
        >
          <Link href={link}>
            <button
              onClick={() => closeMobileNav()}
              aria-controls={title}
              aria-expanded={isOpen}
              className="flex w-full items-center justify-center space-x-4 text-left"
            >
              <div className="text-2xl font-semibold">{title}</div>
            </button>
          </Link>
        </motion.div>
      ) : (
        <motion.div
          variants={mobileNavWrapperAnimation}
          className="flex w-full cursor-pointer flex-col  p-1"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          <button
            aria-controls={title}
            aria-expanded={isOpen}
            className="flex w-full items-center justify-center  "
          >
            <div className="text-2xl font-semibold">{title}</div>
            <div className="text-2xl font-semibold">
              <FaChevronDown
                className={`ml-1 text-base text-cyan-600 ${
                  isOpen ? "rotate-180" : "rotate-0"
                }`}
              />
            </div>
          </button>
          <motion.div
            id={title}
            initial={false}
            animate={
              isOpen ? mobileLinkAccordianOpen : mobileLinkAccordianClosed
            }
            className="pt-2 font-light"
          >
            {submenu?.map((item: any, idx: number) => {
              return (
                <Link
                  href={item.link}
                  key={idx}
                  onClick={() => closeMobileNav()}
                >
                  <div key={item.name} className="mb-2 text-center">
                    {item.name}
                  </div>
                </Link>
              );
            })}
          </motion.div>
        </motion.div>
      )}
    </>
  );
};
