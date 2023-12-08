import { APIRoute } from 'astro'

export const CustomEndPoint = () => {
  return new Response(
    JSON.stringify({
      greeting: 'Hola hola',
    }),
  )
}