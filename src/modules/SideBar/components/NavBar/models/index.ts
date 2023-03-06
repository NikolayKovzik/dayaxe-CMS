import RoutesList from "../../../../../routes";

export type NavBarProps = {
  items: {
    link: RoutesList;
    content: string;
  }[];
};