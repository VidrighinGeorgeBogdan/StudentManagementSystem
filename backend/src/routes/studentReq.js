import { Router } from 'express';
 
const router = Router();
import { get, create,getbyStudent, update,buildPDF} from '../services/studentRequest.js';
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
router.get('/getstudentreq/:id', async (req, res) => {
    try {
        const data = await getbyStudent(req.params.id);
        res.send(data);
    } catch (err) {
        console.log(err);
        res.status(500).send(err);
    }
});

router.post('/create', async (req, res) => {
    try {
        const data = await create(req.body);
        res.send(data);
    } catch (err) {
        console.log(err);
        res.status(500).send(err);
    }
});
router.post('/update/:id', async (req, res) => {
    try {
        const data = await update(req.params.id,req.body.status_id,req.body.rejection_reason);
        res.send(data);
    } catch (err) {
        console.log(err);
        res.status(500).send(err);
    }
});

export default router;