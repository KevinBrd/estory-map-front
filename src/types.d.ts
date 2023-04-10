export type CreateProjectDto = {
    userId: number;
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

export type Exigence = {
    id: number;
    description: string;
    type: string;
};

export type Flux = {
    id: number;
    nom_flux: string;
    acteur_emmeteur?: Actor;
    acteur_recepteur?: Actor;
};

export type RegleDeGestion = {
    id: number;
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
