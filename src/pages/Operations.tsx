import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Settings, Cpu, Layout, MapPin, CheckCircle, Database, Zap } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { GoldButton } from '../App';

const Operations = () => {
  const navigate = useNavigate();

  const systems = [
    {
      title: 'מערכת AMAS: תשתית סוכני AI לניהול ואוטומציה ארגונית',
      desc: 'ניהול הפעילות מתבסס על מערכת סוכני AI המהווה את "קו הזינוק" האופרטיבי לאוטומציה מלאה של "בינתה". אסטרטגית, זוהי תשתית ה-White-Label הראשונה שלנו, המיועדת להטמעה בארגונים גלובליים כפתרון ניהול סקילבילי תחת המותג שלהם.',
      icon: <Cpu className="text-gold" size={32} />
    },
    {
      title: 'LMS & Knowledge Base',
      desc: 'פלטפורמת למידה מתקדמת המרכזת את כל הידע המקצועי, ההרצאות הבינלאומיות ומאגרי הקוד, ומאפשרת הכשרה רציפה ועדכנית לכל עובדת.',
      icon: <Database className="text-gold" size={32} />
    },
    {
      title: 'Operational Dashboard',
      desc: 'ממשק ניהול אחוד המעניק למנהלי הפרויקטים תמונת מצב מלאה על התקדמות הפיתוח, עמידה בלוחות זמנים ובקרת איכות קפדנית.',
      icon: <Layout className="text-gold" size={32} />
    }
  ];

  const deployment = [
    { city: 'ירושלים', status: 'קמפוס פעיל', desc: '2 צוותים של 5 מהנדסות' },
    { city: 'מודיעין עילית', status: 'בתהליך הקמה', desc: '2 צוותים של 5 מהנדסות' },
    { city: 'נתניה', status: 'תכנון עתידי', desc: '2 צוותים של 5 מהנדסות' },
    { city: 'הוד השרון', status: 'תכנון עתידי', desc: '2 צוותים של 5 מהנדסות' },
    { city: 'אשקלון', status: 'תכנון עתידי', desc: '2 צוותים של 5 מהנדסות' },
    { city: 'בני ברק', status: 'בתהליך הקמה', desc: '2 צוותים של 5 מהנדסות' },
    { city: 'אלעד', status: 'תכנון עתידי', desc: '2 צוותים של 5 מהנדסות' },
    { city: 'בית שמש', status: 'תכנון עתידי', desc: '2 צוותים של 5 מהנדסות' },
    { city: 'ביתר', status: 'תכנון עתידי', desc: '2 צוותים של 5 מהנדסות' },
    { city: 'גבעת זאב', status: 'תכנון עתידי', desc: '2 צוותים של 5 מהנדסות' }
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
            תשתית תפעולית וטכנולוגית
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
              <Settings size={48} className="text-gold" />
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 font-serif italic">תשתית תפעולית</h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              המודל האופרטיבי של בינתה נשען על טכנולוגיה מתקדמת המאפשרת ניהול יעיל של מאות מפתחות במודל עבודה ייחודי.
            </p>
          </div>

          {/* Systems Section */}
          <div className="mb-32">
            <h2 className="text-3xl font-bold text-white mb-12 flex items-center gap-4">
              <Zap className="text-gold" />
              <span>מערכות ניהול ומוצרים פנימיים</span>
            </h2>
            <div className="grid gap-8">
              {systems.map((sys, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="glass p-8 rounded-3xl border border-white/5 hover:border-gold/30 transition-all flex flex-col md:flex-row gap-8 items-start"
                >
                  <div className="p-4 rounded-2xl bg-gold/10 border border-gold/20 shrink-0">
                    {sys.icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-4">{sys.title}</h3>
                    <p className="text-gray-400 leading-relaxed text-lg">{sys.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Deployment Section */}
          <div className="mb-32">
            <h2 className="text-3xl font-bold text-white mb-12 flex items-center gap-4">
              <MapPin className="text-gold" />
              <span>פריסה ארצית מתוכננת</span>
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {deployment.map((loc, idx) => (
                <div key={idx} className="glass p-6 rounded-2xl border border-white/5 flex items-start gap-4">
                  <CheckCircle className={idx === 0 ? "text-gold" : "text-gray-600"} size={24} />
                  <div>
                    <h4 className="text-xl font-bold text-white">{loc.city}</h4>
                    <p className="text-gold text-sm font-mono mb-2">{loc.status}</p>
                    <p className="text-gray-400 text-sm">{loc.desc}</p>
                  </div>
                </div>
              ))}
            </div>
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

export default Operations;
