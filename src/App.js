
import Header from "./containers/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProductListing from "./containers/ProductListing";
import ProductDetail from "./containers/ProductDetail";


function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Header />
                    <Route path="/" element={<ProductListing />} />
                    <Route path="/product/:productId" element={<ProductDetail />} />
                    <Route>404 Not Found</Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
