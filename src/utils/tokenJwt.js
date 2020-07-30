import jwt from 'jsonwebtoken'

export const generateToken = (params = {}) => {
  return jwt.sign(params, process.env.SECRET, {
    expiresIn: 86400,
  })
}