import { getRandomPositiveInteger } from './util.js';

const COUNT = 25;
const COMMENTS_COUNT = {
  MIN: 0,
  MAX: 33
};

const LIKE_COUNT = {
  MIN: 15,
  MAX: 200
};

const AVATAR_COUNT = {
  MIN: 1,
  MAX: 6
};

const NAMES = [
    'Илья',
    'Глеб',
    'Иван',
    'Сергей',
    'Артур'
];

const DESCRIPTION = [
    'Прекрасная ночь',
    'Вкусный обед',
    'Школьный день',
    'Улётный вечер',
    'Рабочий день'
];

const MESSAGES = ['Отличное фото',
    'Очень яркая фотка',
    'Мне не нравятся твои фотки. Дизлайк.',
    'Ужасная фотография, удали быстро',
    'Настолько идеальных фотографий я давно не видел',
    'Для тебя фотография хороша'
];

const arrayObject = [];

const commentArray = (count) => {
  const array = [];
  for (let i = 0; i < count; i++) {
    array.push({
      id: i,
      avatar: `img/avatar-${getRandomPositiveInteger(AVATAR_COUNT.MIN, AVATAR_COUNT.MAX)}.svg`,
      message: MESSAGES[getRandomPositiveInteger(0, MESSAGES.length - 1)],
      name: NAMES[getRandomPositiveInteger(0, NAMES.lenght - 1)]
    });
  }
  return array;
};


const addPhotos = () => {
  for (let i = 0; i < COUNT; i++) {
    arrayObject.push({
      id: i,
      url: `photos/${i + 1}.jpg`,
      description: DESCRIPTION[getRandomPositiveInteger(0, DESCRIPTION.length - 1)],
      likes: getRandomPositiveInteger(LIKE_COUNT.MIN, LIKE_COUNT.MAX),
      comments: commentArray(getRandomPositiveInteger(COMMENTS_COUNT.MIN, COMMENTS_COUNT.MAX))
    });
  }
};

addPhotos();

export{arrayObject};