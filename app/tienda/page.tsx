import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";

function Tienda(): React.ReactNode {



    return (
        <div>
            <h1>Tienda</h1>
            <Image src="../public/next.svg" width={1000} height={500} className="hidden md:block" alt="imagen de NEXTJS" />
        </div>
    )
}

export default Tienda;