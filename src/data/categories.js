import hoodieImg from"../assets/Categories/hoodies.jpg" ;
import tshirtImg from"../assets/Categories/Tshirt.jpg";
import pantsImg from"../assets/Categories/pants.jpg";
import jacketImg from"../assets/Categories/jackets.jpg"
import accessoriesImg from"../assets/Categories/Accessories.jpg"



export const categories = [
  {
    id: 1,
    name: "Hoodies",
    slug: "hoodies",
    image: hoodieImg,
    href: "/shop/hoodies",
  },
  {
    id: 2,
    name: "T-Shirts",
    slug: "t-shirts",
    image: tshirtImg,
    href: "/shop/t-shirts",
  },
  {
    id: 3,
    name: "Pants",
    slug: "pants",
    image: pantsImg,
    href: "/shop/pants",
  },
  {
    id: 4,
    name: "Jackets",
    slug: "jackets",
    image: jacketImg,
    href: "/shop/jackets",
  },
  {
    id: 5,
    name: "Accessories",
    slug: "accessories",
    image: accessoriesImg,
    href: "/shop/accessories",
  },
];