import Link from "next/link"
export default function NoFound() {
  return (
    <div>
      <Link href='/'>Blog's News</Link>  
      <h1>404</h1>
      <p>Página no encontrada</p>
    </div>    
  )
}