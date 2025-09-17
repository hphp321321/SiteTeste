import { motion } from "framer-motion";
import { Sword, Map, Users, Star } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <header className="flex justify-between items-center p-6 bg-black bg-opacity-70 fixed w-full z-50">
        <h1 className="text-2xl font-bold">Neve Eterna</h1>
        <nav className="space-x-6">
          <Link href="/" className="hover:text-blue-400">Home</Link>
          <Link href="/media" className="hover:text-blue-400">Mídia</Link>
        </nav>
      </header>

      <section className="h-screen flex flex-col justify-center items-center bg-cover bg-center" style={{ backgroundImage: "url('/hero-clan.jpg')" }}>
        <motion.h2 initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} className="text-5xl font-bold">Seja parte do Clã</motion.h2>
        <p className="mt-4 text-xl">Força, união e estratégia</p>
      </section>

      <section className="py-20 px-10 grid md:grid-cols-3 gap-10">
        {[
          { icon: Sword, title: "Roaming", desc: "Exploração estratégica e domínio do mapa." },
          { icon: Map, title: "Mapas", desc: "Planejamento e táticas avançadas." },
          { icon: Users, title: "Comunidade", desc: "Um clã unido pela vitória." }
        ].map((item, i) => (
          <motion.div key={i} whileHover={{ scale: 1.05 }} className="bg-gray-800 p-6 rounded-2xl shadow-lg">
            <item.icon className="w-12 h-12 mb-4 text-blue-400" />
            <h3 className="text-xl font-semibold">{item.title}</h3>
            <p className="mt-2 text-gray-300">{item.desc}</p>
          </motion.div>
        ))}
      </section>

      <section className="py-20 text-center bg-gray-900">
        <h2 className="text-3xl font-bold">Junte-se no Discord</h2>
        <a href="https://discord.gg/seuconvite" className="mt-6 inline-block bg-blue-500 px-6 py-3 rounded-lg hover:bg-blue-600">Entrar</a>
      </section>

      <footer className="py-6 text-center bg-black">
        <p>© 2025 Neve Eterna - Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}