import { AxiosError } from "axios";

import { ApiError, ErrorCode, HandledError } from "@/interfaces/error";

type ErrorParam = AxiosError | HandledError | any;

const DEFAULT_MESSAGE =
  "We're very sorry. Our team's already investigating what happened. Please try again in a moment or contact us.";

const Messages: { [key in ErrorCode | string]: string } = {
  ["DEFAULT" as keyof ErrorCode]: DEFAULT_MESSAGE,
  [ErrorCode.INTERNAL]: DEFAULT_MESSAGE,
};

export const handleError = (error: ErrorParam): HandledError => {
  const defaultMsg = Messages["DEFAULT"];

  try {
    if (error?.handled) return handleError(error.plain);

    if (error instanceof AxiosError) {
      const api: ApiError | undefined | null = error?.response?.data;
      const message = Messages[api?.code ?? "DEFAULT"];

      return { plain: error, api, handled: true, message };
    }

    return { plain: error, api: null, handled: true, message: defaultMsg };
  } catch (error) {
    return { plain: error, api: null, handled: true, message: defaultMsg };
  }
};
