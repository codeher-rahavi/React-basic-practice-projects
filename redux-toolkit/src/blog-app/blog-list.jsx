import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { handleDeleteBlog, handleInputChange, setBlogListONInitialLoad, setCurrentEditedBlogId } from "../store/slices/blogSlice";
import { current } from "@reduxjs/toolkit";


function BlogList() {

    const dispatch = useDispatch();

    const { blog } = useSelector(state => state);
    const { blogList } = blog;
    console.log(blogList);

    useEffect(() => {
        dispatch(
            setBlogListONInitialLoad({
                blogList: JSON.parse(localStorage.getItem("blogList")) || []
            })
        )
    }, []);

    function OnDeleteBlog(getCurrentBlogId) {
        console.log(getCurrentBlogId);
        dispatch(handleDeleteBlog({
            currentBlogId: getCurrentBlogId,
        }))
    }

    function onEditBlock(getCurrentBlog){
        dispatch(setCurrentEditedBlogId({
            currentBlogId : getCurrentBlog?.id,

        }));
        dispatch(handleInputChange({
            title: getCurrentBlog?.title,
            description:getCurrentBlog?.description
        }))
    }

    return (
        <ul>
            {
                blogList?.length > 0 ? blogList.map(singleLogItem =>
                    <div className="border-4 border-red-500 px-5 py-5 " key={singleLogItem?.id}>
                        <h3>{singleLogItem?.title}</h3>
                        <h3>{singleLogItem?.description}</h3>
                        <button onClick={() => onEditBlock(singleLogItem)}>Edit Blog</button>
                        <button onClick={() => OnDeleteBlog(singleLogItem.id)}>Delete Blog</button>
                    </div>)
                    : <h1>No blog added! please add one</h1>
            }
        </ul>
    );
}
export default BlogList;