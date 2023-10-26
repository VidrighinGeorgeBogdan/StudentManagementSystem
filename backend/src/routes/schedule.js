import { Router } from 'express';
const router = Router();
import { getStudentSchedule, getProfessorSchedule, getUnAuthSchedule } from '../services/scheduleService.js';

router.post('/professor', async (req, res) => {
    try {
        const data = await getProfessorSchedule(req.body);
        res.send(data);
    } catch (err) {
        console.log(err);
        res.status(500).send(err);
    }
});

router.post('/student', async (req, res) => {
    try {
        const data = await getStudentSchedule(req.body);
        res.send(data);
    } catch (err) {
        console.log(err);
        res.status(500).send(err);
    }
});

router.post('/unauth', async (req, res) => {
    try {
        const data = await getUnAuthSchedule(req.body);
        res.send(data);
    } catch (err) {
        console.log(err);
        res.status(500).send(err);
    }
});

export default router;