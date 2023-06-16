import * as S from './style';
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { TypeTask } from '@/app/types/typesTask';
import { useState } from 'react';
import { string, z } from 'zod';
import { useForm } from 'react-hook-form'
import { EditTask, DeletedTask } from '@/app/hooks/useTaskMutation';

const Task = ({id, title, description, status}: TypeTask) => {
    const [edit, setEdit] = useState(false)

    const editSchemaTask = z.object({
        title: string(),
        description: string(),
        status: string()
    })
    type TypeSchemaTask = z.infer<typeof editSchemaTask>

    const { register, handleSubmit, setValue } = useForm<TypeSchemaTask>()
    const { mutate } = EditTask()
    const deleted = DeletedTask() 

    const editTask = () => {
        setEdit(!edit)

        setValue('title', title)
        setValue('description', description)
    }

    const editTaskUpate = ({title, description, status}: TypeTask) => {
        mutate({id, title, description, status})
        editTask()
    }

    const deletedTask = () => {
        deleted.mutate(id)
    }

    return(
        <>
            <S.Container>
                {edit && <>
                    <S.EditTask onSubmit={handleSubmit(editTaskUpate)}>
                        <S.Input 
                            placeholder='Edite seu titulo...'
                            {...register('title')}
                        />
                        <S.Input 
                            placeholder='Edite a descrição...'
                            {...register('description')}
                        />
                        <S.Select {...register('status')}>
                            <option value="Pendente">Pendente</option>
                            <option value="Em andamento">Em andamento</option>
                            <option value="Finalizado">Finalizado</option>
                        </S.Select>
                        <S.Button>✔</S.Button>
                    </S.EditTask>
                </>}
                {!edit && <>
                    <S.Div>
                        <S.Title>{title}</S.Title>
                    </S.Div>
                    <S.Div>
                        <S.P>{description}</S.P>
                    </S.Div>
                    <S.Div>
                        <S.SubTitle>{status}</S.SubTitle>
                    </S.Div>
                    <S.Div>
                        <S.Title color='#f1f1f1' onClick={editTask}><FaEdit/></S.Title>
                        <S.Title color='red' onClick={deletedTask}><MdDelete/></S.Title>
                    </S.Div>
                </>}
            </S.Container>
        </>
    )
};

export default Task