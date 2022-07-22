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
    top: true,
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
    top: true,
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
    top: true,
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
    top: true,
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
    top: true,
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
    top: true,
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
    top: true,
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
    top: true,
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
  {
    id: 42,
    name: "Вікентій",
    age: 31,
    advantage: ["15_Самодостатній", "7_Координатор на весіллях"],
    disadvantage: [
      "18_Все чого мені не вистачає просто статусу відносин))",
      "26_Ой, як я люблю весілля де багато алкоголю!",
    ],
    picture: male21,
  },
  {
    id: 44,
    name: "Яніслав",
    age: 22,
    advantage: ["37_Працюю в поліції", "11_Сім'я - для мене все!"],
    disadvantage: [
      "24_Ох уж ці взятки, як я їх люблю))",
      "18_Мати дружину класно, а от дітей взагалі ні",
    ],
    picture: male22,
  },
  {
    top: true,
    id: 46,
    name: "Вітаха",
    age: 26,
    advantage: [
      "7_Власник відомої мережі магазинів 《Sinsay》",
      "35_Люблю подорожувати",
    ],
    disadvantage: [
      "36_Чесно кажучи, навіть на себе часу не вистачає",
      "38_Не люблю море, подорожую тільки в горах",
    ],
    picture: male23,
  },
  {
    top: true,
    id: 48,
    name: "Сірьога",
    age: 43,
    advantage: ["2_Зварю тобі саму смачну каву", "17_Лінгвіст та переводчик"],
    disadvantage: [
      "39_Якщо тобі стане погано після кави, сама все вирулюй",
      "32_Хоч я і мовознавець, але мову дівчат ніколи не розумів",
    ],
    picture: male24,
  },
  {
    id: 50,
    name: "Жека Підгірний",
    age: 43,
    advantage: ["15_Постійно саморозвиваюсь", "16_Екстраверт"],
    disadvantage: [
      "38_Не можу сконцентруватись на чомусь одному",
      "33_Навіть мені здається, що в мене забагато знайомих",
    ],
    picture: male25,
  },
];

