import {
    BrowserRouter as Router,
    Route,
    Routes
} from "react-router-dom";
import history from "./Router/history";

function App({ routes }) {

    return (
        <Router history={history}>
            <div id='common'/>

            <div className="container">
                <Routes>
                    { routes.map(({path, element}) => (<Route key={path} path={path} element={element} />)) }
                </Routes>
            </div>
        </Router>
    );
}

export default App;
