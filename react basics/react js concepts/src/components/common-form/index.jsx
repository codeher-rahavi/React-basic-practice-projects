import CommonInput from "../common-input";

const formTypes = {
    INPUT: 'input',
    SELECT: 'select',
    TEXTAREA: 'textarea',
}


function CommonForm({ formControls = [],
    formData,
    onHandleSubmit,
    setFormData, 
    buttonText }) {

    function renderFormElement(getCurentElement) {
        let content = null;

        switch (getCurentElement?.componentType) {
            case formTypes.INPUT:
                content = (
                    <CommonInput
                        label={getCurentElement.label}
                        name={getCurentElement.name}
                        placeholder={getCurentElement.placeholder}
                        type={getCurentElement.type}
                        value={formData[getCurentElement.name]}
                        onChange={(event) => setFormData({
                            ...formData,
                            [event.target.name]: event.target.value
                        }
                        )} />)

                break;

            default:
                content = (
                    <CommonInput
                        label={getCurentElement.label}
                        name={getCurentElement.name}
                        placeholder={getCurentElement.placeholder}
                        value={formData[getCurentElement.name]}
                        type={getCurentElement.type}
                        onChange={(event) => setFormData({
                            ...formData,
                            [event.target.name]: event.target.name
                        }
                        )} />)
                break;
        }

        return content;
    }

    return <form onSubmit={onHandleSubmit}>
        {
            formControls?.length ?
                formControls.map(singleFormElementItem => renderFormElement(singleFormElementItem))
                : null
        }

        <div style={{ marginTop: '12px' }}>
            <button type="submit">{buttonText || "Submit"}</button>
        </div>
    </form>
}
export default CommonForm;