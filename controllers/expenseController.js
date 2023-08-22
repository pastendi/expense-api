import Expense from '../models/Expense.js'

const addExpense = async (req, res) => {
  const expense = await Expense.create(req.body)
  res.status(201).json({ expense })
}
const updateExpense = async (req, res) => {
  const expense = await Expense.findByIdAndUpdate(
    req.params.id,
    { ...req.body },
    { new: true }
  )
  res.status(200).json({ expense })
}
const removeExpense = async (req, res) => {
  const expense = await Expense.findByIdAndDelete(req.params.id)
  res.status(200).json({ expense })
}
const getAllExpenses = async (req, res) => {
  const expenses = await Expense.find({})
  res.status(200).json({ expenses })
}
export { addExpense, updateExpense, removeExpense, getAllExpenses }
