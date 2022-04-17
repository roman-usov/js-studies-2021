import catalogue from "/catalogue/catalogue.json" assert { type: "json" };

// console.log(catalogue);

const getModelRequest =
  "https://kostroma.leroymerlin.ru/product/kraska-dlya-sten-i-potolkov-luxens-baza-a-10-l-82025672.model.json?familyIds=b1d2a510-e229-11ea-8c87-19f98f6d2bf5;kraski-dlya-sten-i-potolkov-201709_Opus_Family;7d0e80e0-4672-11ea-b9e6-8d2ee1855ff8;e89ccb60-4671-11ea-b9e6-8d2ee1855ff8";

// const familyIds = [
//   "b1d2a510-e229-11ea-8c87-19f98f6d2bf5",
//   "kraski-dlya-sten-i-potolkov-201709_Opus_Family",
//   "7d0e80e0-4672-11ea-b9e6-8d2ee1855ff8",
//   "e89ccb60-4671-11ea-b9e6-8d2ee1855ff8",
// ];

const familyIds = [
  "elektricheskie-vodonagrevateli-nakopitelnye-201709_Opus_Family",
  "24aba590-a117-11ea-973d-5d3b095bf0a3_Opus_Family",
  "6598c2d0-a364-11ec-8a74-af425be0dfd9_Opus_Family",
  "68e7bcc4-a96c-4396-bba8-7b3ed9446f0c_Opus_Family",
  "69eda100-52b2-11ec-b82f-ed980df304fa_Opus_Family",
  "711b91b0-42ec-11ec-8a69-ff96b19e7151_Opus_Family",
  "90f9bd40-48e8-11ea-9e76-ef66c83887c3_Opus_Family",
  "9d0b6d60-93a9-11eb-b886-99d7a0549da9_Opus_Family",
  "a3069860-7886-11e9-98cb-c15c0add08e1_Opus_Family",
  "ca5bcac0-48e7-11ea-9e76-ef66c83887c3_Opus_Family",
  "fb1879f0-fb0e-11e9-810b-878d0b27ea5b_Opus_Family",
];

/* const catalogue = [
  {
    id: "/catalogue/instrumenty.html",
    catId: "87ca43f0-475a-11ea-a27c-5dbb3eb10c3c",
    name: "Инструменты",
    picture:
      "https://res.cloudinary.com/lmru-test/image/upload/f_auto,q_auto/elbrus/pic-for-mob-app/img-catalog-4.jpg",
    level: 1,
    modular: false,
    sitePath: "/catalogue/instrumenty.html",
    childs: [
      {
        id: "/catalogue/instrumenty/elektroinstrumenty.html",
        catId: "37097a00-475d-11ea-a27c-5dbb3eb10c3c",
        name: "Электроинструменты",
        level: 2,
        parentId: "87ca43f0-475a-11ea-a27c-5dbb3eb10c3c",
        modular: false,
        sitePath: "/catalogue/elektroinstrumenty.html",
        childs: [
          {
            id: "/catalogue/instrumenty/elektroinstrumenty/dreli-shurupoverty.html",
            catId: "dreli-shurupoverty-201709_Opus_Family",
            name: "Дрели-шуруповерты",
            level: 3,
            parentId: "37097a00-475d-11ea-a27c-5dbb3eb10c3c",
            modular: false,
            sitePath: "/catalogue/dreli-shurupoverty.html",
            childs: [
              {
                id: "/catalogue/instrumenty/elektroinstrumenty/dreli-shurupoverty/shurupoverty-akkumulyatornye.html",
                catId: "54ea5fa0-5877-11ea-ad81-af309490eba8_Opus_Family",
                name: "Дрели-шуруповерты аккумуляторные",
                level: 4,
                parentId: "dreli-shurupoverty-201709_Opus_Family",
                modular: false,
                sitePath:
                  "/catalogue/dreli-shurupoverty/shurupoverty-akkumulyatornye.html",
                childs: [],
              },
              {
                id: "/catalogue/instrumenty/elektroinstrumenty/dreli-shurupoverty/setevye.html",
                catId: "f281def0-b458-11e9-92b4-f1cb18478361_Opus_Family",
                name: "Дрели-шуруповерты сетевые",
                level: 4,
                parentId: "dreli-shurupoverty-201709_Opus_Family",
                modular: false,
                sitePath: "/catalogue/dreli-shurupoverty/setevye.html",
                childs: [],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "/catalogue/kraski.html",
    catId: "e89ccb60-4671-11ea-b9e6-8d2ee1855ff8",
    name: "Краски",
    picture:
      "http://res.cloudinary.com/lmru-test/image/upload/v1586359375/elbrus/images/category-images/11-kraski/kraski_2.jpg",
    level: 1,
    modular: false,
    sitePath: "/catalogue/kraski.html",
    childs: [
      {
        id: "/catalogue/kraski/kraski-dlya-vnutrennih-rabot.html",
        catId: "7d0e80e0-4672-11ea-b9e6-8d2ee1855ff8",
        name: "Краски для внутренних работ",
        level: 2,
        parentId: "e89ccb60-4671-11ea-b9e6-8d2ee1855ff8",
        modular: false,
        sitePath: "/catalogue/kraski-dlya-vnutrennih-rabot.html",
        childs: [
          {
            id: "/catalogue/kraski/kraski-dlya-vnutrennih-rabot/kraski-dlya-sten-i-potolkov.html",
            catId: "kraski-dlya-sten-i-potolkov-201709_Opus_Family",
            name: "Краски для стен и потолков",
            level: 3,
            parentId: "7d0e80e0-4672-11ea-b9e6-8d2ee1855ff8",
            modular: false,
            sitePath: "/catalogue/kraski-dlya-sten-i-potolkov.html",
            childs: [
              {
                id: "/catalogue/kraski/kraski-dlya-vnutrennih-rabot/kraski-dlya-sten-i-potolkov/kolerovka.html",
                catId: "373f8b00-e225-11ea-8c87-19f98f6d2bf5",
                name: "Колеровка красок для стен и потолков",
                level: 4,
                parentId: "kraski-dlya-sten-i-potolkov-201709_Opus_Family",
                modular: false,
                sitePath:
                  "/catalogue/kraski-dlya-sten-i-potolkov/kolerovka.html",
                childs: [],
              },
              {
                id: "/catalogue/kraski/kraski-dlya-vnutrennih-rabot/kraski-dlya-sten-i-potolkov/luxens.html",
                catId: "b1d2a510-e229-11ea-8c87-19f98f6d2bf5",
                name: "Краски для стен и потолков LUXENS",
                level: 4,
                parentId: "kraski-dlya-sten-i-potolkov-201709_Opus_Family",
                modular: false,
                sitePath: "/catalogue/kraski-dlya-sten-i-potolkov/luxens.html",
                childs: [],
              },
            ],
          },
        ],
      },
    ],
  },
]; */

