import { Router } from 'express';
import { createTask, getTasks, getTaskById, deleteTask, updateTask, getTasksByProject } from '../controllers/task.controller';

const router = Router();

router.post('/', createTask);
router.get('/', getTasks);
router.get('/:id', getTaskById);
router.delete('/:id', deleteTask);
router.put('/:id', updateTask);
router.get('/projects/:projectid', getTasksByProject);

export default router;