import Projects from "@/components/projects";
export default function ProjectsPage(){
    return (
       <>
            {/* Contenedor principal que será "pineado" por GSAP */}
            <main className="hero relative w-full h-screen text-white overflow-hidden">
                <video
                    className="hero-video absolute inset-0 w-full h-full object-cover -z-20"
                    src="/projects/furiafit/projectvideo.mp4"
                    autoPlay
                    muted
                    loop
                    playsInline
                />
                
                {/* Todo el contenido que se animará va dentro de 'hero-content' */}
                <div className="hero-content relative z-10 flex flex-col items-center justify-center h-full text-center">
                    <h1 className="text-[2.8rem] lg:text-[6rem] items-center lg:leading-30 lgmt-30
                    lg:text-left text-center lg:px-15 px-5 font-bold">EXPLORA NUESTRAS SOLUCIONES</h1>
                   
                </div>

            </main>
                <Projects />

        </>
    );
}