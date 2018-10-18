import { cnpjValidate } from '../utils/constants';

class cnpjService {
  static validateCNPJ(cnpj) {
    return new Promise((resolve, reject) => {
      if (cnpj === cnpjValidate) {
        return resolve({
          isCnpjValid: true
        })
      } else {
        return reject({
          isCnpjValid: false
        })
      }
    })
  }
}

export default cnpjService;