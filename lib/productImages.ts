const images = {
  spices:
    "https://images.unsplash.com/photo-1532336414038-cf19250c5757?q=85&w=900&auto=format&fit=crop",

  spices2:
    "https://images.unsplash.com/photo-1515586838455-8f8f940d6853?q=85&w=900&auto=format&fit=crop",

  spices3:
    "https://images.unsplash.com/photo-1511067007398-7e4b90cfa4bc?q=85&w=900&auto=format&fit=crop",

  coffee:
    "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=85&w=900&auto=format&fit=crop",

  oil:
    "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?q=85&w=900&auto=format&fit=crop",

  herbs:
    "https://images.unsplash.com/photo-1515586838455-8f8f940d6853?q=85&w=900&auto=format&fit=crop",

  grains:
    "https://images.unsplash.com/photo-1511067007398-7e4b90cfa4bc?q=85&w=900&auto=format&fit=crop",
};

export function getProductImage(query: string): string {
  const q = query.toLowerCase();

  if (
    q.includes("coffee") ||
    q.includes("بن") ||
    q.includes("قهوة")
  ) {
    return images.coffee;
  }

  if (
    q.includes("oil") ||
    q.includes("olive") ||
    q.includes("زيت")
  ) {
    return images.oil;
  }

  if (
    q.includes("grain") ||
    q.includes("rice") ||
    q.includes("lentil") ||
    q.includes("beans") ||
    q.includes("حبوب")
  ) {
    return images.grains;
  }

  if (
    q.includes("herb") ||
    q.includes("mint") ||
    q.includes("sage") ||
    q.includes("thyme") ||
    q.includes("أعشاب")
  ) {
    return images.herbs;
  }

  if (
    q.includes("cumin") ||
    q.includes("pepper") ||
    q.includes("turmeric") ||
    q.includes("cardamom") ||
    q.includes("cinnamon") ||
    q.includes("paprika") ||
    q.includes("spice") ||
    q.includes("spices")
  ) {
    return images.spices;
  }

  return images.spices2;
}

export default images;
