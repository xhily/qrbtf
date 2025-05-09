export interface UserPayload {
  id: string;
  name: string;
  image: string;
}

export enum UserTier {
  Trial = 0,
  Pro,
}

export enum PaymentMethod {
  None,
  Kofi,
  Stripe,
  IAP,
  Member,
}

export interface QrbtfUserData {
  tier: UserTier;
  payment: PaymentMethod;
  email?: string;
  subscribe_time?: Date;
  subscribe_expire?: Date;
}

export type QrbtfUser = UserPayload & QrbtfUserData;
