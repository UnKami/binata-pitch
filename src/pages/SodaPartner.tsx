import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Shield, Cpu, Zap, ExternalLink, FileText, CheckCircle, Globe } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { GoldButton } from '../App';

const SodaPartner = () => {
  const navigate = useNavigate();
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
            שותף אסטרטגי: סודה
          </div>
        </div>
      </nav>

      <main className="container mx-auto px-6 pt-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto"
        >
          <div className="flex flex-col md:flex-row items-center gap-8 mb-12">
            <div className="w-32 h-32 rounded-3xl bg-gold/10 border border-gold/20 flex items-center justify-center flex-shrink-0">
              <Shield size={64} className="text-gold" />
            </div>
            <div className="text-center md:text-right">
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 font-serif italic">Soda</h1>
              <p className="text-gold font-mono uppercase tracking-widest">שותף טכנולוגי אסטרטגי</p>
            </div>
          </div>

          <div className="glass p-8 md:p-12 rounded-3xl border border-white/5 mb-12">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <Zap className="text-gold" />
              <span>השותפות עם בינתה</span>
            </h2>
            <p className="text-gray-300 text-lg md:text-xl leading-relaxed mb-8">
              חברת סודה מביאה עמה כ-13 שנות מומחיות במנועי בינה מלאכותית (AI) ואוטומציה. פיתוח הדגל האחרון של החברה הוא מערכת הגנת סייבר מתקדמת המבוססת על סוכני AI המחוברים למערכות SIEM. סוכנים אלו מנטרים, מנתחים אירועים משלב המניעה ועד לתגובה, ומספקים המלצות מדויקות לצוותי ההגנה (Blue Team) בכפוף לרגולציה ולמדיניות החברה. בעת התקפה מסיבית, המערכת מזניקה אוטומטית אלפי סוכנים לפעולת בלימה והגנה, תוך עצירה לאישור מנהלים בצמתי החלטה קריטיים, מה שמבטיח שליטה מלאה והגנה הרמטית.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
              <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
                <Shield className="text-gold mb-4" size={32} />
                <h3 className="text-white font-bold mb-2">הגנת סייבר מבוססת AI</h3>
                <p className="text-sm text-gray-400">סוכני AI מתקדמים לאינטגרציה עם מערכות SIEM ותגובה אוטומטית לאיומים.</p>
              </div>
              <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
                <Cpu className="text-gold mb-4" size={32} />
                <h3 className="text-white font-bold mb-2">13 שנות מומחיות</h3>
                <p className="text-sm text-gray-400">עשור של ניסיון במנועי AI, אוטומציה וארכיטקטורת מערכות מורכבות.</p>
              </div>
            </div>
          </div>

          <div className="glass p-8 md:p-12 rounded-3xl border border-white/5">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <FileText className="text-gold" />
              <span>פרויקטים ומידע נוסף</span>
            </h2>
            <p className="text-gray-400 mb-8">
              ניתן לקרוא על אחד הפרויקטים שסודה בנתה במסמך הבא, או לבקר באתר החברה:
            </p>
            <div className="flex flex-col md:flex-row gap-4">
              <GoldButton 
                variant="solid" 
                onClick={() => window.open('https://drive.google.com/file/d/17V2vjT4ZLaGElRqlge1yzR1x6gn7Jfon/view', '_blank')}
                className="w-full md:w-auto"
              >
                <span>צפייה במסמך הפרויקט</span>
                <ExternalLink size={18} />
              </GoldButton>
              <GoldButton 
                onClick={() => window.open('https://www.soda-dev.com/', '_blank')}
                className="w-full md:w-auto"
              >
                <span>לאתר חברת סודה</span>
                <Globe size={18} />
              </GoldButton>
            </div>
          </div>

          <div className="mt-16 text-center">
            <GoldButton onClick={() => navigate(-1)}>חזרה לדף הבית</GoldButton>
          </div>
        </motion.div>
      </main>
    </div>
  );
};

export default SodaPartner;
