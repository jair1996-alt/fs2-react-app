import { Link } from "wouter";

export default function Menu() {
  return (
    <nav>
      <Link href="/">Inicio</Link> | <Link href="/login">Login</Link> |{" "}
      <Link href="/register">Registro</Link>
    </nav>
  );
}