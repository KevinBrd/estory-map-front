import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Actor, CreateActorDto, CreateExigenceDto, CreateFluxDto, CreateProjectDto, CreateRegleDto, DeleteProjectDto, Exigence, Flux, Project, Regle, UpdateProjectDto } from "../types";

export const projectApi = createApi({
    reducerPath: "projectApi",
    baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_API_URL }),
    tagTypes: ['Project', 'Actor', 'Flux', 'Regle', 'Exigence'],
    endpoints: (builder) => ({
        getProjects: builder.query<Project[], void>({
            query: () => `projects`,
            providesTags: ['Project']
        }),
        deleteProject: builder.mutation<void, DeleteProjectDto>({
            query: (dto) => ({
                url: `projects/${dto.id}`,
                method: "DELETE",
            }),
            invalidatesTags: ['Project']
        }),
        addProject: builder.mutation<void, CreateProjectDto>({
            query: (project) => ({
                url: `projects`,
                method: "POST",
                body: project,
            }),
            invalidatesTags: ['Project']
        }),
        updateProject: builder.mutation<void, UpdateProjectDto>({
            query: (project) => ({
                url: `projects/${project.id}`,
                method: "PUT",
                body: project,
            }),
            invalidatesTags: ['Project']
        }),

        getActors: builder.query<Actor[], void>({
            query: () => `actors`,
            providesTags: ['Actor']
        }),
        addActor: builder.mutation<void, CreateActorDto>({
            query: (project) => ({
                url: `actors`,
                method: "POST",
                body: project,
            }),
            invalidatesTags: ['Actor']
        }),

        getFlux: builder.query<Flux[], void>({
            query: () => `flux`,
            providesTags: ['Flux']
        }),
        addFlux: builder.mutation<void, CreateFluxDto>({
            query: (project) => ({
                url: `flux`,
                method: "POST",
                body: project,
            }),
            invalidatesTags: ['Flux']
        }),

        getRegles: builder.query<Regle[], void>({
            query: () => `regles`,
            providesTags: ['Regle']
        }),
        addRegle: builder.mutation<void, CreateRegleDto>({
            query: (regle) => ({
                url: `regles`,
                method: "POST",
                body: regle,
            }),
            invalidatesTags: ['Regle']
        }),

        getExigences: builder.query<Exigence[], void>({
            query: () => `exigences`,
            providesTags: ['Exigence']
        }),
        addExigence: builder.mutation<void, CreateExigenceDto>({
            query: (exigence) => ({
                url: `exigences`,
                method: "POST",
                body: exigence,
            }),
            invalidatesTags: ['Exigence']
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
