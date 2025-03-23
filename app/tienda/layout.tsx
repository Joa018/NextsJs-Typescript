import React from 'react'
import Link from 'next/link'
export default function SubLayout({children}: { children: React.ReactNode}) {

return (
<> 
   <nav>
    <h3>Seccion tienda</h3>
    <ul>
        <li>
            Productos
        </li>
        <li>
            Categorias
        </li>
    </ul>
   </nav>
    
    {children}
</>

)
  }

