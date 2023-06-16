import { useQuery } from "react-query";
import baseUrl from "../api/_api";

const getTask = async() => {
    const response = await baseUrl.get('/tasks')
    const data = response.data
    return data
}

export const useTask = () => {
    const query = useQuery({
        queryFn: getTask,
        queryKey: ['task-data']
    })
    return query
}
