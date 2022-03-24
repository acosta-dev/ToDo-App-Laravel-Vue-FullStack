import TasksList from '../components/TasksList.vue';
import AddTask from '../components/AddTask.vue';
import { createWebHistory, createRouter } from 'vue-router'


const routes = [
    {
        name:'TasksList',
        path:'/',
        component:TasksList
    },
    {
        name:'AddTask',
        path:'/Add_task',
        component:AddTask
    },

];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;