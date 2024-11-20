import Car from "../../../models/Car.js";

async function getCars(req, res) {
  try {
    const cars = await Car.find();
    res.json(cars);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

export default getCars;
