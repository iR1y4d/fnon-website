// util function
// ✅ نحدد جميع المجلدات المحتملة بشكل ثابت
const allFolders = import.meta.glob(
  "/src/images/**/**/*.{jpg,jpeg,png,webp,JPG,JPEG,PNG,avif}",
  { eager: true }
);

// 🧩 دالة ترجع الصور حسب اسم المجلد
export const importAllImages = (folderPath) => {
  const images = [];

  for (const [path, file] of Object.entries(allFolders)) {
    if (path.includes(`/images/${folderPath}/`)) {
      images.push(file.default);
    }
  }

  return images;
};

// جلب الصور من مجلد معين
const benghaziBase = importAllImages("benghazi/base");
const benghaziMid = importAllImages("benghazi/mid");
const benghaziEnd = importAllImages("benghazi/end");
// جلب الصور من مجلد معين
const tokrahBase = importAllImages("ncb-tokrah/base");
const tokrahMid = importAllImages("ncb-tokrah/mid");
const tokrahEnd = importAllImages("ncb-tokrah/end");
// جلب الصور من مجلد معين
const almarjBase = importAllImages("ncb-almarj/base");
const almarjMid = importAllImages("ncb-almarj/mid");
const almarjEnd = importAllImages("ncb-almarj/end");
// جلب الصور من مجلد معين
const qasrBase = importAllImages("qasr-aldiafah/base");
const qasrMid = importAllImages("qasr-aldiafah/mid");
const qasrEnd = importAllImages("qasr-aldiafah/end");
// جلب الصور من مجلد معين
const client = importAllImages("clients/base");

/*---------------------------------------------------------- */

export const clients = {
  icons: client,
};

export const navLinks = [
  { name: "الرئيسية", link: "#" },
  { name: "خدماتنا", link: "#" },
  { name: "أعمالنا", link: "#" },
  { name: "إدارة الشركة", link: "#" },
  { name: "تواصل معنا", link: "#" },
];

export const services = [
  {
    name: "الإنشاءات الخرسانية",
    caption:
      "وتشمل أعمال الأساسات والجدران والأعمدة والأدراج والكمرات والبلاطات والطوب وتصميم الخلطات الخرسانية",
    icon: "",
  },
  {
    name: "أعمال البناء الخاصة والفردية",
    caption:
      "تمتد الأعمال المدنية لتغطي تشييد الأبنية وبنيتها التحتية والمباني الخرسانية وأعمال التشطيبات",
    icon: "",
  },
  {
    name: "بناء المنشآت الصناعية",
    caption:
      "حيث نقوم بالتخطيط واختيار الأرضية للتأكد من توافقها مع المواصفات القياسيـ ــــة لبناء المنشأة بدءاً بأعمال الحفر والخرسانة مروراً بتركيبات المرافق وعناصر الحماية والأمان للمنشأة والانتهاء بأعمال التشطيبات والديكورات النهائية",
    icon: "",
  },
  {
    name: "الإنشاءات المعدنية",
    caption:
      "وتشمــل أعمال الأساسات والجدران والأعم ـدة والأدراج والكمرات والبلاطات والطوب وتصميم الخلطات الخرسانية وتشمل أعمال الأساسات والجدران والأعمدة والأدراج والكمرات والبلاطات والطـ وب وتصميم الخلطات الخرسانية",
    icon: "",
  },
  {
    name: "أعمال التوسعة والترميم",
    caption:
      "حيث نعمل على ترميم المباني الخرسانية والشروخ ودعم أعمال الدهانات والوصلات الكهربائية للعمل على رفع كفاءة المباني والمنشآت",
    icon: "",
  },
  {
    name: "أعمال التشطيبات والديكور",
    caption:
      "نقوم بتنفيذ كافة أنواع التشطيبات والديكورات للمباني الإدارية والمجمعات السكنية والمصانع بأحدث الأدوات العالمية مــــــــع الالتزام التام بجودة التشطيب",
    icon: "",
  },
];

export const employees = [
  { name: "رياض علي", rule: "الرئيس التنفيذي" },
  { name: "أحمد موسى", rule: "رئيس مجلس الادارة" },
  { name: "رياض علي", rule: "الرئيس التنفيذي" },
  { name: "رياض علي", rule: "الرئيس التنفيذي" },
  { name: "رياض علي", rule: "الرئيس التنفيذي" },
  { name: "رياض علي", rule: "الرئيس التنفيذي" },
];

