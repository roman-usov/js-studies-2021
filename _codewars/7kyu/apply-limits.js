function processGroups(groups, deliveryType, regionId) {
  const totalPrice = getTotalPrice(groups);

  let isBasketAvailableForDeliveryType = false;
  if (!functions.isAvailableForCheckout(regionId, deliveryType, totalPrice)) {
    disableAllGroupsByBasketLimit(groups);
  } else {
    isBasketAvailableForDeliveryType = true;
  }

  return isBasketAvailableForDeliveryType;
}

function applyGroupLevelLimits(content, regionId) {
  const allGroups = [
    ...content.ecom.deliveryGroups,
    ...content.ecom.pickupGroups,
    ...content.marketPlace.deliveryGroups,
    ...content.marketPlace.pickupGroups,
  ];

  allGroups.forEach((group) => {
    if (
      group.available &&
      !functions.isAvailableForCheckout(
        regionId,
        group.deliveryType,
        group.totalPrice
      )
    ) {
      group.available = false;
      group.reason = "PRICE_LIMIT_EXCEEDED";
    }
  });
}

function prepareCookie3(
  isBasketAvailableForDelivery,
  isBasketAvailableForPickup
) {
  if (!isBasketAvailableForDelivery && !isBasketAvailableForPickup) {
    setCookie3("1");
  } else if (isBasketAvailableForDelivery && !isBasketAvailableForPickup) {
    setCookie3("2");
  } else if (!isBasketAvailableForDelivery && isBasketAvailableForPickup) {
    setCookie3("3");
  } else if (isBasketAvailableForDelivery && isBasketAvailableForPickup) {
    setCookie3("4");
  }
}

function setCookie3(value) {
  functions.setCookie(
    "_checkout_cookie3",
    value,
    5 * 60 * 60,
    request,
    response
  );
}

function getTotalPrice(groups) {
  let deliveryTotalPrice = 0;

  groups.forEach((group) => {
    if (group.available) {
      deliveryTotalPrice += group.totalPrice;
    }
  });

  return deliveryTotalPrice;
}

function disableAllGroupsByBasketLimit(groups) {
  groups.forEach((group) => {
    group.available = false;
    group.reason = "BASKET_TOTAL_PRICE_LIMIT";
  });
}

function disableAllGroupWithDeliveryType(groups, deliveryType) {
  groups.forEach((group) => {
    if (group.deliveryType === deliveryType) group.available = false;
  });
}

function applyBasketLevelLimits(
  content,
  regionId,
  ignoreLimitsForDeliveryOrders,
  ignoreLimitsForPickupOrders
) {
  const allDeliveryGroups = [
    ...content.ecom.deliveryGroups,
    //...content.marketPlace.deliveryGroups
  ];
  const deliveryGroups = allDeliveryGroups.filter(
    (group) => group.available && group.deliveryType === "DELIVERY"
  );
  disableAllGroupWithDeliveryType(allDeliveryGroups, "PICKUP");

  const allPickupGroups = [
    ...content.ecom.pickupGroups,
    //...content.marketPlace.pickupGroups
  ];
  const pickupGroups = allPickupGroups.filter(
    (group) => group.available && group.deliveryType === "PICKUP"
  );
  disableAllGroupWithDeliveryType(allPickupGroups, "DELIVERY");

  let isBasketAvailableForDelivery = ignoreLimitsForDeliveryOrders
    ? true
    : processGroups(deliveryGroups, "DELIVERY", regionId);
  let isBasketAvailableForPickup = ignoreLimitsForPickupOrders
    ? true
    : processGroups(pickupGroups, "PICKUP", regionId);

  prepareCookie3(isBasketAvailableForDelivery, isBasketAvailableForPickup);
}

function applyLimits(
  content,
  regionId,
  useBasketLevelLimitsRegime,
  ignoreLimitsForDeliveryOrders,
  ignoreLimitsForPickupOrders
) {
  if (useBasketLevelLimitsRegime) {
    applyBasketLevelLimits(
      content,
      regionId,
      ignoreLimitsForDeliveryOrders,
      ignoreLimitsForPickupOrders
    );
  } else {
    applyGroupLevelLimits(content, regionId);
  }

  return content;
}

applyLimits(
  localScope.responseBody,
  request.body.regionId,
  localScope.cookies["_checkout_cookie1"],
  localScope.cookies["_checkout_cookie2"],
  localScope.cookies["_checkout_cookie5"]
);
