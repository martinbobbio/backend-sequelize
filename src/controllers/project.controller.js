import Project from '../models/Project';

export async function createProject(request, response){
    try {
        const { name, priority, description, deliverydate } = request.body;
        const project = await Project.create({ name, priority, description, deliverydate }, { fields:['name', 'priority', 'description', 'deliverydate'] });
        response.json({ message: 'Project created successfully', data: project});
    } catch(e) {
        console.log(e)
        response.status(500).json({ message: 'Something goes wrong' });
    }
}

export async function getProjects(_, response){
    try {
        const projects = await Project.findAll();
        response.json({ data:projects });
    } catch(e) {
        console.log(e)
        response.status(500).json({ message: 'Something goes wrong' });
    }
}

export async function getProjectById(request, response){
    try {
        const { id } = request.params;
        const project = await Project.findOne({ where:{id} });
        response.json({ data:project });
    } catch(e) {
        response.status(500).json({ message: 'Something goes wrong' });
    }
}

export async function deleteProject(request, response){
    try {
        const { id } = request.params;
        await Project.destroy({ where:{id} });
        response.json({ message:'Project deleted' });
    } catch(e) {
        response.status(500).json({ message: 'Something goes wrong' });
    }
}

export async function updateProject(request, response){
    try {
        const { id } = request.params;
        const { name, priority, description, deliverydate } = request.body;
        await Project.update({ name, priority, description, deliverydate }, { where:{id} });
        response.json({ message:'Project updated' });
    } catch(e) {
        response.status(500).json({ message: 'Something goes wrong' });
    }
}