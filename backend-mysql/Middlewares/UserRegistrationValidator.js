import { check, validationResult } from 'express-validator';

export const validateUser = [
  check('name')
    .notEmpty()
    .withMessage('Username is required')
    .bail()
    .isLength({ min: 4 })
    .withMessage('Username must be longer than 3 characters')
    .bail()
    .matches(/^[a-zA-Z0-9]+$/)
    .withMessage('Username should not contain symbols or special characters')
    .bail(),

  check('email')
    .notEmpty()
    .withMessage('E-mail is required.')
    .bail()
    .isEmail()
    .withMessage('Not a valid e-mail address.')
    .bail(),

  check('password')
    .notEmpty()
    .withMessage('Password is required')
    .bail()
    .isLength({ min: 6 })
    .withMessage('Password length must be minimum  6 characters')
    .bail(),

  (req, res, next) => {
    try {
      const { errors } = validationResult(req);
      if (errors.length) {
        return res.status(422).json(errors[0].msg);
      }
      next();
    } catch (err) {
      res.status(400).json(err.message);
    }
  },
];
