import { dpi } from './axios'

export function getPackages(): Promise<IResult<any>> {
  return dpi.get('/student_app/pay/packages')
}

export const authApi = {
  getPackages: (): Promise<IResult<any>> => {
    return dpi.get('/student_app/pay/packages')
  }
}
