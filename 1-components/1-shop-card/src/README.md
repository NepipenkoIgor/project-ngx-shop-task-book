## Интерполяция, связывание данных и межкомпонентная коммуникация

Товары которые приходят с сервера имеют структуру

```ts
export interface ICartProduct {
  _id: string;
  feedbacksCount: number;
  subCategory: string;
  image: string;
  name: string;
  price: number;
  count: number;
  rating: number;
  status: number;
}
```

В этом задании предлагаю сделать компонент карточки товара в корзину. Вам нужно выводить данные о товаре в шаблоне.
Данные должны приходить из родительского компонента. А так же обработать событие увеличения/уменьшения количества товаров.
Все события должны быть связанны с родительским компонентом.

Для успешного выполнения вам необходимо ознакомиться с документацией(README в папке модуля).

![Demo](assets/images/demo.png)

Не меняйте структуру html и стили компонентов

Для запуска окружения непрерывной разработки выполните команду

```bash
npm run start:1-components_1-shop-card
```

Для проверки своего решения выполните

```bash
npm run test:1-components_1-shop-card
```

Для проверки стилистики кода

```bash
npm run lint:1-components_1-shop-card
```
