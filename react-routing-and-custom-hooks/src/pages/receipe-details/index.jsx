import { useParams } from "react-router-dom";


function RecipeDetailsPage(){
    const params = useParams();
    const { id } = params;
    return (
        <div>
            <h1>Recipe details of recipe items {id} </h1>
        </div>
    );
}
export default RecipeDetailsPage;