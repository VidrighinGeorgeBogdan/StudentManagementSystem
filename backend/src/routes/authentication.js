import { Router } from 'express';
const router = Router();
import { login, checkRole } from '../services/authenticationService.js';
router.post('/login', async function(req, res, next) {
    try {
      res.json(await login(req.body.email, req.body.password));
    } catch (err) {
      console.error(`Error while logging in`, err.message);
      next(err);
    }
  });

router.post('/checkRole', async function(req, res, next) {
  try {
    res.json(await checkRole(req.body.user, req.body.desiredRole));
  }
  catch (err) {
    console.error(`Error while checking role`, err.message);
    next(err);
  }
})
  
export default router;