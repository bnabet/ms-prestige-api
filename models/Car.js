import mongoose, { Schema } from "mongoose";

const carSchema = new Schema(
  {
    brand: {
      type: String,
      required: true,
    },
    model: {
      type: String,
      required: true,
    },
    trimLevel: {
      type: String,
      required: false,
    },
    year: {
      type: Number,
      required: true,
    },
    power: {
      type: Number,
      required: true,
    },
    seats: {
      type: Number,
      required: true,
    },
    fuelType: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      required: true,
    },
    rentalPricePerDay: {
      type: Number,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    images: {
      type: [String],
      required: true,
    },
    unlimitedMileage: {
      type: Boolean,
      required: true,
    },
    // rentalDates: [
    //   {
    //     startDate: {
    //       type: Date,
    //       required: true,
    //     },
    //     endDate: {
    //       type: Date,
    //       required: true,
    //     },
    //     renterId: {
    //       type: Schema.Types.ObjectId,
    //       required: true,
    //     },
    //   },
    // ],
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Car", carSchema);
