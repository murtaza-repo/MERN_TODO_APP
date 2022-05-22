import { getTasksRoute } from './getTasksRoute';
import { createUserInfoRoute } from './createUserInfoRoute';
import { getUserDetailsRoute } from './getUserDetailsRoute';
import { createTaskRoute } from './createTaskRoute';
import { updateStatusRoute } from './updateStatusRoute';
import { deleteTaskRoute } from './deleteTaskRoute';

export const routes = [
    getTasksRoute,
    createUserInfoRoute,
    getUserDetailsRoute,
    createTaskRoute,
    updateStatusRoute,
    deleteTaskRoute
];