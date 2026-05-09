/* eslint-disable no-console */
import { MESSAGES_ARRAY, DESCRIPTION_ARRAY, NAMES } from './data.js';
import { getRandomArrayElement, createRandomRangeInteger, createIdGenerator } from './util.js';
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

export const createDescriptionsPhotoArray = function () {
  return Array.from ({length: 25}, createDescriptionPhoto);
};


console.log ('Массив из сгенерированный 25-ти объектов:', JSON.stringify(createDescriptionsPhotoArray(), null, 2));
