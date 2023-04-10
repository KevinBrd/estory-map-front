import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Actor, CreateActorDto, CreateProjectDto, DeleteProjectDto, Project, UpdateProjectDto } from "../types";

export const projectApi = createApi({
    reducerPath: "projectApi",
    baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_API_URL }),
    endpoints: (builder) => ({
        getProjects: builder.query<Project[], void>({
            query: () => `projects`,
        }),
        deleteProject: builder.mutation<void, DeleteProjectDto>({
            query: (dto) => ({
                url: `projects/${dto.id}`,
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
        updateProject: builder.mutation<void, UpdateProjectDto>({
            query: (project) => ({
                url: `projects/${project.id}`,
                method: "PUT",
                body: project,
            }),
        }),
        getActors: builder.query<Actor[], void>({
            query: () => `actors`,
        }),
        addActor: builder.mutation<void, CreateActorDto>({
            query: (project) => ({
                url: `actors`,
                method: "POST",
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

    useGetActorsQuery,
    useAddActorMutation
} = projectApi;
