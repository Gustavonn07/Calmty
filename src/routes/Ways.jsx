import {BrowserRouter, Routes, Route } from "react-router-dom";
import { Suspense } from "react";
import PageHome from "../Pages/PageHome";
import PageNotFound from "../Pages/PageNotFound";
import PageAboutUs from "../Pages/PageAboutUs";
import PageContact from "../Pages/PageContact";
import PageQuiz from "../Pages/PageQuiz";
import PageProduct from "../Pages/PageProduct";
import PageLayout from "../layout/PageLayout/index";

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