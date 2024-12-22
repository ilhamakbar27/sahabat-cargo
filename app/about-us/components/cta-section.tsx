import { motion } from "framer-motion"
import { ArrowRight } from 'lucide-react'
import { Button } from "@/components/ui/button"

const CtaSection = () => (
  <section className="py-20 bg-blue-600">
    <div className="max-w-screen-xl mx-auto px-4 md:px-8">
      <motion.div
        className="text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold text-white sm:text-4xl mb-4">Siap Untuk Memulai?</h2>
        <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
          Hubungi kami sekarang untuk solusi logistik yang sesuai dengan kebutuhan bisnis Anda.
        </p>
        <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50">
          Hubungi Kami
          <ArrowRight className="ml-2 h-5 w-5" />
        </Button>
      </motion.div>
    </div>
  </section>
)

export default CtaSection

