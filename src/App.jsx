

import './App.css'

function App() {

  return (
    <div className="bg-gray-100">
    <div className="container mx-auto p-4">
        <div className="bg-white shadow-lg flex responsive-container">
          

            <div className="responsive-column w-full md:w-1/3 bg-blue-900 text-white p-6">
                <div className="mb-6">
                    <img alt="" className="rounded-full  h-70 mx-auto mb-4" src="\perfil.jpg" width="200" height="200"/>
                    <h1 className="text-2xl font-bold text-center">Juan Ramón Salas Yañez</h1>
                    <p className="text-center text-sm">Ingeniero Industrial & Desarrollador Full Stack</p>
                </div>
                <div className="mb-6 contact">
                    <h2 className="text-xl font-semibold mb-2">CONTACTO</h2>
                    <ul className="space-y-2">
                        <li className="flex items-center"><i className="fas fa-phone-alt mr-2"></i><span>(52) 4443-31-54-14</span></li>
                        <li className="flex items-center"><i className="fas fa-envelope mr-2"></i><span>ramon.salaspi1.1@gmail.com</span></li>
                        <li className="flex items-center"><i className="fas fa-globe mr-2"></i><span>www.jrsy-portafolio-gen35.netlify.app</span></li>
                    </ul>
                </div>
                <div className="mb-6 skills" >
                    <h2 className="text-xl font-semibold mb-2">APTITUDES</h2>
                    <ul className="list-disc list-inside">
                        <li>Liderazgo y Supervisión</li>
                        <li>Analisis de Datos</li>
                        <li>Gestión de Proyectos</li>
                        <li>Resolución de problemas</li>
                        <li>Adaptacion y responsabilidad</li>
                        <li>Trabajo en equipo</li>
                        <li>Mejora Continua</li>
                    </ul>
                </div>
                <div className='education'>
                    <h2 className="text-xl font-semibold mb-2 ">EDUCACIÓN</h2>
                    <ul className="space-y-2">
                        <li>
                            <p className="font-semibold">Desarrollador Full Stack</p>
                            <p className="text-sm">Academlo</p>
                            <p className="text-sm">2023-2024</p>
                        </li>
                        <br />
                        <li>
                            <p className="font-semibold">Ingenieria Industrial de Sistemas Productivos</p>
                            <p className="text-sm">Universidad del Valle de México</p>
                            <p className="text-sm">2017-2019</p>
                        </li>
                        <br />
                        <li>
                            <p className="font-semibold">TSU Procesos Industriales Plásticos</p>
                            <p className="text-sm">Universidad Tecnológica de San Luís Potosí</p>
                            <p className="text-sm">2013-2015</p>
                        </li>
                    </ul>
                </div>
                <div className="mb-6 skills" >
                    <h2 className="text-xl font-semibold mb-2">HABILIDADES</h2>
                    <ul className="list-disc list-inside">
                        <li>Manejo de herramientas</li>
                        <li>Tecnologias de Programación</li>
                        <li>Software de diseño</li>
                        <li>Conducir</li>
                    </ul>
                </div>
                
            </div>


            
            <div className="responsive-column w-full md:w-2/3 p-6">
                <div className="mb-6">
                    <h2 className="text-2xl font-bold text-blue-900 mb-2">ACERCA DE MÍ</h2>
                    <p className="text-gray-700">
                      Soy un ingeniero industrial y desarrollador con una sólida formación en la optimización de procesos y el análisis de datos. Mi experiencia abarca tanto la gestión de personal y recursos como el desarrollo de soluciones tecnológicas, lo que me ha permitido implementar mejoras significativas en la eficiencia operativa y la gestión de recursos. <br /> 
                      Estoy buscando la oportunidad de aplicar mis habilidades en donde pueda combinar mi capacidad analítica y mi experiencia en la supervisión de equipos para garantizar la eficacia en la planificación y ejecución de las actividades. Mi enfoque está orientado a la mejora continua y a la adaptación de tecnologías innovadoras para optimizar los procesos.</p>
                </div>
                <div>
                    <h2 className="text-2xl font-bold text-blue-900 mb-4">EXPERIENCIA LABORAL</h2>
                    <div className="relative border-l-2 border-blue-900 pl-4 ml-2">
                        <div className="mb-6">
                            <div className="absolute w-3 h-3 bg-blue-900 rounded-full -left-[7px] top-1.5"></div>
                            <h3 className="text-xl font-semibold">Desarrollador web y Conductor de plataformas</h3>
                            <p className="text-gray-600">Independiente</p>
                            <p className="text-gray-600">2022-Actualmente</p>
                            <p className="mt-2 text-gray-700">
                              Diseño y desarrollo de sitios web, aplicaciones y base de datos personalizadas para negocios de emprendedores utilizando HTML, CSS, JavaScript y frameworks modernos (ReactJS, NodeJs).  </p>
                        </div>
                        <div className="mb-6">
                            <div className="absolute w-3 h-3 bg-blue-900 rounded-full -left-[7px] top-1.5"></div>
                            <h3 className="text-xl font-semibold">Dueño de negocio de comida</h3>
                            <p className="text-gray-600">Monapeti</p>
                            <p className="text-gray-600">2017-2022</p>
                            <p className="mt-2 text-gray-700">
                              Organizar las operaciones diarias del negocio para así asegurar un servicio eficiente y de calidad.<br />
                              Gestionar el inventario de ingredientes y suministros, asegurando siempre la disponibilidad de productos frescos. <br /> 
                              Diseñar y actualizar el menú, considerando las tendencias del mercado y temporadas.
                              Administrar el presupuesto del negocio, incluyendo el control de costos y la gestión de ingresos.
                            </p>
                        </div>
                        <div className="mb-6">
                            <div className="absolute w-3 h-3 bg-blue-900 rounded-full -left-[7px] top-1.5"></div>
                            <h3 className="text-xl font-semibold">Supervisor Ensamble caliper</h3>
                            <p className="text-gray-600">Continental Automotive SLP</p>
                            <p className="text-gray-600">2019-2020</p>
                            <p className="mt-2 text-gray-700">
                              Supervisar y coordinar las actividades diarias del equipo de ensamble como operarios, técnicos de proceso y lideres. <br /> 
                              Capacitar y desarrollar al personal en técnicas de ensamble y seguridad. <br /> 
                              Planificar el programa de producción diario/semanal  asi como asegurar que los recursos (materiales, herramientas y personal) estén disponibles para cumplir con las metas.  <br /> 
                              Coordinar con otros departamentos (Ingenieria, calidad, mantenimiento) para optimizar el flujo de trabajo. <br />
                              Mejora Continua
                            </p>
                        </div>
                        <div className="mb-6">
                            <div className="absolute w-3 h-3 bg-blue-900 rounded-full -left-[7px] top-1.5"></div>
                            <h3 className="text-xl font-semibold">Ingeniero de Inyeccion de Plásticos</h3>
                            <p className="text-gray-600">North American Lighting México</p>
                            <p className="text-gray-600">2016-2017</p>
                            <p className="mt-2 text-gray-700">
                              Optimización del Proceso de Inyección por medio de ajustes de parámetros de máquinas para mejorar la eficiencia y la calidad de las piezas. <br /> 
                              Implementar mejoras continuas en el proceso de inyección para reducir el desperdicio y aumentar la productividad. <br />
                              Mantener la documentación actualizada y detallada de los parámetros de inyección, pruebas de calidad y mantenimiento de maquinaria. <br />
                              Asegurar que el proceso de inyección cumpla con las normativas de seguridad, medio ambiente y calidad.   
                              Participar en proyectos de innovación y desarrollo de productos plásticos.
                              </p>
                        </div>
                        <div className="mb-6">
                            <div className="absolute w-3 h-3 bg-blue-900 rounded-full -left-[7px] top-1.5"></div>
                            <h3 className="text-xl font-semibold">Supervisor de Producción Moldeo</h3>
                            <p className="text-gray-600">North American Lighting México</p>
                            <p className="text-gray-600">2014-2016</p>
                            <p className="mt-2 text-gray-700">
                              Supervisar y coordinar las actividades del personal de producción en la línea de inyección de plásticos. <br />
                              Capacitar y desarrollar al personal en técnicas de inyección y procedimientos de seguridad.  <br />
                              Gestionar las no conformidades y coordinar acciones correctivas. <br />
                              Elaborar informes de producción y reportes de desempeño para la gerencia.
                              </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

  )
}

export default App
