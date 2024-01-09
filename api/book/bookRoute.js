import express from 'express';
import { getAllBooks, createBook, getUserBooks, fetchBookDetail } from './bookController.js';


const router = express.Router();

router.get('/books', getAllBooks);
router.get('/books/:userId', getUserBooks);
router.post('/createBook', createBook);
router.get('/books/:id', fetchBookDetail);
export default router;