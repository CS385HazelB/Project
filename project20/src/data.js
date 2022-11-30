const products = [
  // {
  //   name: "Bootle Opener Lighter",
  //   description:
  //     "Child-resistant disposable flint lighter with bottle opener on one end. Suitable for multicolour printing.",
  //   cost: 0.71,
  //   units: 120,
  //   picture: "",
  //   reference: 1263315
  // },
  // {
  //   name: "Glass Lunchbox With Bamboo Lid",
  //   description:
  //     "Enjoy the safety of storing and heating your delicious home cooked meals in this glass bento box. With an airtight bamboo lid you can prepare your healthy meals at home and take them anywhere with you while keeping your food fresh. Made of high quality borosilicate glass which can withstand high thermal differences. Including handy spork.",
  //   cost: 10.84,
  //   units: 120,
  //   picture: "",
  //   reference: 13221834
  // },
  {
    name: "Kitab Kitchen Apron In Cotton",
    description:
      "Kitchen apron in 180 gr/m² cotton material. Convenient for your everyday cooking.",
    cost: 3.9,
    units: 120,
    picture: require("../public/images/Apron.jpeg"),
    reference: 13201642
  },
  {
    name: "Delux Lunch Box With Air Tight Lid",
    description:
      "Lunch box with air tight lid made of PP out side and stainless steel inside",
    cost: 9.6,
    units: 120,
    picture: require("../public/images/LunchBoxStainless.jpeg"),
    reference: 13201746
  },
  {
    name: "Recycled Spork",
    description:
      "The Spork is a New Welcomed addition to our food & drinkware range, made in the UK from recycled plastic and digitally printed in full colour as standard.",
    cost: 0.74,
    units: 250,
    picture: require("../public/images/spork.jpeg"),
    reference: 13210655
  },
  {
    name: "Rocks 4 Stone Ice Cubes In Pouch",
    description:
      "Set of 4 reusable stone ice cubes in handy storage cotton draw cord pouch.",
    cost: 3.26,
    units: 120,
    picture: require("../public/images/Rockcudes.jpeg"),
    reference: 13225317
  },
  {
    name: "Neokit Cotton Oven Glove",
    description:
      "Useful kitchen oven glove in cotton material with one side rubber material.",
    cost: 3.14,
    units: 120,
    picture: require("../public/images/OvenGlove.jpeg"),
    reference: 13201555
  },
  // {
  //   name: "Wine&Cheese Cheese And Wine Set",
  //   description:
  //     "Bamboo cheese and wine set. Includes a stainless steel-knife, cheese peeler, bottle opener and wine stopper. Presented in bamboo box",
  //   cost: 29.87,
  //   units: 120,
  //   picture: "",
  //   reference: 13198788
  // },
  {
    name: "Treechesse Cheese Board Set In Bamboo",
    description:
      "Tree-shaped bamboo cheeseboard set with knife cheese spreader in stainless steel. Bamboo is a natural product, there may be slight variations in colour and size per item, which can affect the final decoration outcome.",
    cost: 10.66,
    units: 120,
    picture: require("../public/images/WineChessboard.jpeg"),
    reference: 13222061
  },
  {
    name: "Metal Straw",
    description:
      "If you're looking for a sustainable alternative to plastic straws, our Metal Straw is the ideal product. Made with food grade stainless steel, it is durable, reusable and environmentally friendly.",
    cost: 0.59,
    units: 320,
    picture: require("../public/images/Straw.jpeg"),
    reference: 13207986
  },
  {
    name: "Campo Tea Bamboo Tea Box",
    description:
      "Bamboo tea box with transparent glass lid. Within the 4 equally divided compartments you can easily hold up to 24 teabags. Bamboo is a natural product, there may be slight variations in colour and size per item, which can affect the final decoration outcome. ",
    cost: 9.11,
    units: 120,
    picture: require("../public/images/TeaBox.jpeg"),
    reference: 13225325
  }
  // {
  //   name: "Munnar Teapot In Borosilicate Glass",
  //   description:
  //     "High borosilicate glass teapot with stainless steel infuser and bamboo lid,. Capacity 850 ml. Bamboo is a natural product.",
  //   cost: 10.08,
  //   units: 120,
  //   picture: "",
  //   reference: 13225346
  // },
  // {
  //   name: "Belize Set Of 2 Double Wall Espresso",
  //   description:
  //     "Set of 2 double wall espresso glasses with bamboo saucer. Presented in Kraft paper box. Capacity 90 ml.",
  //   cost: 13.6,
  //   units: 120,
  //   picture: "",
  //   reference: 13224863
  // },
  // {
  //   name: "Recycled Spaghetti Measure",
  //   description:
  //     "paghetti Measure, to measure portions for 1, 2 or 3 people. Made in the UK from recycled plastic and digitally printed up to full colour as standard.",
  //   cost: 0.39,
  //   units: 120,
  //   picture: "",
  //   reference: 13197678
  // },
  // {
  //   name: "Ellwood Large Cutting Board",
  //   description:
  //     "Large cutting board with groove, manufactured in EU from Alder wood. Made from 1 piece of wood, 100% natural",
  //   cost: 5.24,
  //   units: 120,
  //   picture: "",
  //   reference: 13198378
  // },
  // {
  //   name: "Chill Customisable Ice Cube Tray",
  //   description:
  //     "This ice cube tray offers a novel way of presenting your logo or message on a very useful product. Your message can be added to the central area and/or to the base of each individual cube mould through relief moulding, for a tactile finish.",
  //   cost: 2.78,
  //   units: 120,
  //   picture: "",
  //   reference: 14003057
  // },
  // {
  //   name: "Ukiyo Aware 180Gr Rcotton Table Cloth 250X140Cm",
  //   description:
  //     "Create the perfect dining space for special occasions with the Ukiyo Aware™ 180gr rcotton table cloth. The neutral design coordinates perfectly with your dining decor. Size 250x140cm. With Aware™ tracer that validates the genuine use of recycled materials. Each table cloth saves 5464.7 litres of water. 2% of proceeds of each product sold containing AWARE™ will be donated to Water.org.",
  //   cost: 24.47,
  //   units: 120,
  //   picture: "",
  //   reference: 13264083
  // },
  // {
  //   name: "Noun Recycled Neoprene Wine Sleeve Holder",
  //   description:
  //     "Recycled neoprene wine sleeve holder with fine stitching and extra insulation to keep the wine cool for a longer time, while also making the bottle comfortable to hold. It stretches and expands to fit all kinds of bottle sizes to hold the bottle tight in place. It also protects your wine bottle from breakage during transport.",
  //   cost: 5.93,
  //   units: 120,
  //   picture: "",
  //   reference: 14002968
  // },
  // {
  //   name: "Oli 360 ml Ceramic Mug With Handle",
  //   description:
  //     "Ceramic mug with a modern design and matt finish featuring a shiny interior with a colour-pop effect. Volume capacity is 360 ml. Dishwasher safe for all printing methods. Presented in a recycled cardboard gift box.",
  //   cost: 5.11,
  //   units: 120,
  //   picture: "",
  //   reference: 14002902
  // },
  // {
  //   name: "Bry Bamboo Cheese Grater",
  //   description:
  //     "With this handheld and sturdy bamboo cheese grater it's easy and quick to grate some parmesan or cheddar cheese for all your favorite pasta dishes. The bamboo used is sourced and produced following sustainable standards.",
  //   cost: 14.37,
  //   units: 120,
  //   picture: "",
  //   reference: 14000483
  // },
  // {
  //   name: "Argulls Bamboo Salad Bowl And Tools",
  //   description:
  //     "Bamboo salad set with a classic round-shaped bowl, salad spoon, and a salad fork, which is practical for everyday family dinners. The bamboo used is sourced and produced following sustainable standards.",
  //   cost: 26.36,
  //   units: 120,
  //   picture: "",
  //   reference: 14000424
  // },
  // {
  //   name: "Jardim 5-Piece Recycled Glass Set",
  //   description:
  //     "5-piece 100% recycled glass beverage drink set featuring 4 glasses (400 ml) and 1 dispenser (4L) with stainless steel lid. With this beverage dispenser set you can serve sangria, fresh juice, and ice tea on a grand scale with all features you’ll need to keep the party flowing. The fully assembled stainless steel tap provides an easy long-lasting pour every time. Every piece is made of recycled glass bottles. Recycled glass is manufactured using less energy, raw material, and additives, than what is required for making traditional glass. Dishwasher safe.",
  //   cost: 45.31,
  //   units: 120,
  //   picture: "",
  //   reference: 14000411
  // },
  // {
  //   name: "Juggo Recycled Glass Mug With Straw",
  //   description:
  //     "This 550 ml glass mug with straw made of 100% recycled glass is perfect for drinking water, lemonades, teas, juices, or cocktails. The mug is made of recycled glass bottles and has a stainless steel screw cap making it right on trend for people who are looking to enjoy their favorite drink on-the-go. Recycled glass is manufactured using less energy, raw material, and additives, than what is required for making traditional glass. The mug and the straw are both dishwasher safe.",
  //   cost: 9.0,
  //   units: 120,
  //   picture: "",
  //   reference: 14000412
  // },
  // {
  //   name: "Verano Recycled Glass Cocktail Cup With Squeezer",
  //   description:
  //     "550 ml cocktail cup made of recycled glass, including a citrus squeezer and a straw. Made from 1 glass bottle. Recycled glass is manufactured using less energy, raw material, and additives, than what is required for making traditional glass.",
  //   cost: 9.63,
  //   units: 120,
  //   picture: "",
  //   reference: 14000315
  // },
  // {
  //   name: "Bamboo Bottle Opener with Fridge Magnet",
  //   description:
  //     "The bamboo bottle openers come with 2 magnets as standard allowing these to be put onto any magnetic surface.Individual laser engraved names & biodegradable bag packing is available for an additional cost.Lead times are from just 5 days as standard. ",
  //   cost: 1.69,
  //   units: 120,
  //   picture: "",
  //   reference: 13263875
  // },
  // {
  //   name: "Block Bottom Kraft Paper Bags",
  //   description:
  //     "Grab bags have become quite popular in the food industry.Available in different standard sizes, different MOQ's for different sizes.Available in white or brown kraft.Prices are based on size: 180x100x230mm.",
  //   cost: 0.19,
  //   units: 320,
  //   picture: "",
  //   reference: 13263641
  // },
  // {
  //   name: "Food Flask",
  //   description:
  //     "Our new and improved 400 ml / 13.5 fl oz vacuum insulated pot that is 100% leak proof and will keep your food hot for 6 hours or cold for 8 hours. 100% leakproof.Natural wood fibre spoon included. Full steel food contact. Elastic & machine-washable nylon strap.High quality stainless steel. BPA free.",
  //   cost: 22.78,
  //   units: 120,
  //   picture: "",
  //   reference: 13263794
  // },
  // {
  //   name: "Sugarcane Bags",
  //   description:
  //     "These are made from sugarcane waste and is an eco friendly alternative to polythene. These are carbon neutral and 100% recyclable. Price is based on standard size 380w x 450h x 75g mm, for 1 colour to 2 sides.",
  //   cost: 0.21,
  //   units: 520,
  //   picture: "",
  //   reference: 13263638
  // },
  // {
  //   name: "Recycled Rice Scoop",
  //   description:
  //     "Rice Scoop Measure, to measure 100 grams of dry rice. Made in the UK from recycled plastic and digitally printed up to full colour as standard.",
  //   cost: 0.73,
  //   units: 250,
  //   picture: "",
  //   reference: 13210629
  // },
  // {
  //   name: "Green & Good Plastic Coasters - Recycled",
  //   description:
  //     "Also available full colour printed see Full Colour Coaster Coaster made from recycled CD case plastic available in a choice of bright colours.",
  //   cost: 0.8,
  //   units: 120,
  //   picture: "",
  //   reference: 1287831825
  // },
  // {
  //   name: "Setboo Bamboo Cutlery Set",
  //   description:
  //     "Re-usable bamboo cutlery set in canvas pouch. Includes knife, fork and spoon. Bamboo is a natural product, there may be slight variations in colour and size per item, which can affect the final decoration outcome.",
  //   cost: 2.08,
  //   units: 120,
  //   picture: "",
  //   reference: 13225018
  // },
  // {
  //   name: "Ellwood Runda Oval Board With Bark",
  //   description:
  //     "Oval cutting board with bark manufactured in EU from Alder wood. Made from 1 piece of wood, 100% natural.",
  //   cost: 4.38,
  //   units: 120,
  //   picture: "",
  //   reference: 13198379
  // }
];
export default products;
