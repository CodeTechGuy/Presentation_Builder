import { createFileRoute } from '@tanstack/react-router'

import { Switch } from '#/components/ui/switch'

export const Route = createFileRoute('/')({ component: Home })

function Home() {
  return (
    <div>
      <Switch/>
    </div>
  )
}
