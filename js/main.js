/* eslint-disable no-console */
const MESSAGES_ARRAY = ['Всё отлично!', 'В целом всё неплохо. Но не всё.', 'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.', 'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.', 'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.', 'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'];
const DESCRIPTION_ARRAY = ['Всё отлично!','В целом кадр неплохой. Композиция хромает.','Когда вы делаете снимок на телефон, уберите палец с угла кадра. В конце концов, это просто дилетантизм.','Мой кот случайно прошёлся по кнопке спуска, и у него получилась фотография с лучшим фокусом.','Я поскользнулся на мокром полу, нажал на затвор и снял кадр резче, чем вы.','Лица на вашем фото перекошены, как будто их снимали через широкоугольник вплотную. Как можно было так испортить свет и ракурс?!'];
const NAMES = ['Артём', 'Карина', 'Илья', 'Мария', 'Даниил', 'ОЛьга', 'Михаил', 'Алиса', 'Акакий', 'Серафима', 'Геннадий', 'Зухра', 'Святослав', 'Проскофья'];

const createRandomRangeInteger = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);
const getRandomArrayElement = (array) => array[createRandomRangeInteger(0, array.length - 1)];
const createIdGenerator = (min, max) => {
  const arrayIds = [];
  for (let i = min; i <= max; i++) {
    arrayIds.push(i);
  }
  for (const i of arrayIds) {
    const j = createRandomRangeInteger(0,i);
    [arrayIds[i], arrayIds[j]] = [arrayIds[j], arrayIds[i]];
  }
  let currentIndex = 0;
  return () => {
    if (currentIndex >= arrayIds.length) {
      return null;
    }
    const id = arrayIds[currentIndex];
    currentIndex++;
    return id;
  };
};


const generateCommentId = createIdGenerator(1, 100000);
const generatePhotoId = createIdGenerator(1, 25);
const generatePhotoNumber = createIdGenerator(1, 25);

const createMessage = () => {
  const first = getRandomArrayElement(MESSAGES_ARRAY);
  if (createRandomRangeInteger(0, 1) === 0) {
    return first;
  }
  const second = getRandomArrayElement(MESSAGES_ARRAY);
  return `${first } ${ second}`;
};

const createComment = () => ({
  id: generateCommentId(), //случайное число, не должны повторяться
  avatar: `img/avatar-${ createRandomRangeInteger(1,6) }.svg`,//число от 1 до 6 выбирается рандомно
  message: createMessage(),
  name: getRandomArrayElement(NAMES), //массив имён, выбирается рандомно
});

const createCommentsArray = function () {
  const commentsArray = [];
  const count = createRandomRangeInteger (0, 30);
  for (let i = 0; i <= count - 1; i++) {
    commentsArray[i] = createComment();
  }
  return commentsArray;
};

const createDescriptionPhoto = function () {
  return {
    id: generatePhotoId(),//уникальное число от 1 до 25 - целое???
    url: `photos/${ generatePhotoNumber() }.jpg`, //адрес картинки photos/{{i}}.jpg, i - случаное и не должно повторяться
    description: getRandomArrayElement(DESCRIPTION_ARRAY), //?????
    likes: createRandomRangeInteger(15, 200), //число лайков, поставленных фотографии, от 15 до 200
    comments: createCommentsArray()//массив объектов комментарий, отсавленных к конкретной фотографии, случайное количество от 0 до 30

  };
};

// const createDescriptionsPhotoArray = function () {
//   const descriptionsPhotoArray = [];
//   descriptionsPhotoArray.length = 25;
//   for (let i = 0; i <= descriptionsPhotoArray.length - 1; i++) {
//     descriptionsPhotoArray[i] = createDescriptionPhoto();
//   }
//   return descriptionsPhotoArray;
// };
const createDescriptionsPhotoArray = function () {
  return Array.from ({length: 25}, createDescriptionPhoto);
};


console.log ('Массив из сгенерированный 25-ти объектов:', JSON.stringify(createDescriptionsPhotoArray(), null, 2));
