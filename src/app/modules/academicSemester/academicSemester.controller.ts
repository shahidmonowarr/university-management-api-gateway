import { NextFunction, Request, Response } from 'express';
import sendResponse from '../../../shared/response';
import { academicSemesterService } from './academicSemester.service';

const insertIntoDB = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await academicSemesterService.insertIntoDB(req);

    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const getAllFromDB = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await academicSemesterService.getAllFromDB(req);

    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const getOneFromDB = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await academicSemesterService.getOneFromDB(req);

    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const updateOneIntoDB = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await academicSemesterService.updateOneIntoDB(req);

    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const deleteOneFromDB = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await academicSemesterService.deleteOneFromDB(req);

    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

export const academicSemesterController = {
  insertIntoDB,
  getAllFromDB,
  getOneFromDB,
  updateOneIntoDB,
  deleteOneFromDB
};
