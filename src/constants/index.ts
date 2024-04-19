export const sidebarLinks = [
    {
        icon: 'home',
        route: '/',
        label: 'Home',
    },

    {
        icon: 'engineering',
        route: '/Proveedores',
        label: 'Proveedores',
    },
    {
        icon: 'assignment',
        route: '/previous',
        label: 'Documentos',
    },
    {
        icon: 'table',
        route: '/recordings',
        label: 'Datos',
    },
    {
        icon: 'monitoring',
        route: '/personal-room',
        label: 'Analisis',
    },
];

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
                route: '/',
                label: 'Home',
            },
            {
                icon: 'engineering',
                route: '/Proveedores',
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
                route: '/Proveedores',
                label: 'ABC',
            },
            {
                icon: 'assignment',
                route: '/previous',
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
                route: '/Proveedores',
                label: 'Proveedores',
            },
            {
                icon: 'assignment',
                route: '/previous',
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
                route: '/Proveedores',
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