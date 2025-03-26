"use client"

import Link from "next/link"
import '../app/global.css'
import {montserrat, roboto} from './ui/fonts'
import { usePathname } from "next/navigation"


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${montserrat.className} antialiased`}> {/*antialiased mejora el render de la font en los navegadores*/}
        <h1>Welcome my e-commerce</h1>
         <nav>
           <ul>
             <li className={`${roboto.className} antialiased`}>
                <Link href={"/tienda"}>tienda</Link>
             </li>
              <li>
                 <Link href={"/carrito"}>categoria</Link>
              </li>
           </ul>
         </nav>

        {children}
        <footer className="footerLayout">
            <h2>Esto es un footer en Layout</h2>
        </footer>
        </body>
    </html>
  )
}


//usePathname() es para leer y hacer cambio dependiendo en ruta estas 


//*const pathName = usePathname()
{/*Example: <Link className={`${pathName == link.href ? "br-sky-100 text-blue-600" : "" }`}></Link>*/}