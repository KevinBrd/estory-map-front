import React from "react";
import { Project } from "./types";
import { useGetProjectsQuery } from "./redux/project.api";
import ProjectRow from "./ProjectRow";

export interface Props {
    showAddProjectPopup: (show: boolean) => void;
    showUpdateProjectPopup: (show: Project) => void;
}

const ProjectList = (props: Props) => {
    const { data, error, isLoading } = useGetProjectsQuery();

    const { showAddProjectPopup, showUpdateProjectPopup } = props;

    return (
        <div className={"flex flex-col items-center justify-center"}>
            <div className="flex">
            <span className={"font-bold"}>Liste de projets disponibles</span>

            </div>
            <div className="overflow-hidden rounded-lg border border-gray-200 shadow-md m-5">
                <table className="w-full border-collapse bg-white text-left text-sm text-gray-500">
                    <thead className="bg-gray-50">
                        <tr>
                            <th
                                scope="col"
                                className="px-6 py-4 font-medium text-gray-900"
                            >
                                Nom du projet
                            </th>
                            <th
                                scope="col"
                                className="px-6 py-4 font-medium text-gray-900"
                            >
                                Description
                            </th>
                            <th
                                scope="col"
                                className="px-6 py-4 font-medium text-gray-900"
                            >
                                Nb. Acteurs
                            </th>
                            <th
                                scope="col"
                                className="px-6 py-4 font-medium text-gray-900"
                            >
                                Nb. Flux
                            </th>
                            <th
                                scope="col"
                                className="px-6 py-4 font-medium text-gray-900"
                            >
                                Nb. Règles
                            </th>
                            <th
                                scope="col"
                                className="px-6 py-4 font-medium text-gray-900"
                            >
                                Nb. Exigences
                            </th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100 border-t border-gray-100">
                        {data?.map((project) => (
                            <ProjectRow
                                key={project.id}
                                project={project}
                                showUpdatePopup={() => showUpdateProjectPopup(project)}
                            />
                        ))}
                    </tbody>
                </table>
                
            </div>
            <button onClick={() => showAddProjectPopup(true)}>
            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-circle-plus" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                <circle cx="12" cy="12" r="9" />
                <line x1="9" y1="12" x2="15" y2="12" />
                <line x1="12" y1="9" x2="12" y2="15" />
                </svg>
            </button>
        </div>
    );
};

export default ProjectList;
