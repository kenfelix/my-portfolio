import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Base, Home } from '@views';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Base/>,
        children: [
            {
                path: "/",
                element: <Home/>
            }
        ]
    },
]);

function App() {
    return <RouterProvider router={router} />
}

export default App
