import { Router } from 'express';
const router = Router();
import { get, assignGivenUserAsProfessor } from '../services/professorService.js';
router.get('/get', async (req, res) => {
    try {
        const data = await get();
        res.send(data);
    } catch (err) {
        console.log(err);
        res.status(500).send(err);
    }
});
router.get('/get/:id', async (req, res) => {
    try {
        const data = await get(req.params.id);
        res.send(data);
    } catch (err) {
        console.log(err);
        res.status(500).send(err);
    }
});

router.post('/assign/:userId', async (req, res) => {
    try {
        const data = await assignGivenUserAsProfessor(req.user, req.params.userId);
        res.send(data);
    } catch (err) {
        console.log(err);
        res.status(500).send(err);
    }
});

export default router;