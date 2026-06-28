import { createFileRoute } from '@tanstack/react-router'
import { Switch } from '#/components/ui/switch'
import { authClient } from '#/lib/auth-client'

export const Route = createFileRoute('/')({ component: App })

function App() {
  const {data} = authClient.useSession()
  console.log(data)
  return (
    <div>
      <Switch/>
    </div>
  )
}
