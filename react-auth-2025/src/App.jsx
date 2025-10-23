import { Route, Routes } from "react-router-dom"
import LoginPages from "./pages/login"
import RegisterPages from "./pages/register"
import ProfilePages from "./pages/profile"
import AuthRoute from "./pages/private-route"

function App() {

  return (
    <div>
      <Routes>
        <Route 
        path='/login-page'
        element = {<LoginPages/>}
        />
        <Route 
          path='/register-page'
          element = {<RegisterPages/>}
        />
        <Route
          path='/profile-page'
          element={
            <AuthRoute>
              <ProfilePages/>
            </AuthRoute>
          }
        />
      </Routes>

    </div>
  )
}

export default App
