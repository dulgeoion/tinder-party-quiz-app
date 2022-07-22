import { sanitizeDescription } from "./people";

export const tempers = {
  1: "Хазяйновитісь",
  2: "Романтичність",
  3: "Неохайність",
  4: "Краса",
  5: "Ввічливість",
  6: "Неприємний запах",
  7: "Підприємницькість",
  8: "Спортсмен",
  9: "Не гарний/гарна",
  10: "Не самостійний/самостійна",
  11: "Доброта",
  12: "Добре здоров'я",
  13: "Хворобливість",
  14: "Здоровий спосіб життя",
  15: "Цілесповідальність",
  16: "Популярність",
  17: "Розум або кмітливість",
  18: "Самолюб/Егоїст",
  19: "Вихованість",
  20: "Не пунктуальний/пунктуальна",
  21: "Гнівливий",
  22: "Відсутність виховання",
  23: "Багатство",
  24: "Скупість або жадібність",
  25: "Естетичність",
  26: "Погані звички",
  27: "Охайність",
  28: "Пустослов",
  29: "Креативність або творчість",
  30: "Лінь",
  31: "Транжира",
  32: "Тупість",
  33: "Бабнік",
  34: "Хистрість",
  35: "Любов до подорожей",
  36: "Трудоголік",
  37: "Профі",
  38: "Інше",
  39: "Безвідповідальність"
};

export const getTemperFromDescription = (desc) => {
  const [temper] = desc.split("_");
  return tempers[temper];
};

export const mapTempersFromDesctiptions = (descriptions) => {
  return descriptions.reduce((acc, description) => {
    const temper = getTemperFromDescription(description);
    if (acc[temper]) {
      acc[temper] = [...acc[temper], sanitizeDescription(description)];
    } else {
      acc[temper] = [sanitizeDescription(description)];
    }
    return acc;
  }, {});
};

export const mapTempersFromPeople = (people) => {
  return people.reduce((acc, person) => {
    let likes = mapTempersFromDesctiptions(person.advantage);
    let dislikes = mapTempersFromDesctiptions(person.disadvantage);

    if (acc.likes) {
      likes = Object.keys(likes).reduce((lAcc, l) => {
        if (acc.likes[l]) {
          lAcc[l] = [...acc.likes[l], ...likes[l]];
        } else {
          lAcc[l] = likes[l];
        }
        return lAcc;
      }, {});
      acc.likes = { ...acc.likes, ...likes };
    } else {
      acc.likes = likes;
    }
    if (acc.dislikes) {
      dislikes = Object.keys(dislikes).reduce((dAcc, d) => {
        if (acc.dislikes[d]) {
          dAcc[d] = [...acc.dislikes[d], ...dislikes[d]];
        } else {
          dAcc[d] = dislikes[d];
        }
        return dAcc;
      }, {});
      acc.dislikes = { ...acc.dislikes, ...dislikes };
    } else {
      acc.dislikes = dislikes;
    }

    return acc;
  }, {});
};
