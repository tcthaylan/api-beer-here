import jwt from 'jsonwebtoken'

function auth(permissions) {
  return (req, res, next) => {
    const authHeader = req.headers.authorization;
    if (!authHeader)
      return res.status(401).send({ error: 'No token provided' });

    const parts = authHeader.split(' ');

    if (parts.length !== 2)
      return res.status(401).send({ error: 'Token error' });

    const [scheme, token] = parts;

    if (!/^Bearer$/i.test(scheme))
      return res.status(401).send({ error: 'Token malformatted' });

    jwt.verify(token, process.env.SECRET, (err, decoded) => {
      if (err) return res.status(401).send({ error: 'token invalid' });
      if (!permissions.includes(decoded.permission)) {
        return res.status(400).send({ error: 'permission denied' })
      }

      res.user_id = decoded.id
      res.user_permission = user.permission
      return next();
    });
  }
}

export default auth