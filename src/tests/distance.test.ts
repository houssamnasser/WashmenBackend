import { calculateDistance } from "../services/distance.service";

describe("Longitude and Lattitude Validators", () => {
  test("Negative out of range longitude and lattitude must not pass", () => {
    expect(calculateDistance(-181, -91)).toBe(0);
  });

  test("Positive out of range longitude and lattitude must not pass", () => {
    expect(calculateDistance(181, 91)).toBe(0);
  });

  test("should return a value", () => {
    expect(calculateDistance(50, 50)).toBeTruthy();
  });
});