const TOP_CATALOG_LEVEL = 1;

const TOP_LEVEL_BREADCRUMBS = [
  {
    label: "Главная",
    link: "/",
  },
  {
    label: "Каталог",
    link: "/catalogue/",
  },
];

function getBreadcrumbs(familyIds, catalogue) {
  const foundBreadcrumbs = [];

  let nextBreadcrumbId = "";
  let level;

  // 1. Find the first breadcrumb, save it in foundBreadcrumbs and assign its parentId to nextBreadcrumbId;
  for (let i = 0; i < familyIds.length; i += 1) {
  
    const currentFamilyId = familyIds[i];

    const breadcrumb = getBreadCrumb (catalogue, "catId", currentFamilyId);

    foundBreadcrumbs.push(breadcrumb);

    nextBreadcrumbId = breadcrumb.parentId;

    level = breadcrumb.level - 1;

    break;
  }

  // 2. Get top level breadcrumbs and save them in foundBreadcrumbs;
  while (level >= TOP_CATALOG_LEVEL) {
    const nextBreadcrumb = getBreadCrumb (catalogue, "catId", nextBreadcrumbId);

    foundBreadcrumbs.unshift(nextBreadcrumb);

    nextBreadcrumbId = nextBreadcrumb.parentId;

    level -= 1;
  }
  // 3. Sort found breadcrumbs in an ascending order;
  // foundBreadcrumbs.sort((a, b) => a.level - b.level);

  return formattedBreadcrumbs(foundBreadcrumbs);
}

// ---------- working
function getBreadCrumb (catalogue, catId, familyId) {
  // Base case
  if (catalogue[catId] === familyId) {
    return {
      label: catalogue.name,
      link: `${catalogue.sitePath.slice(0, -5)}/`,
      level: catalogue.level,
      parentId: catalogue.parentId,
    };;
  } else {
    const catalogueKeys = Object.keys(catalogue); // add this line to iterate over the keys

    for (let i = 0, length = catalogueKeys.length; i < length; i++) {
      const currentKey = catalogueKeys[i]; // use this key for iteration, instead of index "i"

      // add "catalogue[k] &&" to ignore null values
      if (catalogue[currentKey] && typeof catalogue[currentKey] === 'object') {

        const found = getBreadCrumb(catalogue[currentKey], catId, familyId);

        if (found) {
          // If the object was found in the recursive call, bubble it up.
          return found;
        }
      }
    }
  }
}

console.log(
  "RETURNED",
  getBreadCrumb(
    catalogue, "catId", "elektricheskie-vodonagrevateli-nakopitelnye-201709_Opus_Family"
  )
);


function formattedBreadcrumbs(foundBreadcrumbs) {
  const breadcrumbs = [];

  for (let i = 0; i < foundBreadcrumbs.length; i += 1) {
    const currentBreadcrumb = foundBreadcrumbs[i];

    const finalBreadcrumb = {
      label: currentBreadcrumb.label,
      link: currentBreadcrumb.link,
    };

    breadcrumbs.push(finalBreadcrumb);
  }

  return [...TOP_LEVEL_BREADCRUMBS, ...breadcrumbs];
}


console.time("breadcrumbs");

console.log(getBreadcrumbs(familyIds, catalogue));

console.timeEnd("breadcrumbs");
