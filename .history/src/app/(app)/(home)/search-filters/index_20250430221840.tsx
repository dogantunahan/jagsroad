interface Props {
  data: any
}

export const SearchFilters = ({ data }: Props) => {
  return <div>{JSON.stringify(data, null, 2)}</div>
}
