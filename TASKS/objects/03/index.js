/* Можно ли изменить объект, объявленный с помощью const? Как вы думаете?  */
"use strict"

const user = {
    name: "John"
  };
  
  // это будет работать?
  user.name = "Pete";

  /*
  
  Конечно, это сработает без проблем.

Объявление const защищает только саму переменную от изменений.

Другими словами, user хранит ссылку на объект. И это не может быть изменено. Но содержимое объекта менять можно.

  */

const user = {
    name: "John"
  };
  
  // Работает!
  user.name = "Pete";
  
  // Ошибка
  user = 123;