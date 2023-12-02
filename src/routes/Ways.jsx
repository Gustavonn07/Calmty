import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";

const PageLayout = lazy(() => import("../layout/PageLayout"));
const PageHome = lazy(() => import("../pages/PageHome"));
const PageNotFound = lazy(() => import("../pages/PageNotFound"));
const PageAboutUs = lazy(() => import("../pages/PageAboutUs"));
const PageContact = lazy(() => import("../pages/PageContact"));
const PageQuiz = lazy(() => import("../pages/PageQuiz"));
const PageProduct = lazy(() => import("../pages/PageProduct"));

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