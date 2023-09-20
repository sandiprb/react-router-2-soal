import { Link } from "react-router-dom";
export default function Stores() {
  return (
    <div>
      <h1>Stores</h1>
      <h2>Store Locations</h2>
      <ul>
        <li>
          <Link to="/stores/mumbai">Mumbai Store</Link>
        </li>
        <li>
          <Link to="/stores/delhi">Delhi Store</Link>
        </li>
        <li>
          <Link to="/stores/chennai">Chennai Store</Link>
        </li>
      </ul>
    </div>
  );
}
