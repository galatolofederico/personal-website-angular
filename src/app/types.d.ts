type MeJson = {
    anagraphic: any,
    digitalidentity: any,
    publications: Array<Publication>,
    projects: Array<Project>,
    lectures: any
}

type Profile = {
    platform: string,
    link: string,
    icon: string,
    description: string
}

type Publication = {
    title: string,
    authors: string,
    type: string,
    container: string,
    isbn: string,
    doi: string,
    abstract: string,
    date: any,
    name: string,
}


type Project = {
    title: string,
    description: string,
    link: string,
    date: any
}

type Lecture = {
    title: string,
    position: string,
    container: string,
    date: any,
    resources: Array<any>,
}