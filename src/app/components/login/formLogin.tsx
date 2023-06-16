import Link from 'next/link';
import * as S from './style';
import { string, z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { loginData } from '@/app/types/typesUser';
import { useState } from 'react';
import baseUrl from '@/app/api/_api';
import { setCookie } from 'nookies';
import { useRouter } from 'next/navigation';
import {useMutation, useQueryClient} from 'react-query'


const FormLogin = () => {

    const loginUserSchema = z.object({
        email: string().nonempty('Preencha o campo email').email('Email invalido!').toLowerCase(),
        password: string().min(6, 'Minimo 6 caracteres').nonempty('O campo senha é obrigatório')
    })

    type LoginUserData = z.infer<typeof loginUserSchema>

    const {register, handleSubmit, formState: {errors}} = useForm<LoginUserData>({
        resolver: zodResolver(loginUserSchema)
    })
    const [showPass, setShowPass] = useState(true)
    const [isErrorMessage, setIsErrorMessage] = useState('')

    const loginUser = async({email, password}: loginData) => {
    
        const response = await baseUrl.post('/login',{
            email,
            password
        })
        const { token } = response.data
    
        if(token){
            baseUrl.defaults.headers['Authorization'] = `Bearer ${token}`;
        }
        
        setCookie(undefined, 'todo-token', token, {
            maxAge: 60 * 60 * 1 // 1h hora
        })
    }
    function LoginTodoList(){
        const { push } = useRouter()
        const queryClient = useQueryClient()
        const mutate = useMutation({
            mutationFn: loginUser,
            onSuccess: () => {
                queryClient.invalidateQueries(['task-data'])
                push('/layout')
            },
            onError: (error: any) => {
                const {MessageError} = error.response?.data || 'Error no servidor!'
                setIsErrorMessage(MessageError)
            }
        })
        return mutate
    }

    const {mutate, isError, isLoading} = LoginTodoList()
    const loginUserConfirm = ({email, password}: loginData) => {
        mutate({email, password})
    }

    const checkShowPass = () => {
        setShowPass(!showPass)
    }

    return(
        <S.Form onSubmit={handleSubmit(loginUserConfirm)}>
            <S.Title>Login</S.Title>
            <S.Div>
               <S.Input
                    type='email' 
                    placeholder='Digite seu email...'
                    autoComplete='off'
                    {...register('email')}
               /> 
            </S.Div>
            {errors.email && <S.Span>{errors.email.message}</S.Span>}
            <S.Div>
               <S.Input 
                    type={showPass ? 'password' : 'text'}
                    placeholder='Digite sua senha...'
                    {...register('password')}
               /> 
            </S.Div>
            {errors.password && <S.Span>{errors.password.message}</S.Span>}
            <S.DivSeePassword>
                <S.Checkedbox 
                    type='checkbox' 
                    id='showPassword'
                    onChange={checkShowPass}
                />
                <S.Label htmlFor='showPassword'>Mostrar senha</S.Label>
            </S.DivSeePassword>
            <S.Div>
                <Link href={"/cadastro"}>
                    <S.Link>Cadastre-se</S.Link>
                </Link>
               <S.Button>{isLoading ? 'Carregando...' : 'Login'}</S.Button>
            </S.Div>
            {isError && <S.Error>{isErrorMessage}</S.Error>}
        </S.Form>
    )
}

export default FormLogin