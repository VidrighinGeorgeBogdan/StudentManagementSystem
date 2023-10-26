import { Router } from 'express';
const router = Router();
import { get, create, update, remove } from '../services/subjectsService.js';

router.get('/get', async function(req, res, next) {
    try {
        res.json(await get());
    } catch (err) {
        console.error(`Error while getting classes `, err.message);
        next(err);
    }
});

router.get('/get/:id', async function(req, res, next) {
    try {
        res.json(await get(req.params.id));
    } catch (err) {
        console.error(`Error while getting class `, err.message);
        next(err);
    }
});

router.post('/create', async function(req, res, next) {
    try {
        res.json(await create(req.body.name, req.body.user));
    } catch (err) {
        console.error(`Error while creating class `, err.message);
        next(err);
    }
});

router.post('/update/:id', async function(req, res, next) {
    try {
        res.json(await update(req.params.id, req.body.name, req.body.user));
    } catch (err) {
        console.error(`Error while updating class `, err.message);
        next(err);
    }
});

router.post('/remove/:id', async function(req, res, next) {
    try {
        res.json(await remove(req.params.id, req.body.user));
    } catch (err) {
        console.error(`Error while deleting class `, err.message);
        next(err);
    }
});
  
export default router;