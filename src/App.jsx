// Don't use anchor tags, instead use Link
import { Link } from "react-router-dom";

function App() {
  return (
    <>
      <nav>
        <h1>Test Route</h1>
        <hr />
        <ul>
          <li>
            <Link to="test">Take me to Test!</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default App;
