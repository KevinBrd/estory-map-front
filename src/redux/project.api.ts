import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Actor, CreateActorDto, CreateExigenceDto, CreateFluxDto, CreateProjectDto, CreateRegleDto, DeleteProjectDto, Exigence, Flux, Project, Regle, UpdateProjectDto } from "../types";

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

        getFlux: builder.query<Flux[], void>({
            query: () => `flux`,
        }),
        addFlux: builder.mutation<void, CreateFluxDto>({
            query: (project) => ({
                url: `flux`,
                method: "POST",
                body: project,
            }),
        }),

        getRegles: builder.query<Regle[], void>({
            query: () => `regles`,
        }),
        addRegle: builder.mutation<void, CreateRegleDto>({
            query: (regle) => ({
                url: `regles`,
                method: "POST",
                body: regle,
            }),
        }),

        getExigences: builder.query<Exigence[], void>({
            query: () => `exigences`,
        }),
        addExigence: builder.mutation<void, CreateExigenceDto>({
            query: (exigence) => ({
                url: `exigences`,
                method: "POST",
                body: exigence,
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
    useAddActorMutation,

    useGetFluxQuery,
    useAddFluxMutation,

    useGetReglesQuery,
    useAddRegleMutation,

    useGetExigencesQuery,
    useAddExigenceMutation
} = projectApi;
