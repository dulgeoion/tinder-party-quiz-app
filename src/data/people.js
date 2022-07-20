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

const males = [
  {
    id: 1,
    name: "Іван",
    age: 25,
    advantage: ["Cмачно готую", "Романтичний"],
    disadvantage: ["Не мию посуд", "Чистити зуби - поганий жарт цивілізації"],
    picture: male1,
  },
  {
    id: 3,
    name: "Василь",
    age: 16,
    advantage: ["Гарний", "Пунктуальний"],
    disadvantage: [
      "Кожний день вживаю часник, дуже корисно",
      "Економний - не потрібно багато шкарпеток",
    ],
    picture: male2,
  },
  {
    id: 6,
    name: "Чубі",
    age: 35,
    advantage: ["Власник кафе", "Спортсмен"],
    disadvantage: ["Лисий", "На першому побаченні буду з мамою"],
    picture: male3,
  },

  {
    id: 8,
    name: "Горіх",
    age: 25,
    advantage: ["Люблю тварин", "Стиль життя - правильне харчування"],
    disadvantage: [
      "Іноді я не господар свого кишечника",
      "Навчу економити на вушних паличках",
    ],
    picture: male4,
  },
  {
    id: 10,
    name: "Пітьо",
    age: 16,
    advantage: [
      "Мій будинок завжди в чистоті та охайний",
      "Майбутній відомий співак",
    ],
    disadvantage: [
      "Люблю працювати в полі з багном",
      "Челендж - не змінювати носки весь сезон!",
    ],
    picture: male5,
  },
  {
    id: 12,
    name: "Серий",
    age: 35,
    advantage: [
      "Багато кажуть про мої гарні очі",
      "Люблю суші - їсти і робити, вмію ;)",
    ],
    disadvantage: [
      "Не розумію, але люди кажуть що я чавкаю, я таке не помічав",
    ],
    picture: male6,
  },
  {
    id: 14,
    name: "Назарелло",
    age: 16,
    advantage: ["Спік інгліш", "Червоний диплом"],
    disadvantage: [
      "Красивіше мене лише... Таких нема",
      "Порядні люди пахнуть добре від природи",
    ],
    picture: male7,
  },
  {
    id: 16,
    name: "Володя",
    age: 23,
    advantage: ["Чемпіон Європи з карате", "Мама постаралась виховати"],
    disadvantage: [
      "Ношу стратегічний запас казявок з собою",
      "Файних людей можна і почекати",
    ],
    picture: male8,
  },
  {
    id: 18,
    name: "Семен",
    age: 22,
    advantage: ["Майстер на всі руки", "Люблю добре виглядати"],
    disadvantage: ["Мене краще не нервувати", "МАТ ЦЕ КРУТО!"],
    picture: male9,
  },
  {
    id: 20,
    name: "Коря",
    age: 38,
    advantage: ["Програміст", "Проти алкоголю"],
    disadvantage: ["На всяк випадок жирний", "Мої гроші не твої гроші"],
    picture: male10,
  },
];

const people = [...males];

export default people;
