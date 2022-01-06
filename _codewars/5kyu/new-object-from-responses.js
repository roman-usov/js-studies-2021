"use strict";

////////// Input Data

const originalStores = {
  stores: [
    {
      storeId: 35,
      linesAvailableNow: [
        {
          lineId: "6f2b1158-6dd2-4ff9-a735-d37ca19bc78e",
          productId: "82156414",
          type: "PRODUCT",
          quantity: 1,
          availableStock: 1,
          availableDate: "2021-10-19T15:29:37.185401",
          actorId: "60069806",
        },
        {
          lineId: "6f2b1158-6dd2-4ff9-a735-d37ca23bc78e",
          productId: "82156000",
          type: "PRODUCT",
          quantity: 2,
          availableStock: 2,
          availableDate: "2021-10-19T15:29:37.185401",
          actorId: "60069806",
        },
      ],
      linesOnOrder: [
        {
          lineId: "6f2b1158-6dd2-4ff9-a735-d38ca19bc78e",
          productId: "82156101",
          type: "PRODUCT",
          quantity: 1,
          availableStock: 1,
          availableDate: "2021-11-01T15:29:37.185401",
          actorId: "60069806",
        },
        {
          lineId: "6f2b1158-6dd2-4ff9-g635-d37ca23bc78e",
          productId: "82156102",
          type: "PRODUCT",
          quantity: 2,
          availableStock: 2,
          availableDate: "2021-11-01T15:29:37.185401",
          actorId: "60069806",
        },
      ],
      linesNotAvailable: [
        {
          lineId: "6f2b12222-6dd2-4ff9-g635-d37ca23bc78e",
          productId: "82156103",
          type: "PRODUCT",
          quantity: 2,
          availableStock: 2,
          availableDate: "",
          actorId: "60069806",
        },
      ],
    },
  ],
};

const originalProducts = [
  {
    82156414: {
      gtin_master: {
        value: ["4620019753405"],
      },
      unitSale: {
        value: ["NIU"],
      },
      displayedName: {
        value: [
          "Дверь для шкафа Delinia «Сосна лофт» 40x70 см, ЛДСП, цвет чёрный",
        ],
      },
      mediaMainPhoto: {
        value: [
          "https://res.cloudinary.com/lmru/image/upload/LMCode/82156414.jpg",
        ],
      },
    },
  },
  {
    82156000: {
      gtin_master: {
        value: ["4620019753000"],
      },
      unitSale: {
        value: ["NIU"],
      },
      displayedName: {
        value: ["Заслонка 40x70 см, ЛДСП, цвет чёрный"],
      },
      mediaMainPhoto: {
        value: [
          "https://res.cloudinary.com/lmru/image/upload/LMCode/82156414.jpg",
        ],
      },
    },
  },
  {
    82156101: {
      gtin_master: {
        value: ["4620019753012"],
      },
      unitSale: {
        value: ["NIU"],
      },
      displayedName: {
        value: ["Колонка 40x70 см, ЛДСП, цвет чёрный"],
      },
      mediaMainPhoto: {
        value: [
          "https://res.cloudinary.com/lmru/image/upload/LMCode/82156414.jpg",
        ],
      },
    },
  },
  {
    82156102: {
      gtin_master: {
        value: ["4620019753012"],
      },
      unitSale: {
        value: ["NIU"],
      },
      displayedName: {
        value: ["Солонка 40x70 см, ЛДСП, цвет чёрный"],
      },
      mediaMainPhoto: {
        value: [
          "https://res.cloudinary.com/lmru/image/upload/LMCode/82156414.jpg",
        ],
      },
    },
  },
  {
    82156103: {
      gtin_master: {
        value: ["4620019753103"],
      },
      unitSale: {
        value: ["NIU"],
      },
      displayedName: {
        value: ["Солонка 40x70 см, ЛДСП, цвет чёрный"],
      },
      mediaMainPhoto: {
        value: [
          "https://res.cloudinary.com/lmru/image/upload/LMCode/82156414.jpg",
        ],
      },
    },
  },
];

////////// Classes

class Stores {
  constructor(stores) {
    this.stores = stores;
  }
}

class Store {
  linesAvailableNow;
  linesOnOrder;
  linesNotAvailable;
  constructor(storeId) {
    this.storeId = storeId;
  }
}

class LineGroup {
  lines = [];
  constructor(availableDate) {
    this.availableDate = availableDate;
  }
}

class Line {
  constructor(
    lineId,
    lmCode,
    images,
    type,
    barcode,
    title,
    priceUnit,
    quantity,
    availableStock,
    actorId
  ) {
    this.lineId = lineId;
    this.lmCode = lmCode;
    this.images = images;
    this.type = type;
    this.barcode = barcode;
    this.title = title;
    this.priceUnit = priceUnit;
    this.quantity = quantity;
    this.availableStock = availableStock;
    this.actorId = actorId;
  }
}

////////// Helper Functions

//// Can get product details from RMS response by LM code
function getProductDetails(products, lmcode) {
  return products.find((product) => Boolean(product[lmcode]))[lmcode];
}

//Can create a new line based on the line object array in the stores response and product details from the RMS Response
function createLine(line, productDetails) {
  return new Line(
    line.lineId,
    line.productId,
    productDetails.mediaMainPhoto.value,
    line.type,
    productDetails.gtin_master.value[0],
    productDetails.displayedName.value[0],
    productDetails.unitSale.value[0],
    line.quantity,
    line.availableStock,
    line.actorId
  );
}

//// Can take in the line object array from the input stores and product details from the RMS response and create a target line array
function createLines(lines, productsDetails) {
  const newLines = [];
  lines.forEach((prLine) => {
    const productDetails = getProductDetails(productsDetails, prLine.productId);
    const newLine = createLine(prLine, productDetails);
    newLines.push(newLine);
  });
  return newLines;
}

