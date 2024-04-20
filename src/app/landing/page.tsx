"use client"
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button } from "@nextui-org/react";
import { Card, CardHeader, CardBody, CardFooter, Divider, Image } from "@nextui-org/react";
import { User } from "@nextui-org/react";


import { Avatar } from "@nextui-org/react";


export default function LandingPage() {
    return (
        <div className="-m-4">
            <Navbar className="-top-4 py-2">
                <NavbarBrand className="space-x-3">
                    <img src="/logo_dark.svg" alt="Supplynk" className="w-12 h-12 fill-primary"/>
                    <p className="text-2xl font-medium">Supplynk</p>
                </NavbarBrand>
                <NavbarContent className="hidden sm:flex gap-4" justify="end">
                    <NavbarItem>
                        <Link color="foreground" href="#">
                            Partners
                        </Link>
                    </NavbarItem>
                    <NavbarItem isActive>
                        <Link href="#" aria-current="page">
                            About us
                        </Link>
                    </NavbarItem>
                    <NavbarItem>
                        <Link color="foreground" href="#">
                            contact
                        </Link>
                    </NavbarItem>
                </NavbarContent>
            </Navbar>

            
            {/* Hero */}
            <div className="relative flex items-center justify-end h-[90vh]">
                {/*Fondo de imagen con transparencia*/}
                {/* <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url("https://i.pinimg.com/564x/0a/64/cb/0a64cbe9c6f88de29b075e3a5573c127.jpg")', opacity: '0.8' }}></div> */}
                <img src="https://i.pinimg.com/564x/70/43/c0/7043c020397e10a50522a3056ddfe59a.jpg" alt="heroImage" className="absolute inset-0 w-full h-full object-cover"/>

                {/*Contenedor del formulario*/}
                <Card className="max-w-[400px] max-h-[400px] mr-[200px] p-8 !bg-opacity-80">
                    <CardHeader className="flex gap-3">
                        <Image
                        alt="/logo_dark.svg"
                        height={40}
                        radius="sm"
                        src="/logo_dark.svg"
                        width={40}
                        />
                        <div className="flex flex-col">
                        <p className="text-4xl">Supplynk</p>
                        <p className="text-small text-default-500"></p>
                        </div>
                    </CardHeader>
                    <Divider className="my-4"/>
                    <CardBody className="">
                        <p className="text-xl">Buscamos proporcionarte una manera diferente de manejar tu información.</p>
                    </CardBody>
                    <Divider className="my-4"/>
                    <CardFooter>
                        <p className="text-xl">Afirmar tu negocio, un dato a la vez.</p>
                    </CardFooter>
                </Card>
                {/* <div className="pl-24 relative z-10 p-8 w-2/4 bg-white shadow-lg flex flex-col item-start">
                    <h2 className="text-2xl font-semibold mb-4">¡Regístrate Ahora!</h2>
                    <form className="space-y-4">
                        <div>
                            <label htmlFor="name" className="block font-medium">Nombre</label>
                            <input type="text" id="name" name="name" className="max-w-xs p-2 w-full border-gray-300 rounded-lg shadow-md focus:ring-blue-500 focus:border-blue-500" />
                        </div>
                        <div>
                            <label htmlFor="email" className="block font-medium">Email</label>
                            <input type="email" id="email" name="email" className="max-w-xs p-2 w-full border-gray-300 rounded-lg shadow-md focus:ring-blue-500 focus:border-blue-500" />
                        </div>
                        <div>
                            <label htmlFor="password" className="block font-medium">Contraseña</label>
                            <input type="password" id="password" name="password" className="max-w-xs p-2 w-full border-gray-300 rounded-lg shadow-md focus:ring-blue-500 focus:border-blue-500" />
                        </div>
                        <button type="submit" className="max-w-xs w-full bg-primary text-white rounded-lg py-2 px-4">Registrarse</button>
                    </form>
                </div> */}
            </div>

            {/* Partners */}
            <section className="w-full h-40 flex justify-around items-center flex-wrap bg-primary">
                <img src="https://hackathon.fif-uaq.mx/assets/images/packengers.png" className="w-28 h-auto text-large" />
                <img src="https://hackathon.fif-uaq.mx/assets/images/imt.png" className="w-28 h-auto text-large" />
                <img src="https://hackathon.fif-uaq.mx/assets/images/solvento.png" className="w-28 h-auto text-large" />
                <img src="https://hackathon.fif-uaq.mx/assets/images/looper_Logo.png" className="w-28 h-auto text-large" />
                <img src="https://static.mlh.io/brand-assets/logo/official/mlh-logo-white.png" className="w-28 h-auto text-large" />
                <img src="https://hackathon.fif-uaq.mx/assets/images/logo_riege.png" className="w-28 h-auto text-large" />
            </section>
            
            <section className="m-5 p-2 flex justify-center text-center flex-col">{/* Features */}
                <h1 className="font-extrabold text-6xl m-5"> UTILIDADES </h1>

                <div className="w-full grid grid-cols-3 gap-8 mt-4">
                    <Card className="max-w-[400px] text-center">
                        <CardHeader className="flex gap-3">

                            <div className="flex flex-col">
                                <p className="text-large">Proyecciones</p>
                            </div>
                        </CardHeader>
                        <Divider />
                        <CardBody>
                            <p>Nuestra plataforma te ofrece herramientas avanzadas de análisis y predicción para proyectar y anticipar temporadas de alta demanda de productos, permitiéndote optimizar tus inventarios y recursos para satisfacer las necesidades del mercado en todo momento.</p>
                        </CardBody>
                        <Divider />
                    </Card>

                    <Card className="max-w-[400px]">
                        <CardHeader className="flex gap-3">

                            <div className="flex flex-col">
                                <p className="text-large">Agilización de la Cadena de Suministros</p>
                            </div>
                        </CardHeader>
                        <Divider />
                        <CardBody>
                            <p>implifica y agiliza el proceso de tu cadena de suministros mediante la generación automática de documentación y la implementación de flujos de trabajo eficientes. Con nuestra plataforma, podrás reducir los tiempos de espera y mejorar la coordinación entre todos los actores involucrados en la cadena logística..</p>
                        </CardBody>
                        <Divider />
                    </Card>

                    <Card className="max-w-[400px]">
                        <CardHeader className="flex gap-3">

                            <div className="flex flex-col">
                                <p className="text-large">Red de Contactos</p>
                            </div>
                        </CardHeader>
                        <Divider />
                        <CardBody>
                            <p>Construye una red de contactos sólida y dinámica entre proveedores, productores y vendedores, facilitando la comunicación y colaboración entre todas las partes involucradas en tu negocio. Con nuestra plataforma, podrás establecer relaciones sólidas que impulsen el crecimiento y la innovación en tu cadena de suministros.</p>
                        </CardBody>
                        <Divider />
                    </Card>
                </div>
            </section>

            <section className="m-5 p-2 flex justify-center text-center flex-col">{/* Testimonios */}

                <h1 className="font-extrabold text-6xl m-5"> TESTIMONIOS </h1>

                <div className="w-full grid grid-cols-4 gap-8 mt-4">
                    <Card className="max-w-[400px] text-center">
                        <CardHeader className="flex gap-3">

                            <div className="flex flex-col">
                                <User
                                    name="María González"
                                    description="Gerente de Compras en TechHub Solutions"
                                    avatarProps={{
                                        src: "https://i.pravatar.cc/150?u=a04258114e29026702d"
                                    }}
                                />
                            </div>
                        </CardHeader>
                        <Divider />
                        <CardBody>
                            <p>La plataforma de Supplynk ha transformado por completo nuestra forma de gestionar los suministros en TechHub Solutions. Gracias a su análisis predictivo, ahora podemos anticipar nuestras necesidades de componentes tecnológicos y garantizar un flujo constante de inventario, lo que ha aumentado nuestra eficiencia operativa y reducido los costos de producción</p>
                        </CardBody>
                        <Divider />
                    </Card>

                    <Card className="max-w-[400px]">
                        <CardHeader className="flex gap-3">

                            <div className="flex flex-col">
                                <User
                                    name="Carlos Sánchez"
                                    description="Director de Logística en BioFarma Innovations"
                                    avatarProps={{
                                        src: "https://i.pravatar.cc/150?u=a04258114e29026702d"
                                    }}
                                />
                            </div>
                        </CardHeader>
                        <Divider />
                        <CardBody>
                            <p>implifica y agiliza el proceso de tu cadena de suministros mediante la generación automática de documentación y la implementación de flujos de trabajo eficientes. Con nuestra plataforma, podrás reducir los tiempos de espera y mejorar la coordinación entre todos los actores involucrados en la cadena logística..</p>
                        </CardBody>
                        <Divider />
                    </Card>

                    <Card className="max-w-[400px]">
                        <CardHeader className="flex gap-3">

                            <div className="flex flex-col">
                                <User
                                    name="Laura Martínez"
                                    description="Coordinadora de Compras en EcoFoods Group"
                                    avatarProps={{
                                        src: "https://i.pravatar.cc/150?u=a04258114e29026702d"
                                    }}
                                />
                            </div>
                        </CardHeader>
                        <Divider />
                        <CardBody>
                            <p>Construye una red de contactos sólida y dinámica entre proveedores, productores y vendedores, facilitando la comunicación y colaboración entre todas las partes involucradas en tu negocio. Con nuestra plataforma, podrás establecer relaciones sólidas que impulsen el crecimiento y la innovación en tu cadena de suministros.</p>
                        </CardBody>
                        <Divider />
                    </Card>
                    <Card className="max-w-[400px]">
                        <CardHeader className="flex gap-3">

                            <div className="flex flex-col">
                                <User
                                    name="Jane Doe"
                                    description="Product Designer"
                                    avatarProps={{
                                        src: "https://i.pravatar.cc/150?u=a04258114e29026702d"
                                    }}
                                />
                            </div>
                        </CardHeader>
                        <Divider />
                        <CardBody>
                            <p>Construye una red de contactos sólida y dinámica entre proveedores, productores y vendedores, facilitando la comunicación y colaboración entre todas las partes involucradas en tu negocio. Con nuestra plataforma, podrás establecer relaciones sólidas que impulsen el crecimiento y la innovación en tu cadena de suministros.</p>
                        </CardBody>
                        <Divider />
                    </Card>
                </div>
            </section>

            {/*Datos de Contacto*/}


            <div className="relative bg-content2">
                {/*Fondo de imagen con transparencia*/}

                {/*Contenedor del formulario*/}
                <div className="relative z-10 max-w-md mx-auto p-8">
                    <h2 className="text-2xl font-semibold mb-4">¡Contactanos!</h2>
                    <form className="space-y-4">
                        <div>
                            <label htmlFor="name" className="p-1 block font-medium">Nombre</label>
                            <input type="text" id="name" name="name" className="p-2 w-full border-gray-300 rounded-lg shadow-md focus:ring-blue-500 focus:border-blue-500" />
                        </div>
                        <div>
                            <label htmlFor="email" className="p-1 block font-medium">Email</label>
                            <input type="email" id="email" name="email" className="p-2 w-full border-gray-300 rounded-lg shadow-md focus:ring-blue-500 focus:border-blue-500" />
                        </div>
                        <div>
                            <label htmlFor="telefono" className="p-1 block font-medium">Teléfono</label>
                            <input type="telefono" id="telefono" name="telefono" className="p-2 w-full border-gray-300 rounded-lg shadow-md focus:ring-blue-500 focus:border-blue-500" />
                        </div>
                        <div>
                            <label htmlFor="message" className="p-1 block font-medium">Mensaje</label>
                            <textarea id="message" name="message" rows={4} className="p-2 w-full border-gray-300 rounded-lg shadow-md focus:ring-blue-500 focus:border-blue-500"></textarea>
                        </div>
                        <button type="submit" className="w-full bg-secondary text-white rounded-lg py-2 px-4">Enviar</button>
                    </form>
                </div>
            </div>


            {/*Call to Action*/}
            <div className="relative flex justify-end">
                {/*Fondo de imagen con transparencia*/}
                <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url("https://www.amcargo.es/wp-content/uploads/2019/02/transitarios-valencia-1024x683.jpg")', opacity: '0.8' }}></div>

                {/*Contenedor del formulario*/}
                <div className="pl-24 relative z-10 p-8 w-2/4 bg-white shadow-lg flex flex-col item-start">
                    <h2 className="text-2xl font-semibold mb-4">¡Regístrate Ahora!</h2>
                    <form className="space-y-4">
                        <div>
                            <label htmlFor="name" className="p-1 block font-medium">Nombre</label>
                            <input type="text" id="name" name="name" className="max-w-xs p-2 w-full border-gray-300 rounded-lg shadow-md focus:ring-blue-500 focus:border-blue-500" />
                        </div>
                        <div>
                            <label htmlFor="email" className="p-1 block font-medium">Email</label>
                            <input type="email" id="email" name="email" className="max-w-xs p-2 w-full border-gray-300 rounded-lg shadow-md focus:ring-blue-500 focus:border-blue-500" />
                        </div>
                        <div>
                            <label htmlFor="password" className="p-1 block font-medium">Contraseña</label>
                            <input type="password" id="password" name="password" className="max-w-xs p-2 w-full border-gray-300 rounded-lg shadow-md focus:ring-blue-500 focus:border-blue-500" />
                        </div>
                        <button type="submit" className="max-w-xs w-full bg-secondary text-white rounded-lg py-2 px-4">Registrarse</button>
                    </form>
                </div>
            </div>

            {/*Footer*/}
            <footer className="bg-primary text-gray-300 py-10">
                <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-4">
                    {/*Aviso de Privacidad*/}
                    <div className="mb-4 md:mb-0">
                        <h3 className="text-lg font-semibold mb-2">Aviso de Privacidad</h3>
                        <p className="text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac efficitur urna.</p>
                    </div>

                    {/*Datos de Contacto*/}
                    <div className="mb-4 md:mb-0">
                        <h3 className="text-lg font-semibold mb-2">Contacto</h3>
                        <p className="text-sm">Dirección: 123 Calle Principal, Ciudad</p>
                        <p className="text-sm">Teléfono: (123) 456-7890</p>
                        <p className="text-sm">Email: info@example.com</p>
                    </div>

                    {/*Redes Sociales*/}
                    <div>
                        <h3 className="text-lg font-semibold mb-2">Redes Sociales</h3>
                        <ul className="flex space-x-4">
                            <li>
                                <a href="#" className="text-gray-300 hover:text-white">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                                    </svg>
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-300 hover:text-white">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 6a2 2 0 00-2-2h-4.586a1 1 0 01-.707-.293l-4.414-4.414A2 2 0 006.586 0H2a2 2 0 00-2 2v4.586a2 2 0 00.293 1.121l4.414 4.414a1 1 0 01.293.707v3.773a2 2 0 002 2h3.772a1 1 0 01.707.293l4.414 4.414a2 2 0 001.122.293H19a2 2 0 002-2V8a2 2 0 00-2-2z" />
                                    </svg>
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-300 hover:text-white">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-4.084 2.74a4.5 4.5 0 10-5.832 0M12 8v.01M3 3l18 18M21 3L3 21" />
                                    </svg>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </footer>
        </div>
    );
}