import express from 'express';
import { academicDepartmentController } from './academicDepartment.controller';

const router = express.Router();

router.get('/', academicDepartmentController.getAllFromDB);
router.get('/:id', academicDepartmentController.getOneFromDB);
router.post('/', academicDepartmentController.insertIntoDB);
router.patch('/:id', academicDepartmentController.updateOneIntoDB);
router.delete('/:id', academicDepartmentController.deleteOneFromDB);

export const academicDepartmentRoutes = router;
