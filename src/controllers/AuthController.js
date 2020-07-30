import bcrypt from 'bcryptjs'
import { Router } from 'express'
import Client from '../models/Client'
import Pub from '../models/Pub'
import { generateToken } from '../utils/tokenJwt'

const router = Router()

router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  const client = await Client.findOne({ email }).select('+password');
  const pub = await Pub.findOne({ email }).select('+password');
  if (!client && !pub) {
    return res.status(400).send({ error: 'Email e/ou senha incorreto(s)' });
  }
  
  let user
  let permission

  if (client) {
    if (!(await bcrypt.compare(password, client.password))) {
      return res.status(400).send({ error: 'Email e/ou senha incorreto(s)' });
    }
    permission = 'client';
    user = client
  } else if (pub) {
    if (!(await bcrypt.compare(password, pub.password))) {
      return res.status(400).send({ error: 'Email e/ou senha incorreto(s)' });
    }
    user = pub
    permission = 'pub';
  }

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