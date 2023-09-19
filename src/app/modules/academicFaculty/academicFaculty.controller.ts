import { NextFunction, Request, Response } from 'express';
import sendResponse from '../../../shared/response';
import { academicFacultyService } from './academicFaculty.service';

const insertIntoDB = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await academicFacultyService.insertIntoDB(req);

    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const getAllFromDB = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await academicFacultyService.getAllFromDB(req);

    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const getOneFromDB = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await academicFacultyService.getOneFromDB(req);

    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const updateOneIntoDB = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await academicFacultyService.updateOneIntoDB(req);

    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const deleteOneFromDB = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await academicFacultyService.deleteOneFromDB(req);

    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

export const academicFacultyController = {
  insertIntoDB,
  getAllFromDB,
  getOneFromDB,
  updateOneIntoDB,
  deleteOneFromDB
};
