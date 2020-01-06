import { Router } from 'express';
import { createProject, getProjects, getProjectById, deleteProject, updateProject } from '../controllers/project.controller';

const router = Router();

router.post('/', createProject);
router.get('/', getProjects);
router.get('/:id', getProjectById);
router.delete('/:id', deleteProject);
router.put('/:id', updateProject);

export default router;