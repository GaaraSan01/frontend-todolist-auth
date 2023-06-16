import baseUrl from "../api/_api";
import {  useMutation, useQueryClient } from "react-query";

const postTask = async (data: {title: string, description: string}) => {
    return await baseUrl.post('/createdTask', data)
}

export function useMutateTask(){
    const queryClient = useQueryClient()
    const mutate = useMutation({
        mutationFn: postTask,
        onSuccess: () => {
            queryClient.invalidateQueries(['task-data'])
        }
    })
    return mutate
}

type TypeEditTask = {
    id: number | undefined,
    title: string,
    description: string,
    status: string | undefined
}

const editTask = async({id, title, description, status}: TypeEditTask) => {
    await baseUrl.put(`/updateTask/${id}`, {
        title,
        description,
        status
    })
}

export function EditTask(){
    const queryClient = useQueryClient()
    const mutate = useMutation({
        mutationFn: editTask,
        onSuccess: () => {
            queryClient.invalidateQueries(['task-data'])
        }
    })
    return mutate
}

const deleteTask = async(id: number | undefined) => {
    await baseUrl.delete(`/deleteTask/${id}`)
}

export function DeletedTask(){
    const queryClient = useQueryClient()
    const mutate = useMutation({
        mutationFn: deleteTask,
        onSuccess: () => {
            queryClient.invalidateQueries(['task-data'])
        }
    })
    return mutate
}