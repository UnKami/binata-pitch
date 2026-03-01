/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef } from 'react';
import { 
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useLocation,
  useNavigate,
  useNavigationType
} from 'react-router-dom';
import BusinessPlan from './pages/BusinessPlan';
import SodaPartner from './pages/SodaPartner';
import AcademyTrack from './pages/AcademyTrack';
import HumanCapital from './pages/HumanCapital';
import UniqueAdvantages from './pages/UniqueAdvantages';
import Operations from './pages/Operations';
import { 
  ChevronDown, 
  Plus, 
  X, 
  Target, 
  Briefcase, 
  Users, 
  TrendingUp, 
  HeartHandshake,
  Code,
  GraduationCap,
  Building,
  Globe,
  ArrowRight,
  ArrowLeft,
  ExternalLink
} from 'lucide-react';
import { motion, AnimatePresence, useScroll, useTransform } from 'motion/react';

// --- Translations ---
const translations = {
  he: {
    nav: ['אודות', 'צוות', 'מודל', 'עסקי', 'ציר זמן', 'תוכנית עסקית'],
    hero_top: 'בס"ד | חכמת נשים בנתה ביתה',
    hero_title: 'בִּינָתָהּ',
    hero_sub1: 'AI Institute exclusively for Kollel wives',
    hero_sub2: 'המעבדה הישראלית לבינה מלאכותית',
    hero_sub3: 'ע"ש מרים חנה בת יפה מונסונגו הי"ד',
    about_title: 'מה זה בינתה?',
    about_desc1_strong: '"בינתה"',
    about_desc1: ' היא חממה טכנולוגית ובית תוכנה ייעודי לנשות אברכים, המשלבת הכשרה בטכנולוגיות ה-AI העדכניות ביותר מפי נבחרת מרצים בינלאומית, לצד תעסוקה בפיתוח מערכות בחזית הטכנולוגיה.',
    goal_title: 'המטרה',
    goal_desc: 'להעצים את הבית החרדי ולהביא לו רווחה כלכלית, כדי לאפשר את המשך לימוד התורה מתוך עוצמה, ביטחון ויציבות.',
    goal_pain_q: 'מול אילו אתגרים אנחנו ניצבים?',
    goal_btn: 'צפו בנקודות הכאב',
    pillars_title: '3 עמודי התווך',
    pillar_1_title: 'בית תוכנה (תכנות)',
    pillar_1_desc: 'פיתוח פתרונות טכנולוגיים מתקדמים: תשתית סוכני AI לניהול (AMAS), בוטים להסברה (PROPABOTS), ומערכות למידה (LMS). המטרה הסופית: פיתוח מודלי AI משלנו מאפס.',
    pillar_2_title: 'אקדמיה והכשרה',
    pillar_2_desc: 'הכשרת טאלנטיות למקצועות הפיתוח ושילובן המיידי בפרויקטים המעשיים, תוך שמירה על הצניעות ופתיחת דלתות לחסרות רקע.',
    pillar_3_title: 'מיתוג ויחסי ציבור',
    pillar_3_desc: 'בניית מותג חזק, פרסום יכולת הפיתוח, האקדמיה ויצירת חיבורים אסטרטגיים מול ממשלות, צבאות וגופי תקשורת.',
    team_title: 'הצוות',
    team_roles: { founder: 'מייסד', ceo: 'CEO', cto: 'CTO', cmo: 'CMO', inst: 'ראש תחום הדרכה', comm: 'מנהל קהילה' },
    team_names: ['ישראל גבאי', 'לי אור', 'יוסי אבני', 'שחר כהן', 'חווה סיגלמן', 'ישראל אלגרבלי'],
    israel_g_bio: 'ישראל גבאי, המייסד בעל החזון של בינתה, הוא יזם ותיק שהקים והוביל מספר חברות טכנולוגיה מצליחות. מונע מתוך מחויבות להשפעה חברתית ושימור עולם התורה, הוא רתם את הצלחתו המקצועית לתמיכה ומימון של בתי יתומים מרובים לילדים יהודים ברחבי העולם.',
    israel_g_subtitle: 'מייסד בינתה ויזם חברתי',
    li_or_bio: 'חלוצת Fullstack & Mobile עם 12 שנות ניסיון, לי הייתה בין עשרת המפתחים הראשונים בישראל בחנות האפליקציות. היא מרצה טכנולוגית מוערכת באקדמיית בסמ"ח היוקרתית ובטכניון, והכשירה דורות של מפתחים. דוברת בינלאומית שהופיעה על במות יוקרתיות כמו TechCrunch ו-TAD Hack.',
    li_or_link_text: 'קראו את הכתבה ב-SQLink',
    yossi_bio: 'במהלך 25 השנים האחרונות, פעילותו העסקית המרכזית של יוסי כללה הקמה ויזמות של חברות סטארט-אפ בתחומי אבטחת מידע ובינה מלאכותית. תפקידיו העיקריים היו כ-CTO, תוך הובלת פעילויות מחקר ופיתוח בחברות סטארט-אפ בינלאומיות וישראליות. יוסי הוא ממציא של למעלה מ-30 פטנטים רשומים, ו-110 בקשות פטנט נוספות. הרקע האקדמי וההסמכות שלו כוללים תואר ראשון במתמטיקה שימושית, CISSP, EC-Council CEH, CISO מהטכניון, מדען נתונים מהטכניון, מומחה סייבר מהטכניון, האקר מומחה מ-See Security, CPTL,1,2, BioDesign של סטנפורד-טכניון ועוד.',
    yossi_subtitle: 'יזם סדרתי ומומחה סייבר ו-AI',
    israel_el_bio: 'יזם טכנולוגי המוקדש להנגשת חדשנות לקהילה החרדית. הוא הקים תוכנית הכשרה ייחודית לנשים חרדיות המתמחה בפיתוח בלוקצ\'יין וחוזים חכמים (Smart Contracts) ומנהל קהילות שיתוף ידע משפיעות במגזר.',
    israel_el_subtitle: 'יזם טכנולוגי ומוביל קהילה',
    shachar_bio: 'ראש מו"פ לשעבר · יזם סדרתי · מומחה רב-תחומי בעולמות הסייבר, לוגיסטיקה, פיננסים ובריאות · ארכיטקט של מערכות מבוזרות ועתירות ביצועים · מומחה Kubernetes',
    shachar_subtitle: 'יזם סדרתי ומומחה ארכיטקטורת מערכות',
    hava_bio: 'פרופסור חווה סיגלמן היא חוקרת בינה מלאכותית בעלת שם עולמי. עמיתת IEEE ו-INNS, היא מחזיקה בתארים יוקרתיים הכוללים את פרס INNS Hebb, פרס Obama BRAIN Initiative, ומדליית השירות הציבורי המצטיין של DARPA. בפרט, היא שירתה ב-DARPA (2016–2019), שם המציאה וניהלה תוכניות AI מתקדמות שעיצבו את השוק.',
    hava_subtitle: 'פרופסור באוניברסיטת מסצ׳וסטס ומנהלת מעבדת BINDS',
    hava_link_umass: 'קראו את הכתבה ב-UMass',
    hava_link_wiki: 'עמוד ויקיפדיה',
    model_title: 'מודל הליבה',
    model_1: 'אקדמיה',
    model_1_desc: 'הכשרה אינטנסיבית בבינה מלאכותית ופיתוח תוכנה המלווה ע"י מרצות מהאוניברסיטאות הנחשבות בעולם.',
    model_1_btn: 'מסלול הכשרה וצמיחה',
    model_2: 'בית תוכנה',
    model_2_desc: 'כל בוגרת מקבלת מקום בבית התוכנה הייעודי שלנו, המעניק מעטפת פתרונות AI מותאמים אישית ושירותי תחזוקה.',
    model_2_btn: 'שותפים אסטרטגיים',
    model_3: 'חממה',
    model_3_desc: 'ליווי צמוד לאורך הקריירה והקמת קהילה המותאמת באופן מוחלט לאורח החיים של אשת אברך, וצרכי המשפחה החרדית.',
    model_3_btn: 'פרופיל ההון האנושי',
    loop_title: 'מעגל היזון חיובי',
    loop_1: 'מפתחות מועצמות ומרוצות',
    loop_1_desc: 'צמיחה אישית ומקצועית בסביבה תומכת',
    loop_2: 'ריכוז שיא ותפוקה איכותית',
    loop_2_desc: 'עבודה ממוקדת המניבה תוצרים טכנולוגיים מעולים',
    loop_3: 'לקוחות מרוצים ואמון אסטרטגי',
    loop_3_desc: 'ביסוס קשרים ארוכי טווח המבוססים על איכות',
    loop_4: 'חוסן עסקי והשקעה חוזרת בצוות',
    loop_4_desc: 'יציבות כלכלית המאפשרת המשך פיתוח והתרחבות',
    loop_btn: 'UNIQUE EDGE | היתרונות הייחודיים שלנו',
    biz_title: 'המודל העסקי',
    biz_1: 'מודל הכנסה משולב',
    biz_1_desc: 'תזרים מזומנים מיידי מתשלום על פרויקטי פיתוח, בשילוב צבירת אחוזים (Equity) המשמשים כעוגן כלכלי יציב לעתיד המשפחה.',
    biz_2: 'איתנות פיננסית',
    biz_2_desc: 'ביטחון פיננסי מלא ל-18 חודשים, המבוסס על גיוס של $3M ותזרים הכנסות שוטף מפרויקטים.',
    biz_3: 'רשת ביטחון חברתית',
    biz_3_desc: 'הרווחים העתידיים מהאחזקות יחולקו עם עובדות בינתה, להבטחת פרנסת משפחות האברכים גם בתקופות של האטה בהכנסות המיידיות.',
    biz_btn: 'תוכנית עסקית מלאה',
    time_title: 'ציר זמן לפעילות (18 חודשים)',
    time_btn: 'OPERATIONAL INFRASTRUCTURE | תכנית עבודה ותפעול',
    timeline_steps: [
      {
        time: 'חודשים 0-2',
        title: 'תשתית וגיוס',
        desc: 'גיוס 12 מפתחות ליבה, הקמת תשתית LMS ותכנון פדגוגי.',
        pillars: {
          dev: 'גיבוש צוות פיתוח ראשוני של 12 מפתחות. כתיבת שורות הקוד הראשונות של פלטפורמות הליבה.',
          acad: 'הקמת תשתית הלמידה והכשרת הסגל. תכנון פדגוגי מפורט של מסלולי ההכשרה.',
          pr: 'מיתוג המיזם והכנת התשתית לנוכחות דיגיטלית ותקשורתית.'
        }
      },
      {
        time: 'חודש 3',
        title: 'תחילת פעילות',
        desc: 'השקת קורסים, קליטת 36 תלמידות וגידול ל-48 עובדות.',
        pillars: {
          dev: 'השלמת מערכות הניהול והלמידה (LMS) עבור האקדמיה. תמיכה טכנית שוטפת.',
          acad: 'פתיחת המחזור הראשון: תחילת הלימודים של 36 תלמידות חדשות.',
          pr: 'חשיפת המיזם לרגל פתיחת המחזור הראשון וביסוס הקשרים עם הקהילה.'
        }
      },
      {
        time: 'חודשים 4-6',
        title: 'צמיחה ופיתוח',
        desc: 'שילוב אופרטיבי בכתיבת קוד ופיתוח פרויקטי הליבה בשטח.',
        pillars: {
          dev: 'סיום פיתוח והשקת מערכת ה-PROPABOTS. היערכות טכנית להרחבת הפעילות.',
          acad: 'שילוב התלמידות בעבודה מעשית על פרויקטים בשטח. העמקת הלימוד היישומי.',
          pr: 'ביסוס הנוכחות המקצועית של המותג והצגת השפעת המיזם על שוק התעסוקה.'
        }
      },
      {
        time: 'חודש 7',
        title: 'ייצור מעשי',
        desc: 'סיום מחזור א׳ וקליטת פרויקטים חדשים ומורכבים עם כוח מיומן.',
        pillars: {
          dev: 'שילוב התלמידות בהכשרות אינטנסיביות לצד צוותי הפיתוח המנוסים.',
          acad: 'תחילת עבודה מעשית של התלמידות בפרויקטים חיצוניים עוד במהלך הלימודים.',
          pr: 'הצגת תוצרי הפיתוח הראשונים ללקוחות ושותפים אסטרטגיים.'
        }
      },
      {
        time: 'חודשים 8-11',
        title: 'הרחבת צוותים',
        desc: 'העלאת הילוך מעשי והכנה ל-150+ עובדות ופיתוח מודלי AI.',
        pillars: {
          dev: 'גיוס בוגרות המחזור הראשון לצוות הפיתוח. הרחבת היכולת לביצוע פרויקטים מורכבים.',
          acad: 'סיום המחזור הראשון והכנת התשתית לקליטת מעל 100 תלמידות נוספות.',
          pr: 'מיצוב המיזם כגוף פיתוח מוביל והוכחת המודל העסקי מול משקיעים.'
        }
      },
      {
        time: 'חודשים 12-18',
        title: 'ביסוס טכנולוגי',
        desc: 'הסרת חסמי כניסה והרחבת הפעילות.',
        pillars: {
          dev: 'פיתוח שוטף של פרויקטים טכנולוגיים מורכבים והנחת יסודות למודלי AI פנימיים.',
          acad: 'הרחבת מסלולי ההכשרה לנשים ללא רקע קודם בתכנות באמצעות מכינה טכנולוגית.',
          pr: 'הרחבת קהל היעד וקמפיין להנגשת המקצועות הטכנולוגיים לקהלים נוספים.'
        }
      },
      {
        time: 'חודשים 18+',
        title: 'סקיילינג',
        desc: 'הגעה ליעד של 152 עובדות ופיתוח מודלי AI פנימיים.',
        pillars: {
          dev: 'ביסוס המיזם כמרכז פיתוח טכנולוגי משמעותי ופיתוח מודלי AI מתקדמים.',
          acad: 'התרחבות מהאקדמיה לאוניברסיטה טכנולוגית מובילה, עם פעילות מלאה וקליטת מעל 100 עובדות חדשות.',
          pr: 'ביסוס המותג כמרכז ידע ופיתוח בתחום ה-AI ברמה הישראלית.'
        }
      }
    ],
    foot_h2: 'אנחנו מזמינים אתכם לקחת חלק \n בבניית חממת ה-AI הישראלית',
    foot_sub: 'עומדת לפניכם הזדמנות להקים את הקמפוס הראשון',
    foot_quote: 'כל המצוות שיעשו בארגון זה יהיו לאקמה שכינתא מעפרא \n לזכות הילדה הרכה והזכה ',
    foot_quote_strong: 'חנה בת יפה מונסונגו הי"ד',
    close: 'סגור',
    more_info: 'מידע נוסף אודות תפקידו וניסיונו יוצג כאן.',
    back: 'חזרה',
    pain_points_title: 'נקודות הכאב',
    pain_point_1: 'נקודה 1. מקום העבודה פוגע באורח החיים החרדי',
    pain_point_2: 'נקודה 2. עלות שעות העבודה של אשת אברך',
    pain_point_3: 'נקודה 3. הגישה לעולם העבודה מוגבלת לנשות אברכים מטעמים שונים'
  },
  en: {
    nav: ['About', 'Team', 'Model', 'Business', 'Timeline', 'Business Plan'],
    hero_top: 'BS"D | Women\'s Wisdom Builds Her Home',
    hero_title: 'BINATAH',
    hero_sub1: 'AI Institute exclusively for Kollel wives',
    hero_sub2: 'The Israeli Artificial Intelligence Laboratory',
    hero_sub3: 'In memory of Miriam Chana bat Yaffa Monsonego, May God avenge her blood',
    about_title: 'What is Binatah?',
    about_desc1_strong: '"Binatah"',
    about_desc1: ' is a tech incubator and software house dedicated to Kollel wives, combining training in the latest AI technologies from an international team of lecturers, alongside employment in cutting-edge system development.',
    goal_title: 'The Goal',
    goal_desc: 'To empower the Haredi home and bring it economic well-being, enabling the continuous study of Torah with strength, security, and stability.',
    goal_pain_q: 'What challenges do we face?',
    goal_btn: 'View Pain Points',
    pillars_title: 'The 3 Pillars',
    pillar_1_title: 'Software House (Dev)',
    pillar_1_desc: 'Developing advanced technological solutions: AI agent infrastructure (AMAS), advocacy bots (PROPABOTS), and LMS platforms. Ultimate goal: Developing our own AI models from scratch.',
    pillar_2_title: 'Academy & Training',
    pillar_2_desc: 'Training talents for development professions and their immediate integration into practical projects, while maintaining modesty and opening doors for those without prior background.',
    pillar_3_title: 'Branding & PR',
    pillar_3_desc: 'Building a strong brand, promoting development capabilities, the academy, and creating strategic connections with governments, military forces, and media entities.',
    team_title: 'The Team',
    team_roles: { founder: 'Founder', ceo: 'CEO', cto: 'CTO', cmo: 'CMO', inst: 'Head Instructor', comm: 'Head of Community' },
    team_names: ['Israel Gabbay', 'Li Or', 'Yossi Avni', 'Shachar Cohen', 'Hava Siegelmann', 'Israel Elgrabli'],
    israel_g_bio: 'Israel Gabbay, the visionary founder of Binatah, is a veteran entrepreneur who has founded and led several successful technology companies. Driven by a commitment to social impact and Torah preservation, he has leveraged his professional success to support and finance multiple orphanages for Jewish children across the globe.',
    israel_g_subtitle: 'Founder of Binatah & Social Entrepreneur',
    li_or_bio: 'A Fullstack & Mobile pioneer with 12 years of experience, Li was among Israel\'s first ten developers on the App Store. She is a renowned technical instructor for the elite Basmach academy and the Technion, training generations of developers. A global speaker, she has been featured on prestigious stages like TechCrunch and TAD Hack.',
    li_or_link_text: 'Read SQLink Article',
    yossi_bio: 'During the last 25 years, Yossi’s main business activities have included being a founder and entrepreneur of startup companies in the field of IT security and AI. Primary duties were as the CTO, leading the research and development activities in international and Israeli startup companies. An inventor of more than 30 granted patents, and 110 additional patent applications, amendments, provisional, and more. Academic and certificates background, BSc Applied Mathematics, CISSP, EC-Council CEH, Technion CISO, Technion Data Scientist, Technion Cyber Security Expert, Hacker Defined Expert See Security, CPTL,1,2, Stanford-Technion BioDesign and more.',
    yossi_subtitle: 'Serial Entrepreneur, Cyber Security & AI Expert',
    israel_el_bio: 'A technology entrepreneur dedicated to making innovation accessible to the Haredi community. He founded a unique training program for Haredi women specializing in blockchain development and Smart Contracts and manages influential knowledge-sharing communities within the sector.',
    israel_el_subtitle: 'Technology Entrepreneur & Community Leader',
    shachar_bio: 'Former Head of R&D · Serial Entrepreneur · Multi-domain operator across cyber, logistics, finance & healthcare · Architect of scalable, high-performance systems · Kubernetes expert',
    shachar_subtitle: 'Serial Entrepreneur & Systems Architect',
    hava_bio: 'Professor Hava Siegelmann is a globally renowned AI researcher. An IEEE and INNS Fellow, she holds prestigious honors including the INNS Hebb Award, the Obama BRAIN Initiative Award, and the DARPA Meritorious Public Service Medal. Notably, she served at DARPA (2016–2019), inventing and directing advanced, market-shaping AI programs.',
    hava_subtitle: 'UMass Provost-Professor & BINDS Lab Director',
    hava_link_umass: 'Read UMass Article',
    hava_link_wiki: 'Wikipedia Page',
    model_title: 'Core Model',
    model_1: 'Academy',
    model_1_desc: 'Intensive training in artificial intelligence and software development guided by lecturers from the world\'s top universities.',
    model_1_btn: 'Training & Growth Track',
    model_2: 'Software House',
    model_2_desc: 'Every graduate secures a position in our dedicated software house, providing custom AI solutions and comprehensive maintenance.',
    model_2_btn: 'Strategic Partners',
    model_3: 'Incubator',
    model_3_desc: 'Close career mentorship and the establishment of a community fully adapted to the lifestyle of Kollel wives and Haredi families.',
    model_3_btn: 'Human Capital Profile',
    loop_title: 'Positive Feedback Loop',
    loop_1: 'Satisfied & Empowered Developers',
    loop_1_desc: 'Personal and professional growth in a supportive environment',
    loop_2: 'Peak Focus & High Quality Output',
    loop_2_desc: 'Focused work yielding superior technological results',
    loop_3: 'Satisfied Clients & Strategic Trust',
    loop_3_desc: 'Building long-term relationships based on quality',
    loop_4: 'Business Resilience & Team Reinvestment',
    loop_4_desc: 'Economic stability allowing continued development and expansion',
    loop_btn: 'UNIQUE EDGE | Our Distinct Advantages',
    biz_title: 'Business Model',
    biz_1: 'Combined Revenue Model',
    biz_1_desc: 'Immediate cash flow from development projects, combined with equity accumulation acting as a stable economic anchor for the family\'s future.',
    biz_2: 'Financial Resilience',
    biz_2_desc: 'Full financial security for 18 months, based on $3M fundraising and ongoing project revenue streams.',
    biz_3: 'Social Safety Net',
    biz_3_desc: 'Future profits from holdings will be shared with Binatah employees, ensuring family livelihoods even during temporary revenue slowdowns.',
    biz_btn: 'Full Business Plan',
    time_title: 'Activity Timeline (18 Months)',
    time_btn: 'OPERATIONAL INFRASTRUCTURE & Workflow Plan',
    timeline_steps: [
      {
        time: 'Months 0-2',
        title: 'Infrastructure & Recruiting',
        desc: 'Recruiting 12 core developers, establishing LMS infrastructure, and pedagogical planning.',
        pillars: {
          dev: 'Forming initial development team of 12 developers. Writing first lines of code for core platforms.',
          acad: 'Building infrastructure for training. Meticulous pedagogical planning of training tracks.',
          pr: 'Establishing branding and preparing digital and media presence.'
        }
      },
      {
        time: 'Month 3',
        title: 'Commencing Activity',
        desc: 'Launching courses, accepting 36 students, and growing to 48 employees.',
        pillars: {
          dev: 'Completion of LMS and infrastructure systems for the academy. Ongoing technical support.',
          acad: 'Opening Cycle 1: 36 new students begin their training.',
          pr: 'Public launch for the first cycle and establishing community relations.'
        }
      },
      {
        time: 'Months 4-6',
        title: 'Growth & Development',
        desc: 'Operative integration in code writing and developing core projects.',
        pillars: {
          dev: 'Completion and launch of PROPABOTS. Technical readiness for expansion.',
          acad: 'Integrating students into practical projects. Deepening applied learning.',
          pr: 'Establishing professional brand presence and showcasing impact on the job market.'
        }
      },
      {
        time: 'Month 7',
        title: 'Practical Production',
        desc: 'Graduating Cohort A and taking on new, complex projects.',
        pillars: {
          dev: 'Students join intensive training alongside experienced development teams.',
          acad: 'Practical integration: students working on external projects during their studies.',
          pr: 'Showcasing initial development products to clients and strategic partners.'
        }
      },
      {
        time: 'Months 8-11',
        title: 'Team Expansion',
        desc: 'Scaling to 150+ employees and developing core AI models.',
        pillars: {
          dev: 'Onboarding Cycle 1 graduates. Expanding capability for complex projects.',
          acad: 'Successful completion of Cycle 1. Preparing for 100+ more students.',
          pr: 'Positioning as a leading development body and proving the business model to investors.'
        }
      },
      {
        time: 'Months 12-18',
        title: 'Technological Consolidation',
        desc: 'Removing entry barriers and expanding operations.',
        pillars: {
          dev: 'Ongoing development of complex projects. Laying foundations for internal AI models.',
          acad: 'Expanding accessibility: opening tracks for women without prior programming knowledge via prep course.',
          pr: 'Expanding target audience and campaign to make tech professions accessible to more groups.'
        }
      },
      {
        time: 'Months 18+',
        title: 'Scaling',
        desc: 'Reaching 152 employees and developing internal AI models.',
        pillars: {
          dev: 'Establishing the venture as a significant tech center and developing advanced AI models.',
          acad: 'Expanding from an academy to a full-scale university, with training operations at peak capacity and onboarding over 100 new employees.',
          pr: 'Establishing the brand as an Israeli knowledge and development center in the AI field.'
        }
      }
    ],
    foot_h2: 'We invite you to take part \n in building the Israeli AI Incubator',
    foot_sub: 'You have the opportunity to establish the first campus',
    foot_quote: 'All the good deeds done in this organization will elevate the divine presence, \n in memory of the pure and innocent girl ',
    foot_quote_strong: 'Chana bat Yaffa Monsonego, H"YD',
    close: 'Close',
    more_info: 'Further information about role and experience will be displayed here.',
    back: 'Back',
    pain_points_title: 'Pain Points',
    pain_point_1: 'Point 1. The workplace disrupts the Haredi lifestyle',
    pain_point_2: 'Point 2. The cost of working hours for a Kollel wife',
    pain_point_3: 'Point 3. Access to the professional world is limited for various reasons'
  }
};

