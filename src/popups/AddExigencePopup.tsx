import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAddActorMutation, useAddExigenceMutation, useAddProjectMutation } from "../redux/project.api";

interface Props {
    showAddPopup: (show: boolean) => void
}

const AddExigencePopup = (props: Props) => {
    const [description, setDescription] = useState("");
    const [type, setType] = useState(true);

    const [createExigence, {isLoading: isAdding}] = useAddExigenceMutation();

    const submit = () => {
        createExigence({
            description,
            type: type ? "Fonctionelle" : "Non-Fonctionelle"
        })
        props.showAddPopup(false)
    }
    
    return (
        <div className="py-1 absolute z-100 bg-gray-100 w-screen h-screen">
            <div className="w-full lg:w-8/12 px-4 mx-auto mt-6">
                <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0">
                    <div className="rounded-t bg-white mb-0 px-6 py-6">
                        <div className="text-center flex justify-between">
                            <h6 className="text-blueGray-700 text-xl font-bold">
                                Ajouter une exigence
                            </h6>
                        </div>
                    </div>
                    <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                        <form>
                            <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
                                Exigence
                            </h6>
                            <div className="flex flex-wrap">
                                <div className="w-full lg:w-12/12 px-4">
                                    <div className="flex w-full mb-3">
                                        <label className="block uppercase text-blueGray-600 text-xs font-bold" htmlFor="grid-password">
                                            Fonctionnelle
                                        </label>
                                        <input type="checkbox" onChange={(e) => setType(!type)} className="ml-3" checked={type} />
                                    </div>
                                </div>
                                <div className="flex flex-wrap w-full">
                                    <div className="w-full lg:w-12/12 px-4">
                                        <div className="relative w-full mb-3">
                                            <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor="grid-password">
                                                Description
                                            </label>
                                            <textarea onChange={(e) => setDescription(e.target.value)} className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" rows={4}>{description}</textarea>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex w-full justify-between">
                                <div className="flex mt-6">
                                    <button onClick={() => props.showAddPopup(false)} className="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">Quit</button>
                                </div>
                                <div className="flex mt-6">
                                    <button onClick={submit} className="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">Save</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddExigencePopup;