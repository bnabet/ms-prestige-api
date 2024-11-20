import Car from "../../../models/Car.js";

async function updateCar(req, res) {
  try {
    const updatedCar = await Car.findByIdAndUpdate(req.params.id, req.body, { new: true });

    if (!updatedCar) {
      return res.status(404).json({ message: "Car not found" });
    }

    res.json(updatedCar);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

export default updateCar;
