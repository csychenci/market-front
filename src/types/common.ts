export type CommonOptionType<K, V, T = {}> = {
  label: K,
  value: V
} & T