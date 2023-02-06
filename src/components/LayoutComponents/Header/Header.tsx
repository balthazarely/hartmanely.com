import { forwardRef, Fragment, useState } from "react";
import Link from "next/link";
import { Popover, Transition } from "@headlessui/react";
import { Container } from "@/components/LayoutComponents";
import Hamburger from "hamburger-react";
import { motion, AnimatePresence } from "framer-motion";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import classNames from "classnames";
import { CaretDownIcon } from "@radix-ui/react-icons";
import useScrollPosition from "../../../hooks/useScrollPosition";

const boxVariants = {
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

export function Header() {
  const [isOpen, setOpen] = useState<boolean>(false);
  const scrollPosition = useScrollPosition();
  console.log(scrollPosition);

  return (
    <>
      <header
        className={`fixed flex h-24 w-full items-center bg-gray-100 transition-height duration-200 md:h-28 ${
          scrollPosition < 200 ? "h-20 md:h-28" : "h-20 md:h-20"
        }`}
      >
        <Container>
          <nav className="relative z-50 flex w-full justify-between  ">
            <div className="flex items-center md:gap-x-12">
              <Link href="#" aria-label="Home">
                <img className="w-48" src="/hei-logo.svg" alt="hei-logo" />
              </Link>
            </div>
            <div className="flex items-center gap-x-5 md:gap-x-8">
              <div className="hidden md:block">
                <NavigationMenuDemo />
              </div>
              <div className="block md:hidden">
                <MobileNavigation />
              </div>
            </div>
          </nav>
        </Container>
      </header>
    </>
  );
}

const NavigationMenuDemo = () => {
  return (
    <NavigationMenu.Root className="NavigationMenuRoot">
      <NavigationMenu.List className="NavigationMenuList">
        <NavigationMenu.Item>
          <NavigationMenu.Trigger className="NavigationMenuTrigger text-sm">
            Redevelopment <CaretDownIcon className="CaretDown" aria-hidden />
          </NavigationMenu.Trigger>
          <NavigationMenu.Content className="NavigationMenuContent">
            <ul className="List one">
              <ListItem href="https://stitches.dev/" title="Pancratia Hall">
                Denver, CO
              </ListItem>
              <ListItem href="/colors" title="Fruitdale">
                Denver, CO
              </ListItem>
              <ListItem href="https://icons.radix-ui.com/" title="Iber Village">
                Golden, CO
              </ListItem>
              <ListItem href="https://icons.radix-ui.com/" title="Hanger 2">
                Stapleton, CO
              </ListItem>
              <ListItem href="https://icons.radix-ui.com/" title="Steam Plant">
                Stapleton, CO
              </ListItem>
            </ul>
          </NavigationMenu.Content>
        </NavigationMenu.Item>

        <NavigationMenu.Item>
          <NavigationMenu.Trigger className="NavigationMenuTrigger text-sm">
            Consulting <CaretDownIcon className="CaretDown" aria-hidden />
          </NavigationMenu.Trigger>
          <NavigationMenu.Content className="NavigationMenuContent">
            <ul className="List one">
              <ListItem href="https://stitches.dev/" title="Western Hotel">
                Ouray CO
              </ListItem>
              <ListItem href="/colors" title="Innovage Headquarters">
                Lowry, CO
              </ListItem>
              <ListItem href="/colors" title="Courtyard by Marriott Hotel">
                Denver, CO
              </ListItem>
              <ListItem href="/colors" title="Boston Lofts">
                Denver, CO
              </ListItem>
              <ListItem href="/colors" title="The Bank Lofts">
                Denver, CO
              </ListItem>
            </ul>
          </NavigationMenu.Content>
        </NavigationMenu.Item>

        <NavigationMenu.Item>
          <NavigationMenu.Trigger className="NavigationMenuTrigger text-sm">
            Renewables
            <CaretDownIcon className="CaretDown" aria-hidden />
          </NavigationMenu.Trigger>
          <NavigationMenu.Content className="NavigationMenuContent">
            <ul className="List one">
              <ListItem
                href="https://stitches.dev/"
                title="Boulder Wastewater Treatment Facility"
              >
                Denver, CO
              </ListItem>
              <ListItem href="/colors" title="Community Solar">
                Denver, CO
              </ListItem>
            </ul>
            <div className="w-full bg-gray-100 py-2 text-center text-sm">
              See all Renwable Energy
            </div>
          </NavigationMenu.Content>
        </NavigationMenu.Item>

        <NavigationMenu.Item>
          <NavigationMenu.Link
            className="NavigationMenuLink text-sm"
            href="https://github.com/radix-ui"
          >
            About
          </NavigationMenu.Link>
        </NavigationMenu.Item>
        <NavigationMenu.Item>
          <NavigationMenu.Link
            className="NavigationMenuLink text-sm"
            href="https://github.com/radix-ui"
          >
            Contact
          </NavigationMenu.Link>
        </NavigationMenu.Item>

        <NavigationMenu.Indicator className="NavigationMenuIndicator">
          <div className="Arrow" />
        </NavigationMenu.Indicator>
      </NavigationMenu.List>

      <div className="ViewportPosition">
        <NavigationMenu.Viewport className="NavigationMenuViewport" />
      </div>
    </NavigationMenu.Root>
  );
};

const ListItem = forwardRef(
  ({ className, children, title, ...props }: any, forwardedRef) => (
    <li>
      <NavigationMenu.Link asChild>
        <a
          className={classNames("ListItemLink", className)}
          {...props}
          ref={forwardedRef}
        >
          <div className="ListItemHeading font-sm ">{title}</div>
          <p className="ListItemText text-sm">{children}</p>
        </a>
      </NavigationMenu.Link>
    </li>
  )
);

const mobileMenu = [
  {
    title: "Redevelopment",
    submenu: [
      { name: "Pancratia Hall Lofts", link: "/pan" },
      { name: "Fruitdale School Lofts", link: "/pan" },
      { name: "Eiber Village", link: "/pan" },
      { name: "Hanger 2", link: "/pan" },
      { name: "Steam Plant Lofts", link: "/pan" },
    ],
  },
  {
    title: "Renewable Energy",
    submenu: [
      { name: "Boulder Wastewater Treatment Facility", link: "/pan" },
      { name: "Community Solar", link: "/pan" },
    ],
  },
  {
    title: "Consulting",
    submenu: [
      { name: "Wester Hotel", link: "/pan" },
      { name: "Innovage Headquarters", link: "/pan" },
      { name: "Courtyard by Marriott", link: "/pan" },
      { name: "Boston Lofts", link: "/pan" },
      { name: "The Bank Lofts", link: "/pan" },
    ],
  },
  {
    title: "About",
    link: "/about",
  },
  {
    title: "Contact",
    link: "/contact",
  },
];

function MobileNavigation() {
  return (
    <Popover>
      <Popover.Button
        className="relative z-40 flex h-8 w-8 items-center justify-center outline-0  [&:not(:focus-visible)]:focus:outline-none"
        aria-label="Toggle Navigation"
      >
        {({ open }) => (
          <div>
            <Hamburger toggled={open} />
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
              variants={boxVariants}
              initial="initial"
              animate="animate"
              className="w-full"
            >
              {mobileMenu.map((item: any) => {
                return (
                  <MobileNavItem
                    key={1}
                    title={item.title}
                    submenu={item.submenu}
                    link={item.link}
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

const MobileNavItem = ({ title, submenu, link }: any) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {link ? (
        <motion.div
          variants={boxVariants}
          className="flex w-full cursor-pointer flex-col  p-3"
        >
          <button
            aria-controls={title}
            aria-expanded={isOpen}
            className="flex w-full items-center justify-center space-x-4 text-left"
          >
            <div className="text-xl font-semibold ">{title}</div>
          </button>
        </motion.div>
      ) : (
        <motion.div
          variants={boxVariants}
          className="flex w-full cursor-pointer flex-col  p-3"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          <button
            aria-controls={title}
            aria-expanded={isOpen}
            className="flex w-full items-center justify-center space-x-4 text-left"
          >
            <div className="text-xl font-semibold">{title}</div>
          </button>
          <motion.div
            id={title}
            initial={false}
            animate={
              isOpen
                ? {
                    height: "auto",
                    opacity: 1,
                    display: "block",
                    transition: {
                      height: {
                        duration: 0.2,
                      },
                      opacity: {
                        duration: 0.2,
                      },
                    },
                  }
                : {
                    height: 0,
                    opacity: 0,
                    transition: {
                      height: {
                        duration: 0.2,
                      },
                      opacity: {
                        duration: 0.2,
                      },
                    },
                    transitionEnd: {
                      display: "none",
                    },
                  }
            }
            className="font-light"
          >
            {submenu?.map((item: any) => {
              return <div className="text-center">{item.name}</div>;
            })}
          </motion.div>
        </motion.div>
      )}
    </>
  );
};
