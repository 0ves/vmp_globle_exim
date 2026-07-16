
import spiceImg from "../assets/spices.jpg";
import charcoal from "../assets/Activated Carbon.jpg";
import Agricultural  from "../assets/Agricultural Commodities.jpg";
import Chemicals  from "../assets/Chemicals & Industrial Products.jpg";
import Packaging  from "../assets/Packaging Materials.jpg";

export const productCategories = [
  {
    title: "Agricultural Commodities",
    image: Agricultural,
    description:
      "Premium agricultural commodities sourced from trusted Indian producers.",
    products: [
      "Turmeric Fingers",
      "Turmeric Powder",
      "Rice",
      "Wheat",
      "Maize",
      "Pulses",
    ],
  },

  {
    title: "Spices",
    image: spiceImg,
    description:
      "Authentic Indian spices processed with international quality standards.",
    products: [
      "Turmeric Powder",
      "Red Chilli",
      "Cumin",
      "Coriander",
      "Other Indian Spices",
    ],
  },

  {
    title: "Energy Products",
    image: charcoal,
    description:
      "Sustainable energy products for industrial and commercial applications.",
    products: [
      "Coconut Shell Charcoal",
      "Activated Carbon",
    ],
  },

  {
    title: "Chemicals & Industrial Products",
    image: Chemicals,
    description:
      "Reliable industrial materials sourced from certified manufacturers.",
    products: [
      "Industrial Chemicals",
      "Fertilizers",
      "Engineering Components",
      "Industrial Equipment",
    ],
  },

  {
    title: "Packaging Materials",
    image: Packaging,
    description:
      "Packaging solutions for international transportation and storage.",
    products: [
      "Packaging Materials",
      "Auto Parts",
    ],
  },
];