import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    formData: {
        title: '',
        description: ''
    },
    blogList: [],
    currentEditedBlogId: null
}

export const blogSlice = createSlice({
    name: 'blog',
    initialState,
    reducers: {
        handleInputChange: (state, action) => {
            // console.log(action);
            let cpyFormData = { ...state.formData }
            cpyFormData = {
                ...cpyFormData,
                ...action.payload
            }

            state.formData = cpyFormData
        },
        handleAddTodo: (state, action) => {
            console.log('handleAddTodo id called');
            
            console.log(action);
            state.blogList.push({
                id: nanoid(),
                ...state.formData,
            });

            state.formData = {
                title: "",
                description: ""
            };

            localStorage.setItem('blogList', JSON.stringify(state.blogList))

        },
        setBlogListONInitialLoad: (state, action) => {
            state.blogList = action.payload.blogList;
        },
        handleDeleteBlog: (state, action) => {
            console.log(action.payload);
            console.log(action);
            const { payload } = action;
            const { currentBlogId } = payload

            let cpyBlogsList = [...state.blogList];

            cpyBlogsList = cpyBlogsList.filter(singleBlogItem => singleBlogItem.id !== currentBlogId);
            console.log(cpyBlogsList);

            state.blogList = cpyBlogsList;
            localStorage.setItem("blogList", JSON.stringify(cpyBlogsList));
        },

        setCurrentEditedBlogId: (state, action) => {
            console.log(action.payload);

            const { payload } = action;
            const { currentBlogId } = payload
            state.currentEditedBlogId = currentBlogId;
        },

        handleEditBlog : (state,action) =>{
            console.log('handleEditBlog is called')

            let cpyBlogList = [...state.blogList];
            const findIndexOfCurrentBlogItem = cpyBlogList.findIndex(singleBlogItem => singleBlogItem?.id === state.currentEditedBlogId)
            console.log(findIndexOfCurrentBlogItem);
            
            cpyBlogList[findIndexOfCurrentBlogItem] = {
                ...cpyBlogList[findIndexOfCurrentBlogItem],
                ...state.formData

            }
            state.blogList = cpyBlogList;
            localStorage.setItem('blogList',JSON.stringify(cpyBlogList))
        }
    },
});


export const { handleInputChange, handleAddTodo, setBlogListONInitialLoad, handleDeleteBlog, setCurrentEditedBlogId,handleEditBlog } = blogSlice.actions;

export default blogSlice.reducer;