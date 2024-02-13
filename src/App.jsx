import './App.css'
import { Switch, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './layouts/Header';
import HomePage from './pages/HomePage';
import Footer from './layouts/Footer';
import AboutPage from './pages/AboutPage';
import ProductPage from './pages/ProductPage';
import ContactPage from './pages/ContactPage';
import React from 'react';
import Team from "./pages/TeamPage"


function App() {
    return (
        <div>
            <Header />
            <Switch>
                <Route path="/" exact>
                    <HomePage />
                </Route>
                <Route path="/products" exact>
                    <ProductPage />
                </Route>
                <Route path="/about" exact>
                    <AboutPage />
                </Route>
                <Route path="/Team" exact>
                    <Team />
                </Route>
                <Route path="/contact" exact>
                    <ContactPage />
                </Route>
            </Switch>
            <Footer />
        </div>
    );
}
 
export default App;

