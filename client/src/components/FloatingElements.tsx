import { motion } from 'framer-motion';

export default function FloatingElements() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Floating AI Agent Icon */}
      <motion.div
        className="absolute top-20 left-10 text-5xl"
        animate={{
          y: [0, -20, 0],
          x: [0, 10, -10, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          repeatType: 'loop',
        }}
      >
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 8, repeat: Infinity, repeatType: 'loop' }}
          className="text-green-600"
          style={{ textShadow: '0 0 20px rgba(34, 197, 94, 0.8)' }}
        >
          🤖
        </motion.div>
      </motion.div>

      {/* Floating Claude Icon */}
      <motion.div
        className="absolute top-40 right-20 text-5xl"
        animate={{
          y: [0, -20, 0],
          x: [0, 10, -10, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          repeatType: 'loop',
          delay: 1,
        }}
      >
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 8, repeat: Infinity, repeatType: 'loop' }}
          className="text-green-600"
          style={{ textShadow: '0 0 20px rgba(34, 197, 94, 0.8)' }}
        >
          ⚡
        </motion.div>
      </motion.div>

      {/* Floating Code Icon */}
      <motion.div
        className="absolute top-1/3 left-1/4 text-4xl"
        animate={{
          y: [0, -20, 0],
          x: [0, 10, -10, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          repeatType: 'loop',
          delay: 0.5,
        }}
      >
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 8, repeat: Infinity, repeatType: 'loop' }}
          className="text-green-600"
          style={{ textShadow: '0 0 20px rgba(34, 197, 94, 0.8)' }}
        >
          {'</>'}
        </motion.div>
      </motion.div>

      {/* Floating Automation Icon */}
      <motion.div
        className="absolute bottom-1/3 right-1/4 text-5xl"
        animate={{
          y: [0, -20, 0],
          x: [0, 10, -10, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          repeatType: 'loop',
          delay: 1.5,
        }}
      >
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 8, repeat: Infinity, repeatType: 'loop' }}
          className="text-green-600"
          style={{ textShadow: '0 0 20px rgba(34, 197, 94, 0.8)' }}
        >
          ⚙️
        </motion.div>
      </motion.div>

      {/* Floating Data Icon */}
      <motion.div
        className="absolute bottom-1/4 left-1/3 text-4xl"
        animate={{
          y: [0, -20, 0],
          x: [0, 10, -10, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          repeatType: 'loop',
          delay: 2,
        }}
      >
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 8, repeat: Infinity, repeatType: 'loop' }}
          className="text-green-600"
          style={{ textShadow: '0 0 20px rgba(34, 197, 94, 0.8)' }}
        >
          📊
        </motion.div>
      </motion.div>

      {/* Pulsing circles */}
      <motion.div
        className="absolute top-1/2 right-10 w-32 h-32 border-2 border-green-600 rounded-full"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.6, 1, 0.6],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          repeatType: 'loop',
        }}
        style={{ boxShadow: '0 0 30px rgba(34, 197, 94, 0.6)' }}
      />

      <motion.div
        className="absolute bottom-1/4 left-10 w-24 h-24 border-2 border-green-600 rounded-full"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.6, 1, 0.6],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          repeatType: 'loop',
          delay: 1,
        }}
        style={{ boxShadow: '0 0 20px rgba(34, 197, 94, 0.6)' }}
      />

      {/* Floating code snippets */}
      <motion.div
        className="absolute top-1/4 right-1/3 px-4 py-2 bg-black /50 border border-green-600 rounded text-sm font-mono text-green-400"
        animate={{
          y: [0, -20, 0],
          x: [0, 10, -10, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          repeatType: 'loop',
          delay: 0.3,
        }}
        style={{ boxShadow: '0 0 15px rgba(34, 197, 94, 0.5)' }}
      >
        {'const ai = new Agent()'}
      </motion.div>

      <motion.div
        className="absolute bottom-1/3 right-1/4 px-4 py-2 bg-black /50 border border-green-600 rounded text-sm font-mono text-green-400"
        animate={{
          y: [0, -20, 0],
          x: [0, 10, -10, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          repeatType: 'loop',
          delay: 1.2,
        }}
        style={{ boxShadow: '0 0 15px rgba(34, 197, 94, 0.5)' }}
      >
        {'ai.automate()'}
      </motion.div>

      <motion.div
        className="absolute top-2/3 left-1/4 px-4 py-2 bg-black /50 border border-green-600 rounded text-sm font-mono text-green-400"
        animate={{
          y: [0, -20, 0],
          x: [0, 10, -10, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          repeatType: 'loop',
          delay: 1.8,
        }}
        style={{ boxShadow: '0 0 15px rgba(34, 197, 94, 0.5)' }}
      >
        {'deploy()'}
      </motion.div>
    </div>
  );
}
