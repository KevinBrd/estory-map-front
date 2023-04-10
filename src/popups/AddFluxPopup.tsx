import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAddActorMutation, useAddFluxMutation, useAddProjectMutation, useGetActorsQuery } from "../redux/project.api";
import { Actor } from "../types";

interface Props {
    showAddPopup: (show: boolean) => void
}

const AddFluxPopup = (props: Props) => {
    const [nom, setNom] = useState("");
    const [emetteur, setEmetteur] = useState<Actor | undefined>(undefined);
    const [recepteur, setRecepteur] = useState<Actor | undefined>(undefined);

    const [createFlux, { isLoading: isAdding }] = useAddFluxMutation();
    const { data: globalActors, error, isLoading } = useGetActorsQuery()

    const submit = () => {
        createFlux({
            nom_flux: nom,
            acteur_emetteur: emetteur?.id,
            acteur_recepteur: recepteur?.id
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
                                Ajouter un flux
                            </h6>
                        </div>
                    </div>
                    <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                        <div>
                            <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
                                Flux
                            </h6>
                            <div className="flex flex-wrap">
                                <div className="w-full lg:w-12/12 px-4">
                                    <div className="relative w-full mb-3">
                                        <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor="grid-password">
                                            Nom
                                        </label>
                                        <input type="text" onChange={(e) => setNom(e.target.value)} className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" value={nom} />
                                    </div>
                                </div>
                                <div className="px-4">
                                    <div className="relative inline-block ">
                                        <button className="relative z-10 flex items-center p-2 text-sm text-gray-600 bg-white border border-transparent rounded-md focus:border-blue-500 focus:ring-opacity-40 dark:focus:ring-opacity-40 focus:ring-blue-300 dark:focus:ring-blue-400 focus:ring dark:text-white dark:bg-gray-800 focus:outline-none">
                                            <span className="mx-1">Emetteur: {emetteur?.nom_role}</span>
                                            <svg className="w-5 h-5 mx-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M12 15.713L18.01 9.70299L16.597 8.28799L12 12.888L7.40399 8.28799L5.98999 9.70199L12 15.713Z" fill="currentColor"></path>
                                            </svg>
                                        </button>

                                        <div className="absolute right-0 z-20 w-56 py-2 mt-2 overflow-hidden origin-top-right bg-white rounded-md shadow-xl"
                                        >
                                            {
                                                globalActors?.map(actor => (
                                                    <button onClick={() => setEmetteur(actor)} className="w-full px-4 py-3 text-sm text-gray-600 capitalize transition-colors duration-300 transform hover:bg-gray-100">
                                                        {actor.nom_role}
                                                    </button>
                                                ))
                                            }
                                        </div>
                                    </div>
                                </div>
                                <div className="px-4">
                                    <div x-data="{ isOpen: true }" className="relative inline-block ">
                                        <button className="relative z-10 flex items-center p-2 text-sm text-gray-600 bg-white border border-transparent rounded-md focus:border-blue-500 focus:ring-opacity-40 dark:focus:ring-opacity-40 focus:ring-blue-300 dark:focus:ring-blue-400 focus:ring dark:text-white dark:bg-gray-800 focus:outline-none">
                                            <span className="mx-1">Recepteur: {recepteur?.nom_role}</span>
                                            <svg className="w-5 h-5 mx-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M12 15.713L18.01 9.70299L16.597 8.28799L12 12.888L7.40399 8.28799L5.98999 9.70199L12 15.713Z" fill="currentColor"></path>
                                            </svg>
                                        </button>

                                        <div className="absolute right-0 z-20 w-56 py-2 mt-2 overflow-hidden origin-top-right bg-white rounded-md shadow-xl"
                                        >
                                            {
                                                globalActors?.map(actor => (
                                                    <button onClick={() => setRecepteur(actor)} className="w-full px-4 py-3 text-sm text-gray-600 capitalize transition-colors duration-300 transform hover:bg-gray-100">
                                                        {actor.nom_role}
                                                    </button>
                                                ))
                                            }
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
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddFluxPopup;