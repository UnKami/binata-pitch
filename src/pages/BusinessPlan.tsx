import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  ArrowLeft, 
  TrendingUp, 
  DollarSign, 
  Users, 
  Target, 
  Briefcase, 
  Shield, 
  Globe, 
  Rocket, 
  CheckCircle, 
  AlertTriangle, 
  Zap, 
  Search, 
  PieChart,
  MapPin,
  Award,
  FileText,
  BarChart3
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Section = ({ title, children, icon: Icon, isRtl }: { title: string, children: React.ReactNode, icon?: any, isRtl: boolean }) => (
  <motion.section 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className={`mb-16 ${isRtl ? 'text-right' : 'text-left'}`}
    dir={isRtl ? 'rtl' : 'ltr'}
  >
    <div className="flex items-center gap-4 mb-8">
      {Icon && <div className="p-3 rounded-xl bg-gold/10 text-gold"><Icon size={24} /></div>}
      <h2 className={`text-3xl font-bold text-white font-serif ${isRtl ? 'text-right' : 'text-left'}`}>{title}</h2>
    </div>
    <div className="glass border-white/5 rounded-3xl p-8 md:p-12">
      {children}
    </div>
  </motion.section>
);

const Table = ({ headers, rows, isRtl }: { headers: string[], rows: (string | number)[][], isRtl: boolean }) => (
  <div className="overflow-x-auto">
    <table className={`w-full ${isRtl ? 'text-right' : 'text-left'} border-collapse`} dir={isRtl ? 'rtl' : 'ltr'}>
      <thead>
        <tr className="border-b border-white/10">
          {headers.map((h, i) => (
            <th key={i} className={`py-4 px-4 text-gold font-serif italic text-sm uppercase tracking-wider ${isRtl ? 'text-right' : 'text-left'}`}>{h}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((row, i) => (
          <tr key={i} className="border-b border-white/5 hover:bg-white/5 transition-colors">
            {row.map((cell, j) => (
              <td key={j} className={`py-4 px-4 text-gray-300 font-mono text-sm ${isRtl ? 'text-right' : 'text-left'}`}>{cell}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export default function BusinessPlan() {
  const navigate = useNavigate();
  const [lang, setLang] = useState<'he' | 'en'>('he');
  const isRtl = lang === 'he';

  const t = {
    he: {
      back: 'חזרה לדף הבית',
      confidential: 'תוכנית עסקית סודית',
      title: 'תוכנית עסקית מקיפה',
      subtitle: 'מפת דרכים אסטרטגית ל-20 חודשים',
      memory: 'לעילוי נשמת מרים חנה בת יפה מונסונגו הי"ד',
      toc: 'תוכן עניינים',
      sections: [
        '1. תמצית מנהלים',
        '2. הגדרת הבעיה והזדמנות בשוק',
        '3. מודל עסקי',
        '4. מערכת AMAS',
        '5. תוכנית ביצוע שלבית',
        '6. תוכנית פיננסית',
        '7. ניתוח סיכונים',
        '8. יתרונות תחרותיים ובידול',
        '9. אסטרטגיית צמיחה',
        '10. אסטרטגיית יחסי ציבור וחדירה לשוק',
        '11. הנהגה וצוות',
        '12. הוכחות להצלחה',
        '13. סיכום וקריאה לפעולה'
      ],
      exec_summary: {
        title: '1. תמצית מנהלים',
        p1: 'בינתה (Binata) היא חממה טכנולוגית ובית תוכנה לבינה מלאכותית שתוכננה במיוחד עבור נשים חרדיות (נשות אברכים). השם נגזר מהפסוק "חכמת נשים בנתה ביתה".',
        p2: 'בינתה נותנת מענה לפער קריטי בשוק: נשים חרדיות בעלות יכולות גבוהות המתמודדות עם חסמים מערכתיים להשתלבות בשוק ההייטק - לא בגלל חוסר יכולת, אלא בגלל חוסר התאמה בין סביבות עבודה קונבנציונליות לבין מחויבויותיהן הדתיות והמשפחתיות.',
        proposition_title: '1.1 הצעת הערך המרכזית',
        proposition_p: 'המודל של בינתה בנוי על שלושה עמודי תווך משולבים:',
        pillar1: 'אקדמיה: הכשרה אינטנסיבית ב-AI ופיתוח תוכנה בהובלת מרצים בינלאומיים.',
        pillar2: 'בית תוכנה: כל בוגרת מקבלת משרה בבית התוכנה של בינתה, המספק פתרונות AI מותאמים אישית.',
        pillar3: 'חממה/קהילה: תמיכה מתמשכת בקריירה בתוך קהילה המותאמת לאורח החיים החרדי.',
        metrics_title: '1.2 מדדי מפתח במבט חטוף',
        metrics_headers: ['פרמטר', 'יעד'],
        metrics_rows: [
          ['מפתחות שלב א\'', '30 (עד חודש 20)'],
          ['צוותים אופרטיביים', '6 צוותים של 5 מפתחות'],
          ['מודל עבודה', 'חצי משרה (~5 שעות ביום)'],
          ['דרישת מימון ראשונית', '$3,000,000'],
          ['הכנסה נטו בשיא', '$210,000 לחודש (חודש 15+)'],
          ['נקודת איזון (Breakeven)', 'חודש 29 (~60 מפתחות)']
        ]
      },
      problem: {
        title: '2. הגדרת הבעיה והזדמנות בשוק',
        pain_title: '2.1 נקודות הכאב',
        pain1: 'קונפליקט תרבותי: משרדים רגילים דורשים שעות קבועות וסביבה מעורבת הנוגדת את ערכי הקהילה.',
        pain2: 'העלות האמיתית של שעות העבודה: לאם למשפחה ברוכת ילדים, כל שעה מחוץ לבית נושאת עלות הזדמנות גבוהה.',
        pain3: 'גישה מוגבלת לתעסוקה איכותית: רוב התוכניות מכוונות נשים חרדיות לתפקידים בשכר נמוך.',
        capital_title: '2.2 הון אנושי לא מנוצל',
        capital_p: 'נשים חרדיות מהוות מאגר כישרונות יוצא דופן: מוסר עבודה גבוה, יכולות קוגניטיביות חזקות, יציבות ונאמנות גבוהה.',
        market_title: '2.3 גודל השוק',
        market_p: 'בישראל ישנו מחסור של 15,000-25,000 מהנדסי תוכנה. בינתה מגשרת על הפער בין היצע עבודה איכותי לביקוש עצום בשוק ה-AI.'
      },
      model: {
        title: '3. מודל עסקי',
        structure_title: '3.1 מבנה אופרטיבי',
        structure_headers: ['שלב', 'פעילות', 'צוותים'],
        structure_rows: [
          ['חודשים 1-6', 'הקמה ופיתוח טכנולוגיית AMAS', '0 צוותים'],
          ['חודשים 7-14', 'קבוצה 1 עובדת + קבוצה 2 לומדת', '2 צוותים (10 מפתחות)'],
          ['חודשים 15-20', 'קבוצות 1 ו-2 עובדות במלואן', '6 צוותים (30 מפתחות)']
        ],
        half_time_title: '3.2 מודל צוותי חצי-משרה',
        half_time_p: 'כל מהנדסת עובדת כ-5 שעות ביום. מערכת ה-AMAS מתאמת בין לוחות הזמנים כך שצוות של 5 מפתחות מספק תפוקה של 2.5-3.0 משרות מלאות.',
        revenue_title: '3.3 מודל הכנסות',
        revenue_p: 'שילוב של תזרים מזומנים מיידי מפרויקטים ($100 לשעה) יחד עם צבירת אקוויטי (Equity) מלקוחות סטארט-אפ.'
      },
      amas: {
        title: '4. מערכת AMAS (AI Management Assistance System)',
        p: 'מערכת ה-AMAS היא עמוד השדרה האופרטיבי המאפשר למודל הצוותים המבוזרים לעבוד באיכות של ארגון גדול.',
        capabilities: [
          'הקצאת משימות חכמה: פירוק פרויקטים למשימות המתאימות לחצי יום עבודה.',
          'תיאום לוחות זמנים: אופטימיזציה של שעות העבודה המשתנות של המפתחות.',
          'בקרת איכות (QA): סקירת קוד אוטומטית ובדיקות מבוססות AI.',
          'ניהול ידע: מאגר ידע משותף השומר על המשכיות הפרויקטים.'
        ]
      },
      execution: {
        title: '5. תוכנית ביצוע שלבית (20 חודשים)',
        phase1: 'שלב 1: תשתית (חודשים 1-6) - הקמת החברה, פיתוח AMAS ותחילת הכשרת קבוצה 1.',
        phase2: 'שלב 2: הכנסות ראשוניות (חודשים 7-14) - קבוצה 1 משתלבת בעבודה, קבוצה 2 מתחילה הכשרה.',
        phase3: 'שלב 3: סקייל מלא (חודשים 15-20) - 30 מפתחות עובדות במשרה מלאה מול לקוחות.'
      },
      financial: {
        title: '6. תוכנית פיננסית',
        dashboard_title: '6.1 לוח בקרה פיננסי (20 חודשים)',
        dashboard_headers: ['מדד', 'ערך'],
        dashboard_rows: [
          ['מימון ראשוני', '$3,000,000'],
          ['סה"כ הכנסות (ברוטו)', '$2,600,000'],
          ['סה"כ הוצאות', '$3,910,900'],
          ['יתרת מזומן בחודש 20', '$909,100']
        ],
        projection_title: '6.2 תחזית הכנסות',
        projection_p: 'חודשים 1-6: $0. חודשים 7-14: $70,000 לחודש. חודשים 15-20: $210,000 לחודש.',
        breakeven_title: '6.3 הדרך לרווחיות',
        breakeven_p: 'החברה תגיע לרווחיות חודשית עם כ-60 מפתחות פעילות, צפוי לקרות סביב חודש 29.'
      },
      risks: {
        title: '7. ניתוח סיכונים',
        positive_title: '7.1 גורמים חיוביים (מאיצי הצלחה)',
        positives: [
          'ביקוש מוכח: 12 פרויקטים כבר בשלבי חתימה מתקדמים.',
          'שותפות אסטרטגית עם Soda: ניסיון של 15+ שנים בשוק הבינלאומי.',
          'יציבות כוח אדם: שיעור תחלופה נמוך במיוחד בקרב נשים חרדיות.'
        ],
        negative_title: '7.2 גורמי סיכון ומניעה',
        negatives: [
          'פער הכשרה: פתרון ע"י תוכנית לימודים מדורגת וחניכה של מהנדסים בכירים.',
          'ביצועי AMAS: פתרון ע"י פיתוח איטרטיבי וגיבוי ניהולי ידני בשלבים ראשונים.'
        ]
      },
      advantages: {
        title: '8. יתרונות תחרותיים ובידול',
        adv1: 'יתרון במבנה עלויות: שכר תחרותי בשילוב יעילות מקסימלית בזכות AI.',
        adv2: 'נאמנות עובדות: מודל המותאם תרבותית יוצר נאמנות ארוכת טווח (5-10 שנים).',
        adv3: 'DNA של AI-First: בינתה בנויה סביב AI הן במוצרים והן בתפעול.'
      },
      scaling: {
        title: '9. אסטרטגיית צמיחה',
        p1: 'לאחר הוכחת המודל עם 30 מפתחות, נתרחב ל-100 מהנדסות בפריסה ארצית.',
        p2: 'התרחבות בינלאומית: קהילות חרדיות דומות קיימות בלייקווד, ברוקלין, לונדון ואנטוורפן.'
      },
      gtm: {
        title: '10. אסטרטגיית יחסי ציבור וחדירה לשוק',
        b2b_title: '10.1 פנייה אסטרטגית ל-B2B',
        b2b_p: 'מיצוב בינתה כשותף טכנולוגי עילית דרך כנסים בינלאומיים, פגישות ישירות עם CTOs ופורומים סגורים למנהלי טכנולוגיה.',
        digital_title: '10.2 מיתוג וקמפיינים דיגיטליים',
        digital_p: 'בניית מותג בינלאומי המשלב מצוינות טכנולוגית עם אימפקט חברתי, תוך שימוש בלינקדאין, X ותקשורת מובילה.'
      },
      team: {
        title: '11. הנהגה וצוות',
        members: [
          'לי אור - מנכ"לית (CEO)',
          'יוסי אבני - סמנכ"ל טכנולוגיות (CTO)',
          'חווה סיגלמן - מדריכה ראשית',
          'שחר כהן - סמנכ"ל שיווק (CMO)',
          'ישראל אלגרבלי - מנהל קהילה',
          'Soda - שותף טכנולוגי אסטרטגי'
        ]
      },
      evidence: {
        title: '12. הוכחות להצלחה בהסתברות גבוהה',
        items: [
          'ביקוש קיים: 12 פרויקטים בצנרת.',
          'שותף מוכח: Soda Ltd עם 15 שנות ניסיון.',
          'ודאות דמוגרפית: צמיחת האוכלוסייה החרדית.',
          'תכנון פיננסי שמרני: מימון של $3M מכסה 20 חודשי פעילות.'
        ]
      },
      conclusion: {
        title: '13. סיכום וקריאה לפעולה',
        p: 'בינתה מייצגת מפגש נדיר בין אימפקט חברתי לכדאיות עסקית. אנחנו מזמינים אתכם להצטרף אלינו בבניית הקמפוס הראשון.',
        quote: '"חכמת נשים בנתה ביתה" - בינתה בונה את הגשר בין החכמה הזו לכלכלת הטכנולוגיה.'
      }
    },
    en: {
      back: 'Back to Home',
      confidential: 'Confidential Business Plan',
      title: 'Comprehensive Business Plan',
      subtitle: '20-Month Strategic Roadmap',
      memory: 'In memory of Miriam Chana Monsonego h”yd',
      toc: 'Table of Contents',
      sections: [
        '1. Executive Summary',
        '2. Problem Statement & Market Opportunity',
        '3. Business Model',
        '4. AI Management Assistance System (AMAS)',
        '5. Phased Execution Plan',
        '6. Financial Plan',
        '7. Risk Analysis',
        '8. Competitive Advantages',
        '9. Scaling Strategy',
        '10. PR & Go-To-Market Strategy',
        '11. Leadership & Team',
        '12. Evidence of Success',
        '13. Conclusion & Call to Action'
      ],
      exec_summary: {
        title: '1. Executive Summary',
        p1: 'Binata (בינתה) is a purpose-built AI technology incubator and software house designed exclusively for Orthodox women (wives of Kollel scholars). The name derives from the Hebrew word for "her wisdom".',
        p2: 'Binata addresses a critical market gap: highly capable Orthodox women who face systemic barriers to participating in the technology workforce — not due to lack of ability, but due to incompatibility between conventional workplaces and religious obligations.',
        proposition_title: '1.1 The Core Proposition',
        proposition_p: 'Binata’s model is built on three integrated pillars:',
        pillar1: 'Academy: Intensive AI and software development training led by international-caliber instructors.',
        pillar2: 'Software House: Every graduate receives a position in Binata’s software house, delivering custom AI solutions.',
        pillar3: 'Incubator / Community: Ongoing career support within a community designed around the lifestyle of Orthodox families.',
        metrics_title: '1.2 Key Metrics at a Glance',
        metrics_headers: ['Parameter', 'Target'],
        metrics_rows: [
          ['Phase 1 Developers', '30 (By Month 20)'],
          ['Operational Teams', '6 teams of 5 developers'],
          ['Work model', 'Half-time (~5 hours/day)'],
          ['Initial funding requirement', '$3,000,000'],
          ['Peak Net Revenue', '$210,000 / month (Month 15+)'],
          ['Projected Breakeven', 'Month 29 (~60 billable developers)']
        ]
      },
      problem: {
        title: '2. Problem Statement & Market Opportunity',
        pain_title: '2.1 The Pain Points',
        pain1: 'Cultural Conflict: Conventional offices require fixed hours and mixed-gender environments that conflict with Haredi values.',
        pain2: 'The True Cost of Work Hours: For a mother of multiple children, every hour away from home carries significant opportunity cost.',
        pain3: 'Limited Access to High-Value Employment: Most programs funnel Haredi women into low-wage administrative or teaching roles.',
        capital_title: '2.2 The Untapped Human Capital',
        capital_p: 'Orthodox women represent an extraordinary talent pool: exceptional work ethic, strong cognitive abilities, and high stability.',
        market_title: '2.3 Market Sizing',
        market_p: 'Israel faces a shortage of 15,000–25,000 software engineers. Binata bridges the gap between abundant labor supply and insatiable AI demand.'
      },
      model: {
        title: '3. Business Model',
        structure_title: '3.1 Operational Structure',
        structure_headers: ['Phase', 'Activity', 'Billable Teams'],
        structure_rows: [
          ['Months 1–6', 'Company Setup & AMAS Tech Dev', '0 teams'],
          ['Months 7–14', 'Group 1 Working + Group 2 Studying', '2 teams (10 devs)'],
          ['Months 15–20', 'Group 1 & Group 2 Fully Billable', '6 teams (30 devs)']
        ],
        half_time_title: '3.2 The Half-Time Team Model',
        half_time_p: 'Each engineer works ~5 hours/day. AMAS coordinates overlapping schedules so that each 5-person team delivers the equivalent of 2.5–3.0 full-time engineers.',
        revenue_title: '3.3 Revenue Model',
        revenue_p: 'Combined Revenue Model: Immediate cash flow from development projects ($100/hr) combined with equity accumulation from startup clients.'
      },
      amas: {
        title: '4. AI Management Assistance System (AMAS)',
        p: 'AMAS is Binata’s operational backbone enabling the half-time distributed team model to function at enterprise quality levels.',
        capabilities: [
          'Intelligent Task Allocation: Decomposing projects into tasks sized for half-day work.',
          'Schedule Coordination: Optimizing team schedules based on individual availability.',
          'Quality Assurance Pipeline: Automated code review and AI-assisted quality checks.',
          'Knowledge Management: Maintaining a shared knowledge base for continuity.'
        ]
      },
      execution: {
        title: '5. Phased Execution Plan (20 Months)',
        phase1: 'Phase 1: Foundation (Months 1–6) - Company establishment, AMAS development, and C1 training begins.',
        phase2: 'Phase 2: First Cohort & Early Revenue (Months 7–14) - C1 graduates join workforce, C2 training begins.',
        phase3: 'Phase 3: Full Phase 1 Scale (Months 15–20) - 30 developers fully billable to clients.'
      },
      financial: {
        title: '6. Financial Plan',
        dashboard_title: '6.1 The 20-Month Financial Dashboard',
        dashboard_headers: ['Metric', 'Value'],
        dashboard_rows: [
          ['Initial Funding', '$3,000,000'],
          ['Total 20-Month Revenue (Gross)', '$2,600,000'],
          ['Total 20-Month Expenses', '$3,910,900'],
          ['Cash Remaining at Month 20', '$909,100']
        ],
        projection_title: '6.2 Revenue Projection (20 Months)',
        projection_p: 'Months 1-6: $0. Months 7-14: $70,000/month. Months 15-20: $210,000/month.',
        breakeven_title: '6.3 Path to Break-Even',
        breakeven_p: 'Monthly break-even requires approximately 60 billable developers, projected around Month 29.'
      },
      risks: {
        title: '7. Risk Analysis',
        positive_title: '7.1 Positive Factors (Probability Boosters)',
        positives: [
          'Proven Demand: 12 projects in advanced signing.',
          'Strategic Partnership with Soda: 15+ years of international experience.',
          'Workforce Stability: Exceptionally low turnover rates.'
        ],
        negative_title: '7.2 Negative Factors (Risks & Mitigations)',
        negatives: [
          'Training gap: Mitigated by progressive curriculum and senior mentorship.',
          'AMAS performance: Mitigated by iterative development and manual fallback.'
        ]
      },
      advantages: {
        title: '8. Competitive Advantages & Differentiation',
        adv1: 'Cost Structure Advantage: Competitive pricing with healthy margins via AI efficiency.',
        adv2: 'Workforce Stability Moat: Cultural alignment creates 5–10 year average tenure.',
        adv3: 'AI-First DNA: Built with AI at its core for both technology and operations.'
      },
      scaling: {
        title: '9. Scaling Strategy',
        p1: 'Once the 30-developer model is proven, we will trigger national expansion to 100 engineers.',
        p2: 'International Expansion: Targeting Orthodox communities in Lakewood, Brooklyn, London, and Antwerp.'
      },
      gtm: {
        title: '10. Public Relations & Go-To-Market Strategy',
        b2b_title: '10.1 Strategic B2B Outreach',
        b2b_p: 'Directly interfacing with CTOs and VPs of Engineering at international technology summits and executive briefings.',
        digital_title: '10.2 Brand Awareness & Digital Campaigns',
        digital_p: 'Establishing Binata as a globally recognized, socially responsible AI powerhouse through LinkedIn and earned media.'
      },
      team: {
        title: '11. Leadership & Team',
        members: [
          'Lee Or — Chief Executive Officer (CEO)',
          'Yossi Avni — Chief Technology Officer (CTO)',
          'Hava Siegelmann — Head Instructor',
          'Shachar Cohen — Chief Marketing Officer (CMO)',
          'Israel Elgrabli — Head of Community',
          'Soda — Strategic Technology Partner'
        ]
      },
      evidence: {
        title: '12. Evidence of High-Probability Success',
        items: [
          'Pre-existing demand: 12 projects in pipeline.',
          'Proven partner: Soda Ltd.’s 15+ year track record.',
          'Demographic certainty: Haredi population growth.',
          'Conservative financial planning: $3M covers 20 months.'
        ]
      },
      conclusion: {
        title: '13. Conclusion & Call to Action',
        p: 'Binata represents a rare convergence of social impact and commercial viability. We invite you to join us in building the first campus.',
        quote: '“The wisdom of women builds her home.” Binata builds the bridge between that wisdom and the technology economy.'
      }
    }
  };

  const current = t[lang];

  return (
    <div className={`min-h-screen bg-[#0a0a0a] text-gray-200 font-sans selection:bg-gold selection:text-black pb-20 ${isRtl ? 'text-right' : 'text-left'}`} dir={isRtl ? 'rtl' : 'ltr'}>
      {/* Header */}
      <header className="glass border-b border-white/5 sticky top-0 z-50 backdrop-blur-md">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <button 
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 text-gold hover:text-white transition-colors"
          >
            <ArrowLeft size={20} className={isRtl ? 'rotate-180' : ''} />
            <span>{current.back}</span>
          </button>
          
          <div className="flex items-center gap-6">
            <div className="text-2xl font-bold text-gold font-serif tracking-tighter hidden md:block">BINATAH</div>
            <div className="flex bg-white/5 rounded-full p-1 border border-white/10">
              <button 
                onClick={() => setLang('he')}
                className={`px-3 py-1 rounded-full text-xs transition-all ${lang === 'he' ? 'bg-gold text-black font-bold' : 'text-gray-400 hover:text-white'}`}
              >
                עברית
              </button>
              <button 
                onClick={() => setLang('en')}
                className={`px-3 py-1 rounded-full text-xs transition-all ${lang === 'en' ? 'bg-gold text-black font-bold' : 'text-gray-400 hover:text-white'}`}
              >
                English
              </button>
            </div>
          </div>
          
          <div className="text-xs text-gray-500 uppercase tracking-widest hidden lg:block">{current.confidential}</div>
        </div>
      </header>

      <main className={`container mx-auto px-6 pt-20 max-w-5xl ${isRtl ? 'text-right' : 'text-left'}`} dir={isRtl ? 'rtl' : 'ltr'}>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-20"
        >
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 font-serif">{current.title}</h1>
          <p className="text-xl text-gray-400 font-light max-w-2xl mx-auto">{current.subtitle}</p>
          <p className="mt-4 text-gold/60 italic">{current.memory}</p>
        </motion.div>

        {/* Table of Contents */}
        <Section title={current.toc} icon={Search} isRtl={isRtl}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {current.sections.map((s, i) => (
              <div key={i} className="text-gray-400 hover:text-gold transition-colors cursor-default flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-gold/30"></div>
                {s}
              </div>
            ))}
          </div>
        </Section>

        {/* 1. Executive Summary */}
        <Section title={current.exec_summary.title} icon={Target} isRtl={isRtl}>
          <p className={`text-lg text-gray-300 leading-relaxed mb-6 ${isRtl ? 'text-right' : 'text-left'}`}>{current.exec_summary.p1}</p>
          <p className={`text-lg text-gray-300 leading-relaxed mb-10 ${isRtl ? 'text-right' : 'text-left'}`}>{current.exec_summary.p2}</p>
          
          <div className="mb-10">
            <h4 className={`text-gold font-bold mb-4 ${isRtl ? 'text-right' : 'text-left'}`}>{current.exec_summary.proposition_title}</h4>
            <p className={`text-gray-400 mb-4 ${isRtl ? 'text-right' : 'text-left'}`}>{current.exec_summary.proposition_p}</p>
            <ul className="space-y-3 text-gray-300">
              <li className="flex gap-3"><CheckCircle size={18} className="text-gold shrink-0 mt-1" /> {current.exec_summary.pillar1}</li>
              <li className="flex gap-3"><CheckCircle size={18} className="text-gold shrink-0 mt-1" /> {current.exec_summary.pillar2}</li>
              <li className="flex gap-3"><CheckCircle size={18} className="text-gold shrink-0 mt-1" /> {current.exec_summary.pillar3}</li>
            </ul>
          </div>

          <h4 className={`text-gold font-bold mb-6 ${isRtl ? 'text-right' : 'text-left'}`}>{current.exec_summary.metrics_title}</h4>
          <Table 
            isRtl={isRtl}
            headers={current.exec_summary.metrics_headers}
            rows={current.exec_summary.metrics_rows}
          />
        </Section>

        {/* 2. Problem Statement */}
        <Section title={current.problem.title} icon={Shield} isRtl={isRtl}>
          <div className="space-y-10">
            <div>
              <h4 className={`text-gold font-bold mb-6 ${isRtl ? 'text-right' : 'text-left'}`}>{current.problem.pain_title}</h4>
              <div className="space-y-6">
                <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
                  <p className={`text-gray-300 ${isRtl ? 'text-right' : 'text-left'}`}>{current.problem.pain1}</p>
                </div>
                <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
                  <p className={`text-gray-300 ${isRtl ? 'text-right' : 'text-left'}`}>{current.problem.pain2}</p>
                </div>
                <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
                  <p className={`text-gray-300 ${isRtl ? 'text-right' : 'text-left'}`}>{current.problem.pain3}</p>
                </div>
              </div>
            </div>
            
            <div>
              <h4 className={`text-gold font-bold mb-4 ${isRtl ? 'text-right' : 'text-left'}`}>{current.problem.capital_title}</h4>
              <p className={`text-gray-300 leading-relaxed ${isRtl ? 'text-right' : 'text-left'}`}>{current.problem.capital_p}</p>
            </div>

            <div>
              <h4 className={`text-gold font-bold mb-4 ${isRtl ? 'text-right' : 'text-left'}`}>{current.problem.market_title}</h4>
              <p className={`text-gray-300 leading-relaxed ${isRtl ? 'text-right' : 'text-left'}`}>{current.problem.market_p}</p>
            </div>
          </div>
        </Section>

        {/* 3. Business Model */}
        <Section title={current.model.title} icon={Briefcase} isRtl={isRtl}>
          <div className="space-y-12">
            <div>
              <h4 className={`text-gold font-bold mb-6 ${isRtl ? 'text-right' : 'text-left'}`}>{current.model.structure_title}</h4>
              <Table 
                isRtl={isRtl}
                headers={current.model.structure_headers}
                rows={current.model.structure_rows}
              />
            </div>

            <div>
              <h4 className={`text-gold font-bold mb-4 ${isRtl ? 'text-right' : 'text-left'}`}>{current.model.half_time_title}</h4>
              <p className={`text-gray-300 leading-relaxed ${isRtl ? 'text-right' : 'text-left'}`}>{current.model.half_time_p}</p>
            </div>

            <div>
              <h4 className={`text-gold font-bold mb-4 ${isRtl ? 'text-right' : 'text-left'}`}>{current.model.revenue_title}</h4>
              <p className={`text-gray-300 leading-relaxed ${isRtl ? 'text-right' : 'text-left'}`}>{current.model.revenue_p}</p>
            </div>
          </div>
        </Section>

        {/* 4. AMAS */}
        <Section title={current.amas.title} icon={Zap} isRtl={isRtl}>
          <p className={`text-lg text-gray-300 leading-relaxed mb-8 ${isRtl ? 'text-right' : 'text-left'}`}>{current.amas.p}</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {current.amas.capabilities.map((cap, i) => (
              <div key={i} className="p-6 rounded-2xl bg-white/5 border border-white/10 flex gap-4">
                <CheckCircle size={20} className="text-gold shrink-0 mt-1" />
                <p className={`text-gray-300 text-sm leading-relaxed ${isRtl ? 'text-right' : 'text-left'}`}>{cap}</p>
              </div>
            ))}
          </div>
        </Section>

        {/* 5. Phased Execution */}
        <Section title={current.execution.title} icon={Rocket} isRtl={isRtl}>
          <div className="space-y-8">
            {[current.execution.phase1, current.execution.phase2, current.execution.phase3].map((p, i) => (
              <div key={i} className={`relative ${isRtl ? 'pr-8 border-r' : 'pl-8 border-l'} border-gold/30 py-2`}>
                <div className={`absolute ${isRtl ? 'right-[-5px]' : 'left-[-5px]'} top-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full bg-gold shadow-[0_0_10px_rgba(212,175,55,0.5)]`}></div>
                <p className={`text-gray-300 ${isRtl ? 'text-right' : 'text-left'}`}>{p}</p>
              </div>
            ))}
          </div>
        </Section>

        {/* 6. Financial Plan */}
        <Section title={current.financial.title} icon={DollarSign} isRtl={isRtl}>
          <div className="space-y-12">
            <div>
              <h4 className={`text-gold font-bold mb-6 ${isRtl ? 'text-right' : 'text-left'}`}>{current.financial.dashboard_title}</h4>
              <Table 
                isRtl={isRtl}
                headers={current.financial.dashboard_headers}
                rows={current.financial.dashboard_rows}
              />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className={`text-gold font-bold mb-4 ${isRtl ? 'text-right' : 'text-left'}`}>{current.financial.projection_title}</h4>
                <p className={`text-gray-300 leading-relaxed ${isRtl ? 'text-right' : 'text-left'}`}>{current.financial.projection_p}</p>
              </div>
              <div>
                <h4 className={`text-gold font-bold mb-4 ${isRtl ? 'text-right' : 'text-left'}`}>{current.financial.breakeven_title}</h4>
                <p className={`text-gray-300 leading-relaxed ${isRtl ? 'text-right' : 'text-left'}`}>{current.financial.breakeven_p}</p>
              </div>
            </div>
          </div>
        </Section>

        {/* 7. Risk Analysis */}
        <Section title={current.risks.title} icon={AlertTriangle} isRtl={isRtl}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h4 className="text-emerald-400 font-bold mb-6 flex items-center gap-2">
                <TrendingUp size={20} /> {current.risks.positive_title}
              </h4>
              <ul className="space-y-4">
                {current.risks.positives.map((p, i) => (
                  <li key={i} className="flex gap-3 text-gray-400 text-sm">
                    <CheckCircle size={16} className="text-emerald-400 shrink-0 mt-1" />
                    {p}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-rose-400 font-bold mb-6 flex items-center gap-2">
                <AlertTriangle size={20} /> {current.risks.negative_title}
              </h4>
              <ul className="space-y-4">
                {current.risks.negatives.map((n, i) => (
                  <li key={i} className="flex gap-3 text-gray-400 text-sm">
                    <div className="w-1.5 h-1.5 rounded-full bg-rose-400 shrink-0 mt-2"></div>
                    {n}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Section>

        {/* 8. Competitive Advantages */}
        <Section title={current.advantages.title} icon={Award} isRtl={isRtl}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[current.advantages.adv1, current.advantages.adv2, current.advantages.adv3].map((adv, i) => (
              <div key={i} className="p-8 rounded-3xl bg-white/5 border border-white/10 text-center">
                <p className="text-gray-300 leading-relaxed">{adv}</p>
              </div>
            ))}
          </div>
        </Section>

        {/* 9. Scaling Strategy */}
        <Section title={current.scaling.title} icon={MapPin} isRtl={isRtl}>
          <p className={`text-lg text-gray-300 leading-relaxed mb-6 ${isRtl ? 'text-right' : 'text-left'}`}>{current.scaling.p1}</p>
          <p className={`text-lg text-gray-300 leading-relaxed ${isRtl ? 'text-right' : 'text-left'}`}>{current.scaling.p2}</p>
        </Section>

        {/* 10. GTM Strategy */}
        <Section title={current.gtm.title} icon={PieChart} isRtl={isRtl}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h4 className={`text-gold font-bold mb-4 ${isRtl ? 'text-right' : 'text-left'}`}>{current.gtm.b2b_title}</h4>
              <p className={`text-gray-400 leading-relaxed ${isRtl ? 'text-right' : 'text-left'}`}>{current.gtm.b2b_p}</p>
            </div>
            <div>
              <h4 className={`text-gold font-bold mb-4 ${isRtl ? 'text-right' : 'text-left'}`}>{current.gtm.digital_title}</h4>
              <p className={`text-gray-400 leading-relaxed ${isRtl ? 'text-right' : 'text-left'}`}>{current.gtm.digital_p}</p>
            </div>
          </div>
        </Section>

        {/* 11. Leadership */}
        <Section title={current.team.title} icon={Users} isRtl={isRtl}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {current.team.members.map((m, i) => (
              <div key={i} className="p-4 rounded-xl bg-white/5 border border-white/10 text-gray-300 flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-gold"></div>
                {m}
              </div>
            ))}
          </div>
        </Section>

        {/* 12. Evidence of Success */}
        <Section title={current.evidence.title} icon={CheckCircle} isRtl={isRtl}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {current.evidence.items.map((item, i) => (
              <div key={i} className="p-6 rounded-2xl bg-white/5 border border-white/10 flex gap-4">
                <CheckCircle size={20} className="text-gold shrink-0 mt-1" />
                <p className={`text-gray-300 text-sm leading-relaxed ${isRtl ? 'text-right' : 'text-left'}`}>{item}</p>
              </div>
            ))}
          </div>
        </Section>

        {/* 13. Conclusion */}
        <Section title={current.conclusion.title} icon={Rocket} isRtl={isRtl}>
          <p className={`text-xl text-gray-300 leading-relaxed mb-8 ${isRtl ? 'text-right' : 'text-left'}`}>{current.conclusion.p}</p>
          <div className="p-10 rounded-3xl bg-gold/5 border border-gold/20 text-center">
            <p className="text-2xl font-serif italic text-gold leading-relaxed">
              {current.conclusion.quote}
            </p>
          </div>
        </Section>

        {/* Footer */}
        <footer className="mt-20 pt-10 border-t border-white/5 text-center text-gray-500 text-sm">
          <p>© 2026 BINATAH — {current.confidential}</p>
          <p className="mt-2">{current.memory}</p>
        </footer>
      </main>
    </div>
  );
}
