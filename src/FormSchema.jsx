import * as validation from 'yup'

const validateInput=validation.object({
    username: validation.string().min(5).required(),
    password: validation.string().min(8).required(),
})
export default validateInput;