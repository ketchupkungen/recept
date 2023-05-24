import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';

import Header from './Header';
import Footer from './Footer';

import HomePage from '../pages/HomePage';

import BreakfastPage from '../pages/BreakfastPage';
import LunchPage from '../pages/LunchPage';
import SnackPage from '../pages/SnackPage';
import DinnerPage from '../pages/DinnerPage';
import DessertPage from '../pages/DessertPage';
import BreadPage from '../pages/BreadPage';
import DrinkPage from '../pages/DrinkPage';
import CalculatePage from '../pages/CalculatePage';

import NotFoundPage from '../pages/NotFoundPage';

export default function Router() {
    const Layout = () => {
        return (
            <>
                <Header />
                <Outlet />
                <Footer />
            </>
        )
    }

    const BrowserRoutes = () => {
        return (
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/breakfast" element={<BreakfastPage />} />
                        <Route path="/lunch" element={<LunchPage />} />
                        <Route path="/snack" element={<SnackPage />} />
                        <Route path="/dinner" element={<DinnerPage />} />
                        <Route path="/dessert" element={<DessertPage />} />
                        <Route path="/bread" element={<BreadPage />} />
                        <Route path="/drink" element={<DrinkPage />} />
                        <Route path="/calculate" element={<CalculatePage />} />
        
                        <Route element={<NotFoundPage />} />
                    </Route>
                    
    
                </Routes>
            </BrowserRouter>
        )
    }

    return (
        <BrowserRoutes />
    )
    
}