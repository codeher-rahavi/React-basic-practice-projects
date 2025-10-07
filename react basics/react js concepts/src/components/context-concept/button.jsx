import { useContext, useState } from "react";
import { GlobalContext } from "../../context";


function ContextButtonComponent(){

    const {theme, handleChangeThemeOnButtonClick} = useContext(GlobalContext);

    return <button onClick={handleChangeThemeOnButtonClick}>Change Theme</button>
}

export default ContextButtonComponent;