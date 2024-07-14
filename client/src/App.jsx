import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./layouts/HomePage/HomePage";
import Footer from "./components/Footer/Footer";

function App() {
    return (
        <BrowserRouter>
            <div className="app">
                <Routes>
                    <Route path="/" element={<HomePage />} />
                </Routes>
            </div>
            <Footer />
        </BrowserRouter>
    );
}

export default App;
