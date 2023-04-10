export type CreateProjectDto = {
    userId: string;
    name: string;
    description: string;
    mail_client?: string;
};

export type DeleteProjectDto = {
    id: number
};

export type UpdateProjectDto = Omit<Project, "userId">

export type Actor = {
    id: number;
    nom_role: string;
    attributs?: { [key: string]: any }[];
};

export type CreateActorDto = {
    nom_role: string;
    attributs?: { [key: string]: any }[];
};

export type CreateFluxDto = {
    nom_flux: string;
    acteur_emetteur?: number;
    acteur_recepteur?: number;
};

export type Exigence = {
    id: number;
    description: string;
    type: string;
};

export type CreateExigenceDto = {
    description: string;
    type: string;
};

export type Flux = {
    id: number;
    nom_flux: string;
    acteur_emetteur?: Actor;
    acteur_recepteur?: Actor;
};

export type Regle = {
    id: number;
    description: string;
};

export type CreateRegleDto = {
    description: string;
};

export type UpdateProjectDto = {
    userId: number;
    name?: string;
    description?: string;
    mail_client?: string;
    actors?: Actor[];
    fluxs?: Flux[];
    regles?: RegleDeGestion[];
    exigences?: Exigence[];
};

export type Project = {
    id: number;
    userId: number;
    name: string;
    description: string;
    mailClient: string;
    actors?: Actor[];
    fluxs?: Flux[];
    regles?: RegleDeGestion[];
    exigences?: Exigence[];
};
