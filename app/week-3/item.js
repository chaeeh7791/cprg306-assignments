export default function Item({ name, quantity, category }) {
  return (
    <div className="p-4 border-b border-gray-200">
      <h1 className="font-bold text-2xl">{name}</h1>
      <p>
        Buy {quantity} in {category}
      </p>
    </div>
  );
}
