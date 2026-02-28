import { memo } from 'react';
import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';

/**
 * RevealWrap — shared scroll-triggered fade-up wrapper.
 * Memoized so parent re-renders don't re-create this component.
 */
const RevealWrap = memo(function RevealWrap({ children, delay = 0, className = '' }) {
  const [ref, isInView] = useInView({ threshold: 0.15 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
});

export default RevealWrap;
