/** 格式化价格千分位 */
export function formatPrice(value: number): string {
  return new Intl.NumberFormat("en-US", {
    style: "decimal",
  }).format(value);
}
