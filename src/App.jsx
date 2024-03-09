import { Route, Routes } from "react-router-dom"
import LoginPage from "./Pages/LoginPage"
import SignUpPage from "./Pages/SignUpPage"
import { Usercontextprovoider } from "./ContextAPI/UserContext"
import Dashboard from "./Pages/DashboardPage"
import PageLayout from "./Pages/PageLayout"
// import ProtectedRoute from "./Components/ProtectedRoute"
import CommentsPage from "./Pages/CommentsPage"
import Viewprofilepage from "./Pages/Viewprofilepage"

function App() {
  

  return (
    <>
    <Usercontextprovoider>
        {/* <ProtectedRoute> */}
     <PageLayout>

            <Routes>

              <Route path='/' element={<Dashboard/>} />
              <Route path='/auth' element={<LoginPage/>} />
              <Route path='/signup' element={<SignUpPage/>} />
              <Route path='/Viewprofile/:id' element={<Viewprofilepage/>} />
              <Route path='/comments/:id' element={<CommentsPage/>}/>

            </Routes>

    

    </PageLayout>
        {/* </ProtectedRoute> */}
    </Usercontextprovoider>
    </>
  )
}

export default App
