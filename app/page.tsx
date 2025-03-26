import { ReactNode } from "react"



//const revenue = await fethRevenue()

function Page():React.ReactNode{
    return(
        <div>
            <h1>
                hola mundo
            </h1>
        </div>
    )
}

export default Page


//si creas un archivo llamado loading, muestra los componentes de ese loading si estan cargando los datos de la pag 
//Suspense tipo esqueleto <DashboardSkeleton/>