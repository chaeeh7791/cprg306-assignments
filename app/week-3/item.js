export default function Item({ name, quantity, category }) {
  return (
    <li className="p-4 border-b border-gray-200">
      <div className="font-old text-lg">{name}</div>
      <div className="text-gray-600">
        Bye {quantity} in {category}
      </div>
    </li>
  );
}
