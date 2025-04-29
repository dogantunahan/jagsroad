import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

export default function Home() {
  return (
    <div className="flex flex-col gap-y-4">
      <div>
        <Button>I am a Button</Button>
      </div>
      <div>
        <Input placeholder="I am an Input" />
      </div>
    </div>
  )
}
