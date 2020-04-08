const TASK_COUNT = 3;

/**
 * Функция вставляет шаблон в контейнер
 * @param {node} container контейнер куда будет вставлен шаблон
 * @param {string} template разметка для вставки
 * @param {string} place место куда будет вставлен шаблон
 * @return {void}
 */
const render = (container, template, place = `beforeend`) => {
  container.insertAdjacentHTML(place, template);
};

export {
  TASK_COUNT,
  render
};
