import mongoose from 'mongoose'
const ExpenseSchema = new mongoose.Schema({
  desc: {
    type: String,
    required: [true, 'Please provide desc'],
    maxlength: 100,
    minlength: 1,
    trim: true,
  },
  amount: {
    type: Number,
  },
  date: {
    type: Date,
  },
})
export default mongoose.model('Expense', ExpenseSchema)
