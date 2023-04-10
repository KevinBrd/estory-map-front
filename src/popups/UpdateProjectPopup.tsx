import { useState } from "react";
import { useGetActorsQuery, useUpdateProjectMutation } from "../redux/project.api";
import { Actor, Project } from "../types";

interface Props {
    showAddPopup: (show: boolean) => void,
    showAddActorPopup: (show: boolean) => void,
    project: Project
}

const UpdateProjectPopup = (props: Props) => {
    const { project } = props;

    const { data: globalActors, error, isLoading } = useGetActorsQuery()

    const [name, setName] = useState(project.name);
    const [description, setDescription] = useState(project.description);
    const [clientMail, setClientMail] = useState(project.mailClient);
    const [actors, setActors] = useState(project.actors);
    const [fluxs, setFlux] = useState(project.fluxs);
    const [regles, setRegles] = useState(project.regles);
    const [exigences, setExigences] = useState(project.exigences);

    const [updateProject, { isLoading: isAdding }] = useUpdateProjectMutation()
    const { showAddPopup, showAddActorPopup } = props;

    const submit = () => {
        updateProject({
            id: project.id,
            name: name,
            description: description,
            mailClient: clientMail,
            actors: actors,
            fluxs: fluxs,
            regles: regles,
            exigences: exigences
        })
    }

    return (
        <div className="py-1 absolute z-100 bg-gray-100 w-screen">
            <div className="w-full lg:w-8/12 px-4 mx-auto mt-6">
                <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0">
                    <div className="rounded-t bg-white mb-0 px-6 py-6">
                        <div className="text-center flex justify-between">
                            <h6 className="text-blueGray-700 text-xl font-bold">
                                Edit project
                            </h6>
                        </div>
                    </div>
                    <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                        <div>
                            <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
                                Project Information
                            </h6>
                            <div className="flex flex-wrap">
                                <div className="w-full lg:w-6/12 px-4">
                                    <div className="relative w-full mb-3">
                                        <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor="grid-password">
                                            Name
                                        </label>
                                        <input type="text" onChange={(e) => setName(e.target.value)} className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" value={name} />
                                    </div>
                                </div>
                                <div className="w-full lg:w-6/12 px-4">
                                    <div className="relative w-full mb-3">
                                        <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor="grid-password">
                                            Client email address
                                        </label>
                                        <input type="text" onChange={(e) => setClientMail(e.target.value)} className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" value={clientMail} />
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
                            <hr className="py-2" />
                            <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
                                Acteurs
                            </h6>
                            <div className="flex flex-wrap w-full">
                                <div className="w-full lg:w-12/12 px-4">
                                    <div className="flex my-2">
                                        <button onClick={() => showAddActorPopup(true)} className="px-4 py-1 leading-5 text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">Ajouter un acteur</button>
                                    </div>                                        
                                    <fieldset className="relative w-full mb-3 bg-white py-2 px-2 w-full">
                                        {globalActors?.map((actor: Actor) => (
                                            <div className="flex space-x-2 w-full">
                                                <input type="checkbox" value={"Michael jordan"} onChange={(e) => setDescription(e.target.value)} className="" />
                                                <label className="flex justify-between w-full">
                                                    <span>{actor.nom_role}</span>
                                                    <div className="flex space-x-2">
                                                        <span>Edit</span>
                                                        <span>Supprimer</span>
                                                    </div>
                                                </label>
                                            </div>
                                        ))}
                                    </fieldset>
                                </div>
                            </div>
                            <hr className="py-2" />
                            <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
                                Flux
                            </h6>
                            <div className="flex flex-wrap w-full">
                                <div className="w-full lg:w-12/12 px-4">
                                    <div className="flex my-2">
                                        <button className="px-4 py-1 leading-5 text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">Ajouter un flux</button>
                                    </div>                                        <fieldset className="relative w-full mb-3 bg-white py-2 px-2 w-full">
                                        <div className="flex space-x-2 w-full">
                                            <input type="checkbox" value={"Michael jordan"} onChange={(e) => setDescription(e.target.value)} className="" />
                                            <label className="flex justify-between w-full">
                                                <span>Michael Jordan</span>
                                                <div className="flex space-x-2">
                                                    <span>Edit</span>
                                                    <span>Supprimer</span>
                                                </div>
                                            </label>
                                        </div>
                                    </fieldset>
                                </div>
                            </div>
                            <hr className="py-2" />
                            <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
                                Regles
                            </h6>
                            <div className="flex flex-wrap w-full">
                                <div className="w-full lg:w-12/12 px-4">
                                    <div className="flex my-2">
                                        <button className="px-4 py-1 leading-5 text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">Ajouter une règle</button>
                                    </div>                                        <fieldset className="relative w-full mb-3 bg-white py-2 px-2 w-full">
                                        <div className="flex space-x-2 w-full">
                                            <input type="checkbox" value={"Michael jordan"} onChange={(e) => setDescription(e.target.value)} className="" />
                                            <label className="flex justify-between w-full">
                                                <span>Michael Jordan</span>
                                                <div className="flex space-x-2">
                                                    <span>Edit</span>
                                                    <span>Supprimer</span>
                                                </div>
                                            </label>
                                        </div>
                                    </fieldset>
                                </div>
                            </div>
                            <hr className="py-2" />
                            <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
                                Exigences
                            </h6>
                            <div className="flex flex-wrap w-full">
                                <div className="w-full lg:w-12/12 px-4">
                                    <div className="flex my-2">
                                        <button onClick={() => submit()} className="px-4 py-1 leading-5 text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">Ajouter une exigence</button>
                                    </div>                                        <fieldset className="relative w-full mb-3 bg-white py-2 px-2 w-full">
                                        <div className="flex space-x-2 w-full">
                                            <input type="checkbox" value={"Michael jordan"} onChange={(e) => setDescription(e.target.value)} className="" />
                                            <label className="flex justify-between w-full">
                                                <span>Michael Jordan</span>
                                                <div className="flex space-x-2">
                                                    <span>Edit</span>
                                                    <span>Supprimer</span>
                                                </div>
                                            </label>
                                        </div>
                                    </fieldset>
                                </div>
                            </div>
                            <div className="flex w-full justify-between">
                                <div className="flex mt-6">
                                    <button onClick={() => showAddPopup(false)} className="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">Quit</button>
                                </div>
                                <div className="flex mt-6">
                                    <button onClick={() => submit()} className="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">Save</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UpdateProjectPopup;