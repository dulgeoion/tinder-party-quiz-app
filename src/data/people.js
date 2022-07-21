// import all pictures from /src/assets/avatars
import male1 from "../assets/avatars/m1.jpeg";
import male2 from "../assets/avatars/m2.jpeg";
import male3 from "../assets/avatars/m3.jpg";
import male4 from "../assets/avatars/m4.jpg";
import male5 from "../assets/avatars/m5.jpg";
import male6 from "../assets/avatars/m6.jpg";
import male7 from "../assets/avatars/m7.jpg";
import male8 from "../assets/avatars/m8.jpg";
import male9 from "../assets/avatars/m9.jpg";
import male10 from "../assets/avatars/m10.jpg";
import male11 from "../assets/avatars/m11.jpg";
import male12 from "../assets/avatars/m12.jpg";
import male13 from "../assets/avatars/m13.jpg";
import male14 from "../assets/avatars/m14.jpg";
import male15 from "../assets/avatars/m15.jpg";
import male16 from "../assets/avatars/m16.jpg";
import male17 from "../assets/avatars/m17.jpg";
import male18 from "../assets/avatars/m18.jpg";
import male19 from "../assets/avatars/m19.jpg";
import male20 from "../assets/avatars/m20.jpg";
import male21 from "../assets/avatars/m21.jpg";
import male22 from "../assets/avatars/m22.jpg";
import male23 from "../assets/avatars/m23.jpg";
import male24 from "../assets/avatars/m24.jpg";
import male25 from "../assets/avatars/m25.jpg";
import male26 from "../assets/avatars/m26.jpg";
import male27 from "../assets/avatars/m27.jpg";
import male28 from "../assets/avatars/m28.jpg";
import male29 from "../assets/avatars/m29.jpg";
import male30 from "../assets/avatars/m30.jpg";
import female1 from "../assets/avatars/f1.jpeg";
import female2 from "../assets/avatars/f2.jpg";
import female3 from "../assets/avatars/f3.jpeg";
import female4 from "../assets/avatars/f4.jpg";
import female5 from "../assets/avatars/f5.jpg";
import female6 from "../assets/avatars/f6.jpg";
import female7 from "../assets/avatars/f7.jpg";
import female8 from "../assets/avatars/f8.jpg";
import female9 from "../assets/avatars/f9.jpg";
import female10 from "../assets/avatars/f10.jpg";
import female11 from "../assets/avatars/f11.jpg";
import female12 from "../assets/avatars/f12.jpg";
import female13 from "../assets/avatars/f13.jpg";
import female14 from "../assets/avatars/f14.jpg";
import female15 from "../assets/avatars/f15.jpg";
import female16 from "../assets/avatars/f16.jpg";
import female17 from "../assets/avatars/f17.jpg";
import female18 from "../assets/avatars/f18.jpg";
import female19 from "../assets/avatars/f19.jpg";
import female20 from "../assets/avatars/f20.jpg";
import female21 from "../assets/avatars/f21.jpg";
import female22 from "../assets/avatars/f22.jpg";
import female23 from "../assets/avatars/f23.jpg";
import female24 from "../assets/avatars/f24.jpg";
import female25 from "../assets/avatars/f25.jpg";
import female26 from "../assets/avatars/f26.jpg";
import female27 from "../assets/avatars/f27.jpg";
import female28 from "../assets/avatars/f28.jpg";
import female29 from "../assets/avatars/f29.jpg";
import female30 from "../assets/avatars/f30.jpg";
import sortBy from "lodash.sortby";

