const errorHandlerMiddleware = (err, req, res, next) => {
  console.log(err)
  const defaultError = {
    statusCode: 500,
    msg: 'Something went wrong',
  }
  if (err.name === 'ValidationError') {
    defaultError.statusCode = 400
    defaultError.msg = Object.values(err.errors)
      .map((item) => item.message)
      .join(',')
  }
  res.status(defaultError.statusCode).json({ msg: defaultError.msg })
}
export default errorHandlerMiddleware
