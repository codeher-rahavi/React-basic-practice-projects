import { useEffect, useState } from "react"
import classes from './styles.module.css';
import { TodoItem } from "./components/todo-Item";
import { TodoDetails } from "./components/todo-details";
import { Skeleton } from "@mui/material";


function App() {
  const [loading , setLoading] = useState(false);
  const [todoList,setTodoList] = useState([]);
  const[errorMsg,setErrorMsg] = useState(null);

  const [todoDetails,setTodoDetails]=useState(null);
  const [openDialoge,setOpenDialoge]=useState(false);

  async function fetchListOfTodos(){
    try{
      setLoading(true);
      const apiResponse = await fetch('https://dummyjson.com/todos');
      const result = await apiResponse.json();
      console.log(result)
      if(result?.todos && result?.todos.length>0){
        setTodoList(result?.todos);
        setLoading(false);
        setErrorMsg('');
      }
      else{
        setTodoList([]);
        setLoading(false);
        setErrorMsg('');

      }
    }
    catch(error){
      console.log(error);
      console.log("Some Error Occured");
    }
  }

  async function fetchDetailsOfCurrentTodo(getCurrentTodoId){
    try{
      const apiResponse = await fetch(`https://dummyjson.com/todos/${getCurrentTodoId}`);
      const details = await apiResponse.json();
      console.log(details);
      if(details){
        setTodoDetails(details);
        setOpenDialoge(true);
      }
      else{
        setTodoDetails(null);
        setOpenDialoge(false);
      }


    }
    catch(error){
      console.log(error.message);
    }

  }
  useEffect(()=>{
    fetchListOfTodos()
  },[])

  if(loading)
  {
    return <Skeleton variant="rectangular" width={650} height={650}/>
  }
  return (
    <div className={classes.nameWrapper}>
      <h1 className={classes.headerTitle}>Simple Todo App using Material UI</h1>
      <div className={classes.todolistWrapper}>
        {
          todoList && todoList.length >0 ?
          todoList.map(todoItem => <TodoItem fetchDetailsOfCurrentTodo={fetchDetailsOfCurrentTodo} todo={todoItem} key={todoItem.id}/>) : null
        }
      </div>
      <TodoDetails
      setOpenDialoge={setOpenDialoge}
      openDialoge={openDialoge}
      todoDetails={todoDetails}
      setTodoDetails={setTodoDetails}/>

    </div>
  )
}

export default App
