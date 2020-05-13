const tripDays = require("./app")

test("Calculate date difference", () => {
    expect(tripDays.tripDays("2020-05-11", "2020-05-15")).toBe(4)
})