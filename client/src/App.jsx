import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./layouts/HomePage/HomePage";

function App() {
    return (
        <BrowserRouter>
            <div className="app">
                <Routes>
                    <Route path="/" element={<HomePage />} />
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
