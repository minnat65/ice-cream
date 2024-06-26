import { Schema, model } from "mongoose";

const iceCreamSchema = new Schema({
  name: { 
    type: String, 
    trim: true, 
    require: [true, 'namme is required field.'],
  },
  unitPrice: { 
    type: Number, 
    min: [0, 'Unit Price must be positive.'],
  },
  totalPrice: {
    type: Number, 
    min: [0, 'Total Price must be positive.'],
  },
  quantity: {
    type: Number,
    min: [0, 'Quantity must be positive.'],
  },
  date: Date,
});

const IceCream = model('IceCream', iceCreamSchema);

export { IceCream };
