import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import DefaultLayout from './Layouts/DefaultLayout';
import { publicPage } from './Routes/routes';
function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    {publicPage.map((route, index) => {
                        const Page = route.component;
                        return (
                            <Route
                                key={index}
                                path={route.path}
                                element={
                                    <DefaultLayout>
                                        <Page name={route.name} />
                                    </DefaultLayout>
                                }
                            />
                        );
                    })}
                </Routes>
            </div>
        </Router>
    );
}

export default App;
