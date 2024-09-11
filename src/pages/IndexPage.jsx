import { useContext } from "react";
import { AppContext } from "../context/Context";

export default function IndexPage() {
  const { count, setCount, name, setName } = useContext(AppContext);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);

  return (
    <main className="flex justify-center items-center h-screen bg-gray-100">
      <section className="bg-white p-8 rounded-lg shadow-md text-center">
        <div className="mb-4">
          <h1 className="text-2xl font-bold text-gray-800">{name}</h1>
          <p className="text-lg text-gray-600">Current Count: {count}</p>
        </div>
        <div className="space-x-4">
          <button
            className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
            onClick={increment}
          >
            Increase
          </button>
          <button
            className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
            onClick={decrement}
          >
            Decrease
          </button>
        </div>
      </section>
    </main>
  );
}
