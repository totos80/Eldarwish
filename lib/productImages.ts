      const image = (id: string) =>
"https://images.unsplash.com/${id}?q=90&w=1200&auto=format&fit=crop";

const images = {
spices: image("photo-1596040033229-a9821ebd058d"),
spices2: image("photo-1601312378427-822b2b41da35"),
spices3: image("photo-1599909533730-f9d9d3c8a0f4"),
seeds: image("photo-1586201375761-83865001e31c"),
seeds2: image("photo-1612257999756-8f9b6f6d8e5d"),
herbs: image("photo-1515586000433-45406d8e6662"),
herbs2: image("photo-1515377905703-c4788e51af15"),
coffee: image("photo-1495474472287-4d71bcdd2085"),
coffee2: image("photo-1447933601403-0c6688de566e"),
grains: image("photo-1586201375761-83865001e31c"),
grains2: image("photo-1515543904379-3d757afe72e4"),
chocolate: image("photo-1575377427642-087cf684f29d"),
driedFruit: image("photo-1595577051483-3a8c5d8d9b9a"),
oil: image("photo-1474979266404-7eaacbcd87c5"),
food: image("photo-1547592180-85f173990554"),
pasta: image("photo-1551462147-ff29053bfc14"),
rice: image("photo-1586201375761-83865001e31c"),
dates: image("photo-1598532163257-ae3b6c0f6f1c"),
garlic: image("photo-1615485290382-441e4d049cb5"),
cinnamon: image("photo-1600326145552-327f74c4d5f4"),
pepper: image("photo-1599909533730-f9d9d3c8a0f4"),
paprika: image("photo-1596040033229-a9821ebd058d"),
salt: image("photo-1518110925495-5e9c2b7f5b98"),
coconut: image("photo-1590080875515-8a3a8dc5735e"),
cocoa: image("photo-1578985545062-69928b1d9587"),
};

const fallback = images.spices;

export function getProductImage(name: string): string {
const n = String(name || "").trim().toLowerCase();

/* =========================
القهوة والبن
========================= */

if (
n.includes("بن ") ||
n.includes("بن فاتح") ||
n.includes("قهوه") ||
n.includes("قهوة")
) {
return images.coffee;
}

/* =========================
التوابل الحمراء
========================= */

if (
n.includes("بابريكا") ||
n.includes("شطة") ||
n.includes("شطة") ||
n.includes("فلفل") ||
n.includes("كركم") ||
n.includes("كارى") ||
n.includes("كاري") ||
n.includes("سماق") ||
n.includes("عصفر")
) {
return images.spices2;
}

/* =========================
القرفة
========================= */

if (
n.includes("قرفه") ||
n.includes("قرفة")
) {
return images.cinnamon;
}

/* =========================
الثوم والبصل
========================= */

if (
n.includes("ثوم") ||
n.includes("بصل")
) {
return images.garlic;
}

/* =========================
البذور
========================= */

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

/* =========================
الأعشاب
========================= */

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

/* =========================
الحبوب والبقوليات
========================= */

if (
n.includes("برغل") ||
n.includes("شوفان") ||
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
n.includes("دقيق")
) {
return images.grains;
}

/* =========================
النشويات والمواد الغذائية
========================= */

if (
n.includes("نشا") ||
n.includes("كربوناتو") ||
n.includes("لبن بدرة") ||
n.includes("لبن بودرة") ||
n.includes("مرقة") ||
n.includes("عسل")
) {
return images.food;
}

/* =========================
المكرونة
========================= */

if (n.includes("مكرونة")) {
return images.pasta;
}

/* =========================
الشوكولاتة والكاكاو
========================= */

if (
n.includes("شيكولاتة") ||
n.includes("شيكولاته") ||
n.includes("كاكاو") ||
n.includes("فارمسيل")
) {
return images.chocolate;
}

/* =========================
الحلويات
========================= */

if (
n.includes("كورن فلكس") ||
n.includes("فنكوش") ||
n.includes("جيلاتين") ||
n.includes("كريمة") ||
n.includes("راسبيري") ||
n.includes("تارتارازين") ||
n.includes("طارتارازين") ||
n.includes("اخضر زرعى") ||
n.includes("أخضر زراعي") ||
n.includes("ورد كامينا") ||
n.includes("زهر كامينا") ||
n.includes("جوز هند") ||
n.includes("زبيب")
) {
return images.driedFruit;
}

/* =========================
الزيوت
========================= */

if (
n.includes("زيت") ||
n.includes("زيوت")
) {
return images.oil;
}

/* =========================
التمر والفاكهة المجففة
========================= */

if (
n.includes("تمر") ||
n.includes("بلح") ||
n.includes("زبيب")
) {
return images.dates;
}

/* =========================
الكاكاو
========================= */

if (n.includes("كاكاو")) {
return images.cocoa;
}

/* =========================
الملح
========================= */

if (
n.includes("ملح") ||
n.includes("ملح ليمون")
) {
return images.salt;
}

/* =========================
جوز الهند
========================= */

if (n.includes("جوز هند")) {
return images.coconut;
}

/* =========================
القهوة العربية والمنتجات المرتبطة
========================= */

if (
n.includes("حبهان") ||
n.includes("حبهان هندي") ||
n.includes("جوزه الطيب") ||
n.includes("جوزة الطيب")
) {
return images.spices3;
}

/* =========================
منتجات العطارة العامة
========================= */

if (
n.includes("شبه") ||
n.includes("صمغ") ||
n.includes("لبان") ||
n.includes("نشادر") ||
n.includes("مغات") ||
n.includes("سلامكه") ||
n.includes("كبايه")
) {
return images.herbs2;
}

/* =========================
خلطات W والتتبيلات
========================= */

if (
n.endsWith(" w") ||
n.includes(" w") ||
n.includes("بهار") ||
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
n.includes("بانيه") ||
n.includes("فيجيتار")
) {
return images.spices;
}

/* =========================
المنتجات الغذائية العامة
========================= */

if (
n.includes("جولد الجمل") ||
n.includes("البركة") ||
n.includes("المروة") ||
n.includes("سعده")
) {
return images.food;
}

return fallback;
}
