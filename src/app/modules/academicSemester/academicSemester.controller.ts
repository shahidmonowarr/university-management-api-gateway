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

export const academicSemesterController = {
  insertIntoDB
};
