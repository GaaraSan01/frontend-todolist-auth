import * as S from './style';
import { useMutateTask } from '@/app/hooks/useTaskMutation';
import { string, z } from 'zod';
import { useForm } from 'react-hook-form';
import { TypeTask } from '@/app/types/typesTask';



const FormTask = () => {
    const postSchemaTask = z.object({
        title: string().nonempty('Digite o titulo da Task...'),
        description: string().nonempty('Digite a descrição da Task...')
    })

    type TypePostTask = z.infer<typeof postSchemaTask>
    const {register, handleSubmit, setValue} = useForm<TypePostTask>()

    const {mutate} = useMutateTask()

    const postTask = (data: TypeTask) => {
        mutate(data)
        setValue('title', '')
        setValue('description', '')
    }
    
    return(
        <>
            <S.Form onSubmit={handleSubmit(postTask)}>
                <S.Div>
                    <S.Input 
                        type='text' 
                        placeholder='Digite o titulo da tarefa...'
                        autoComplete='off'
                        {...register('title')}
                    />
                    <S.Input 
                        type='text' 
                        placeholder='Digite a descrição da tarefa...'
                        autoComplete='off'
                        {...register('description')}
                    />
                </S.Div>
                <S.Button>+</S.Button>
            </S.Form>
        </>
    )
}

export default FormTask