export const works = [
  {
    id: 0,
    location: "المرج",
    workFor: "شركة فنون الهندسة و الاعمار",
    title: "قصر الضيافة للمناسبات و الاجتماعات",
    caption:
      "تضمن هذا المشروع اعادة تأهيل و تحوير المبنى الخاص بالشركة البرازيلية بمدينة المرج الى قاعتين خاصة بالمناسبات و الاجتماعات تتسع القاعة الرئيسية رقم 1 لعدد حوالي 1500 شخص بينما تتسع القاعة رقم 2 لعدد قرابة 150 شخص و كلا القاعتين مجهزات بجميع سبل الراحة بالاضافة الى وجود مطبخ كبير يوفر كافة الاحتياجات لجميع انواع المناسبات",
    time: "74",
    progress: "100%",
    images: {
      thumbnail: "images/thumbnails/qasr-aldiafah.avif",
      bigImage: "images/bigImages/qasr-aldiafah.avif",
      base: [],
      mid: [],
      end: qasrEnd,
    },
  },
  {
    id: 1,
    location: "المرج",
    workFor: "المصرف التجاري الوطني",
    title: "صيانة مبنى المصرف التجاري الوطني",
    caption: "تضمن هذا المشروع اعادة تأهيل و تحوير المبنى الحالي للمصرف",
    time: "74",

    progress: "20%",
    images: {
      thumbnail: "images/thumbnails/ncb-almarj.avif",
      bigImage: "images/bigImages/ncb-almarj.avif",
      base: almarjBase,
      mid: [],
      end: [],
    },
  },
  {
    id: 2,
    location: "توكره",
    workFor: "المصرف التجاري الوطني",
    title: "صيانة مبنى المصرف التجاري الوطني",
    caption: "تضمن هذا المشروع اعادة تأهيل و تحوير المبنى الحالي للمصرف",
    time: "74",
    progress: "80%",
    images: {
      thumbnail: "images/thumbnails/ncb-tokrah.avif",
      bigImage: "images/bigImages/ncb-tokrah.avif",
      base: tokrahBase,
      mid: tokrahMid,
      end: tokrahEnd,
    },
  },

  {
    id: 3,
    location: "بنغازي",
    workFor: "جهاز طارق بن زياد للخدمات و الانتاج",
    title: "انشاء مدينة الصناعية متكاملة",
    caption: "تضمن هذا المشروع اعادة تأهيل و تحوير المبنى الحالي للمصرف",
    time: "74",
    progress: "80%",
    images: {
      thumbnail: "images/thumbnails/benghazi.avif",
      bigImage: "images/bigImages/benghazi.avif",
      base: benghaziBase,
      mid: benghaziMid,
      end: benghaziEnd,
    },
  },
  {
    id: 4,
    location: "توكره",
    workFor: "المصرف التجاري الوطني",
    title: "صيانة مبنى المصرف التجاري الوطني",
    caption: "تضمن هذا المشروع اعادة تأهيل و تحوير المبنى الحالي للمصرف",
    time: "74",
    progress: "100%",
    images: {
      thumbnail: "images/thumbnails/soon.avif",
      bigImage: "images/bigImages/soon.avif",
      base: ["images/qasr_aldiafah/2.JPG"],
      mid: [],
      end: [],
    },
  },
  {
    id: 5,
    location: "البياضه",
    workFor: "المصرف التجاري الوطني",
    title: "صيانة مبنى المصرف التجاري الوطني",
    caption: "تضمن هذا المشروع اعادة تأهيل و تحوير المبنى الحالي للمصرف",
    time: "74",
    progress: "30%",
    images: {
      thumbnail: "images/thumbnails/soon.avif",
      bigImage: "images/bigImages/soon.avif",
      base: ["images/qasr_aldiafah/2.JPG"],
      mid: [],
      end: [],
    },
  },
];

export const social = [
  {
    id: 0,
    name: "facebook",
    value: "https://www.facebook.com/FanonCompany",
  },
  {
    id: 1,
    name: "mail",
    value: "mailto:fnonalhandsa@gmail.com",
  },
  {
    id: 2,
    name: "call",
    value: "tel:+218925555865",
  },
  {
    id: 3,
    name: "location",
    value: "https://maps.app.goo.gl/uqupuhsZ7rgpGXH29",
  },
];