// --- Components ---

const FlowingBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let time = 0;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', resize);
    resize();

    const render = () => {
      time += 0.002;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      const numLines = 8;
      for (let i = 0; i < numLines; i++) {
        ctx.beginPath();
        ctx.moveTo(0, canvas.height * 0.5);
        
        for (let x = 0; x <= canvas.width; x += 20) {
          const yOffset = Math.sin(x * 0.001 + time + i * 0.5) * (50 + i * 20);
          const y = canvas.height * 0.5 + yOffset + (i - numLines / 2) * 40;
          ctx.lineTo(x, y);
        }
        
        const alpha = 0.1 - (i * 0.01);
        ctx.strokeStyle = `rgba(212, 175, 55, ${alpha})`;
        ctx.lineWidth = 1 + i * 0.5;
        ctx.stroke();
      }
      
      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      className="fixed inset-0 pointer-events-none z-0 opacity-40" 
    />
  );
};

const ScrollToTop = () => {
  const { pathname } = useLocation();
  const navType = useNavigationType();

  useEffect(() => {
    if (navType !== 'POP') {
      window.scrollTo(0, 0);
    }
  }, [pathname, navType]);

  return null;
};

export const GoldButton = ({ children, onClick, className = "", variant = "outline" }: { children: React.ReactNode, onClick?: () => void, className?: string, variant?: "outline" | "solid", key?: any }) => {
  const baseClasses = "group relative overflow-hidden rounded-full px-8 py-3 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2 focus:ring-offset-black flex items-center gap-2 font-medium tracking-wide";
  const variants = {
    outline: "border border-gold text-gold hover:text-black",
    solid: "bg-gold text-black hover:bg-gold-light"
  };

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className={`${baseClasses} ${variants[variant]} ${className}`}
    >
      <span className="relative z-10 flex items-center gap-2">
        {children}
      </span>
      {variant === "outline" && (
        <div className="absolute inset-0 z-0 h-full w-0 bg-gold transition-all duration-300 ease-out group-hover:w-full"></div>
      )}
    </motion.button>
  );
};

