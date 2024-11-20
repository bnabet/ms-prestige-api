import Car from "../../../models/Car.js";

async function createCar(req, res) {
  const car = new Car(req.body);

  try {
    const newCar = await car.save();
    res.status(201).json(newCar);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}

export default createCar;
