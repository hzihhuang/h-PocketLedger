/** 格式化价格千分位 */
export function formatPrice(value: number): string {
  const formattedValue = new Intl.NumberFormat("zh-CN", {
    style: "currency",
    currency: "CNY", // 使用人民币作为货币单位
    currencyDisplay: "symbol",
  }).format(value);

  return formattedValue;
}
