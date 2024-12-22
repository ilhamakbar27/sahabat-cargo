import { motion } from 'framer-motion'

export const ShippingIllustration = () => {
  return (
    <div className="relative w-full h-48 mb-8">
      <motion.div
        className="absolute left-0 bottom-0 w-16 h-16 bg-blue-500 rounded-full"
        animate={{
          x: [0, 250, 250, 0],
          y: [0, -50, -50, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute left-0 bottom-0 w-24 h-1 bg-blue-300"
        animate={{
          scaleX: [0, 1, 1, 0],
          x: [0, 0, 250, 250],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute right-0 top-0 w-16 h-16 bg-indigo-500 rounded-full"
        animate={{
          x: [0, -250, -250, 0],
          y: [0, 50, 50, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute right-0 top-8 w-24 h-1 bg-indigo-300"
        animate={{
          scaleX: [0, 1, 1, 0],
          x: [0, -250, -250, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </div>
  )
}

