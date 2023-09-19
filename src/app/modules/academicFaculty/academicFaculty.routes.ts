import express from 'express';
import { academicFacultyController } from './academicFaculty.controller';

const router = express.Router();

router.get('/', academicFacultyController.getAllFromDB);
router.get('/:id', academicFacultyController.getOneFromDB);
router.post('/', academicFacultyController.insertIntoDB);
router.patch('/:id', academicFacultyController.updateOneIntoDB);
router.delete('/:id', academicFacultyController.deleteOneFromDB);

export const academicFacultyRoutes = router;
