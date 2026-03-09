import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Clock, Users, ShieldCheck } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { GoldButton } from '../App';

const UniqueAdvantages = () => {
  const navigate = useNavigate();
  
  const advantages = [
    {
      title: '5 שעות ביום',
      desc: 'איזון עבודה-בית אופטימלי המאפשר ריכוז שיא ושימור אנרגיה לאורך זמן.',
      icon: <Clock className="text-gold" size={32} />
    },
    {
      title: 'קהילה תומכת',
      desc: 'מעטפת חברתית, ליווי אישי וקהילה המותאמת לצרכי המשפחה והעובדת.',
      icon: <Users className="text-gold" size={32} />
    },
    {
      title: 'שמירה מגדרית ותרבותית',
      desc: 'סביבת העבודה ההומוגנית המכבדת ומשמרת את ערכי הבית היהודי ואורח החיים החרדי.',
      icon: <ShieldCheck className="text-gold" size={32} />
    }
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-gray-200 font-sans selection:bg-gold selection:text-black pb-20" dir="rtl">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-white/5">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <button 
            onClick={() => navigate(-1)}
            className="text-2xl font-bold text-gold tracking-widest font-serif flex items-center gap-2 hover:text-white transition-colors"
          >
            <ArrowLeft size={20} className="rotate-180" />
            <span>BINATAH</span>
          </button>
          <div className="text-sm font-medium text-gold uppercase tracking-widest hidden md:block">
            יתרונות ייחודיים
          </div>
        </div>
      </nav>

      <main className="container mx-auto px-6 pt-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-5xl mx-auto"
        >
          <div className="text-center mb-20">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 font-serif italic">יתרונות ייחודיים</h1>
            <div className="h-1.5 w-24 bg-gold mx-auto rounded-full"></div>
          </div>

          <div className="space-y-6">
            {advantages.map((adv, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="glass p-8 rounded-3xl border border-white/5 hover:border-gold/30 transition-all group flex items-center gap-8"
              >
                <div className="p-4 rounded-2xl bg-gold/10 border border-gold/20 group-hover:scale-110 transition-transform">
                  {adv.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gold mb-2">{adv.title}</h3>
                  <p className="text-gray-400 text-lg leading-relaxed">{adv.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-20 text-center">
            <GoldButton variant="solid" onClick={() => navigate(-1)}>
              חזרה לדף הבית
            </GoldButton>
          </div>
        </motion.div>
      </main>
    </div>
  );
};

export default UniqueAdvantages;
