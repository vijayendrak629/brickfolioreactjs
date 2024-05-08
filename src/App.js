import './App.scss';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {Home, CategoryProduct, ProductSingle} from "./pages/index";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import store from "./store/store";
import {Provider} from "react-redux";

function App() {
  return (
    <div className="App">
      <Provider store = {store}>
        <BrowserRouter>
          <Header />
          <Sidebar />

          <Routes>
            <Route path = "/" element = {<Home />} />
            <Route path = "/product" element = {<Home />} />
            <Route path = "/product/:id" element = {<ProductSingle />} />
            <Route path = "/category/:category" element = {<CategoryProduct />} />
          </Routes>

        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
