
type WithDefault<T, D> = {[K in keyof T]: K extends keyof D ? Exclude<T[K] | D[K], undefined> : T[K]}
type Extend<T, N> = {
  [K in Exclude<keyof T, keyof N>]: T[K]
} & {
  [K in Exclude<keyof N, keyof T>]: N[K]
} & {
  [K in keyof N & keyof T]: T[K] | N[K]
}

type Part<T> =  { [P in keyof T]?: T[P] }