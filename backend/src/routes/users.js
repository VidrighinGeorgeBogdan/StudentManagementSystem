import { Router } from 'express';
const router = Router();
import { get, create, update, deleteUser, getRole, getStatus } from '../services/userService.js';

router.get('/get', async function(req, res, next) {
  try {
    res.json(await get());
  } catch (err) {
    console.error(`Error while getting users `, err.message);
    next(err);
  }
});
router.get('/get/:id', async function(req, res, next) {
  try {
    res.json(await get(req.params.id));
  } catch (err) {
    console.error(`Error while getting users `, err.message);
    next(err);
  }
});

router.post('/create', async function(req, res, next) {
  try {
    res.json(await create(req.body));
  } catch (err) {
    console.error(`Error while creating a user`, err.message);
    next(err);
  }
});

router.post('/update/:id', async function(req, res, next) {
  try {
    res.json(await update(req.params.id,req.body));
  } catch (err) {
    console.error(`Error while creating a user`, err.message);
    next(err);
  }
});

router.get('/delete/:idUserDeleted/:idUserDeleting', async function(req, res, next) {
  try {
    res.json(await deleteUser(req.params.idUserDeleted,req.params.idUserDeleting));
  } catch (err) {
    console.error(`Error while creating a user`, err.message);
    next(err);
  }
});

router.get('/getRole/:id', async function(req, res, next) {
  try {
    res.json(await getRole(req.params.id));
  } catch (err) {
    console.error(`Error while getting users `, err.message);
    next(err);
  }
});

router.get('/getRoles', async function(req, res, next) {
  try {
    res.json(await getRole());
  } catch (err) {
    console.error(`Error while getting users `, err.message);
    next(err);
  }
});

router.get('/getStatus/:id', async function(req, res, next) {
  try {
    res.json(await getStatus(req.params.id));
  } catch (err) {
    console.error(`Error while getting users `, err.message);
    next(err);
  }
});

router.get('/getStatuses', async function(req, res, next) {
  try {
    res.json(await getStatus());
  } catch (err) {
    console.error(`Error while getting users `, err.message);
    next(err);
  }
});

export default router;