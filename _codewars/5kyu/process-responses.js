"use strict";

////// Input

const CONTEXT = {
  GROUP_RESPONSE: {
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
  },
  PRODUCT_INFO: {
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

const { GROUP_RESPONSE, PRODUCT_INFO } = CONTEXT;
console.log(`GROUP_RESPONSE`, GROUP_RESPONSE);
console.log(`PRODUCT_INFO`, PRODUCT_INFO);

const createResponse = (stores, productsInfo) => {
  return stores.map((store) => ({
    ...store,
    linesAvailableNow: createGroup(store.linesAvailableNow, productsInfo),
    linesNotAvailable: createGroup(store.linesNotAvailable, productsInfo),
    linesOnOrder: createGroup(store.linesOnOrder, productsInfo),
  }));
};

// console.log(createLines(testInputLines, PRODUCT_INFO));
// console.log(createGroup(testInputLines, PRODUCT_INFO));
// console.log(createResponse(GROUP_RESPONSE.stores, PRODUCT_INFO));

const createProductAttributes = (productData) => ({
  barcode: productData.gtin_master.value[0],
  priceUnit: productData.unitSale.value[0],
  title: productData.displayedName.value[0],
  images: productData.mediaMainPhoto.value,
});

// const createProductAttributes = (productData) => {
//   const productAttributes = {};
//   for (const attribute of Object.entries(productData)) {
//     if (attribute[0] === "gtin_master")
//       productAttributes.barcode = attribute[1].value[0];
//     if (attribute[0] === "unitSale")
//       productAttributes.priceUnit = attribute[1].value[0];
//     if (attribute[0] === "displayedName")
//       productAttributes.title = attribute[1].value[0];
//     if (attribute[0] === "mediaMainPhoto")
//       productAttributes.images = attribute[1].value;
//   }
//   return productAttributes;
// };

const testInputProductData = {
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
    value: ["https://res.cloudinary.com/lmru/image/upload/LMCode/82156414.jpg"],
  },
  test: {
    value: ["test"],
  },
};

const testObj = {
  ...createProductAttributes(testInputProductData),
};

console.log(testObj);

//createProductAttributes(testInputProductData);

const prepareGroupResponse = ({ GROUP_RESPONSE, PRODUCT_INFO }) => {
  const createProductAttributes = (productData) => ({
    barcode: productData.gtin_master.value[0],
    priceUnit: productData.unitSale.value[0],
    title: productData.displayedName.value[0],
    images: productData.mediaMainPhoto.value,
  });
  const createLines = (group, productsInfo) => {
    return (group || []).map(({ availableDate, productId, ...line }) => ({
      lineId: productId,
      ...line,
      ...createProductAttributes(productsInfo[productId]),
      //...productsInfo[line.productId],
    }));
  };
  const createGroup = (group, productsInfo) => {
    return {
      availableDate: group[0]?.availableDate || "",
      lines: createLines(group, productsInfo),
    };
  };
  return GROUP_RESPONSE.stores.map((store) => ({
    ...store,
    linesAvailableNow: createGroup(store.linesAvailableNow, PRODUCT_INFO),
    linesNotAvailable: createGroup(store.linesNotAvailable, PRODUCT_INFO),
    linesOnOrder: createGroup(store.linesOnOrder, PRODUCT_INFO),
  }));
};

console.log(prepareGroupResponse(CONTEXT));

const testCont = {
  request: {
    fastifyID: "req-1",
    date: "2021-10-21T10:32:31.136Z",
    params: {},
    cookies: {},
    body: {
      deliveryType: "HOME_DELIVERY",
      originStoreId: 35,
      originRegionId: 34,
      cartId: "211000352523",
      lines: [
        {
          lineId: "6f2b1158-6dd2-4ff9-a735-d37ca19bc78e",
          lmCode: "82156414",
          type: "PRODUCT",
          quantity: 1,
          authorSale: {
            requiredGroup: "AVAILABLE_NOW",
            stockAdditionBySalesman: 2,
            actorId: "60069806",
          },
        },
      ],
    },
  },
};

const {
  request: { body },
} = testCont;
console.log(body);
