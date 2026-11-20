import { createBrowserRouter } from "react-router-dom";

import Main from '@/pages/main/Main.tsx';
import Order from '@/pages/order/Order.tsx';

export const router = createBrowserRouter(
    [
        {
            path: "/",
            element: <Main />
        },
        {
            path: "/order",
            element: <Order />
        }
    ],
    { basename: import.meta.env.BASE_URL }
);