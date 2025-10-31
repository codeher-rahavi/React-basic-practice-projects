import { Routes , Route } from 'react-router-dom';
import ScrumBoardPage from './pages/scrum-board';
import TaskPage from './pages/task';
import './index.css';
// import './App.css';
import AuthPage from './pages/auth';
import CommonLayout from './components/commonLayout';

function App() {
  return (
    <Routes>
      <Route
        path='/auth'
        element={<AuthPage/>}
      />
      <Route path='/tasks' element={<CommonLayout/>}>
        <Route path="list" element={<TaskPage/>}/>  
        <Route path='scrumBoard' element={<ScrumBoardPage/>
      }/>      
      </Route>
    </Routes>
     )
}

export default App
