import { UseCase } from "../../../domain/core/UseCase";
import * as yup from "yup";

export const callUseCase = async <T extends Record<string, unknown>, R = void>({
  useCase,
  validationSchema,
  useCaseParams,
}: {
  useCase: UseCase<T, R>;
  validationSchema: yup.ObjectSchema<T>;
  useCaseParams: any;
}) => {
  const params = await validationSchema.validate(useCaseParams, {
    abortEarly: false,
  });
  return useCase.execute(params);
};
