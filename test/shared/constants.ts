import JSBI from "jsbi";

import { BigNumber } from "@ethersproject/bignumber";
import { toBn } from "evm-bn";

export type BigintIsh = JSBI | string | number;
export const DECIMALS: BigNumber = BigNumber.from("18");
export const E: BigNumber = toBn("2.718281828459045235");
export const HALF_SCALE: BigNumber = toBn("0.5");
export const MAX_SD59x18: BigNumber = toBn(
  "57896044618658097711785492504343953926634992332820282019728.792003956564819967"
);
export const MAX_UD60x18: BigNumber = toBn(
  "115792089237316195423570985008687907853269984665640564039457.584007913129639935"
);
export const MAX_WHOLE_SD59x18: BigNumber = toBn(
  "57896044618658097711785492504343953926634992332820282019728"
);
export const MAX_WHOLE_UD60x18: BigNumber = toBn(
  "115792089237316195423570985008687907853269984665640564039457"
);
export const MIN_SD59x18: BigNumber = toBn(
  "-57896044618658097711785492504343953926634992332820282019728.792003956564819968"
);
export const MIN_WHOLE_SD59x18: BigNumber = toBn(
  "-57896044618658097711785492504343953926634992332820282019728"
);
export const SQRT_MAX_SD59x18: string =
  "240615969168004511545033772477.625056927114980741";
export const SQRT_MAX_UD60x18: string =
  "340282366920938463463374607431.768211455999999999";
export const PI: BigNumber = toBn("3.141592653589793238");
export const SCALE: BigNumber = toBn("1");

export const ONE_YEAR_IN_SECONDS = toBn("31536000");
export const ONE_WEEK_IN_SECONDS = toBn("604800");
export const ONE_DAY_IN_SECONDS = toBn("86400");
