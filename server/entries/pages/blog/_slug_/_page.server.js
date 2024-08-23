import { e as error } from "../../../../chunks/index.js";
async function load({ params }) {
  const { slug } = params;
  const res = await fetch(`https://jsonplaceholder.typicode.com/todos/${slug}`);
  if (!res.ok) {
    throw error(res.status, "Ошибка при загрузке данных");
  }
  const todo = await res.json();
  return { todo };
}
export {
  load
};
