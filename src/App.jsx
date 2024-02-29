import './App.css'
import { Switch, Route } from "react-router-dom";
import Header from './layouts/Header';
import Footer from './layouts/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ProductPage from './pages/ProductPage';
import ContactPage from './pages/ContactPage';
import Team from "./pages/TeamPage"
import SignUp from './pages/SignUpPage';
import Login from './pages/LoginPage';
import Pricing from './pages/Pricing';

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
                <Route path="/pricing" exact>
                    <Pricing />
                </Route>
                <Route path="/contact" exact>
                    <ContactPage />
                </Route>
                <Route path="/signup" exact >
                    <SignUp />
                </Route>
                <Route path="/login" exact>
                    <Login />
                </Route>
            </Switch>
            <Footer />
        </div>
    );
}

export default App;

