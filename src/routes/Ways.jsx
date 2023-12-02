import {BrowserRouter, Routes, Route } from "react-router-dom";
import { Suspense } from "react";
import PageLayout from "../layout/PageLayout";
import PageHome from "../pages/PageHome";
import PageNotFound from "../pages/PageNotFound";
import PageAboutUs from "../pages/PageAboutUs";
import PageContact from "../pages/PageContact";
import PageQuiz from "../pages/PageQuiz";
import PageProduct from "../pages/PageProduct";

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