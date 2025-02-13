const isDev = process.env.NODE_ENV === "development";

function checkOrError(key: string, env: string | undefined) {
  if (env !== undefined) {
    return env;
  }
  throw `No ${key}`;
}

export const NEXT_PUBLIC_AUTH_CALLBACK_URL = isDev
  ? "http://localhost:3000/api/auth/callback"
  : checkOrError(
      "NEXT_PUBLIC_AUTH_CALLBACK_URL",
      process.env.NEXT_PUBLIC_AUTH_CALLBACK_URL,
    );

export const NEXT_PUBLIC_CLIENT_ID = checkOrError(
  "NEXT_PUBLIC_CLIENT_ID",
  process.env.NEXT_PUBLIC_CLIENT_ID,
);
