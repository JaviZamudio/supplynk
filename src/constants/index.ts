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
                route: '/supliers',
                label: 'Datos',
            },
        ],
    },
    //Graficas y analisis
    {
        title: 'Analisis',
        items: [
            {
                icon: 'engineering',
                route: '/analysis/ABC',
                label: 'ABC',
            },
            {
                icon: 'assignment',
                route: '/analysis/CPK',
                label: 'CP y CPK',
            },
        ],
    },
    // Solicitudes: documentos y proveedores
    {
        title: 'Documentos',
        items: [
            {
                icon: 'engineering',
                route: '/suppliers',
                label: 'Proveedores',
            },
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
            },
            {
                icon: 'assignment',
                route: '/previous',
                label: 'Documentos',
            },
        ],
    }

];