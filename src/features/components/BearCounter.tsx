import { useBearStore } from '@/stores/useBearStore'

export function BearCounter() {
  const bears = useBearStore((state) => state.bears)
  return <h1>{bears} bears around here...</h1>
}