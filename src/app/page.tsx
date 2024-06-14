"use client"
import InputField from '@/components/form/InputField'
import { signIn } from 'next-auth/react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { FiLock, FiMail } from "react-icons/fi"
import Link from 'next/link'
import SlideButton from '@/components/form/SlideButton'
import AVATAR_STUDENT from "../../public/images/StudentAvatar.png"




export default function HomePage() {

  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)
  const FormSchema = z.object({
    email: z.string().email("Please enter a valid email adress."),
    password: z
      .string()
      .min(4, "Password must be atleast 6 characters.")
      .max(52, "Password must be less than 52 characters."),
  })


  type FormSchemaType = z.infer<typeof FormSchema>

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting }
  } = useForm<FormSchemaType>({
    resolver: zodResolver(FormSchema)
  })



  const onSubmit = async (values: any) => {

    setIsLoading(true)
    const response = await signIn('credentials', {
      email: values.email,
      password: values.password,
      redirect: false
    })
    if (!response?.ok) {
      console.log("repp", response)
      setIsLoading(false)
    } else {
      router.push("/dashboard")
      setTimeout(() => {
        setIsLoading(false)
      }, 2000)
    }

  }



  return (
    <section>
      <section className='flex justify-center'>
        <div className='flex flex-col justify-center absolute items-center top-24'>
          <div className='w-[100px] h-[100px] rounded-full overflow-hidden'>
            <Image src={AVATAR_STUDENT} alt='Photo' />
          </div>
          <div className='mb-4'>
            <p className='text-3xl font-extrabold'>Welcome back!</p>
            <p className='text-xl'>Login to your account</p>
          </div>
        </div>
      </section>
      <main className='bg-secondary h-screen flex flex-col justify-center items-center'>
        <div className=" bg-white border py-10 w-[23rem] sm:w-96 px-4 sm:px-8 ">
          <div className="">
            <form className="space-y-2" onSubmit={handleSubmit(onSubmit)}>
              <InputField
                name="email"
                label="Email address"
                type="text"
                icon={<FiMail />}
                placeholder=""
                register={register}
                error={errors?.email?.message}
                disabled={isSubmitting}
              />
              <div className='pt-1'>
                <InputField
                  name="password"
                  label="Password"
                  type="password"
                  icon={<FiLock />}
                  placeholder=""
                  register={register}
                  error={errors?.password?.message}
                  disabled={isSubmitting}
                />
              </div>
              <section className='mt-8'>
                <div className="mt-3 hover:underline w-fit">
                  <Link href="/forgot" className=" text-blue-600">
                    Forgot password ?
                  </Link>
                </div>
                <SlideButton
                  type="submit"
                  text="Sign in"
                  slide_text="Secure sign in"
                  icon={<FiLock />}
                  disabled={isLoading}
                />
              </section>
            </form>
          </div>
        </div>
      </main>
    </section>
  )
}


