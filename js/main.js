
function getRandomPositiveInteger (a, b) {
    const lower = Math.ceil(Math.min(Math.abs(a), Math.abs(b)));
    const upper = Math.floor(Math.max(Math.abs(a), Math.abs(b)));
    const result = Math.random() * (upper - lower + 1) + lower; 
    return Math.floor(result);
};

function checkStringLength (string, length) {
    return string.length <= length;
};

let getRandomArrayElement = function (elements) {
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
