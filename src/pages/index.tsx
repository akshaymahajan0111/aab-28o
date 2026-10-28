import { motion } from 'motion/react';
import { Helmet } from '@dr.pogodin/react-helmet';
import { home } from 'virtual:content';

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' as const } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

export default function HomePage() {
  return (
    <>
      <Helmet>
        <title>Test Page — Simple & Clean</title>
        <meta name="description" content="A minimal test page built to be clean, readable, and easy to extend." />
      </Helmet>

      <main>
        {/* Hero */}
        <section className="py-xxxl">
          <motion.div
            className="max-w-5xl mx-auto px-6"
            initial="hidden"
            animate="visible"
            variants={stagger}
          >
            <motion.p variants={fadeUp} className="text-sm font-medium text-primary mb-4 tracking-wide">
              {home.hero.eyebrow}
            </motion.p>
            <motion.h1 variants={fadeUp} className="text-4xl md:text-5xl font-bold text-foreground leading-tight max-w-2xl mb-6">
              {home.hero.headline}
            </motion.h1>
            <motion.p variants={fadeUp} className="text-lg text-muted-foreground max-w-xl mb-10">
              {home.hero.subtext}
            </motion.p>
            <motion.div variants={fadeUp}>
              <a
                href="#features"
                className="inline-flex items-center px-6 py-3 rounded-lg bg-primary text-primary-foreground text-sm font-medium hover:opacity-90 transition-opacity"
              >
                {home.hero.cta}
              </a>
            </motion.div>
          </motion.div>
        </section>

        {/* Divider */}
        <div className="max-w-5xl mx-auto px-6">
          <div className="border-t border-border" />
        </div>

        {/* Features */}
        <section id="features" className="py-xxl">
          <div className="max-w-5xl mx-auto px-6">
            <h2 className="text-2xl font-semibold text-foreground mb-lg">{home.features.heading}</h2>
            <motion.div
              className="grid grid-cols-1 md:grid-cols-3 gap-base"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={stagger}
            >
              {home.features.items.map((item) => (
                <motion.div
                  key={item.id}
                  variants={fadeUp}
                  className="p-base rounded-xl border border-border bg-card"
                >
                  <div className="w-8 h-8 rounded-md bg-primary/10 mb-4" />
                  <h3 className="text-base font-semibold text-foreground mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Info */}
        <section id="info" className="py-xxl bg-muted/40">
          <motion.div
            className="max-w-5xl mx-auto px-6 md:max-w-2xl md:mx-0 md:ml-[max(1.5rem,calc((100vw-80rem)/2+1.5rem))]"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            <motion.h2 variants={fadeUp} className="text-2xl font-semibold text-foreground mb-6">
              {home.info.heading}
            </motion.h2>
            {home.info.body.map((p) => (
              <motion.p key={p.id} variants={fadeUp} className="text-muted-foreground leading-relaxed mb-4">
                {p.text}
              </motion.p>
            ))}
            <motion.div variants={fadeUp} className="mt-8">
              <a
                href="#features"
                className="text-sm font-medium text-primary hover:underline underline-offset-4 transition-colors"
              >
                {home.info.cta} →
              </a>
            </motion.div>
          </motion.div>
        </section>
      </main>
    </>
  );
}
