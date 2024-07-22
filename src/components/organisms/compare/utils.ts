import type { TableColumn } from "@/components/atoms/table.vue";

export const tableColumns = [
  {
    key: "duration",
    label: "Duração da hospedagem",
  },
  {
    key: "stars",
    label: "Estrelas",
  },
  {
    key: "number_of_guests",
    label: "Número de Hóspedes",
  },
  {
    key: "number_of_bedrooms",
    label: "Número de Quartos",
  },
  {
    key: "travel_price",
    label: "Preço da passagem",
  },
  {
    key: "host_price",
    label: "Preço da hospedagem",
  },
  {
    key: "total_price",
    label: "Preço total",
  },
] as TableColumn[];
