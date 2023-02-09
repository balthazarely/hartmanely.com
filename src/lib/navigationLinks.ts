import { HiOutlineBuildingLibrary } from "react-icons/hi2";

export const navigationLinks = [
  {
    title: "Redevelopment",
    icon: HiOutlineBuildingLibrary,
    submenu: [
      {
        name: "Pancratia Hall Lofts",
        link: "/redevelopment/pancratia-hall-lofts",
        location: "Denver, CO",
        photo: "/thumbnails/pancratia_thumbnail.jpg",
      },
      {
        name: "Fruitdale School Lofts",
        link: "/redevelopment/fruitdale-school-lofts",
        location: "Wheat Ridge, CO",
        photo: "/thumbnails/fruitdale_thumbnail.jpg",
      },
      {
        name: "Eiber Village",
        link: "/redevelopment/eiber-village",
        location: "Lakewood, CO",
        photo: "/thumbnails/eiber_village_thumbnail.jpg",
      },
      {
        name: "Hanger 2 Lowry",
        link: "/redevelopment/hanger-2-lowry",
        location: "Denver, CO",
        photo: "/thumbnails/hanger_2_thumbnail.jpg",
      },
      {
        name: "Steam Plant Lofts",
        link: "/redevelopment/steam-plant-lofts",
        location: "Denver, CO",
        photo: "/thumbnails/steam_plant_thumbnail.jpg",
      },
      {
        name: "Steam Plant Row Homes",
        link: "/redevelopment/steam-plant-row-homes",
        location: "Denver, CO",
        photo: "/thumbnails/steam_plant_row_homes_thumbnail.jpg",
      },
    ],
  },
  {
    title: "Consulting",
    icon: HiOutlineBuildingLibrary,
    submenu: [
      {
        name: "Wester Hotel",
        link: "/consulting/western-hotel",
        location: "Ouray, CO",
      },
      {
        name: "Innovage Headquarters",
        link: "/consulting/innovage-headquarters",
        location: "Denver, CO",
      },
      {
        name: "Courtyard by Marriott",
        link: "/consulting/courtyard-marriott-hotel",
        location: "Denver, CO",
      },
      {
        name: "Boston Lofts",
        link: "/consulting/boston-lofts",
        location: "Denver, CO",
      },
      {
        name: "The Bank Lofts",
        link: "/consulting/bank-lofts",
        location: "Denver, CO",
      },
    ],
  },
  {
    title: "Renewable Energy",
    icon: HiOutlineBuildingLibrary,
    submenu: [
      {
        name: "Boulder Wastewater Treatment Facility",
        link: "/renewable-energy/boulder-wastewater",
        location: "Boulder, CO",
      },
      {
        name: "Community Solar",
        link: "/renewable-energy/community-solar",
        location: "Colorado",
      },
    ],
  },
  {
    title: "About",
    link: "/about",
  },
];
