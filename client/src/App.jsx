import LoginPage from "./pages/Login";

// react router
import {createBrowserRouter, RouterProvider,} from 'react-router-dom'
import SignupPage from "./pages/Signup";
import HomePage from "./pages/Home";
import InfoForm from "./pages/user-dashboard/InfoForm";
import EditForm from "./pages/user-dashboard/EditForm";

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
  },
  {
    path: '/user-dashboard/info-form',
    element: <InfoForm />
  },
  {
    path: 'user-dashboard/edit-form',
    element: <EditForm />
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