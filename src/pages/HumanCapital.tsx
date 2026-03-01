import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Users, Brain, Heart, Zap, Shield } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { GoldButton } from '../App';

const HumanCapital = () => {
  const navigate = useNavigate();
  const traits = [
    {
      title: 'יכולות קוגניטיביות גבוהות',
      desc: 'נשות אברכים מגיעות עם רקע של למידה מעמיקה, יכולת ניתוח מורכבת ומשמעת עצמית גבוהה, המאפשרות להן להשתלט על טכנולוגיות AI מתקדמות במהירות שיא.',
      icon: <Brain className="text-gold" size={32} />
    },
    {
      title: 'מוטיבציה וערכיות',
      desc: 'המחויבות לפרנסת הבית מתוך שליחות וערכי התורה יוצרת מוסר עבודה בלתי מתפשר, נאמנות לארגון ורצון עז להצליח ולהוביל.',
      icon: <Heart className="text-gold" size={32} />
    },
    {
      title: 'ריכוז ותפוקה מקסימלית',
      desc: 'סביבת העבודה המותאמת מאפשרת ריכוז מלא במשימות הפיתוח, ללא הסחות דעת, מה שמוביל לתפוקה טכנולוגית איכותית ומהירה יותר מהממוצע בשוק.',
      icon: <Zap className="text-gold" size={32} />
    },
    {
      title: 'יציבות תעסוקתית',
      desc: 'המודל של בינתה מעניק מענה מושלם לצרכי המשפחה החרדית, מה שמבטיח יציבות ארוכת טווח של כוח האדם ושימור ידע קריטי בתוך החברה.',
      icon: <Shield className="text-gold" size={32} />
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
            פרופיל ההון האנושי
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
            <div className="inline-block p-4 rounded-full bg-gold/10 border border-gold/20 mb-6">
              <Users size={48} className="text-gold" />
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 font-serif italic">פרופיל ההון האנושי</h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              הכוח המניע מאחורי בינתה הוא נבחרת של נשים חרדיות, נשות אברכים, המשלבות מצוינות אינטלקטואלית עם מחויבות ערכית עמוקה.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-20">
            {traits.map((trait, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="glass p-8 rounded-3xl border border-white/5 hover:border-gold/30 transition-all group"
              >
                <div className="mb-6 p-4 rounded-2xl bg-gold/10 border border-gold/20 w-fit group-hover:scale-110 transition-transform">
                  {trait.icon}
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{trait.title}</h3>
                <p className="text-gray-400 leading-relaxed">{trait.desc}</p>
              </motion.div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <GoldButton variant="solid" onClick={() => navigate(-1)}>חזרה לדף הבית</GoldButton>
          </div>
        </motion.div>
      </main>
    </div>
  );
};

export default HumanCapital;
