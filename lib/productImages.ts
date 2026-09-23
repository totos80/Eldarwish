const productImages = {
  spices:
    "https://images.unsplash.com/photo-1532336414038-cf19250c5757?q=90&w=900&auto=format&fit=crop",

  pepper:
    "https://images.unsplash.com/photo-1515586838455-8f8f940d6853?q=90&w=900&auto=format&fit=crop",

  coffee:
    "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=90&w=900&auto=format&fit=crop",

  grains:
    "https://images.unsplash.com/photo-1511067007398-7e4b90cfa4bc?q=90&w=900&auto=format&fit=crop",

  oil:
    "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?q=90&w=900&auto=format&fit=crop",

  herbs:
    "https://images.unsplash.com/photo-1515586838455-8f8f940d6853?q=90&w=900&auto=format&fit=crop",
};

export function getProductImage(name: string): string {
  const n = name.trim();

  // القهوة والبن
  if (
    n.includes("بن ") ||
    n.startsWith("بن") ||
    n.includes("قهوة")
  ) {
    return productImages.coffee;
  }

  // الزيوت
  if (
    n.includes("زيت") ||
    n.includes("زيوت")
  ) {
    return productImages.oil;
  }

  // الحبوب والبقوليات
  if (
    n.includes("ارز") ||
    n.includes("أرز") ||
    n.includes("عدس") ||
    n.includes("فاصوليا") ||
    n.includes("لوبيا") ||
    n.includes("فول") ||
    n.includes("فريك") ||
    n.includes("قمح") ||
    n.includes("حمص") ||
    n.includes("ترمس") ||
    n.includes("برغل") ||
    n.includes("شوفان") ||
    n.includes("ذرة") ||
    n.includes("دقيق") ||
    n.includes("مكرونة")
  ) {
    return productImages.grains;
  }

  // البذور
  if (
    n.includes("بذر") ||
    n.includes("بذور") ||
    n.includes("سمسم") ||
    n.includes("حبة البركه") ||
    n.includes("حبه البركه") ||
    n.includes("شمر") ||
    n.includes("كراوية") ||
    n.includes("ينسون") ||
    n.includes("لب يقطين")
  ) {
    return productImages.grains;
  }

  // التوابل ذات الصور المميزة
  if (
    n.includes("فلفل") ||
    n.includes("فلفل اسود") ||
    n.includes("فلفل ابيض")
  ) {
    return productImages.pepper;
  }

  if (
    n.includes("بابريكا") ||
    n.includes("كركم") ||
    n.includes("قرفة") ||
    n.includes("قرفه") ||
    n.includes("كمون") ||
    n.includes("كزبره") ||
    n.includes("كاري") ||
    n.includes("كارى") ||
    n.includes("سماق") ||
    n.includes("شطة") ||
    n.includes("شطه") ||
    n.includes("حبهان") ||
    n.includes("جوزه الطيب") ||
    n.includes("خردل") ||
    n.includes("زنجبيل") ||
    n.includes("جنجبيل") ||
    n.includes("عصفر") ||
    n.includes("ليمون اسود") ||
    n.includes("بهار") ||
    n.includes("خلطة") ||
    n.includes("دقة")
  ) {
    return productImages.spices;
  }

  // الأعشاب والنباتات
  if (
    n.includes("بردقوش") ||
    n.includes("روز ماري") ||
    n.includes("زعتر") ||
    n.includes("مرمرية") ||
    n.includes("شيح") ||
    n.includes("ورق") ||
    n.includes("جوافة") ||
    n.includes("لورو") ||
    n.includes("سدر") ||
    n.includes("شاي")
  ) {
    return productImages.herbs;
  }

  // باقي منتجات العطارة والتوابل
  return productImages.spices;
}

export default productImages;
