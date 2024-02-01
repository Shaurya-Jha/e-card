import LoginPage from "./pages/Login";

// react router
import {createBrowserRouter, RouterProvider,} from 'react-router-dom'
import SignupPage from "./pages/Signup";
import HomePage from "./pages/Home";

const router = createBrowserRouter([
  {
    path: '/',
    element:<HomePage />
  },
  {
    path: '/login',
    element: <LoginPage />
  },
  {
    path: '/signup',
    element: <SignupPage />
  },
  {
    path: '/userform',
    element: <h2>User form</h2>
  }
])

const App = () => {
  return ( 
    <div>
      {/* components to be created */}
      
      {/* login page */}

      {/* signup page */}

      {/* form page */}

      <RouterProvider router={router} />
    </div>
   );
}
 
export default App;