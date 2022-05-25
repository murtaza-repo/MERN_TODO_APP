import { getTasksRoute } from './getTasksRoute';
import { createUserInfoRoute } from './createUserInfoRoute';
import { getUserDetailsRoute } from './getUserDetailsRoute';
import { createTaskRoute } from './createTaskRoute';
import { updateStatusRoute } from './updateStatusRoute';
import { deleteTaskRoute } from './deleteTaskRoute';
import { updateTaskRoute } from './updateTaskRoute';


export const routes = [
    createUserInfoRoute,
    getTasksRoute,
    getUserDetailsRoute,
    createTaskRoute,
    updateTaskRoute,
    updateStatusRoute,
    deleteTaskRoute,
];