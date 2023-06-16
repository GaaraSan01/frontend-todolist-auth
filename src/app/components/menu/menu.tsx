import * as S from './style'
import { destroyCookie } from 'nookies'
import { useRouter } from 'next/navigation'

const Menu = () => {
    const router = useRouter()

    const logoutPerson = () => {
        destroyCookie(null, 'todo-token')
        router.push('/')
    }

    return(
        <>
            <S.Header>
                <S.Title>
                    To do List - FullStack
                </S.Title>
                <S.Icone onClick={logoutPerson}>Logout</S.Icone>
            </S.Header>
        </>
    )
}

export default Menu