const SectionTitle = ({ title, isRtl }: { title: string, isRtl: boolean }) => (
  <motion.div 
    initial={{ opacity: 0, x: isRtl ? 20 : -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    className={`mb-12 flex items-center gap-4 ${isRtl ? 'flex-row' : 'flex-row-reverse justify-end'}`}
  >
    <h2 className="text-3xl font-bold text-white md:text-5xl font-serif">{title}</h2>
    <div className="h-10 w-1.5 bg-gold rounded-full"></div>
  </motion.div>
);

const Card = ({ children, className = "", delay = 0 }: { children: React.ReactNode, className?: string, delay?: number, key?: any }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay, duration: 0.6 }}
    className={`glass p-8 rounded-2xl hover:border-gold/30 transition-colors ${className}`}
  >
    {children}
  </motion.div>
);

const TimelineStep = ({ step, idx, isRtl }: { step: any, idx: number, isRtl: boolean, key?: any }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className={`relative mb-16 flex items-start w-full ${isRtl ? 'pr-12' : 'pl-12'}`}>
      <div className={`absolute ${isRtl ? 'right-[6px]' : 'left-[6px]'} w-4 h-4 bg-gold rounded-full shadow-[0_0_15px_rgba(212,175,55,0.5)] z-10 hidden md:block top-8`}></div>
      
      <Card className="w-full relative cursor-pointer" delay={idx * 0.1}>
        <div 
          onClick={() => setIsExpanded(!isExpanded)}
          className="space-y-4"
        >
          <div className="absolute -top-4 left-6 px-3 py-1 bg-gold text-black text-xs font-bold rounded-full">
            {step.time}
          </div>
          <div className="flex justify-between items-center">
            <h4 className="text-xl font-bold text-white font-serif">{step.title}</h4>
            <motion.div
              animate={{ rotate: isExpanded ? 180 : 0 }}
              className="text-gold"
            >
              <ChevronDown size={20} />
            </motion.div>
          </div>
          <p className="text-sm text-gray-400">{step.desc}</p>
          
          <AnimatePresence>
            {isExpanded && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                className="overflow-hidden pt-4 border-t border-white/10 space-y-4"
              >
                <div className="grid gap-4">
                  <div className="bg-blue-500/10 p-4 rounded-xl border border-blue-500/20">
                    <div className="flex items-center gap-2 text-blue-400 font-bold text-xs uppercase mb-2">
                      <Code size={14} /> {isRtl ? 'בית תוכנה' : 'Software House'}
                    </div>
                    <p className="text-xs text-gray-300 leading-relaxed">{step.pillars.dev}</p>
                  </div>
                  <div className="bg-pink-500/10 p-4 rounded-xl border border-pink-500/20">
                    <div className="flex items-center gap-2 text-pink-400 font-bold text-xs uppercase mb-2">
                      <GraduationCap size={14} /> {isRtl ? 'אקדמיה' : 'Academy'}
                    </div>
                    <p className="text-xs text-gray-300 leading-relaxed">{step.pillars.acad}</p>
                  </div>
                  <div className="bg-gold/10 p-4 rounded-xl border border-gold/20">
                    <div className="flex items-center gap-2 text-gold font-bold text-xs uppercase mb-2">
                      <Globe size={14} /> {isRtl ? 'יח"צ ומיתוג' : 'PR & Branding'}
                    </div>
                    <p className="text-xs text-gray-300 leading-relaxed">{step.pillars.pr}</p>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </Card>
    </div>
  );
};

