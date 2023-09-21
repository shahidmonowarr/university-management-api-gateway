import { Request } from 'express';
import { FileUploadHelper } from '../../../helpers/FileUploadHelper';
import { ICloudinaryResponse, IUploadFile } from '../../../interfaces/file';

const createStudent = async (req: Request) => {
  const file = req.file as IUploadFile;
  const uploadedImage: ICloudinaryResponse = await FileUploadHelper.uploadToCloudinary(file);
  console.log(uploadedImage);
};

export const UserService = {
  createStudent
};
