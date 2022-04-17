import catalogue from "./catalogue.json" assert { type: "json" };

const familyIds = [
  "5a147a50-96d6-11e9-90ad-65933a6151de"
  // "elektricheskie-vodonagrevateli-nakopitelnye-201709_Opus_Family",
  // "24aba590-a117-11ea-973d-5d3b095bf0a3_Opus_Family",
  // "6598c2d0-a364-11ec-8a74-af425be0dfd9_Opus_Family",
  // "68e7bcc4-a96c-4396-bba8-7b3ed9446f0c_Opus_Family",
  // "69eda100-52b2-11ec-b82f-ed980df304fa_Opus_Family",
  // "711b91b0-42ec-11ec-8a69-ff96b19e7151_Opus_Family",
  // "90f9bd40-48e8-11ea-9e76-ef66c83887c3_Opus_Family",
  // "9d0b6d60-93a9-11eb-b886-99d7a0549da9_Opus_Family",
  // "a3069860-7886-11e9-98cb-c15c0add08e1_Opus_Family",
  // "ca5bcac0-48e7-11ea-9e76-ef66c83887c3_Opus_Family",
  // "fb1879f0-fb0e-11e9-810b-878d0b27ea5b_Opus_Family",
];

const MAX_CATALOGUE_LEVEL = 3;

const HTML_EXTENSION_LENGTH = ".html".length;

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

// const arr = [
//   { id: 1 },
//   { id: 2, children: [{ id: 3 }, { id: 4, children: [{ id: 5 }, { id: 6, children: [{id: 7}, {id: 8}] }] }] },
// ];

function getBreadCrumbs(source, familyId, foundBreadcrumbs = []) {

  for (let i = 0, len = source.length; i < len; i += 1) {
    const category = source[i];

    if (category.catId === familyId) {
      return [...TOP_LEVEL_BREADCRUMBS,...foundBreadcrumbs.concat([category])
        .map((breadcrumb) => {
          return {
            label: breadcrumb.name,
            link: breadcrumb.sitePath.slice(0, -HTML_EXTENSION_LENGTH),

          };
        })
        .slice(0, MAX_CATALOGUE_LEVEL)];
    }

    if (category.childs) {
      const result = getBreadCrumbs(
        category.childs,
        familyId,
        foundBreadcrumbs.concat([category])
      );

      if (result) {
        return result;
      }
    }
  }
}

// console.log(getBreadCrumbs(catalogue, "sdfasfda"));

console.time("start")

for (let i = 0, len = familyIds.length; i < len; i += 1) {
  const result = getBreadCrumbs(catalogue, familyIds[i]);
  if (result) {
    console.log(familyIds[i], result);
    break;
  }
}

console.timeEnd("start")
