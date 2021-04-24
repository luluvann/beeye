import {
  faFileAlt,
  faCircle,
  faUsers,
  faMoneyCheck,
  faClock,
  faCalendarAlt,
  faTasks,
} from "@fortawesome/free-solid-svg-icons";

const TabItems = [
  { title: "Description", selected: true, icon: faFileAlt },
  { title: "Statut", selected: false, icon: faCircle },
  { title: "Équipe", selected: false, icon: faUsers },
  { title: "Honoraires", selected: false, icon: faMoneyCheck },
  { title: "Durée", selected: false, icon: faClock },
  { title: "Dates", selected: false, icon: faCalendarAlt },
  { title: "CheckList", selected: false, icon: faTasks },
];

export default TabItems;
