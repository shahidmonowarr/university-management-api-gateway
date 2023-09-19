import express from 'express';
import { academicSemesterController } from './academicSemester.controller';

const router = express.Router();

router.get('/', academicSemesterController.getAllFromDB);
router.get('/:id', academicSemesterController.getOneFromDB);
router.post('/', academicSemesterController.insertIntoDB);
router.patch('/:id', academicSemesterController.updateOneIntoDB);
router.delete('/:id', academicSemesterController.deleteOneFromDB);

export const academicSemesterRoutes = router;
