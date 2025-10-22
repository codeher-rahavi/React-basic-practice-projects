import { Link } from "react-router-dom";


function NotFoundPage(){
    return (
        <div>
            <h3>this page doesn't exist</h3>
            <Link to={'/recipe-list'}>Go to recipe list page</Link>
        </div>
    )
}
export default NotFoundPage;