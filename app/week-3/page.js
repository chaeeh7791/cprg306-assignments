import Item from "./item.js";
import ItemList from "./itemList.js";

export default function Page() {
  return (
    <main>
      <div>
        <h1 className="text-3xl font-bold"> Shopping List</h1>
        <Item />
        <ItemList />
      </div>
    </main>
  );
}
