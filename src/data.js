import kitchen1 from "./images/kitchen1.jpg";
import kitchen2 from "./images/kitchen2.jpg";
import kitchen3 from "./images/kitchen3.jpg";
import bedroom1 from "./images/bedroom1.jpg";
import bedroom2 from "./images/bedroom2.jpg";
import bedroom3 from "./images/bedroom3.jpg";
import bathroom1 from "./images/bathroom1.jpg";
import bathroom2 from "./images/bathroom2.jpg";
import bathroom3 from "./images/bathroom3.jpg";
import livingroom1 from "./images/livingroom1.jpg";
import livingroom2 from "./images/livingroom2.jpg";
import livingroom3 from "./images/livingroom3.jpg";

export default [
  {
    sys: {
      id: "1",
    },
    fields: {
      name: "Apartment 1",
      slug: "single-economy",
      type: "Two Bedroom up to 6 Guests",
      price: 150,
      size: 200,
      capacity: 1,
      pets: false,
      breakfast: false,
      featured: true,
      description:
        "Street art edison bulb gluten-free, tofu try-hard lumbersexual brooklyn tattooed pickled chambray. Actually humblebrag next level, deep v art party wolf tofu direct trade readymade sustainable hell of banjo. Organic authentic subway tile cliche palo santo, street art XOXO dreamcatcher retro sriracha portland air plant kitsch stumptown. Austin small batch squid gastropub. Pabst pug tumblr gochujang offal retro cloud bread bushwick semiotics before they sold out sartorial literally mlkshk. Vaporware hashtag vice, sartorial before they sold out pok pok health goth trust fund cray.",
      extras: [
        "Plush pillows and breathable bed linens",
        "Soft, oversized bath towels",
        "Full-sized, pH-balanced toiletries",
        "Complimentary refreshments",
        "Adequate safety/security",
        "Internet",
        "Comfortable beds",
      ],
      images: [
        {
          fields: {
            file: {
              url: bedroom1,
            },
          },
        },
        {
          fields: {
            file: {
              url: livingroom1,
            },
          },
        },
        {
          fields: {
            file: {
              url: kitchen1,
            },
          },
        },
        {
          fields: {
            file: {
              url: bathroom1,
            },
          },
        },
      ],
    },
  },
  {
    sys: {
      id: "2",
    },
    fields: {
      name: "Apartment 2",
      slug: "single-basic",
      type: "Two Bedroom up to 6 Guests",
      price: 150,
      size: 250,
      capacity: 1,
      pets: false,
      breakfast: false,
      featured: true,
      description:
        "Street art edison bulb gluten-free, tofu try-hard lumbersexual brooklyn tattooed pickled chambray. Actually humblebrag next level, deep v art party wolf tofu direct trade readymade sustainable hell of banjo. Organic authentic subway tile cliche palo santo, street art XOXO dreamcatcher retro sriracha portland air plant kitsch stumptown. Austin small batch squid gastropub. Pabst pug tumblr gochujang offal retro cloud bread bushwick semiotics before they sold out sartorial literally mlkshk. Vaporware hashtag vice, sartorial before they sold out pok pok health goth trust fund cray.",
      extras: [
        "Plush pillows and breathable bed linens",
        "Soft, oversized bath towels",
        "Full-sized, pH-balanced toiletries",
        "Complimentary refreshments",
        "Adequate safety/security",
        "Internet",
        "Comfortable beds",
      ],
      images: [
        {
          fields: {
            file: {
              url: bedroom2,
            },
          },
        },
        {
          fields: {
            file: {
              url: livingroom2,
            },
          },
        },

        {
          fields: {
            file: {
              url: kitchen2,
            },
          },
        },
        {
          fields: {
            file: {
              url: bathroom2,
            },
          },
        },
      ],
    },
  },
  {
    sys: {
      id: "3",
    },
    fields: {
      name: "Apartment 3",
      slug: "single-standard",
      type: "1 Bedroom up to 4 Guests",
      price: 100,
      size: 300,
      capacity: 1,
      pets: false,
      breakfast: false,
      featured: true,
      description:
        "Street art edison bulb gluten-free, tofu try-hard lumbersexual brooklyn tattooed pickled chambray. Actually humblebrag next level, deep v art party wolf tofu direct trade readymade sustainable hell of banjo. Organic authentic subway tile cliche palo santo, street art XOXO dreamcatcher retro sriracha portland air plant kitsch stumptown. Austin small batch squid gastropub. Pabst pug tumblr gochujang offal retro cloud bread bushwick semiotics before they sold out sartorial literally mlkshk. Vaporware hashtag vice, sartorial before they sold out pok pok health goth trust fund cray.",
      extras: [
        "Plush pillows and breathable bed linens",
        "Soft, oversized bath towels",
        "Full-sized, pH-balanced toiletries",
        "Complimentary refreshments",
        "Adequate safety/security",
        "Internet",
        "Comfortable beds",
      ],
      images: [
        {
          fields: {
            file: {
              url: bedroom3,
            },
          },
        },
        {
          fields: {
            file: {
              url: livingroom3,
            },
          },
        },
        {
          fields: {
            file: {
              url: kitchen3,
            },
          },
        },
        {
          fields: {
            file: {
              url: bathroom3,
            },
          },
        },
      ],
    },
  },
];
