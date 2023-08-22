import express from 'express'
import {
  addExpense,
  updateExpense,
  removeExpense,
  getAllExpenses,
} from '../controllers/expenseController.js'
const router = express.Router()

router.route('/').get(getAllExpenses).post(addExpense)
router.route('/:id').patch(updateExpense).delete(removeExpense)

export default router
