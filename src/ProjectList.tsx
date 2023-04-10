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
            <span className={"font-bold"}>Liste de projets disponibles</span>
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
                                actors
                            </th>
                            <th
                                scope="col"
                                className="px-6 py-4 font-medium text-gray-900"
                            >
                                fluxs
                            </th>
                            <th
                                scope="col"
                                className="px-6 py-4 font-medium text-gray-900"
                            >
                                regles
                            </th>
                            <th
                                scope="col"
                                className="px-6 py-4 font-medium text-gray-900"
                            >
                                exigences
                            </th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100 border-t border-gray-100">
                        {data?.map((project) => (
                            <ProjectRow
                                key={project.id}
                                project={project}
                                showUpdatePopup={() => {}}
                            />
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ProjectList;
