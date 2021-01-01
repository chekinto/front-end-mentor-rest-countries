export const formatPopulation = (value) => {
  return new Intl.NumberFormat().format(value)
}