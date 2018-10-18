const validate = values => {
    const errors = {}
        // cnpj
        if (!values.cpnj ) {
            errors.cpnj = 'Campo obrigatório!'
        }
 
    return errors;
}
export default validate;