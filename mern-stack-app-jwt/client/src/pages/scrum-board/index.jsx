import CommonCard from "@/components/common-card";
import { scrumBoardOptions } from "@/config";
import { TaskManagerContext } from "@/context";
import { getAllTaskApi, updateTaskApi } from "@/services";
import { Fragment, useContext, useEffect } from "react";

function ScrumBoardPage() {

    const { user, setTaskList, taskList } = useContext(TaskManagerContext);

    async function fetchListOfTasks() {
        const response = await getAllTaskApi(user?._id)

        if (response?.success) {
            setTaskList(response?.taskList);
        }

    }

    function onDragStart(event, getTaskId) {
        event.dataTransfer.setData("id", getTaskId)
        console.log(event.dataTransfer);
    }

    async function updateTaskUpStatus(getTask) {
        await updateTaskApi(getTask);
        await fetchListOfTasks();
    }
    function onDrop(event, getCurrentStatus) {
        const getDraggedTaskId = event.dataTransfer.getData('id');
        let findCurrentTask = taskList.find(item => item._id.toString() === getDraggedTaskId);

        findCurrentTask = {
            ...findCurrentTask,
            status: getCurrentStatus
        }
        updateTaskUpStatus(findCurrentTask)
    }

    function renderTaskByTaskStatus() {
        const taskStatuses = {
            todo: [],
            inProgress: [],
            blocked: [],
            review: [],
            done: [],

        }

        taskList.forEach((TaskItem) => {
            taskStatuses[TaskItem.status].push(
                <div
                    onDragStart={
                        TaskItem.status !== 'done' ? (event) => onDragStart(event, TaskItem._id) : null
                    }
                    draggable={TaskItem?.status !== 'done' ? true : false}
                    className="mb-3">
                    <CommonCard
                        title={TaskItem?.title}
                        description={scrumBoardOptions.find(boardOptions => boardOptions.id === TaskItem?.status).label}
                    />
                </div>
            )
        })
        return taskStatuses;
    }


    useEffect(() => {
        if (user !== null) fetchListOfTasks();

    }, [user])
    return <Fragment>
        <div className="grid grid-cols-5 gap-2 h-full">
            {
                scrumBoardOptions.map(item => <div className="border border-[#3333] rounded overflow-auto"
                    key={item?.id}
                    onDrop={(event) => onDrop(event, item.id)}
                    onDragOver={(event) => event.preventDefault()}
                >
                    <div className="px-1 py-3 text-center bg-black border-0 mb-3">
                        <h3 className="text-2xl font-extrabold text-white">
                            {item?.label}
                        </h3>
                    </div>
                    <div className="p-3">{renderTaskByTaskStatus()[item?.id]}</div>
                </div>
                )}
        </div>
    </Fragment>
}
export default ScrumBoardPage;