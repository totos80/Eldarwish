     const images = {
  spices:
    "https://images.pexels.com/photos/4199060/pexels-photo-4199060.jpeg?auto=compress&cs=tinysrgb&w=1200",

  seeds:
    "https://images.pexels.com/photos/4871307/pexels-photo-4871307.jpeg?auto=compress&cs=tinysrgb&w=1200",

  herbs:
    "https://images.pexels.com/photos/13075384/pexels-photo-13075384.jpeg?auto=compress&cs=tinysrgb&w=1200",

  coffee:
    "https://images.pexels.com/photos/942809/pexels-photo-942809.jpeg?auto=compress&cs=tinysrgb&w=1200",

  grains:
    "https://images.pexels.com/photos/18328392/pexels-photo-18328392.jpeg?auto=compress&cs=tinysrgb&w=1200",

  pasta:
    "https://images.pexels.com/photos/11391663/pexels-photo-11391663.jpeg?auto=compress&cs=tinysrgb&w=1200",

  chocolate:
    "https://images.pexels.com/photos/4113344/pexels-photo-4113344.jpeg?auto=compress&cs=tinysrgb&w=1200",

  dried:
    "https://images.pexels.com/photos/8995296/pexels-photo-8995296.jpeg?auto=compress&cs=tinysrgb&w=1200",

  oil:
    "https://images.pexels.com/photos/9814620/pexels-photo-9814620.jpeg?auto=compress&cs=tinysrgb&w=1200",

  general:
    "https://images.pexels.com/photos/4871307/pexels-photo-4871307.jpeg?auto=compress&cs=tinysrgb&w=1200",
};

export function getProductImage(name: string): string {
  const n = String(name || "").trim().toLowerCase();

  /* القهوة */
  if (
    n.includes("بن ") ||
    n.includes("بن فاتح") ||
    n.includes("قهوة") ||
    n.includes("قهوه")
  ) {
    return images.coffee;
  }

  /* الزيوت */
  if (
    n.includes("زيت") ||
    n.includes("زيوت")
  ) {
    return images.oil;
  }

  /* المكرونة */
  if (n.includes("مكرونة")) {
    return images.pasta;
  }

  /* الشوكولاتة والكاكاو */
  if (
    n.includes("شيكولاتة") ||
    n.includes("شيكولاته") ||
    n.includes("كاكاو") ||
    n.includes("فارمسيل")
  ) {
    return images.chocolate;
  }

  /* الحلويات */
  if (
    n.includes("كورن فلكس") ||
    n.includes("فنكوش") ||
    n.includes("جيلاتين") ||
    n.includes("كريمة") ||
    n.includes("راسبيري") ||
    n.includes("كامينا") ||
    n.includes("جوز هند") ||
    n.includes("زبيب")
  ) {
    return images.dried;
  }

  /* الحبوب والبقوليات */
  if (
    n.includes("ارز") ||
    n.includes("أرز") ||
    n.includes("عدس") ||
    n.includes("فاصوليا") ||
    n.includes("لوبيا") ||
    n.includes("فول") ||
    n.includes("ذرة") ||
    n.includes("ذره") ||
    n.includes("فريك") ||
    n.includes("قمح") ||
    n.includes("حمص") ||
    n.includes("ترمس") ||
    n.includes("برغل") ||
    n.includes("شوفان") ||
    n.includes("دقيق")
  ) {
    return images.grains;
  }

  /* البذور */
  if (
    n.includes("بذر") ||
    n.includes("سمسم") ||
    n.includes("شمر") ||
    n.includes("كراوية") ||
    n.includes("كراويه") ||
    n.includes("ينسون") ||
    n.includes("حبة البركه") ||
    n.includes("حبه البركه") ||
    n.includes("لب يقطين") ||
    n.includes("خردل")
  ) {
    return images.seeds;
  }

  /* الأعشاب */
  if (
    n.includes("بردقوش") ||
    n.includes("روز ماري") ||
    n.includes("ورد شامي") ||
    n.includes("زعتر") ||
    n.includes("شاي اخضر") ||
    n.includes("شاي أخضر") ||
    n.includes("شيح") ||
    n.includes("مرمرية") ||
    n.includes("مرمريه") ||
    n.includes("ورق جوافة") ||
    n.includes("ورق جوافه") ||
    n.includes("ورق لورو") ||
    n.includes("ورق سدر")
  ) {
    return images.herbs;
  }

  /* الثوم والبصل */
  if (
    n.includes("ثوم") ||
    n.includes("بصل")
  ) {
    return images.spices;
  }

  /* القرفة */
  if (
    n.includes("قرفه") ||
    n.includes("قرفة")
  ) {
    return images.spices;
  }

  /* الفلفل والبهارات */
  if (
    n.includes("بابريكا") ||
    n.includes("شطة") ||
    n.includes("شطه") ||
    n.includes("فلفل") ||
    n.includes("كركم") ||
    n.includes("كارى") ||
    n.includes("كاري") ||
    n.includes("سماق") ||
    n.includes("عصفر") ||
    n.includes("كمون") ||
    n.includes("كزبره") ||
    n.includes("كزبرة") ||
    n.includes("حبهان") ||
    n.includes("جوزه الطيب") ||
    n.includes("جوزة الطيب") ||
    n.includes("بهار") ||
    n.includes("فيجيتار") ||
    n.includes("ملح")
  ) {
    return images.spices;
  }

  /* خلطات W والتتبيلات */
  if (
    n.includes(" w") ||
    n.endsWith("w") ||
    n.includes("فراخ مشوية") ||
    n.includes("لحمه مشوية") ||
    n.includes("لحمة مشوية") ||
    n.includes("سمك") ||
    n.includes("شرق أقصي") ||
    n.includes("شرق اقصى") ||
    n.includes("محشي") ||
    n.includes("شاورما") ||
    n.includes("كبسه") ||
    n.includes("كفتة") ||
    n.includes("كفته") ||
    n.includes("بانيه")
  ) {
    return images.spices;
  }

  /* العطارة */
  if (
    n.includes("شبه") ||
    n.includes("صمغ") ||
    n.includes("لبان") ||
    n.includes("نشادر") ||
    n.includes("مغات") ||
    n.includes("سلامكه") ||
    n.includes("كبايه")
  ) {
    return images.herbs;
  }

  /* الأغذية */
  if (
    n.includes("مرقة") ||
    n.includes("عسل") ||
    n.includes("نشا") ||
    n.includes("لبن بدرة") ||
    n.includes("لبن بودرة") ||
    n.includes("جولد الجمل") ||
    n.includes("البركة") ||
    n.includes("المروة") ||
    n.includes("سعده")
  ) {
    return images.general;
  }

  return images.general;
} 
