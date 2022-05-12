import React from 'react';
import {Routes, Route} from "react-router-dom";
import Main from "./components/common/Layout/Main";
import {routes} from "./routes";

function App() {
    return (
        <Routes>
            <Route path="/" element={<Main/>}>
                {routes.map(
                    ({path, Component}, i) =>
                        Component && (
                            <Route
                                key={i}
                                path={path}
                                element={<Component/>}
                            />
                        )
                )}
            </Route>
        </Routes>
    );
}

export default App;
