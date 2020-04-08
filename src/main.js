import {TASK_COUNT, render} from './components/utils';
import {createMenuTemplate} from './components/menu';
import {createFilterTemplate} from './components/filter';
import {createSortTemplate} from './components/sort';
import {createCardTemplate} from './components/card';
import {createCardEditTemplate} from './components/card-edit';
import {createLoadMoreButtonTemplate} from './components/load-more-btn';

const menu = document.querySelector(`.control`);
const main = document.querySelector(`.main`);

render(menu, createMenuTemplate());
render(main, createFilterTemplate());

// Создаем контейнер для карточек
const boardTasks = document.createElement(`div`);
boardTasks.classList.add(`board__tasks`);

// Создаем контейнер для сортировки, карточек и кнопки их дозагрузки.
const boardContainer = document.createElement(`section`);
boardContainer.classList.add(`board`);
boardContainer.classList.add(`container`);

// Добавляем в разметку общий контейнер
main.appendChild(boardContainer);
const board = document.querySelector(`.board`);

// Добавляем в разметку контейнер для карточек
board.appendChild(boardTasks);
const tasksContainer = document.querySelector(`.board__tasks`);

render(board, createSortTemplate(), `afterbegin`);

render(tasksContainer, createCardEditTemplate());

for (let i = 0; i < TASK_COUNT; i++) {
  render(tasksContainer, createCardTemplate());
}

render(board, createLoadMoreButtonTemplate());
