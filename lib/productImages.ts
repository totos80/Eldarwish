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

  seeds:
    "https://images.unsplash.com/photo-1511067007398-7e4b90cfa4bc?q=85&w=900&auto=format&fit=crop",

  sweets:
    "https://images.unsplash.com/photo-1578985545062-69928b1d9587?q=85&w=900&auto=format&fit=crop",

  driedFruit:
    "https://images.unsplash.com/photo-1599909533730-f9d5d7d8b4e6?q=85&w=900&auto=format&fit=crop",
};

export function getProductImage(name: string): string {
  const n = name
    .trim()
    .toLowerCase()
    .replace(/[أإآ]/g, "ا")
    .replace(/ة/g, "ه")
    .replace(/ى/g, "ي")
    .replace(/ؤ/g, "و")
    .replace(/ئ/g, "ي")
    .replace(/ـ/g, "");

  // الزيت
  if (
    n.includes("زيت") ||
    n.includes("زيوت")
  ) {
    return productImages.oil;
  }

  // القهوة والبن
  if (
    n.includes("بن ") ||
    n.startsWith("بن") ||
    n.includes("قهوه") ||
    n.includes("قهوة")
  ) {
    return productImages.coffee;
  }

  // القرفة
  if (
    n.includes("قرفه") ||
    n.includes("قرفة")
  ) {
    return productImages.cinnamon;
  }

  // الفلفل
  if (
    n.includes("فلفل اسود") ||
    n.includes("فلفل ابيض") ||
    n.includes("فلفل")
  ) {
    return productImages.pepper;
  }

  // الفواكه المجففة والزبيب وجوز الهند
  if (
    n.includes("زبيب") ||
    n.includes("جوز هند")
  ) {
    return productImages.driedFruit;
  }

  // الحلويات ومستلزمات التزيين
  if (
    n.includes("شيكولاته") ||
    n.includes("شيكولاتة") ||
    n.includes("فارمسيل") ||
    n.includes("فنكوش") ||
    n.includes("كورن فلكس") ||
    n.includes("جيلاتين") ||
    n.includes("كريمه") ||
    n.includes("كريمة") ||
    n.includes("كاكاو") ||
    n.includes("تارتارازين") ||
    n.includes("راسبيري") ||
    n.includes("زهر") ||
    n.includes("ورد")
  ) {
    return productImages.sweets;
  }

  // الحبوب والدقيق والمكرونة والبقوليات
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
    n.includes("مكرونة") ||
    n.includes("نشا")
  ) {
    return productImages.grains;
  }

  // البذور
  if (
    n.includes("بذر") ||
    n.includes("بذور") ||
    n.includes("سمسم") ||
    n.includes("حبه البركه") ||
    n.includes("حبة البركه") ||
    n.includes("حبة البركة") ||
    n.includes("شمر") ||
    n.includes("كراويه") ||
    n.includes("كراوية") ||
    n.includes("ينسون") ||
    n.includes("لب يقطين")
  ) {
    return productImages.seeds;
  }

  // الأعشاب
  if (
    n.includes("بردقوش") ||
    n.includes("روز ماري") ||
    n.includes("زعتر") ||
    n.includes("مرمريه") ||
    n.includes("مرمرية") ||
    n.includes("شيح
