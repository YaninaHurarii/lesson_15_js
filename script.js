/* Реалізувати можливість зміни колірної теми користувача.


Технічні вимоги:
- Взяти готове домашнє завдання HW-4 "Price cards" з блоку Basic HMTL/CSS.

- Додати на макеті кнопку "Змінити тему".

- При натисканні на кнопку - змінювати колірну гаму сайту (кольори кнопок, фону тощо) на ваш розсуд. При повторному натискання - повертати все як було спочатку - начебто для сторінки доступні дві колірні теми.

- Вибрана тема повинна зберігатися після перезавантаження сторінки.
*/


const toggle = document.querySelector("#toggle");

const theme = localStorage.getItem("theme");

if (theme == "dark") {
  document.body.classList.add("dark");
}

toggle.addEventListener("mouseup", () => {
  const darkTheme = document.body.classList.toggle("dark");

  localStorage.setItem("theme", darkTheme ? "dark" : "light");
});