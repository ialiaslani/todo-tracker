import {
    BrowserRouter as Router,
    Route,
    Routes
} from "react-router-dom";
import history from "./Router/history";
import Header from "./Components/Common/Header";
import {ThemeProvider} from "./Components/Contexts/ThemeProvider";


function App({ routes }) {

    return (

            <Router history={history}>

                <ThemeProvider>


                    <div id='common'/>

                    <div className="container">

                        <Header />

                        <Routes>
                            { routes.map(({path, element}) => (<Route key={path} path={path} element={element} />)) }
                        </Routes>
                    </div>

                </ThemeProvider>

            </Router>
    );
}

export default App;
