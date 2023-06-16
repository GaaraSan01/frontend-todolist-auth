import { APP_ROUTERS } from "../constants/app-routes";



function VerifyRoutes(asPath: string){
    const appPublicRoutes = Object.values(APP_ROUTERS.public)

    return appPublicRoutes.includes(asPath)
}

export default VerifyRoutes