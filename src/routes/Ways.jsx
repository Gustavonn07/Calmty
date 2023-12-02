import {BrowserRouter, Routes, Route } from "react-router-dom";
import { Suspense } from "react";
import PageLayout from "../layout/PageLayout.jsx";
import PageHome from "../pages/PageHome.jsx";
import PageNotFound from "../pages/PageNotFound.jsx";
import PageAboutUs from "../pages/PageAboutUs.jsx";
import PageContact from "../pages/PageContact.jsx";
import PageQuiz from "../pages/PageQuiz.jsx";
import PageProduct from "../pages/PageProduct.jsx";

const Ways = () => {

    return (
        <>
            <Suspense>
                <BrowserRouter>
                    <Routes>
                        <Route path='/' element={<PageLayout />}>
                            <Route index element={<PageHome />} />
                            <Route path="/product" element={<PageProduct />} />
                            <Route path="/about" element={<PageAboutUs />} />
                            <Route path="/contact" element={<PageContact />} />
                            <Route path="/quiz" element={<PageQuiz />} />
                        </Route>

                        <Route path='*' element={<PageNotFound />} />
                    </Routes>
                </BrowserRouter>
            </Suspense>
        </>
    )
}

export default Ways;