const productImages = {
  spices:
    "https://images.unsplash.com/photo-1532336414038-cf19250c5757?q=85&w=900&auto=format&fit=crop",

  pepper:
    "https://images.unsplash.com/photo-1753984696760-26c7f31629d9?q=85&w=900&auto=format&fit=crop",

  coffee:
    "https://images.unsplash.com/photo-1616074569487-d129daddd3a4?q=85&w=900&auto=format&fit=crop",

  cinnamon:
    "https://images.unsplash.com/photo-1720806240247-c216f63615c9?q=85&w=900&auto=format&fit=crop",

  grains:
    "https://images.unsplash.com/photo-1770617474928-3c7554a51941?q=85&w=900&auto=format&fit=crop",

  oil:
    "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?q=85&w=900&auto=format&fit=crop",

  herbs:
    "https://images.unsplash.com/photo-1515586838455-8f8f940d6853?q=85&w=900&auto=format&fit=crop",
};

export function getProductImage(name: string): string {
  const n = name
    .trim()
    .toLowerCase()
    .replace(/[أإآ]/g, "ا")
    .replace(/ة/g, "ه")
    .replace(/ى/g, "ي")
    .replace(/ـ/g, "");

  // =========================
  // القهوة والبن
  // =========================

  if (
    n.includes("بن ") ||
    n.startsWith("بن") ||
    n.includes("قهوه") ||
    n.includes("قهوة")
  ) {
    return productImages.coffee;
  }

  // =========================
  // الزيوت
  // =========================

  if (
    n.includes("زيت") ||
    n.includes("زيوت")
  ) {
    return productImages.oil;
  }

  // =========================
  // القرفة
  // =========================

  if (
    n.includes("قرفه") ||
    n.includes("قرفة")
  ) {
    return productImages.cinnamon;
  }

  // =========================
  // الفلفل
  // =========================

  if (
    n.includes("فلفل اسود") ||
    n.includes("فلفل ابيض") ||
    n.includes("فلفل")
  ) {
    return productImages.pepper;
  }

  // =========================
  // الحبوب والبقوليات
  // =========================

  if (
    n.includes("ارز") ||
    n.includes("رز ") ||
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
    n.includes("ذره") ||
    n.includes("ذرة") ||
    n.includes("دقيق") ||
    n.includes("مكرونه") ||
    n.includes("مكرونة")
  ) {
    return productImages.grains;
  }

  // =========================
  // البذور
  // =========================

  if (
    n.includes("بذر") ||
    n.includes("بذور") ||
    n.includes("سمسم") ||
    n.includes("حبه البركه") ||
    n.includes("حبة البركه") ||
    n.includes("حبه البركة") ||
    n.includes("شمر") ||
    n.includes("كراويه") ||
    n.includes("كراوية") ||
    n.includes("ينسون") ||
    n.includes("لب يقطين")
  ) {
    return productImages.grains;
  }

  // =========================
  // البهارات والتوابل
  // =========================

  if (
    n.includes("بابريكا") ||
    n.includes("كركم") ||
    n.includes("كمون") ||
    n.includes("كزبره") ||
    n.includes("كزبرة") ||
    n.includes("كاري") ||
    n.includes("كارى") ||
    n.includes("سماق") ||
    n.includes("شطه") ||
    n.includes("شطة") ||
    n.includes("حبهان") ||
    n.includes("جوزه الطيب") ||
    n.includes("جوزة الطيب") ||
    n.includes("خردل") ||
    n.includes("زنجبيل") ||
    n.includes("جنجبيل") ||
    n.includes("عصفر") ||
    n.includes("ليمون اسود") ||
    n.includes("ليمون أسود") ||
    n.includes("بهار") ||
    n.includes("خلطه") ||
    n.includes("خلطة") ||
    n.includes("دقه") ||
    n.includes("دقة") ||
    n.includes("ملح")
  ) {
    return productImages.spices;
  }

  // =========================
  // الأعشاب والنباتات
  // =========================

  if (
    n.includes("بردقوش") ||
    n.includes("روز ماري") ||
    n.includes("زعتر") ||
    n.includes("مرمريه") ||
    n.includes("مرمرية") ||
    n.includes("شيح") ||
    n.includes("ورق") ||
    n.includes("جوافه") ||
    n.includes("جوافة") ||
    n.includes("لورو") ||
    n.includes("سدر") ||
    n.includes("شاي") ||
    n.includes("ورد") ||
    n.includes("زهر")
  ) {
    return productImages.herbs;
  }

  // =========================
  // باقي منتجات العطارة
  // =========================

  return productImages.spices;
}

export default productImages;
