'use client';
import * as S from './style';
import FormTask from '../components/formTask/formTask';
import Task from '../components/tasks/tasks';
import Menu from '../components/menu/menu';
import { useTask } from '../hooks/useTask';
import * as T from '../types/typesTask'
import Loading from '../components/loading/loading';

const ToDoList = () => {
    const {data, isLoading} = useTask()

    return(
        <S.Container>
            <Menu />
            <FormTask/>
            {isLoading && <Loading />}
            {!isLoading && data?.map((props: T.dataTask) => <Task 
                key={props.id} 
                id={props.id} 
                title={props.title} 
                description={props.description} 
                status={props.status}
            />)}
        </S.Container>
    )
}

export default ToDoList