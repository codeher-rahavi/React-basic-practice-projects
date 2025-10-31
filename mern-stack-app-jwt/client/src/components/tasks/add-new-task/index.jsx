import CommonDialog from "@/components/common-dialog";
import { addNewTaskFormControls } from "@/config";



function AddNewtasks({showDialog,setShowDialog,handleSubmit,taskFormData,currentEditedId,setCurrentEditedId}){


    return (
        <CommonDialog 
        formControls={addNewTaskFormControls}
        showDialog ={showDialog}
        onOpenChange= {()=>{
            setShowDialog(false);
            currentEditedId ? taskFormData.reset() : null;
            setCurrentEditedId(null);

        }}
        title={currentEditedId  ? 'Edit Task' : 'post New Task'}
        btnText = {'Add'} 
        handleSubmit ={handleSubmit}
        formData = {taskFormData}
        />
    )
}
export default AddNewtasks;