const females = [
  {
    top: true,
    id: 1,
    name: "Валерія",
    age: 25,
    advantage: ["29_Граю на фортепіано", "1_Кожен день готую щось смачненьке"],
    disadvantage: ["32_Не обтяжую себе інтелектуальними навантаженнями"],
    picture: female1,
  },
  {
    top: true,
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
    top: true,
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
  {
    top: true,
    id: 11,
    name: "Ірка",
    age: 19,
    advantage: ["7_Майстриня манікюру", "37_Вмію шити на всі руки"],
    disadvantage: ["36_Дуже тісний графік, сьогодні в нас не вийде зустрітись"],
    picture: female6,
  },
  {
    id: 13,
    name: "Тая",
    age: 21,
    advantage: ["17_Золота медаль та червоний диплом", "23_IT-шниця"],
    disadvantage: [
      "30_Так не люблю готувати, що в більшості замовляю тільки доставку",
      "13_Ти маєш підійти до мене дуже близько, бо так я тебе просто не замічу",
    ],
    picture: female7,
  },
  {
    top: true,
    id: 15,
    name: "Вірка",
    age: 21,
    advantage: ["11_Дуже люблю дітей", "1_Вмію смачно готувати"],
    disadvantage: [
      "32_Я перепрошую, а що таке таблиця множення?",
      "26_Ой, треба піти взяти пачку цигарок, а то закінчуються",
    ],
    picture: female8,
  },
  {
    id: 17,
    name: "Еріка",
    age: 36,
    advantage: [
      "7_Власниця фітнес-центрів Viper Gym",
      "37_Також сертифікований фітнес-тренер",
    ],
    disadvantage: [
      "18_Хочу щоб мій чоловік готував, але тільки корисні страви",
      "24_Не маю часу на безробітних",
    ],
    picture: female9,
  },
  {
    top: true,
    id: 19,
    name: "Машка",
    age: 24,
    advantage: ["37_Професійна фото-модель", "4_Була міс Європа 2019 рік"],
    disadvantage: ["39_Треба на когось залишати свою дитину, сину 3 рочки"],
    picture: female10,
  },
  {
    id: 21,
    name: "Ванесса",
    age: 19,
    advantage: [
      "37_Займаюсь професільними весільними зйомками",
      "35_Люблю подорожувати",
    ],
    disadvantage: [
      "38_Хочу жити тільки закордоном, не в Україні",
      "30_В гори з тобою не полізу, вези мене на море",
    ],
    picture: female11,
  },
  {
    id: 23,
    name: "Кіра",
    age: 27,
    advantage: [
      "37_Викладачка в університеті",
      "11_Для мене ти будеш центром всього мого життя",
    ],
    disadvantage: [
      "26_Діти так доводять мене, що тепер не знаю, як боротись з алкоголем",
    ],
    picture: female12,
  },
  {
    id: 25,
    name: "Христя",
    age: 18,
    advantage: [
      "23_Можна сказати багата жона))",
      "15_У свої 18 вже маю 2 машини",
    ],
    disadvantage: [
      "34_Заробляю на трішки незаконній роботі",
      "31_Я така транжира, але мені це так подобається",
    ],
    picture: female13,
  },
  {
    top: true,
    id: 27,
    name: "Галя",
    age: 26,
    advantage: ["7_Керуюча продукцією 《Молокія》"],
    disadvantage: [
      "9_Смішно шуткую, тому за такі шутки в мене тепер в зубах промєжутки",
      "13_Я жона парадна тому мене має бути багато всюди",
    ],
    picture: female14,
  },
  {
    id: 29,
    name: "Інка",
    age: 37,
    advantage: [
      "8_Люблю активний відпочинок",
      "15_Закінчила музичний коледж на відмінно",
    ],
    disadvantage: [
      "20_То я мала прийти о 17:00? Вибачте, я не запізнююсь, я затримуюсь",
    ],
    picture: female15,
  },
  {
    top: true,
    id: 31,
    name: "Даяна",
    age: 18,
    advantage: [
      "15_Студентка 4 курсу, відмінниця",
      "29_Люблю займатися хенд-мейдом",
    ],
    disadvantage: ["30_Принципово не готую, для цього є заклади харчування"],
    picture: female16,
  },
  {
    id: 33,
    name: "Василина",
    age: 23,
    advantage: ["37_Майстер манікюру", "29_Хобі малювання"],
    disadvantage: ["30_Прибирання вдома - це не моє, у мене ж ноготочки"],
    picture: female17,
  },
  {
    top: true,
    id: 35,
    name: "Віолетта",
    age: 33,
    advantage: [
      "11_Любляча мама 2 дітей",
      "1_Встигаю і прибрати, і приготувати, і тд",
    ],
    disadvantage: ["39_Але третій шлюб, це тільки початок)"],
    picture: female18,
  },
  {
    top: true,
    id: 37,
    name: "Маріка",
    age: 25,
    advantage: [
      "37_Повар-кондитер, дуже успішна",
      "7_Маю три кондитерські у місті",
    ],
    disadvantage: [
      "24_Не скидаю гроші на ЗСУ, бо у країни мають бути гроші на них і не вважаю, що мої 10 гривень якось їм допоможуть.",
    ],
    picture: female19,
  },
  {
    id: 39,
    name: "Оленка",
    age: 26,
    advantage: [
      "8_Активно та регулярно займалась спортом, досягла чи малих успіхів",
    ],
    disadvantage: [
      "13_Але рік тому залишила спорт і трішки піднабрала (вага 105 кг). Мої друзі та родичі кажуть, що мені варто скинути і зайнятись собою. Та мені здається, що зі мною все добре і мені так подобається",
    ],
    picture: female20,
  },
  {
    id: 41,
    name: "Іванка",
    age: 24,
    advantage: ["4_Гарна", "17_Розумна"],
    disadvantage: [
      "39_Безробітня",
      "40_Я впевнена, що в мене немає мінусів, адже я ідеальна",
    ],
    picture: female21,
  },
  {
    id: 43,
    name: "Катя",
    age: 19,
    advantage: [
      "16_Веду інстаграм сторінку, де маю приблизно 15000 підписників",
      "15_Пропагандую український контент",
    ],
    disadvantage: ["34_Є хейт через несправедливість розіграшів"],
    picture: female22,
  },
  {
    id: 45,
    name: "Зоряна",
    age: 21,
    advantage: [
      "15_Закінчила університет з червоним дипломом.",
      "37_Спеціаліст у своїй справі",
    ],
    disadvantage: [
      "34_Любимо з подругами проводити час разом, але коли збираємось усі любимо оцінювати інших.",
    ],
    picture: female23,
  },
  {
    id: 47,
    name: "Вікторія",
    age: 27,
    advantage: ["15_Успішна, самодостатня жінка, феміністичних поглядів."],
    disadvantage: [
      "40_Вважаю, що кожна жінка може обійтись без чоловіка, а чоловіків обирають слабкі жінки.",
    ],
    picture: female24,
  },
  {
    id: 49,
    name: "Марина",
    age: 22,
    advantage: [
      "7_Менеджер успішної компанії",
      "17_Люблю читати книги",
      "15_Вивчила три іноземні мови",
    ],
    disadvantage: ["40_Люблю все престижне, просте не для мене"],
    picture: female25,
  },
];

const people = sortBy([...males, ...females], ["id"]);

export default people;

export const sanitizeDescription = (descr) => descr.split("_")[1];
