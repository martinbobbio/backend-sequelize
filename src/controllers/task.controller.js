import Task from '../models/Task';

export async function createTask(request, response){
    try {
        const { name, done, projectid } = request.body;
        const task = await Task.create({ name, done, projectid }, { fields:['name', 'done', 'projectid'] });
        response.json({ message: 'Task created successfully', data: task});
    } catch(e) {
        response.status(500).json({ message: 'Something goes wrong' });
    }
}

export async function getTasks(_, response){
    try {
        const tasks = await Task.findAll();
        response.json({ data:tasks });
    } catch(e) {
        response.status(500).json({ message: 'Something goes wrong' });
    }
}

export async function getTaskById(request, response){
    try {
        const { id } = request.params;
        const task = await Task.findOne({ where:{id} });
        response.json({ data:task });
    } catch(e) {
        response.status(500).json({ message: 'Something goes wrong' });
    }
}

export async function deleteTask(request, response){
    try {
        const { id } = request.params;
        await Task.destroy({ where:{id} });
        response.json({ message:'Task deleted' });
    } catch(e) {
        response.status(500).json({ message: 'Something goes wrong' });
    }
}

export async function updateTask(request, response){
    try {
        const { id } = request.params;
        const { name, done, projectid } = request.body;
        await Task.update({ name, done, projectid }, { where:{id} });
        response.json({ message:'Task updated' });
    } catch(e) {
        response.status(500).json({ message: 'Something goes wrong' });
    }
}

export async function getTasksByProject(request, response){
    try {
        const { projectid } = request.params;
        const tasks = await Task.findAll({ where:{projectid} });
        response.json({data: tasks});
    } catch(e) {
        response.status(500).json({ message: 'Something goes wrong' });
    }
}