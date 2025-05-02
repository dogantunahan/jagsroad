'use client'

import z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { Poppins } from 'next/font/google'
import { Form } from '@/components/ui/form'
import { useForm } from 'react-hook-form'

import { registerSchema } from '../../schemas'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['700'],
})

export const SignUpView = () => {
  const form = useForm<z.infer<typeof registerSchema>>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      email: '',
      password: '',
      username: '',
    },
  })

  const onSubmit = (values: z.infer<typeof registerSchema>) => {
    console.log('values', values)
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-5">
      <div className="bg-[#F4F4F0] h-screen w-full lg:col-span-3 overflow-y-auto">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="flex flex-col gap-8 p-4 lg:p-16"
          >
            <div className="flex items-center justify-between mb-8">
              <Link href="/">
                <span
                  className={cn('text-2xl font-semibold', poppins.className)}
                >
                  funroad
                </span>
              </Link>
              <Button
                asChild
                variant="ghost"
                size="sm"
                className="text-base border rounded-2xl"
              >
                <Link prefetch href="sign-in">
                  <span
                    className={cn(
                      'text-sm font-semibold text-[#4B5563]',
                      poppins.className
                    )}
                  >
                    Sign in
                  </span>
                </Link>
              </Button>
            </div>
          </form>
        </Form>
      </div>
      <div
        className="h-screen w-full lg:col-span-2 hidden lg:block"
        style={{
          background: "url('/auth-bg.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
    </div>
  )
}
