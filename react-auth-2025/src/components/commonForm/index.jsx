import CommonInput from "../commonInput";

const formElementTypes = {
    INPUT: 'input',
    SELECT: 'select',
    TEXTAREA: 'textarea,'
}


function CommonForm({ formControls = [], buttonText, formData , setFormData ,onSubmit}) {

    function renderFormElements(getCurrentFormControls, getFormData) {
        let element = null;

        switch (getCurrentFormControls.componentType) {
            case formElementTypes.INPUT:
                element = (
                    <CommonInput type={getCurrentFormControls.type}
                        placeholder={getCurrentFormControls.placeholder}
                        value={getFormData[getCurrentFormControls.name]}
                        name={getCurrentFormControls.name}
                        onChange={(event) => 
                            setFormData({
                                ...formData,
                                [getCurrentFormControls.name] : event.target.value,
                            })
                        } />)
                break;

            default:
                element = (
                    <CommonInput type={getCurrentFormControls.type}
                        placeholder={getCurrentFormControls.placeholder}
                        value={getFormData[getCurrentFormControls.name]}
                        name={getCurrentFormControls.name}
                        onChange={(event) => 
                            setFormData({
                                ...formData,
                                [getCurrentFormControls.name] : event.target.value,
                            })
                        } />)
                break;
        }

        return element;
    }

    return (
        <form onSubmit={onSubmit}>
            {
                formControls.map(singleFormControl => renderFormElements(singleFormControl, formData))
            }
            
            <button type="Submit">{buttonText || 'Submit'}</button>
        </form>
    )
}
export default CommonForm;