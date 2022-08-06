import catalogue from "/catalogue/catalogue.json";

// console.log(catalogue);

const getModelRequest =
  "https://kostroma.leroymerlin.ru/product/kraska-dlya-sten-i-potolkov-luxens-baza-a-10-l-82025672.model.json?familyIds=b1d2a510-e229-11ea-8c87-19f98f6d2bf5;kraski-dlya-sten-i-potolkov-201709_Opus_Family;7d0e80e0-4672-11ea-b9e6-8d2ee1855ff8;e89ccb60-4671-11ea-b9e6-8d2ee1855ff8";

const familyIds = [
  "5a147a50-96d6-11e9-90ad-65933a6151de"
  // "b1d2a510-e229-11ea-8c87-19f98f6d2bf5",
  // "kraski-dlya-sten-i-potolkov-201709_Opus_Family",
  // "7d0e80e0-4672-11ea-b9e6-8d2ee1855ff8",
  // "e89ccb60-4671-11ea-b9e6-8d2ee1855ff8",
];

// const familyIds = [
//   "elektricheskie-vodonagrevateli-nakopitelnye-201709_Opus_Family",
//   "24aba590-a117-11ea-973d-5d3b095bf0a3_Opus_Family",
//   "6598c2d0-a364-11ec-8a74-af425be0dfd9_Opus_Family",
//   "68e7bcc4-a96c-4396-bba8-7b3ed9446f0c_Opus_Family",
//   "69eda100-52b2-11ec-b82f-ed980df304fa_Opus_Family",
//   "711b91b0-42ec-11ec-8a69-ff96b19e7151_Opus_Family",
//   "90f9bd40-48e8-11ea-9e76-ef66c83887c3_Opus_Family",
//   "9d0b6d60-93a9-11eb-b886-99d7a0549da9_Opus_Family",
//   "a3069860-7886-11e9-98cb-c15c0add08e1_Opus_Family",
//   "ca5bcac0-48e7-11ea-9e76-ef66c83887c3_Opus_Family",
//   "fb1879f0-fb0e-11e9-810b-878d0b27ea5b_Opus_Family",
// ];

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

    const breadcrumb = findBreadcrumbInCatalogue(currentFamilyId, catalogue);

    if (breadcrumb === null) continue;

    foundBreadcrumbs.push(breadcrumb);

    nextBreadcrumbId = breadcrumb.parentId;

    level = breadcrumb.level - 1;

    break;
  }

  // 2. Get top level breadcrumbs and save them in foundBreadcrumbs;
  while (level >= TOP_CATALOG_LEVEL) {
    const nextBreadcrumb = findBreadcrumbInCatalogue(
      nextBreadcrumbId,
      catalogue
    );

    foundBreadcrumbs.unshift(nextBreadcrumb);

    nextBreadcrumbId = nextBreadcrumb.parentId;

    level -= 1;
  }
  // 3. Sort found breadcrumbs in an ascending order;
  // foundBreadcrumbs.sort((a, b) => a.level - b.level);

  return formattedBreadcrumbs(foundBreadcrumbs);
}


function findBreadCrumbInCategory(category, familyId) {
  if (familyId === category.catId) {
    return {
      label: category.name,
      link: `${category.sitePath.slice(0, -5)}/`,
      level: category.level,
      parentId: category.parentId,
    };
  }

  const nextCatalogue = category.childs;

  for (let j = 0; j < nextCatalogue.length; j += 1) {
    const nextCategory = nextCatalogue[j];

    if (nextCategory.childs.length !== 0 || nextCategory.level !== 4) {
      const found = findBreadCrumbInCategory(nextCategory, familyId);

      if (found) {
        return found;
      } else {
        continue;
      }
    } else {
      continue;
    }
  }

  return null;
}

/* console.log(
  "RETURNED",
  getBreadCrumb(
    catalogue[12],
    "ff44fb19-256d-4566-9aba-f88a1b17cd24_Opus_Family"
  )
); */


function findBreadcrumbInCatalogue(familyId, catalogue) {
  for (let j = 0; j < catalogue.length; j += 1) {
    const currentCategory = catalogue[j];

    const breadcrumb = findBreadCrumbInCategory (currentCategory, familyId);

    if (breadcrumb === null) continue;

    return breadcrumb;
  }

  return null;
}

/* console.log(
  findBreadcrumbInCatalogue(
    "elektricheskie-vodonagrevateli-nakopitelnye-201709_Opus_Family",
    catalogue
  )
); */


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

console.log(
  getBreadcrumbs(
    familyIds,
    catalogue
  )
);

console.timeEnd("breadcrumbs");
