import ItemList from "./itemList.js";
import Item from "./item.js";

export default function Page() {
  return (
    <main>
      <h1 className="text-4xl font-bold m-4"> Shopping List</h1>
      <ItemList />
      <Item />
    </main>
  );
}
