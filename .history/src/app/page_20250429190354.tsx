import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

export default function Home() {
  return (
    <div className="flex flex-col gap-y-4">
      <div>
        <Button>
          I am a button
        </Button>
      </div>
      <div>
        <Input>
          I am a button
        </Input>
      </div>
    </div>
  )
}
