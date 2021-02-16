import {HashRouter} from "react-router-dom";
import Navbar from "./components/Navbar";
import Routes from "./routes/Routes";


function App() {
	return (
		<main>
			<HashRouter>
				<Navbar/>
				<Routes/>
			</HashRouter>
		</main>
	);
}

export default App;
