//가격 단위 ',' 삽입
export const priceCheck = (price) => {
  return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}