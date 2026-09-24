const productImages: Record<string, string> = {
  "طعم جبنة متبلة W":
    "https://loremflickr.com/900/900/cheese,spices?lock=1",
  "طعم كباب W":
    "https://loremflickr.com/900/900/kebab,spices?lock=2",
  "طعم فراخ W":
    "https://loremflickr.com/900/900/chicken,spices?lock=3",
  "طعم شطه و ليمون W":
    "https://loremflickr.com/900/900/chili,lemon,spices?lock=4",
  "بابريكا مدخنه":
    "https://loremflickr.com/900/900/smoked,paprika?lock=5",
  "بابريكا اسباني":
    "https://loremflickr.com/900/900/spanish,paprika?lock=6",
  "بذر الشيا":
    "https://loremflickr.com/900/900/chia,seeds?lock=7",
  "بذر كتان":
    "https://loremflickr.com/900/900/flax,seeds?lock=8",
  "بردقوش":
    "https://loremflickr.com/900/900/marjoram,herb?lock=9",
  "برغل تركي خشن":
    "https://loremflickr.com/900/900/bulgur,wheat?lock=10",
  "برغل":
    "https://loremflickr.com/900/900/bulgur,wheat?lock=11",
  "ثوم بدرة مستورد":
    "https://loremflickr.com/900/900/garlic,powder?lock=12",
  "بصل بدرة مستورد":
    "https://loremflickr.com/900/900/onion,powder?lock=13",
  "بصل شرائح":
    "https://loremflickr.com/900/900/dried,onion?lock=14",
  "ثوم فص":
    "https://loremflickr.com/900/900/garlic,cloves?lock=15",
  "جنجبيل ابيض":
    "https://loremflickr.com/900/900/ginger,root?lock=16",
  "جوزه الطيب":
    "https://loremflickr.com/900/900/nutmeg?lock=17",
  "حبة البركه سورى":
    "https://loremflickr.com/900/900/black,seed,nigella?lock=18",
  "حبهان هندي":
    "https://loremflickr.com/900/900/cardamom?lock=19",
  "خردل":
    "https://loremflickr.com/900/900/mustard,seeds?lock=20",
  "دقة زعتر":
    "https://loremflickr.com/900/900/zaatar,thyme?lock=21",
  "روز ماري تونسي":
    "https://loremflickr.com/900/900/rosemary,herb?lock=22",
  "ورد شامي":
    "https://loremflickr.com/900/900/rose,petals?lock=23",
  "زعتر عرايشي":
    "https://loremflickr.com/900/900/thyme,zaatar?lock=24",
  "سمسم ابيض":
    "https://loremflickr.com/900/900/white,sesame?lock=25",
  "سمسم محمص":
    "https://loremflickr.com/900/900/toasted,sesame?lock=26",
  "شاي اخضر سايب":
    "https://loremflickr.com/900/900/green,tea,leaves?lock=27",
  "شبه معطره":
    "https://loremflickr.com/900/900/alum,crystals?lock=28",
  "شبه ص":
    "https://loremflickr.com/900/900/alum,crystals?lock=29",
  "شطه مقطفة ص 1":
    "https://loremflickr.com/900/900/red,chili,pepper?lock=30",
  "شمر":
    "https://loremflickr.com/900/900/fennel,seeds?lock=31",
  "شوفان سايب":
    "https://loremflickr.com/900/900/oats?lock=32",
  "شيح بلدى":
    "https://loremflickr.com/900/900/wormwood,herb?lock=33",
  "صمغ عربى":
    "https://loremflickr.com/900/900/acacia,gum?lock=34",
  "عصفر":
    "https://loremflickr.com/900/900/safflower?lock=35",
  "فلفل ابيض":
    "https://loremflickr.com/900/900/white,pepper?lock=36",
  "فلفل اسود حصى":
    "https://loremflickr.com/900/900/black,peppercorns?lock=37",
  "فلفل اسود مطحون":
    "https://loremflickr.com/900/900/ground,black,pepper?lock=38",
  "فيجيتار حار":
    "https://loremflickr.com/900/900/hot,seasoning?lock=39",
  "فيجيتار بارد":
    "https://loremflickr.com/900/900/seasoning,powder?lock=40",
  "قرفه سيجار":
    "https://loremflickr.com/900/900/cinnamon,sticks?lock=41",
  "قرفه صينى عيدان":
    "https://loremflickr.com/900/900/cinnamon,sticks?lock=42",
  "سماق":
    "https://loremflickr.com/900/900/sumac,spice?lock=43",
  "كارى هندى":
    "https://loremflickr.com/900/900/curry,powder?lock=44",
  "كبايه صينى ص":
    "https://loremflickr.com/900/900/porcelain,cup?lock=45",
  "كركم ص":
    "https://loremflickr.com/900/900/turmeric,powder?lock=46",
  "كراوية":
    "https://loremflickr.com/900/900/caraway,seeds?lock=47",
  "كزبره بلدى":
    "https://loremflickr.com/900/900/coriander,seeds?lock=48",
  "كمون بلدى مغربل":
    "https://loremflickr.com/900/900/cumin,seeds?lock=49",
  "كورن فلكس شيكولاتة":
    "https://loremflickr.com/900/900/chocolate,cereal?lock=50",
  "كورن فلكس الوان":
    "https://loremflickr.com/900/900/colorful,cereal?lock=51",
  "كورن فلكس سادة":
    "https://loremflickr.com/900/900/cornflakes,cereal?lock=52",
  "لب يقطين":
    "https://loremflickr.com/900/900/pumpkin,seeds?lock=53",
  "لبان دكر":
    "https://loremflickr.com/900/900/frankincense?lock=54",
  "ليمون اسود":
    "https://loremflickr.com/900/900/dried,lime?lock=55",
  "مرمرية":
    "https://loremflickr.com/900/900/sage,herb?lock=56",
  "ملح صيني":
    "https://loremflickr.com/900/900/salt,crystals?lock=57",
  "ملح ليمون":
    "https://loremflickr.com/900/900/citric,acid?lock=58",
  "ملح هيمالايا":
    "https://loremflickr.com/900/900/himalayan,salt?lock=59",
  "نشادر":
    "https://loremflickr.com/900/900/white,crystals?lock=60",
  "ورق جوافة":
    "https://loremflickr.com/900/900/guava,leaves?lock=61",
  "ورق لورو":
    "https://loremflickr.com/900/900/bay,leaves?lock=62",
  "ورق سدر":
    "https://loremflickr.com/900/900/sidr,leaves?lock=63",
  "ينسون بلدى مغربل":
    "https://loremflickr.com/900/900/anise,seeds?lock=64",
  "ينسون نجمه":
    "https://loremflickr.com/900/900/star,anise?lock=65",
  "بهار 1":
    "https://loremflickr.com/900/900/mixed,spices?lock=66",
  "بهار فراخ":
    "https://loremflickr.com/900/900/chicken,seasoning?lock=67",
  "بهار تندورى":
    "https://loremflickr.com/900/900/tandoori,spices?lock=68",
  "مرقة لحم W":
    "https://loremflickr.com/900/900/beef,stock,cubes?lock=69",
  "مرقة دجاج W":
    "https://loremflickr.com/900/900/chicken,stock,cubes?lock=70",
  "مرقة خضار W":
    "https://loremflickr.com/900/900/vegetable,stock?lock=71",
  "فراخ مشوية W":
    "https://loremflickr.com/900/900/grilled,chicken,spices?lock=72",
  "لحمه مشوية W":
    "https://loremflickr.com/900/900/grilled,beef,spices?lock=73",
  "سمك W":
    "https://loremflickr.com/900/900/fish,seasoning?lock=74",
  "شرق أقصي W":
    "https://loremflickr.com/900/900/asian,spices?lock=75",
  "محشي W":
    "https://loremflickr.com/900/900/stuffed,vegetables?lock=76",
  "شاورما لحم W":
    "https://loremflickr.com/900/900/beef,shawarma,spices?lock=77",
  "كبسه W":
    "https://loremflickr.com/900/900/kabsa,spices?lock=78",
  "بهار الكفتة W":
    "https://loremflickr.com/900/900/kofta,spices?lock=79",
  "خلطة بانيه":
    "https://loremflickr.com/900/900/breaded,chicken,seasoning?lock=80",
  "فنكوش سادة":
    "https://loremflickr.com/900/900/puffed,corn,snack?lock=81",
  "فنكوش الوان":
    "https://loremflickr.com/900/900/colorful,snacks?lock=82",
  "مغات سوبر":
    "https://loremflickr.com/900/900/maghath,drink?lock=83",
  "طارتارازين كامينا":
    "https://loremflickr.com/900/900/yellow,food,coloring?lock=84",
  "راسبيري كامينا":
    "https://loremflickr.com/900/900/raspberry,food,coloring?lock=85",
  "اخضر زرعى كامينا":
    "https://loremflickr.com/900/900/green,food,coloring?lock=86",
  "شيكولاتة شيبسى بنى":
    "https://loremflickr.com/900/900/chocolate,chips?lock=87",
  "شيكولاتة شيبسى ابيض":
    "https://loremflickr.com/900/900/white,chocolate?lock=88",
  "فارمسيل الوان":
    "https://loremflickr.com/900/900/colorful,sprinkles?lock=89",
  "فارمسيل بنى":
    "https://loremflickr.com/900/900/chocolate,sprinkles?lock=90",
  "ورد كامينا":
    "https://loremflickr.com/900/900/rose,food,coloring?lock=91",
  "زهر كامينا":
    "https://loremflickr.com/900/900/orange,food,coloring?lock=92",
  "عسل اسود سعده":
    "https://loremflickr.com/900/900/molasses?lock=93",
  "جوز هند خشن":
    "https://loremflickr.com/900/900/shredded,coconut?lock=94",
  "جيلاتين بدرة":
    "https://loremflickr.com/900/900/gelatin,powder?lock=95",
  "زبيب المصرى سعده":
    "https://loremflickr.com/900/900/raisins?lock=96",
  "زبيب احمر مصرى":
    "https://loremflickr.com/900/900/red,raisins?lock=97",
  "كاكاو اندونيسي":
    "https://loremflickr.com/900/900/cocoa,powder?lock=98",
  "كاكاو اسباني موثر M40":
    "https://loremflickr.com/900/900/cocoa,powder,chocolate?lock=99",
  "كربوناتو":
    "https://loremflickr.com/900/900/baking,soda?lock=100",
  "لبن بدرة كامل الدسم":
    "https://loremflickr.com/900/900/milk,powder?lock=101",
  "نشا":
    "https://loremflickr.com/900/900/cornstarch?lock=102",
  "كريمة باتسيرى":
    "https://loremflickr.com/900/900/pastry,cream?lock=103",
  "دقيق جولد الجمل":
    "https://loremflickr.com/900/900/flour,wheat?lock=104",
  "زيت زيتون ادمز 8 لتر":
    "https://loremflickr.com/900/900/olive,oil,bottle?lock=105",
  "مكرونة اسباجتى البركة":
    "https://loremflickr.com/900/900/spaghetti,pasta?lock=106",
  "مكرونة قلم البركة":
    "https://loremflickr.com/900/900/penne,pasta?lock=107",
  "مكرونة مرمرية البركة":
    "https://loremflickr.com/900/900/pasta,macaroni?lock=108",
  "سلامكه قرن":
    "https://loremflickr.com/900/900/herb,root?lock=109",
  "بن فاتح محوج":
    "https://loremflickr.com/900/900/arabic,coffee,beans?lock=110",
  "بن فاتح ساده":
    "https://loremflickr.com/900/900/coffee,beans?lock=111",
  "ارز بلدي":
    "https://loremflickr.com/900/900/rice,grains?lock=112",
  "عدس تركي":
    "https://loremflickr.com/900/900/lentils?lock=113",
  "فاصوليا":
    "https://loremflickr.com/900/900/beans?lock=114",
  "لوبيا":
    "https://loremflickr.com/900/900/blackeyed,peas?lock=115",
  "فول":
    "https://loremflickr.com/900/900/fava,beans?lock=116",
  "عدس بجبة":
    "https://loremflickr.com/900/900/brown,lentils?lock=117",
  "فول مدشوش":
    "https://loremflickr.com/900/900/split,fava,beans?lock=118",
  "ذرة فشار":
    "https://loremflickr.com/900/900/popcorn,kernels?lock=119",
  "فريك":
    "https://loremflickr.com/900/900/freekeh,wheat?lock=120",
  "قمح بليلة":
    "https://loremflickr.com/900/900/wheat,berries?lock=121",
  "حمص وسط":
    "https://loremflickr.com/900/900/chickpeas?lock=122",
  "ترمس":
    "https://loremflickr.com/900/900/lupin,beans?lock=123",
  "ارز بسمتى عادي":
    "https://loremflickr.com/900/900/basmati,rice?lock=124",
  "ارز بسمتى هندي":
    "https://loremflickr.com/900/900/indian,basmati,rice?lock=125",
  "مكرونة شعرية غالية":
    "https://loremflickr.com/900/900/vermicelli,pasta?lock=126",
  "مكرونة لسان عصفور غالية":
    "https://loremflickr.com/900/900/orzo,pasta?lock=127",
  "مكرونة فرن غالية":
    "https://loremflickr.com/900/900/baked,pasta?lock=128",
  "مكرونة مرمرية غالية":
    "https://loremflickr.com/900/900/macaroni,pasta?lock=129",
  "دقيق حبة كاملة":
    "https://loremflickr.com/900/900/whole,wheat,flour?lock=130",
  "دقيق ابيض المروة":
    "https://loremflickr.com/900/900/white,flour?lock=131",
  "دقيق شعير":
    "https://loremflickr.com/900/900/barley,flour?lock=132",
};

const fallback =
  "https://loremflickr.com/900/900/herbs,spices?lock=999";

export function getProductImage(name: string): string {
  return productImages[name] || fallback;
}
