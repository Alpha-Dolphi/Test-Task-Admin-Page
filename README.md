Test-Task-Admin-Page
👋 Данный проект реализован в рамках аттестационного задания.

Versel - деплой проекта

Мой Telegram

ТЗ:
Используя API https://jsonplaceholder.typicode.com/guide/, необходимо сделать админскую панель для просмотра сущностей в этом API. Обязательный минимальный стек - React, react-router v6, redux, axios (библиотеки любые, redux-toolkit, redux-act, нативно…)

Сущностей несколько:

Посты, к ним идут комментарии
Альбомы, к ним идут фотографии
Todos

Необходимо сделать панель, где будет три вкладки:

Просмотр постов, с комментариями. Необходимо сделать древовидную структуру просмотра (как на любом форуме, пикабу, реддит и тд)
Просмотр альбомов, каждый альбом - это слайдер, слайды - фотки прикрепленные к альбому
Todos, там всего два состояния, сделать доску с двумя статусами (по completed) реализовать draтьзg n drop по переносу с одной колонки в другую

Дополнительно:

настроил webpack
реализовал создание/удаление/обновление постов (и комментариев к ним), задач и загрузку альбомов

В ходе выполнения задания:

Реализовал самостоятельно drag and drop, реализовал динамическую пагинацию для альбомов
не реализовал древовидную структуру, так как API не предоставляет данных для этого

Итоговый стек:
webpack
React
react-router-dom v6
Redux/@toolkit
axios