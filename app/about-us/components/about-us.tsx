import { motion } from "framer-motion"
import { Globe, Anchor, TrendingUp } from 'lucide-react'
import { Card, CardContent } from "@/components/ui/card"

const features = [
  {
    icon: <Globe className="w-8 h-8 text-blue-600" />,
    title: "Jangkauan Luas",
    description: "Layanan kami mencakup seluruh wilayah Indonesia, dari Sabang hingga Merauke."
  },
  {
    icon: <Anchor className="w-8 h-8 text-blue-600" />,
    title: "Armada Modern",
    description: "Kami mengoperasikan armada kapal dan truk modern untuk pengiriman yang efisien."
  },
  {
    icon: <TrendingUp className="w-8 h-8 text-blue-600" />,
    title: "Inovasi Teknologi",
    description: "Sistem pelacakan real-time dan platform digital untuk kemudahan pelanggan."
  }
]

const AboutUsSection = () => (
  <section className="py-20 bg-gray-50">
    <div className="max-w-screen-xl mx-auto px-4 md:px-8">
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">Mengapa Memilih Kami?</h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Putra Dunia Cargo adalah mitra terpercaya dalam industri logistik Indonesia. Kami menggabungkan pengalaman, teknologi, dan dedikasi untuk memberikan layanan terbaik.
        </p>
      </motion.div>
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((feature, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: idx * 0.1 }}
            viewport={{ once: true }}
          >
            <Card className="h-full hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="bg-blue-100 p-3 rounded-full mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
)

export default AboutUsSection

