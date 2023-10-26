import { Router } from 'express';
const router = Router();
import { getStudent, assignGivenUserAsStudent } from '../services/studentService.js';
router.get('/get', async (req, res) => {
    try {
        const data = await getStudent();
        res.send(data);
    } catch (err) {
        console.log(err);
        res.status(500).send(err);
    }
});
router.get('/get/:id', async (req, res) => {
    try {
        const data = await getStudent(req.params.id);
        res.send(data);
    } catch (err) {
        console.log(err);
        res.status(500).send(err);
    }
});

router.post('/assign/:userId', async (req, res) => {
    try {
        const data = await assignGivenUserAsStudent(req.user, req.params.userId);
        res.send(data);
    } catch (err) {
        console.log(err);
        res.status(500).send(err);
    }
});

export default router;