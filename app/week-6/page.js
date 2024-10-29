import ItemList from "./item-list.js";
import Items from "./items.json";
import Item from "./item.js";

export default function Page() {
  return (
    <main>
      <h1 className="text-4xl font-bold m-4"> Shopping List</h1>
      <ul>
        {Items.map((id) => (
          <li key={id.name}></li>
        ))}
      </ul>
      <ItemList />
      <Item />
    </main>
  );
}
