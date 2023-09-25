import { NextFunction, Request, Response } from 'express';
import sendResponse from '../../../shared/response';
import { FacultyService } from './faculty.service';

const getAllFromDB = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await FacultyService.getAllFromDB(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const getByIdFromDB = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await FacultyService.getByIdFromDB(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const updateOneInDB = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await FacultyService.updateOneInDB(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const deleteByIdFromDB = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await FacultyService.deleteByIdFromDB(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

export const FacultyController = {
  updateOneInDB,
  getAllFromDB,
  getByIdFromDB,
  deleteByIdFromDB
};
