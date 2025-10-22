import { useState } from 'react'
import './App.css'
import { Link, Route, Routes, useNavigate, useRoutes } from 'react-router-dom'
import ReceipeList from './pages/recipes'
import CommentsList from './pages/comments'
import RecipeDetailsPage from './pages/receipe-details'
import NotFoundPage from './pages/not-found'
import Layout from './component/header/layout'
import ReactHookFormExamplePage from './pages/react-hook-form-example'
import Hooks from './pages/hooks'
import UseMemoExample from './pages/use-memo-example'
import UseCallBackExample from './pages/use-callback-example'
import ReactQueryDemo from './pages/react-query'



function CustomRoutes(){
  
  const element = useRoutes([
    {
      path : '/home',
      element : <Layout/>,
      children : [
        { 
          path : 'recipe-list' ,
          element : <ReceipeList/>
        },
        { 
          path : 'comments-list',
          element : <CommentsList/>
        },
        {
          path : 'recipe-list/:id', 
          element : <RecipeDetailsPage/>
        },
        
      ]
    },
    {
      path: '*', element : <NotFoundPage/>
    },
    {
          path : '/react-hook-form',
          element: <ReactHookFormExamplePage/>
    },
    {
      path : '/hooks',
      element : <Hooks/>
    },
    {
      path: '/memo',
      element : <UseMemoExample/>
    },
    {
      path : '/callback',
      element : <UseCallBackExample/>
    },
    {
      path : '/react-query-demo',
      element : <ReactQueryDemo/>
    }
  ])
  return element;
}
function App() {

  const navigate = useNavigate()
  return (
    <div>
      {/* <h1>React Routing,custom hooks and more</h1>
      <div>
        <Link to={'/recipe-list'}>Alternating way of going to recipe list page</Link>
      </div>
      <button onClick={() => navigate("/home/recipe-list")} 
      style={{ background: 'black', color: 'white', marginRight: '12px' }}>Navigate to Recipe List page</button>
      <button onClick={() => navigate("/home/comments-list")} style={{ background: 'black', color: 'white' }}>Navigate to comments list page</button> */}
      {/* <Routes>
        <Route path="/home" element={<Layout/>}>
          <Route path="recipe-list" element={<ReceipeList />} />
          <Route path="comments-list" element={<CommentsList />} />
          <Route path="recipe-list/:id" element={<RecipeDetailsPage />} />
        </Route>

        <Route path="*" element={<NotFoundPage />} />
        {/*the * (asterisk) acts as a wildcard — meaning it will match any path that doesn’t match any of the routes defined before it.*/}
        {/* It’s used to handle “404 - Not Found” pages in your app. */}
      {/* </Routes> */}
        <CustomRoutes/>
    </div>
  )
}

export default App
