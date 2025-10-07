import { Button, Dialog, DialogActions, DialogTitle } from "@mui/material";
import { Fragment } from "react";


export function TodoDetails({todoDetails,openDialoge, setOpenDialoge,setTodoDetails}){
    return <Fragment>
        <Dialog open={openDialoge} onClose={()=> setOpenDialoge(false)}>
            <DialogTitle>{todoDetails?.todo}</DialogTitle>
            <DialogActions>
                <Button sx={{backgroundColor:"red",
                    color:"white",
                    border:"2px solid black"
                }}onClick={()=>{
                    setTodoDetails(null);
                    setOpenDialoge(false);
                }}>
                    Close
                </Button>
            </DialogActions>
        </Dialog>
    </Fragment>
}