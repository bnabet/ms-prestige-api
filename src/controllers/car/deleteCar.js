import Car from "../../../models/Car.js";

async function deleteCar(req, res) {
  try {
    const deletedCar = await Car.findByIdAndDelete(req.params.id);

    if (!deletedCar) {
      return res.status(404).json({ message: "Car not found" });
    }

    res.json({ message: "Car deleted", car: deletedCar });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

export default deleteCar;