// --- Main App ---

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/business-plan" element={<BusinessPlan />} />
        <Route path="/soda" element={<SodaPartner />} />
        <Route path="/academy-track" element={<AcademyTrack />} />
        <Route path="/human-capital" element={<HumanCapital />} />
        <Route path="/unique-advantages" element={<UniqueAdvantages />} />
        <Route path="/operations" element={<Operations />} />
      </Routes>
    </Router>
  );
}

function LandingPage() {
  const navigate = useNavigate();
  const [lang, setLang] = useState<'he' | 'en'>('he');
  const [modalContent, setModalContent] = useState<{ 
    title: string, 
    content: string, 
    subtitle?: string, 
    image?: string, 
    links?: { url: string, text: string }[]
  } | null>(null);
  const [showPainPoints, setShowPainPoints] = useState(false);
  
  const t = translations[lang];
  const isRtl = lang === 'he';

  const toggleLanguage = () => setLang(prev => prev === 'he' ? 'en' : 'he');

  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.1], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.1], [1, 0.95]);

  return (
    <div dir={isRtl ? "rtl" : "ltr"} className="min-h-screen bg-[#0a0a0a] text-gray-200 font-sans selection:bg-gold selection:text-black">
      <FlowingBackground />

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-white/5">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-2xl font-bold text-gold tracking-widest font-serif"
          >
            {t.hero_title}
          </motion.div>
          
          <div className="flex items-center gap-8">
            <div className="hidden md:flex gap-8">
              {['about', 'team', 'model', 'business', 'timeline'].map((item, idx) => (
                <a 
                  key={idx} 
                  href={`#${item}`} 
                  className="text-sm font-medium text-gray-400 hover:text-gold transition-colors uppercase tracking-widest"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById(item)?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  {t.nav[idx]}
                </a>
              ))}
              <Link 
                to="/business-plan"
                className="text-sm font-medium text-gold hover:text-white transition-colors uppercase tracking-widest"
              >
                {t.nav[5]}
              </Link>
            </div>
            
            <button 
              onClick={toggleLanguage}
              className="flex items-center gap-2 glass px-4 py-1.5 rounded-full text-sm font-medium hover:border-gold transition-all"
            >
              <Globe size={16} className="text-gold" />
              <span>{lang === 'he' ? 'EN' : 'עברית'}</span>
            </button>
          </div>
        </div>
      </nav>

      <AnimatePresence mode="wait">
        {!showPainPoints ? (
          <motion.main
            key="main"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* Hero Section */}
            <section className="relative min-h-screen flex flex-col items-center justify-center px-6 text-center overflow-hidden">
              <motion.div 
                style={{ opacity, scale }}
                className="relative z-10 max-w-5xl mx-auto space-y-8"
              >
                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="text-gold font-medium tracking-[0.2em] uppercase text-sm md:text-base"
                >
                  {t.hero_top}
                </motion.p>
                
                <motion.h1 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className="text-7xl md:text-[10rem] font-extrabold text-gold font-serif leading-none drop-shadow-2xl"
                >
                  {t.hero_title}
                </motion.h1>
                
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="space-y-6"
                >
                  <p className="text-xl md:text-3xl font-light text-gray-300 max-w-3xl mx-auto leading-relaxed">
                    <span className="italic font-serif text-white/90">{t.hero_sub1.split('exclusively')[0]}</span>
                    <span className="font-medium">exclusively for Kollel wives</span>
                  </p>
                  <p className="text-2xl md:text-4xl font-semibold text-white tracking-tight">
                    {t.hero_sub2}
                  </p>
                  <div className="pt-8 border-t border-gold/20 max-w-md mx-auto">
                    <p className="text-sm text-gray-500 font-light italic">
                      {t.hero_sub3}
                    </p>
                  </div>
                </motion.div>
              </motion.div>

              <motion.div 
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}
                className="absolute bottom-10"
              >
                <a href="#about" className="text-gold/50 hover:text-gold transition-colors">
                  <ChevronDown size={40} />
                </a>
              </motion.div>
            </section>

            {/* About & Goal */}
            <section id="about" className="container mx-auto px-6 py-32">
              <div className="grid md:grid-cols-2 gap-16 items-stretch">
                <Card className="flex flex-col justify-center">
                  <SectionTitle title={t.about_title} isRtl={isRtl} />
                  <p className="text-xl leading-relaxed text-gray-300">
                    <strong className="text-gold text-2xl block mb-4 font-serif">{t.about_desc1_strong}</strong>
                    {t.about_desc1}
                  </p>
                </Card>

                <Card className="border-l-4 border-gold flex flex-col justify-between">
                  <div>
                    <SectionTitle title={t.goal_title} isRtl={isRtl} />
                    <p className="text-2xl leading-relaxed text-white font-medium mb-12">
                      {t.goal_desc}
                    </p>
                  </div>
                  <div className="space-y-4">
                    <p className="text-sm text-gray-500 uppercase tracking-widest">{t.goal_pain_q}</p>
                    <GoldButton onClick={() => setShowPainPoints(true)}>
                      {t.goal_btn} <Target size={20} />
                    </GoldButton>
                  </div>
                </Card>
              </div>
            </section>

            {/* 3 Pillars Section */}
            <section className="container mx-auto px-6 py-32 border-t border-white/5">
              <SectionTitle title={t.pillars_title} isRtl={isRtl} />
              <div className="grid md:grid-cols-3 gap-8 mt-12">
                {[
                  { title: t.pillar_1_title, desc: t.pillar_1_desc, icon: <Code size={40} />, color: "blue" },
                  { title: t.pillar_2_title, desc: t.pillar_2_desc, icon: <GraduationCap size={40} />, color: "pink" },
                  { title: t.pillar_3_title, desc: t.pillar_3_desc, icon: <Globe size={40} />, color: "gold" }
                ].map((pillar, idx) => (
                  <Card key={idx} delay={idx * 0.2} className="text-center group">
                    <div className={`mx-auto mb-6 p-4 rounded-2xl glass inline-block transition-transform group-hover:scale-110 duration-500 text-gold`}>
                      {pillar.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4 font-serif">{pillar.title}</h3>
                    <p className="text-gray-400 leading-relaxed text-sm">{pillar.desc}</p>
                  </Card>
                ))}
              </div>
            </section>

            {/* Team Section */}
            <section id="team" className="bg-[#111]/50 py-32">
              <div className="container mx-auto px-6">
                <SectionTitle title={t.team_title} isRtl={isRtl} />
                
                <div className="grid grid-cols-2 lg:grid-cols-3 gap-8 md:gap-16 mt-16">
                  {t.team_names.map((name, idx) => {
                    const roles = [t.team_roles.founder, t.team_roles.ceo, t.team_roles.cto, t.team_roles.cmo, t.team_roles.inst, t.team_roles.comm];
                    const images = [
                      "https://i.ibb.co/TBZFwCdY/Generated-Image-February-16-2026-11-25-PM.jpg", // Israel Gabbay
                      "https://i.ibb.co/zTHyQvbk/e0f6bdb5-c054-465a-805a-caf23d7560b8.jpg", // Li Or
                      "https://i.ibb.co/N6Jn73Mq/unnamed-1.png", // Yossi
                      "https://i.ibb.co/YF5zNGfb/3cc25dc0-9a84-4858-a803-5961aa91ba4b.png", // Shachar
                      "https://i.ibb.co/BHnFj33Q/pic-darpa-books-Hava-Siegelmann.jpg", // Hava
                      "https://i.ibb.co/Qvd8MNtN/fc2fe6aa-1519-4fd8-85c4-24779ea75412.png" // Israel Elgrabli
                    ];
                    
                    const handleMemberClick = () => {
                      if (idx === 0) {
                        setModalContent({
                          title: name,
                          subtitle: t.israel_g_subtitle,
                          content: t.israel_g_bio,
                          image: images[0]
                        });
                      } else if (idx === 1) {
                        setModalContent({
                          title: name,
                          subtitle: "Technion Professor",
                          content: t.li_or_bio,
                          image: images[1],
                          links: [{
                            url: "https://www.sqlink.com/events/fullstack/",
                            text: t.li_or_link_text
                          }]
                        });
                      } else if (idx === 2) {
                        setModalContent({
                          title: name,
                          subtitle: t.yossi_subtitle,
                          content: t.yossi_bio,
                          image: images[2]
                        });
                      } else if (idx === 3) {
                        setModalContent({
                          title: name,
                          subtitle: t.shachar_subtitle,
                          content: t.shachar_bio,
                          image: images[3]
                        });
                      } else if (idx === 4) {
                        setModalContent({
                          title: name,
                          subtitle: t.hava_subtitle,
                          content: t.hava_bio,
                          image: images[4],
                          links: [
                            { url: "https://www.umass.edu/news/article/umass-amherst-ai-expert-hava-siegelmann", text: t.hava_link_umass },
                            { url: "https://en.wikipedia.org/wiki/Hava_Siegelmann", text: t.hava_link_wiki }
                          ]
                        });
                      } else if (idx === 5) {
                        setModalContent({
                          title: name,
                          subtitle: t.israel_el_subtitle,
                          content: t.israel_el_bio,
                          image: images[5]
                        });
                      } else {
                        setModalContent({ title: name, content: `${name}: ${t.more_info}` });
                      }
                    };

                    return (
                      <motion.div 
                        key={idx}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.1 }}
                        className="group text-center"
                      >
                        <div className="relative inline-block mb-6">
                          <div className="w-32 h-32 md:w-44 md:h-44 rounded-full glass border-2 border-white/5 group-hover:border-gold transition-all duration-500 overflow-hidden flex items-center justify-center bg-black/40">
                            {images[idx] ? (
                              <img src={images[idx]} alt={name} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                            ) : (
                              <span className="text-5xl font-serif text-gold/20 group-hover:text-gold/40 transition-colors">
                                {name.charAt(0)}
                              </span>
                            )}
                          </div>
                          <motion.button 
                            whileHover={{ scale: 1.1, rotate: 90 }}
                            onClick={handleMemberClick}
                            className={`absolute bottom-2 ${isRtl ? 'right-2' : 'left-2'} w-10 h-10 bg-gold text-black rounded-full flex items-center justify-center shadow-xl`}
                          >
                            <Plus size={24} />
                          </motion.button>
                        </div>
                        <h3 className="text-xl font-bold text-white mb-1">{name}</h3>
                        <p className="text-sm text-gold font-mono uppercase tracking-tighter">{roles[idx]}</p>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            </section>

            {/* Core Model */}
            <section id="model" className="container mx-auto px-6 py-32">
              <SectionTitle title={t.model_title} isRtl={isRtl} />
              
              <div className="grid md:grid-cols-3 gap-8 mt-12">
                {[
                  { title: t.model_1, desc: t.model_1_desc, btn: t.model_1_btn, icon: <GraduationCap size={40} /> },
                  { title: t.model_2, desc: t.model_2_desc, btn: t.model_2_btn, icon: <Code size={40} /> },
                  { title: t.model_3, desc: t.model_3_desc, btn: t.model_3_btn, icon: <Building size={40} /> }
                ].map((item, idx) => (
                  <Card key={idx} delay={idx * 0.2} className="relative pt-16 group">
                    <div className="absolute -top-6 left-8 w-12 h-12 bg-gold text-black rounded-full flex items-center justify-center text-xl font-bold shadow-lg">
                      {idx + 1}
                    </div>
                    <div className="text-gold mb-6 group-hover:scale-110 transition-transform duration-500">
                      {item.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4 font-serif">{item.title}</h3>
                    <p className="text-gray-400 mb-8 leading-relaxed">{item.desc}</p>
                    <button 
                      onClick={() => {
                        if (idx === 0) {
                          navigate('/academy-track');
                        } else if (idx === 1) {
                          navigate('/soda');
                        } else if (idx === 2) {
                          navigate('/human-capital');
                        } else {
                          setModalContent({ title: item.btn, content: `Details for ${item.btn}` });
                        }
                      }}
                      className="w-full py-3 rounded-xl border border-white/10 hover:border-gold hover:text-gold transition-all text-sm font-medium"
                    >
                      {item.btn}
                    </button>
                  </Card>
                ))}
              </div>
            </section>

            {/* Feedback Loop */}
            <section className="py-32 relative overflow-hidden">
              <div className="absolute inset-0 bg-gold/5 blur-[120px] rounded-full scale-150 pointer-events-none"></div>
              <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-20">
                  <motion.h2 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="text-4xl md:text-6xl font-bold text-white mb-4 font-serif"
                  >
                    {t.loop_title}
                  </motion.h2>
                  <div className="h-1.5 w-24 bg-gold mx-auto rounded-full"></div>
                </div>

                <div className="max-w-4xl mx-auto relative h-[600px] md:h-[700px] flex items-center justify-center">
                  {/* Center Logo */}
                  <div className="relative z-20 w-32 h-32 md:w-48 md:h-48 rounded-full glass border-2 border-gold/30 flex items-center justify-center bg-black shadow-[0_0_50px_rgba(212,175,55,0.2)]">
                    <div className="text-gold font-bold text-2xl md:text-4xl font-serif tracking-widest text-center">
                      {t.hero_title}
                    </div>
                  </div>

                  {/* Loop Items */}
                  <div className="absolute inset-0">
                    {[
                      { title: t.loop_1, desc: t.loop_1_desc, pos: 'top-0 left-1/2 -translate-x-1/2', delay: 0 },
                      { title: t.loop_2, desc: t.loop_2_desc, pos: 'right-0 top-1/2 -translate-y-1/2', delay: 0.2 },
                      { title: t.loop_3, desc: t.loop_3_desc, pos: 'bottom-0 left-1/2 -translate-x-1/2', delay: 0.4 },
                      { title: t.loop_4, desc: t.loop_4_desc, pos: 'left-0 top-1/2 -translate-y-1/2', delay: 0.6 }
                    ].map((item, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: item.delay }}
                        className={`absolute ${item.pos} z-30 w-64 md:w-72`}
                      >
                        <div className="glass p-6 rounded-2xl border border-gold/20 hover:border-gold/50 transition-all text-center group bg-black/80 backdrop-blur-xl">
                          <h4 className="text-lg md:text-xl font-bold text-gold mb-2 group-hover:scale-105 transition-transform">{item.title}</h4>
                          <p className="text-gray-400 text-xs md:text-sm leading-relaxed">{item.desc}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  {/* Connecting Arrows (SVG) */}
                  <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-30" viewBox="0 0 800 800">
                    <defs>
                      <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="0" refY="3.5" orient="auto">
                        <polygon points="0 0, 10 3.5, 0 7" fill="#D4AF37" />
                      </marker>
                    </defs>
                    {/* Top to Right */}
                    <path d="M 450 100 Q 650 150 700 350" fill="none" stroke="#D4AF37" strokeWidth="2" strokeDasharray="5,5" markerEnd="url(#arrowhead)" />
                    {/* Right to Bottom */}
                    <path d="M 700 450 Q 650 650 450 700" fill="none" stroke="#D4AF37" strokeWidth="2" strokeDasharray="5,5" markerEnd="url(#arrowhead)" />
                    {/* Bottom to Left */}
                    <path d="M 350 700 Q 150 650 100 450" fill="none" stroke="#D4AF37" strokeWidth="2" strokeDasharray="5,5" markerEnd="url(#arrowhead)" />
                    {/* Left to Top */}
                    <path d="M 100 350 Q 150 150 350 100" fill="none" stroke="#D4AF37" strokeWidth="2" strokeDasharray="5,5" markerEnd="url(#arrowhead)" />
                  </svg>
                </div>

                <div className="mt-20 flex justify-center">
                  <GoldButton onClick={() => navigate('/unique-advantages')}>
                    {t.loop_btn}
                  </GoldButton>
                </div>
              </div>
            </section>

            {/* Business Model */}
            <section id="business" className="container mx-auto px-6 py-32">
              <SectionTitle title={t.biz_title} isRtl={isRtl} />
              
              <div className="grid md:grid-cols-3 gap-8 mt-12 mb-16">
                {[
                  { title: t.biz_1, desc: t.biz_1_desc },
                  { title: t.biz_2, desc: t.biz_2_desc },
                  { title: t.biz_3, desc: t.biz_3_desc }
                ].map((item, idx) => (
                  <Card key={idx} delay={idx * 0.2} className="border-t-4 border-gold">
                    <h3 className="text-2xl font-bold text-white mb-4 font-serif">{item.title}</h3>
                    <p className="text-gray-400 leading-relaxed">{item.desc}</p>
                  </Card>
                ))}
              </div>

              <div className="flex justify-center">
                <Link to="/business-plan">
                  <GoldButton variant="solid">
                    {t.biz_btn}
                  </GoldButton>
                </Link>
              </div>
            </section>

            {/* Timeline */}
            <section id="timeline" className="bg-[#111]/50 py-32">
              <div className="container mx-auto px-6 max-w-5xl">
                <SectionTitle title={t.time_title} isRtl={isRtl} />
                
                <div className="relative mt-20">
                  <div className={`absolute ${isRtl ? 'right-[14px]' : 'left-[14px]'} top-0 bottom-0 w-px bg-gold/20 hidden md:block`}></div>
                  
                  {t.timeline_steps.map((step, idx) => (
                    <TimelineStep key={idx} step={step} idx={idx} isRtl={isRtl} />
                  ))}
                </div>

                <div className="mt-16 flex justify-center">
                  <GoldButton onClick={() => navigate('/operations')}>
                    {t.time_btn}
                  </GoldButton>
                </div>
              </div>
            </section>

            {/* Footer */}
            <footer className="py-32 border-t border-white/5 bg-black relative overflow-hidden">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-gold to-transparent opacity-30"></div>
              <div className="container mx-auto px-6 text-center relative z-10">
                <motion.h2 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  className="text-4xl md:text-6xl font-bold text-white mb-8 font-serif whitespace-pre-line"
                >
                  {t.foot_h2}
                </motion.h2>
                <p className="text-xl text-gold mb-16 font-light tracking-wide">{t.foot_sub}</p>
                
                <div className="max-w-3xl mx-auto pt-16 border-t border-white/5">
                  <p className="text-gray-500 italic text-lg leading-relaxed">
                    "{t.foot_quote} <strong className="text-gray-300 block mt-2">{t.foot_quote_strong}</strong>"
                  </p>
                </div>
              </div>
            </footer>
          </motion.main>
        ) : (
          <motion.div
            key="pain-points"
            initial={{ opacity: 0, x: isRtl ? 100 : -100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: isRtl ? -100 : 100 }}
            className="min-h-screen pt-24 pb-20 px-6 container mx-auto max-w-3xl"
          >
            <button 
              onClick={() => setShowPainPoints(false)}
              className="mb-8 flex items-center gap-2 text-gold hover:text-gold-light transition-colors group"
            >
              {isRtl ? <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" /> : <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />}
              <span className="font-medium">{t.back}</span>
            </button>

            <SectionTitle title={t.pain_points_title} isRtl={isRtl} />
            
            <div className="space-y-6 mt-10">
              {[t.pain_point_1, t.pain_point_2, t.pain_point_3].map((point, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.2 }}
                  className="glass p-8 rounded-3xl border-l-4 border-gold text-xl md:text-2xl font-light text-white leading-relaxed"
                >
                  {point}
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Modal */}
      <AnimatePresence>
        {modalContent && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setModalContent(null)}
              className="absolute inset-0 bg-black/90 backdrop-blur-md"
            />
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-4xl glass border-gold/30 rounded-3xl p-8 md:p-12 shadow-2xl overflow-hidden"
            >
              <button 
                onClick={() => setModalContent(null)}
                className="absolute top-6 right-6 text-gray-500 hover:text-white transition-colors z-20"
              >
                <X size={24} />
              </button>
              
              <div className="flex flex-col md:flex-row items-center md:items-start gap-10 md:gap-16">
                {modalContent.image && (
                  <div className="w-48 h-48 md:w-80 md:h-80 rounded-full border-4 border-gold/50 shadow-[0_0_30px_rgba(212,175,55,0.3)] overflow-hidden flex-shrink-0">
                    <img src={modalContent.image} alt={modalContent.title} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                  </div>
                )}
                
                <div className={`flex-1 text-center ${isRtl ? 'md:text-right' : 'md:text-left'}`}>
                  <h3 className="text-4xl md:text-6xl font-bold text-gold mb-2 font-serif">{modalContent.title}</h3>
                  {modalContent.subtitle && (
                    <p className="text-xl text-gray-400 mb-8 font-light tracking-wide">{modalContent.subtitle}</p>
                  )}
                  
                  <p className="text-gray-300 text-lg md:text-xl leading-relaxed mb-10">
                    {modalContent.content}
                  </p>
                  
                  {modalContent.links && (
                    <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                      {modalContent.links.map((link, lIdx) => (
                        <GoldButton 
                          key={lIdx}
                          variant="solid" 
                          onClick={() => window.open(link.url, '_blank')}
                        >
                          {link.text}
                          <ExternalLink size={18} />
                        </GoldButton>
                      ))}
                    </div>
                  )}
                </div>
              </div>
              
              {!modalContent.links && (
                <div className="mt-12 pt-8 border-t border-white/5 flex justify-end">
                  <GoldButton onClick={() => setModalContent(null)}>
                    {t.close}
                  </GoldButton>
                </div>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
