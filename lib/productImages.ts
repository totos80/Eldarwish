const productImages: Record<string, string> = {
  "بن فاتح محوج":
    "https://c.pxhere.com/photos/1b/62/coffee_coffee_beans_grains-598943.jpg!d",

  "بن فاتح ساده":
    "https://c.pxhere.com/photos/e2/5f/coffee_coffee_beans_grains_fresh_aroma_the_variety_of_coffee_grain_coffee_caffeine-1386325.jpg!d",
};

const fallback =
  "https://c.pxhere.com/photos/7c/67/coffee_beans_coffee_grains_drink_cup_coffee_bean-681940.jpg!d";

export function getProductImage(name: string): string {
  return productImages[name] || fallback;
}