//// Can create a new line group object from the input stores and product details from the RMS response
function createGroup(group, productsDetails) {
  const newGroup = new LineGroup(group[0].availableDate);
  newGroup.lines = createLines(group, productsDetails);
  return newGroup;
}

//// Can create a new store for the expected stores array
function createStore(store, productsDetails) {
  const newStore = new Store(store.storeId);
  newStore.linesAvailableNow = createGroup(
    store.linesAvailableNow,
    productsDetails
  );
  newStore.linesOnOrder = createGroup(store.linesOnOrder, productsDetails);
  newStore.linesNotAvailable = createGroup(
    store.linesNotAvailable,
    productsDetails
  );
  return newStore;
}

//// Can create an expected stores object
function createStores(inputStores, productsDetails) {
  return new Stores(
    inputStores.stores.map((store) => createStore(store, productsDetails))
  );
}

//// Get expected stores array

const resultingStores = createStores(originalStores, originalProducts);
console.log(resultingStores);

////////// Expected Result
const resultStores = {
  stores: [
    {
      storeId: 35,
      linesAvailableNow: {
        availableDate: "2021-10-19T15:29:37.185401",
        lines: [
          {
            lineId: "6f2b1158-6dd2-4ff9-a735-d37ca19bc78e",
            lmCode: "82156414",
            images: [
              "https://res.cloudinary.com/lmru/image/upload/LMCode/82156414.jpg",
            ],
            type: "PRODUCT",
            barcode: "4620019753405",
            title:
              "Дверь для шкафа Delinia «Сосна лофт» 40x70 см, ЛДСП, цвет чёрный",
            priceUnit: "NIU",
            quantity: 1,
            availableStock: 1,
            actorId: "60069806",
          },
        ],
      },
      linesOnOrder: {},
      linesNotAvailable: {},
    },
  ],
};

////////// For Development
/*

const testInputLine = {
  lineId: "6f2b1158-6dd2-4ff9-a735-d37ca19bc78e",
  productId: "82156414",
  type: "PRODUCT",
  quantity: 1,
  availableStock: 1,
  availableDate: "2021-10-19T15:29:37.185401",
  actorId: "60069806",
};

const testInputProductDetails = {
  gtin_master: {
    value: ["4620019753405"],
  },
  unitSale: {
    value: ["NIU"],
  },
  displayedName: {
    value: ["Дверь для шкафа Delinia «Сосна лофт» 40x70 см, ЛДСП, цвет чёрный"],
  },
  mediaMainPhoto: {
    value: ["https://res.cloudinary.com/lmru/image/upload/LMCode/82156414.jpg"],
  },
};

const testInputLines = [
  {
    lineId: "6f2b1158-6dd2-4ff9-a735-d37ca19bc78e",
    productId: "82156414",
    type: "PRODUCT",
    quantity: 1,
    availableStock: 1,
    availableDate: "2021-10-19T15:29:37.185401",
    actorId: "60069806",
  },
  {
    lineId: "6f2b1158-6dd2-4ff9-a735-d37ca23bc78e",
    productId: "82156000",
    type: "PRODUCT",
    quantity: 2,
    availableStock: 2,
    availableDate: "2021-10-19T15:29:37.185401",
    actorId: "60069806",
  },
];

const testInputStore = {
  storeId: 35,
  linesAvailableNow: [
    {
      lineId: "6f2b1158-6dd2-4ff9-a735-d37ca19bc78e",
      productId: "82156414",
      type: "PRODUCT",
      quantity: 1,
      availableStock: 1,
      availableDate: "2021-10-19T15:29:37.185401",
      actorId: "60069806",
    },
    {
      lineId: "6f2b1158-6dd2-4ff9-a735-d37ca23bc78e",
      productId: "82156000",
      type: "PRODUCT",
      quantity: 2,
      availableStock: 2,
      availableDate: "2021-10-19T15:29:37.185401",
      actorId: "60069806",
    },
  ],
  linesOnOrder: [
    {
      lineId: "6f2b1158-6dd2-4ff9-a735-d38ca19bc78e",
      productId: "82156101",
      type: "PRODUCT",
      quantity: 1,
      availableStock: 1,
      availableDate: "2021-11-01T15:29:37.185401",
      actorId: "60069806",
    },
    {
      lineId: "6f2b1158-6dd2-4ff9-g635-d37ca23bc78e",
      productId: "82156102",
      type: "PRODUCT",
      quantity: 2,
      availableStock: 2,
      availableDate: "2021-11-01T15:29:37.185401",
      actorId: "60069806",
    },
  ],
  linesNotAvailable: [
    {
      lineId: "6f2b12222-6dd2-4ff9-g635-d37ca23bc78e",
      productId: "82156103",
      type: "PRODUCT",
      quantity: 2,
      availableStock: 2,
      availableDate: "",
      actorId: "60069806",
    },
  ],
};
*/

//const testOutputLines = createLines(testInputLines, originalProducts);
//console.log(testOutputLines);

// const testAvailableGroup = createGroup(
//   testInputStore.linesAvailableNow,
//   originalProducts
// );
//
// const testOnOrderGroup = createGroup(
//   testInputStore.linesOnOrder,
//   originalProducts
// );
//
// const testUnavailableGroup = createGroup(
//   testInputStore.linesNotAvailable,
//   originalProducts
// );
//
// createStore(testInputStore, originalProducts);

// const testLineObj = createLine(testLine, testProduct);
// console.log(testLineObj);
// const testGettingProducts = getProductDetails(originalProducts, 82156414);
// console.log(testGettingProducts);
