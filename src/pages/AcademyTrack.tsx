import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, GraduationCap, BookOpen, Microscope, Globe, Award, Star, TrendingUp } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { GoldButton } from '../App';

const AcademyTrack = () => {
  const navigate = useNavigate();
  const phases = [
    {
      title: 'שלב א׳: האקדמיה (הווה)',
      subtitle: 'הכשרה אינטנסיבית ויישומית',
      icon: <BookOpen className="text-gold" size={32} />,
      items: [
        'קורסי AI ופיתוח תוכנה מתקדמים',
        'למידה מבוססת פרויקטים (PBL)',
        'ליווי צמוד של מנטוריות מהתעשייה',
        'הכשרה מותאמת אישית לאורח החיים החרדי'
      ]
    },
    {
      title: 'שלב ב׳: התרחבות בינלאומית',
      subtitle: 'חיבור למוקדי ידע עולמיים',
      icon: <Globe className="text-gold" size={32} />,
      items: [
        'אירוח מרצים ומומחים מובילים מחו"ל',
        'הענקת תעודות הסמכה בינלאומיות',
        'שיתופי פעולה עם אוניברסיטאות מובילות בעולם',
        'סמינרים מקצועיים וסדנאות אמן'
      ]
    },
    {
      title: 'שלב ג׳: האוניברסיטה (חזון)',
      subtitle: 'מרכז מחקר והשכלה גבוהה',
      icon: <Microscope className="text-gold" size={32} />,
      items: [
        'הענקת תארים אקדמיים מוכרים',
        'הקמת מעבדות מחקר בתחום ה-AI',
        'פרסום מחקרים פורצי דרך בשיתוף התעשייה',
        'ביסוס המותג כמרכז ידע עולמי לנשים חרדיות'
      ]
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
            מסלול הכשרה וצמיחה
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
              <GraduationCap size={48} className="text-gold" />
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 font-serif italic">מסלול הכשרה וצמיחה</h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              החזון שלנו הוא להפוך מאקדמיה להכשרה מקצועית לאוניברסיטה מובילה המשלבת מחקר, תארים וקשרים בינלאומיים.
            </p>
          </div>

          <div className="grid gap-12">
            {phases.map((phase, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: idx % 2 === 0 ? 20 : -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="glass p-8 md:p-12 rounded-3xl border border-white/5 hover:border-gold/30 transition-all duration-500">
                  <div className="flex flex-col md:flex-row gap-8 items-start">
                    <div className="p-4 rounded-2xl bg-gold/10 border border-gold/20">
                      {phase.icon}
                    </div>
                    <div className="flex-1">
                      <h2 className="text-3xl font-bold text-white mb-2">{phase.title}</h2>
                      <p className="text-gold font-mono uppercase tracking-widest mb-6 text-sm">{phase.subtitle}</p>
                      
                      <div className="grid sm:grid-cols-2 gap-4">
                        {phase.items.map((item, i) => (
                          <div key={i} className="flex items-center gap-3 text-gray-300 bg-white/5 p-4 rounded-xl border border-white/5">
                            <Star size={16} className="text-gold flex-shrink-0" />
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                {idx < phases.length - 1 && (
                  <div className="hidden md:flex justify-center my-4">
                    <TrendingUp className="text-gold/20" size={40} />
                  </div>
                )}
              </motion.div>
            ))}
          </div>

          <div className="mt-20 glass p-12 rounded-3xl border border-gold/20 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gold/5 pointer-events-none" />
            <Award className="text-gold mx-auto mb-6" size={64} />
            <h2 className="text-3xl font-bold text-white mb-6">הסמכה בינלאומית ומחקר</h2>
            <p className="text-gray-300 text-lg leading-relaxed max-w-2xl mx-auto mb-10">
              הבוגרות שלנו לא רק מקבלות ידע, אלא הופכות לחלק מקהילה אקדמית גלובלית. שיתופי הפעולה שלנו עם מומחים מחו"ל מבטיחים שכל תעודה וכל מחקר שיוצא מבינתה יעמוד בסטנדרטים הגבוהים ביותר בעולם.
            </p>
            <GoldButton variant="solid" onClick={() => navigate(-1)}>חזרה לדף הבית</GoldButton>
          </div>
        </motion.div>
      </main>
    </div>
  );
};

export default AcademyTrack;
