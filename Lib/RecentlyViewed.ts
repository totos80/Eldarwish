const STORAGE_KEY = "eldarwish_recently_viewed";

export interface RecentlyViewedProduct {
  id: number;
  slug: string;
  name: string;
  image: string;
  price: number;
}

const MAX_ITEMS = 12;

export function getRecentlyViewed(): RecentlyViewedProduct[] {

  if (typeof window === "undefined") {
    return [];
  }

  try {

    const data = localStorage.getItem(
      STORAGE_KEY
    );

    if (!data) {
      return [];
    }

    return JSON.parse(data);

  } catch {

    return [];

  }

}

export function saveRecentlyViewed(
  product: RecentlyViewedProduct
) {

  if (typeof window === "undefined") {
    return;
  }

  const items = getRecentlyViewed();

  const filtered = items.filter(
    (item) => item.id !== product.id
  );

  filtered.unshift(product);

  const result = filtered.slice(0, MAX_ITEMS);

  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify(result)
  );

}

export function removeRecentlyViewed(
  id: number
) {

  const items = getRecentlyViewed();

  const result = items.filter(
    (item) => item.id !== id
  );

  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify(result)
  );

}

export function clearRecentlyViewed() {

  localStorage.removeItem(
    STORAGE_KEY
  );

}

export function hasRecentlyViewed(
  id: number
) {

  return getRecentlyViewed().some(
    (item) => item.id === id
  );

}

export function recentlyViewedCount() {

  return getRecentlyViewed().length;

}

export function latestViewed() {

  const items = getRecentlyViewed();

  if (!items.length) {
    return null;
  }

  return items[0];

}

export function oldestViewed() {

  const items = getRecentlyViewed();

  if (!items.length) {
    return null;
  }

  return items[items.length - 1];

}
