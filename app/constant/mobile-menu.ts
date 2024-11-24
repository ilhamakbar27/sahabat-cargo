import type { UrlObject } from "url";

type Url = string | UrlObject;
export interface MobileMenuProps {
  id: string;
  title: string;
  link: Url;
}

export const MobileMenu: MobileMenuProps[] = [
  {
    id: "1",
    title: "Beranda",
    link: "/",
  },
  {
    id: "2",
    title: "Layanan",
    link: "/services",
  },
  {
    id: "3",
    title: "Kontak",
    link: "/contact",
  },
];
