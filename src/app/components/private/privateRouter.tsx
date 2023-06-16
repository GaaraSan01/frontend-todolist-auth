import { useRouter } from "next/navigation";
import { APP_ROUTERS } from "@/app/constants/app-routes";
import { ReactNode, useEffect } from "react";
import { parseCookies } from "nookies";

const verifyToken = () => {
    const token = parseCookies()
    return !!token['todo-token']
}

type PrivateRouteProps = {
    children: ReactNode
}

function PrivateRouter({children}: PrivateRouteProps){
    const { push } = useRouter()

    const isAuthencated = verifyToken()

    useEffect(() => {
        if(!isAuthencated){
            push(APP_ROUTERS.public.login)
        }
    },[isAuthencated, push])

    return(
        <>
            {!isAuthencated && null}
            {isAuthencated && children}
        </>
    )
}

export default PrivateRouter