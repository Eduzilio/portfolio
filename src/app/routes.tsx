import { createBrowserRouter } from "react-router";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { CaseStudy } from "./pages/CaseStudy";
import { Contact } from "./pages/Contact";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Home,
  },
  {
    path: "/about",
    Component: About,
  },
  {
    path: "/case/:id",
    Component: CaseStudy,
  },
  {
    path: "/contact",
    Component: Contact,
  },
]);
