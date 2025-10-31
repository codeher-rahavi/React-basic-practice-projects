import { Form, FormControl } from "../ui/form"
import { FormField, FormItem, FormLabel } from "../ui/form";
import { Input } from "../ui/input";
import CommonButton from "../common-button";
import { Select, SelectContent,SelectItem, SelectTrigger, SelectValue } from "../ui/select";


function CommonForm({ formControls = [], handleSubmit, form, btnText }) {
    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(handleSubmit)}>
                {
                    formControls?.length > 0 ?

                        formControls.map(controlItems => (
                            <FormField
                                control={form.control}
                                name={controlItems.id}
                                render={({ field }) => {
                                    return <FormItem >
                                        <FormLabel className="mt-5">{controlItems.label}</FormLabel>
                                        {
                                            controlItems.componentType === 'input' ?
                                                <FormControl>
                                                    <Input
                                                        placeholder={controlItems.placeholder}
                                                        type={controlItems.type}
                                                        {...field}
                                                        value={field.value}
                                                        className="w-full rounded h-[50px] border-0 text-black bg-gray-200 text-[16px] outline-0 drop-shadow-sm transition-all duration-300 ease-in-out focus:bg-gray-100 focus:drop-shadow-lg focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0 mb-4" />
                                                </FormControl> :

                                                controlItems.componentType === 'select' ?
                                                    <Select value={field.value} onValueChange={field.onChange}>
                                                        <FormControl>
                                                            <SelectTrigger className="w-full rounded h-[50px] border-0 text-black bg-gray-200 text-[16px] outline-0 drop-shadow-sm transition-all duration-300 ease-in-out focus:bg-gray-100 focus:drop-shadow-lg focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0 mb-4"  >
                                                                {
                                                                 <SelectValue placeholder={controlItems.placeholder}/> 
                                                                }
                                                            </SelectTrigger>
                                                        </FormControl>
                                                        <SelectContent className="bg-white">
                                                            {
                                                                controlItems.options.map(optionsItem => <SelectItem value={optionsItem.id} className="text-black cursor-pointer focus:text-black">{optionsItem.label}</SelectItem>)
                                                            }
                                                        </SelectContent>
                                                    </Select> :
                                                    null}
                                    </FormItem>
                                }}
                            />
                        ))
                        : null
                }
                <div className="flex justify-center mt-4 items-center">
                    <CommonButton type={'Submit'} buttonText={btnText} />
                </div>
            </form>
        </Form>
    );
}

export default CommonForm;