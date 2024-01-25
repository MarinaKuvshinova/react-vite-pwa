import About from "../pages/About";
import Home from "../pages/Home";
import Image from "../pages/Image";
import Video1 from "../pages/Video1";
import Video2 from "../pages/Video2";

export const routes = [
    { path: "/", element: Image },
    // { path: "/about", element: About },
    // { path: "/image", element: Image },
    { path: "/video1", element: Video1 },
    { path: "/video2", element: Video2 },
];
