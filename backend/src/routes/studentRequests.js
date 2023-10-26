import { Router } from 'express';
const router = Router();
import { get, create } from '../services/studentRequest.js';

router.get('/get', async function(req, res, next) {
    try {
        res.json(await get());
    } catch (err) {
        console.error(`Error while getting classes `, err.message);
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
