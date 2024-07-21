import React from "react";
import ReactDOM from "react-dom/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./layouts/Root.tsx";
import Error from "./pages/Error.tsx";
import Home from "./pages/Home.tsx";
import ComingSoon from "./pages/ComingSoon.tsx";
import NowPlaying from "./pages/NowPlaying.tsx";
import "./styles/index.css";

const client = new QueryClient({});

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Error />,
    children: [
      { path: "", element: <Home />, children: [{ path: ":id" }] },
      {
        path: "coming-soon",
        element: <ComingSoon />,
        children: [{ path: ":id" }],
      },
      {
        path: "now-playing",
        element: <NowPlaying />,
        children: [{ path: ":id" }],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={client}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </React.StrictMode>
);
