import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { CreateProjectDto, Project } from "../types";

export const projectApi = createApi({
    reducerPath: "projectApi",
    baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_API_URL }),
    endpoints: (builder) => ({
        getProjects: builder.query<Project[], void>({
            query: () => `projects`,
        }),
        deleteProject: builder.mutation<void, string>({
            query: (id) => ({
                url: `projects/${id}`,
                method: "DELETE",
            }),
        }),
        addProject: builder.mutation<void, CreateProjectDto>({
            query: (project) => ({
                url: `projects`,
                method: "POST",
                body: project,
            }),
        }),
        updateProject: builder.mutation<void, Project>({
            query: (project) => ({
                url: `projects/${project.id}`,
                method: "PUT",
                body: project,
            }),
        }),
    }),
});

export const {
    useAddProjectMutation,
    useDeleteProjectMutation,
    useUpdateProjectMutation,
    useGetProjectsQuery,
} = projectApi;
