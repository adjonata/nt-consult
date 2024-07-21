export const applyMoneyMask = (val: string | number) =>
  Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(typeof val === "string" ? Number(val) : val);
