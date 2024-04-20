interface Item {
    icon: string;
    route: string;
    label: string;
}

interface Section {
    title: string;
    items: Item[];
}

type Sidebar = Section[];

export const sidebar: Sidebar = [
    //Home (Dashboard)
    {
        title: 'Home',
        items: [
            {
                icon: 'home',
                route: '/home',
                label: 'Home',
            },
            {
                icon: 'engineering',
                route: '/data',
                label: 'Datos',
            },
        ],
    },
    //Graficas y analisis
    {
        title: 'Analisis',
        items: [
            {
                icon: 'trending_up',
                route: '/analysis/ABC',
                label: 'ABC',
            },
            {
                icon: 'monitoring',
                route: '/analysis/CP',
                label: 'CP y CPK',
            },
            {
                icon: 'area_chart',
                route: '/analysis/CAMEP',
                label: 'Camep',
            },
        ],
    },
    // Solicitudes: documentos y proveedores
    {
        title: 'Documentos',
        items: [
            {
                icon: 'assignment',
                route: '/documents',
                label: 'Documentos',
            },
        ],
    },
    //Contacto entre proveedores
    {
        title: 'Proveedores',
        items: [
            {
                icon: 'engineering',
                route: '/suppliers',
                label: 'Proveedores',
            }
        ],
    }

];