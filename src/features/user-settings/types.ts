export type UserLevel = "basic" | "pro" | "premium";
export type UserLeague = "bronze" | "silver" | "gold" | "platinum";

export interface User {
  points: number;
  tap: number;
  energy: number;
  rechargingSpeed: number;
  turbo: number;
  recharge: number;
  id: string;
  league: UserLeague;
  level: UserLevel;
}