const males = [
  {
    id: 2,
    name: "Іван",
    age: 25,
    advantage: ["1_Cмачно готую", "2_Романтичний"],
    disadvantage: [
      "3_Не мию посуд",
      "3_Чистити зуби - поганий жарт цивілізації",
    ],
    picture: male1,
  },
  {
    id: 4,
    name: "Василь",
    age: 16,
    advantage: ["4_Гарний", "5_Пунктуальний"],
    disadvantage: [
      "6_Кожний день вживаю часник, дуже корисно",
      "3_Економний - не потрібно багато шкарпеток",
    ],
    picture: male2,
  },
  {
    id: 6,
    name: "Чубі",
    age: 35,
    advantage: ["7_Власник кафе", "8_Спортсмен"],
    disadvantage: ["9_Лисий", "10_На першому побаченні буду з мамою"],
    picture: male3,
  },

  {
    id: 8,
    name: "Горіх",
    age: 25,
    advantage: ["11_Люблю тварин", "14_Стиль життя - правильне харчування"],
    disadvantage: [
      "13_Іноді я не господар свого кишечника",
      "3_Навчу економити на вушних паличках",
    ],
    picture: male4,
  },
  {
    id: 10,
    name: "Пітьо",
    age: 16,
    advantage: [
      "1_Мій будинок завжди в чистоті та охайний",
      "15_Майбутній відомий співак",
    ],
    disadvantage: [
      "6_Люблю працювати в полі з багном",
      "3_Челендж - не змінювати носки весь сезон!",
    ],
    picture: male5,
  },
  {
    id: 12,
    name: "Серий",
    age: 35,
    advantage: [
      "4_Багато кажуть про мої гарні очі",
      "1_Люблю суші - їсти і робити, вмію ;)",
    ],
    disadvantage: [
      "3_Не розумію, але люди кажуть що я чавкаю, я таке не помічав",
    ],
    picture: male6,
  },
  {
    id: 14,
    name: "Назарелло",
    age: 16,
    advantage: ["17_Спік інгліш", "17_Червоний диплом"],
    disadvantage: [
      "18_Красивіше мене лише... Таких нема",
      "3_Порядні люди пахнуть добре від природи",
    ],
    picture: male7,
  },
  {
    id: 16,
    name: "Володя",
    age: 23,
    advantage: ["8_Чемпіон Європи з карате", "19_Мама постаралась виховати"],
    disadvantage: [
      "3_Ношу стратегічний запас казявок з собою",
      "20_Файних людей можна і почекати",
    ],
    picture: male8,
  },
  {
    id: 18,
    name: "Семен",
    age: 22,
    advantage: ["1_Майстер на всі руки", "4_Люблю добре виглядати"],
    disadvantage: ["21_Мене краще не нервувати", "22_МАТ ЦЕ КРУТО!"],
    picture: male9,
  },
  {
    id: 20,
    name: "Коря",
    age: 38,
    advantage: ["23_Програміст", "14_Проти алкоголю"],
    disadvantage: [
      "13_Не бачу проблеми мати 20 лишніх кілограм",
      "24_Мої гроші не твої гроші",
    ],
    picture: male10,
  },
  {
    id: 22,
    name: "Вася",
    age: 30,
    advantage: ["25_Люблю природу", "23_Працюю банкіром"],
    disadvantage: ["3_Не бачу сенсу у тому, щоб часто прати одяг"],
    picture: male11,
  },
  {
    id: 24,
    name: "Ігор",
    age: 45,
    advantage: [
      "23_Фінансово забезпечений молодий чоловік з 4 квартирами в Ужгороді",
    ],
    disadvantage: [
      "3_Хорошого чоловіка має бути багато, і хороший чоловік може мити волосся лише раз на тиждень",
    ],
    picture: male12,
  },
  {
    id: 26,
    name: "Кирило",
    age: 20,
    advantage: ["8_Професійний спортсмен", "11_Люблю дітей"],
    disadvantage: [
      "18_Моя ідеальна дівчина має постійно сидіти вдома і готувати мені корисні страви",
    ],
    picture: male13,
  },
  {
    id: 28,
    name: "Федеріко",
    age: 26,
    advantage: ["11_Займаюся благодійністю"],
    disadvantage: ["26_Через нервову роботу дуже багато курю"],
    picture: male14,
  },
  {
    id: 30,
    name: "Самсон",
    age: 26,
    advantage: ["15_Маркетолог, приіхав в Україну вчитися"],
    disadvantage: [
      "18_Чесно кажучи не дуже розумію місцевий гумор, я жартую набагато краще",
    ],
    picture: male15,
  },
  {
    id: 32,
    name: "Саня Кіпішний",
    age: 17,
    advantage: [
      "2_Я подарую тобі хоч зірку з неба",
      "27_В мене завжди чисті зуби",
    ],
    disadvantage: [
      "3_Я вмію красиво викидувати носки, куда захочу))",
      "18_Твої проблеми, то твої проблеми",
    ],
    picture: male16,
  },
  {
    id: 34,
    name: "Захар",
    age: 26,
    advantage: [
      "7_Я забезпечу нам найкраще майбутнє",
      "11_Зі мною ти не будеш хвилюватися ні за що",
    ],
    disadvantage: [
      "28_Вмію красиво все говорити))",
      "18_Я в чомусь колись буваю винний??",
    ],
    picture: male17,
  },
  {
    id: 36,
    name: "Матій",
    age: 19,
    advantage: ["29_Твій професійний фотограф", "29_Художник"],
    disadvantage: [
      "30_Той хто придумав лінь, йому респект",
      "31_Трачу всі гроші на матеріали",
    ],
    picture: male18,
  },
  {
    id: 38,
    name: "Марек",
    age: 18,
    advantage: ["23_Програміст", "1_Приготую все, що захочеш"],
    disadvantage: [
      "32_Куда? Шо? Як? Нічого не розумію",
      "30_Хочеш кудись піти, то без мене, сорі",
    ],
    picture: male19,
  },
  {
    id: 40,
    name: "Стасян",
    age: 20,
    advantage: ["16_Популярний блогер", "17_Прочитав більше ніж 50+ книг"],
    disadvantage: [
      "33_Дівчат в мене ще більше ніж я книг прочитав",
      "34_Хочеш обдурити людину? То до мене)",
    ],
    picture: male20,
  },
];

const females = [
  {
    id: 1,
    name: "Валерія",
    age: 25,
    advantage: ["29_Граю на фортепіано", "1_Кожен день готую щось смачненьке"],
    disadvantage: ["32_Не обтяжую себе інтелектуальними навантаженнями"],
    picture: female1,
  },
  {
    id: 3,
    name: "Інесса",
    age: 20,
    advantage: [
      "16_Успішний інстаблогер з 150000 підписників (без гівів)",
      "35_Люблю подорожувати",
    ],
    disadvantage: [
      "18_Під час подорожей мені дуже важливо жити виключно у 5 зіркових готелях",
    ],
    picture: female2,
  },
  {
    id: 5,
    name: "Анабель",
    age: 29,
    advantage: [
      "17_Вчителька англійської",
      "11_Люблю собак, волонтерю у притулку",
    ],
    disadvantage: [
      "6_Ніколи не можу відмовитися від смачної цибульки і часника",
    ],
    picture: female3,
  },
  {
    id: 7,
    name: "Мішель",
    age: 30,
    advantage: ["7_Успішна бізнесвумен", "11_Маю трьох чіхуахуа"],
    disadvantage: ["3_Прибирання за собаками не для мене"],
    picture: female4,
  },
  {
    id: 9,
    name: "Шерон",
    age: 36,
    advantage: ["16_Входжу у список 10 найкращих співачок Європи"],
    disadvantage: [
      "24_Шопінг - найкраща терапія, тому хлопець мусить дуже добре заробляти",
    ],
    picture: female5,
  },
];

const people = sortBy([...males, ...females], ['id']);

export default people;

export const sanitizeDescription = (descr) => descr.split("_")[1];
