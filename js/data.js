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

=======
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
=======
addPhotos();

export{arrayObject};
import {getRandomPositiveInteger} from './util.js';
const getRandomArrayElement = function (elements) {
  return elements[getRandomPositiveInteger(0, elements.length - 1)];
};
const NAMES = [
    
  'Вася',
  'Маруся',
  'Данил',
  'Даррен Эллохард',
  'Риан Тьер',
  'Кадзу',
  'Ниалл',
  'Ариана',
  'Хуа Чен',
  'Се Лянь',
];
const MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];
const DESCRIPTIONS = [
  'Самое крутое доказательство того, что я умею делать фотки, лучше чем вы.',
  'Котики, ну куда же без них?',
  'Она — мой лучший друг.',
  'Если я когда-то напишу историю нашей жизни, не удивляйся, что твое имя я упомяну несколько миллиардов раз.',
  'Спокойно! Просто сегодня я сильно взволнована!',
  'В море может и водится миллион рыб, но я единственная русалка.',
  'Доброе утро, всем! Теперь давайте начнем стресс!',
];
 const IMAGES_COUNT = 25;
 let imagesDescriptions = [];
 for (let i = 1; i <= IMAGES_COUNT; i++) {
    imagesDescriptions.push({
      id: i,
      url: `photos/${i}.jpg`,
      description: DESCRIPTIONS[i],
      likes: getRandomPositiveInteger(15, 200),
      comments: [{
        id: i * getRandomPositiveInteger(1, 100),
        avatar: `img/avatar${getRandomPositiveInteger(1, 6)}.svg`,
        message: getRandomArrayElement(MESSAGES),
        name: getRandomArrayElement(NAMES)
    }]
  })
}

export {imagesDescriptions};