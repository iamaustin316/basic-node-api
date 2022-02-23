import express from "express";
import {  getAllUsers, getUser, createUser, deleteUser, patchUser } from '../controllers/user.js'

const router = express.Router();

router.get('/', getAllUsers)

router.post('/', createUser)

router.get('/:id', getUser)

router.delete('/:id', deleteUser)

router.patch('/:id', patchUser)


export default router;