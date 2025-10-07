import { Card, Typography,CardContent, CardActions,Button } from "@mui/material";


//to pass a prop in material UI use 'sx' as an object
export function TodoItem({todo,fetchDetailsOfCurrentTodo}){
    console.log(todo);
    return <Card sx={{
        maxWidth : 350,
        display:"flex",
        flexDirection:"column",
        justifyContent:"space-between",
        marginBottom: 5,
         
    }}>
        <CardContent>
            <Typography variant="h5" color={'textSecondary'}>
                {todo?.todo} 
            </Typography>
        </CardContent>
        <CardActions>
            <Button 
            onClick={() => fetchDetailsOfCurrentTodo(todo?.id)}
            sx={{
                backgroundColor:"black",
                color:"white",
                fontSize:15,
                opacity:"1",
                "&:hover":{
                    backgroundColor:"#000000",
                    color:"#ffffff",
                    opacity:"0.75"
                },
               

            }}>
                Detail
            </Button>
        </CardActions>
    </Card>
}