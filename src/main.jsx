import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './Layout.jsx';
import Home from './Pages/Home.jsx'
import About from './Pages/About.jsx'
import Services from './Pages/Services.jsx'
import Products from './Pages/Products.jsx'


const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                path: '',
                element: <Home />,
            },
            {
                path: 'about',
                element: <About />,
            },
            {
                path: 'services',
                element: <Services />,
            },
            {
                path: 'products',
                element: <Products />,
            }
        ]
        } , 
        {
            path: '*',
            element: <h1>Not Found !!!!</h1>,
        }
    ])

createRoot(document.getElementById('root')).render(
    <RouterProvider router={router}>
        <App />,
    </RouterProvider>
)
