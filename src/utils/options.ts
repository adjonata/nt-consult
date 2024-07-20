import type { Option } from "@/types";

export const makeNumberOptions = (length: number, label: string) =>
  Array.from(
    { length },
    (_, index) =>
      ({
        code: `${index + 1}`,
        label: `${index + 1} ${label}${index + 1 > 1 ? "s" : ""}`,
      } as Option)
  );

export const stateOptions: Option[] = [
  {
    label: "ACRE",
    code: "AC",
  },
  {
    label: "ALAGOAS",
    code: "AL",
  },
  {
    label: "AMAPA",
    code: "AP",
  },
  {
    label: "AMAZONAS",
    code: "AM",
  },
  {
    label: "BAHIA",
    code: "BA",
  },
  {
    label: "CEARA",
    code: "CE",
  },
  {
    label: "DISTRITO FEDERAL",
    code: "DF",
  },
  {
    label: "ESPIRITO SANTO",
    code: "ES",
  },
  {
    label: "GOIAS",
    code: "GO",
  },
  {
    label: "MARANHAO",
    code: "MA",
  },
  {
    label: "MATO GROSSO",
    code: "MT",
  },
  {
    label: "MATO GROSSO DO SUL",
    code: "MS",
  },
  {
    label: "MINAS GERAIS",
    code: "MG",
  },
  {
    label: "PARA",
    code: "PA",
  },
  {
    label: "PARAIBA",
    code: "PB",
  },
  {
    label: "PARANA",
    code: "PR",
  },
  {
    label: "PERNAMBUCO",
    code: "PE",
  },
  {
    label: "PIAUI",
    code: "PI",
  },
  {
    label: "RIO DE JANEIRO",
    code: "RJ",
  },
  {
    label: "RIO GRANDE DO NORTE",
    code: "RN",
  },
  {
    label: "RIO GRANDE DO SUL",
    code: "RS",
  },
  {
    label: "RONDONIA",
    code: "RO",
  },
  {
    label: "RORAIMA",
    code: "RR",
  },
  {
    label: "SANTA CATARINA",
    code: "SC",
  },
  {
    label: "SAO PAULO",
    code: "SP",
  },
  {
    label: "SERGIPE",
    code: "SE",
  },
  {
    label: "TOCANTINS",
    code: "TO",
  },
];
