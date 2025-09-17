import { motion } from "framer-motion";

export default function Media() {
  const videos = [
    { title: "Gameplay 1", url: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
    { title: "Gameplay 2", url: "https://www.youtube.com/embed/oHg5SJYRHA0" }
  ];

  const discords = [
    { name: "Servidor Principal", invite: "https://discord.gg/seuconvite" },
    { name: "Servidor Secundário", invite: "https://discord.gg/seulink" }
  ];

  return (
    <div className="p-10">
      <h1 className="text-4xl font-bold text-center mb-10">Mídia do Clã</h1>

      <section className="grid md:grid-cols-2 gap-8 mb-20">
        {videos.map((vid, i) => (
          <motion.div key={i} whileHover={{ scale: 1.02 }} className="bg-gray-800 p-4 rounded-xl shadow-lg">
            <iframe className="w-full h-64 rounded-lg" src={vid.url} title={vid.title} allowFullScreen />
            <h3 className="mt-4 text-xl">{vid.title}</h3>
          </motion.div>
        ))}
      </section>

      <section className="grid md:grid-cols-2 gap-8">
        {discords.map((d, i) => (
          <motion.div key={i} whileHover={{ scale: 1.05 }} className="bg-gray-900 p-6 rounded-xl shadow-lg flex justify-between items-center">
            <h3 className="text-xl">{d.name}</h3>
            <a href={d.invite} className="bg-blue-500 px-4 py-2 rounded-lg hover:bg-blue-600">Entrar</a>
          </motion.div>
        ))}
      </section>
    </div>
  );
}