export const Currency = (item: string) => {
  if (item === 'kg') {
    return 'сом'
  } else if (item === 'kz') {
    return 'тенге'
  } else if (item === 'ru') {
    return 'рублей'
  } else {
    return '$'
  }
}
