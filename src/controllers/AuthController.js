import bcrypt from 'bcryptjs'
import { Router } from 'express'
import User from '../models/User'
import { generateToken } from '../utils/tokenJwt'

const router = Router()

router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email }).select('+password');
  if (!user) {
    return res.status(400).send({ error: 'Email e/ou senha incorreto(s)' });
  }

  if (!(await bcrypt.compare(password, user.password))) {
    return res.status(400).send({ error: 'Email e/ou senha incorreto(s)' });
  }

  const permission = user.provider ? 'pub' : 'client'

  const token = generateToken({ id: user._id, permission })

  delete user.password

  return res.json({ user, token });
})

// router.get('/logout', (req, res) => {
  // console.log(req.cookies[process.env.COOKIE_LOGIN])
  // res.clearCookie('h8o9fsk8691fad');
  // return res.status(200).send({ loggout: true });
// })

export const AuthController = router