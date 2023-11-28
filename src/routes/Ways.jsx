import {BrowserRouter, Routes, Route } from "react-router-dom";
import { Suspense } from "react";
import PageLayout from "../layout/PageLayout";
import PageHome from "../Pages/PageHome";
import PageNotFound from "../Pages/PageNotFound";
import PageAboutUs from "../Pages/PageAboutUs";
import PageContact from "../Pages/PageContact";

const Ways = () => {

    return (
        <>
            <Suspense>
                <BrowserRouter>
                    <Routes>
                        <Route path='/' element={<PageLayout />}>
                            <Route index element={<PageHome />} />
                            <Route path="/about" element={<PageAboutUs />} />
                            <Route path="/contact" element={<PageContact />} />
                        </Route>

                        <Route path='*' element={<PageNotFound />} />
                    </Routes>
                </BrowserRouter>
            </Suspense>
        </>
    )
}

export default Ways;