export const Category = () => {
  return (
    <div className="text-white">
      <ul className="flex justify-evenly pt-4 cursor-pointer">
        <li className="border rounded-full px-4 py-2 flex gap-2" onClick={()=>{}}>
          <p>🚘</p>
          <p>Car</p>
        </li>
        <li className="border rounded-full px-4 py-2 flex gap-2">
          <p>🌳</p>
          <p>Nature</p>
        </li>
        <li className="border rounded-full px-4 py-2 flex gap-2">
          <p>🏠</p>
          <p>Home</p>
        </li>
        <li className="border rounded-full px-4 py-2 flex gap-2">
          <p>🐎</p>
          <p>Animal</p>
        </li>
        <li className="border rounded-full px-4 py-2 flex gap-2">
          <p>🏙️</p>
          <p>City</p>
        </li>
        <li className="border rounded-full px-4 py-2 flex gap-2">
          <p>🍔</p>
          <p>Food</p>
        </li>
        <li className="border rounded-full px-4 py-2 flex gap-2">
          <p>⚽</p>
          <p>Sport</p>
        </li>
      </ul>
    </div>
  );
};
