import ict from "./assets/ict.svg";
import beer from "./assets/beer.jpg";
import sleep from "./assets/sleep.jpg";
import tomorrow from "./assets/tomorrow.jpg";
import yesterday from "./assets/yesterday.jpg";
import yoga from "./assets/yoga.jpg";

const Images = { ict, beer, sleep, tomorrow, yesterday, yoga };

export const Category = {
  WORK: "WORK",
  HEALTH: "HEALTH",
  LEISURE: "LEISURE",
};

const categories = [
  { id: 1, name: Category.WORK },
  { id: 2, name: Category.HEALTH },
  { id: 3, name: Category.LEISURE },
];

const M_TO_S = 60;
const H_TO_S = M_TO_S * 60;
const D_TO_S = H_TO_S * 24;

const getDateString = (seconds, minutes = 0, hours = 0, days = 0, sign = 1) => {
  const totalSeconds =
    sign * (seconds + minutes * M_TO_S + hours * H_TO_S + days * D_TO_S);
  const now = new Date();
  now.setSeconds(now.getSeconds() + totalSeconds);
  return now.toUTCString();
};

const countdowns = [
  {
    id: 1,
    categoryId: 2,
    title: "Time to sleep",
    image: "sleep",
    startsAt: getDateString(10, 8),
  },
  {
    id: 2,
    categoryId: 2,
    title: "Yoga Time",
    image: "yoga",
    startsAt: getDateString(10),
  },
  {
    id: 3,
    categoryId: 3,
    title: "Beer o'clock",
    image: "beer",
    startsAt: getDateString(4, 3),
  },
  {
    id: 4,
    categoryId: 1,
    title: "Meeting #1",
    image: "yesterday",
    startsAt: getDateString(4, 3, 2, 1, -1),
  },
  {
    id: 5,
    categoryId: 1,
    title: "Meeting #2",
    image: "tomorrow",
    startsAt: getDateString(4, 3, 2, 1),
  },
];

export const getImageSrc = (name) => Images[name];

export const fetchCategories = () =>
  new Promise((resolve) => {
    setTimeout(() => resolve(categories), 600);
  });

export const fetchCountdowns = () =>
  new Promise((resolve) => {
    setTimeout(() => resolve(countdowns), 1000);
  });
