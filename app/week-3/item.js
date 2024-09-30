export default function Item({ name, quantity, category }) {
  return (
    <div className="border border-blue-800 bg-slate-200 w-full max-w-xs m-4 p-2">
      <h1 className="font-bold text-2xl">{name}</h1>
      <p className="text-gray-500">
        Buy {quantity} in {category}
      </p>
    </div>
  );
}
