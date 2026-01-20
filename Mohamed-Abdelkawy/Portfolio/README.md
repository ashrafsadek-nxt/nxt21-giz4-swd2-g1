## Mohamed Abdelkawy – Personal Portfolio

ده الريبو بتاع موقع البورتفوليو الشخصي بتاعي كـ Frontend Developer.  
عامل فيه عرض بسيط ونضيف لمين أنا، إيه المهارات اللي بشتغل بيها، شوية مشاريع، والتعليم/الكورسات، وطريقة التواصل.

---

### 💡 فكرة المشروع

الموقع معمول عشان يكون لينك واحد أبعته للشركات أو أي حد عايز يشوف شغلي بسرعة:

- **Hero**: جزء تعريفي فيه اسمي والـ role بتاعي كـ Frontend Developer.
- **About**: فقرة مختصرة عنّي، طريقتي في الشغل، واهتماماتي.
- **Skills**:  
  - Frontend (HTML, CSS, JavaScript, TypeScript, Responsive Design, Mobile First).  
  - Frontend Frameworks (React.js, Next.js, TailwindCSS, Material-UI).  
  - Tools & Workflow (Git/GitHub, VS Code).
- **Projects**:  
  - Price Tracking Script  
  - Portfolio Website
- **Education & Certificates**: من الـ CV بتاعي (Arab Open University + الكورسات).
- **Contact**: فورم للتواصل + بيانات التواصل (Email, Phone, Location, LinkedIn, GitHub).

كل ده معمول بـ HTML + CSS + JavaScript من غير فريموركات، مع شوية تفاصيل UX/UI عشان التجربة تكون نظيفة وواضحة.

---

### 🧱 التقنيات المستخدمة

- **HTML5**
  - هيكل السكاشن الرئيسية (Hero, About, Skills, Projects, Education, Contact).
  - Semantic structure عشان الكود يبقى واضح وسهل القراءة.

- **CSS3**
  - CSS Variables للألوان والـ shadows عشان يبقى سهل أغير الثيم.
  - Flexbox و CSS Grid في توزيع العناصر والـ layout.
  - Animations خفيفة على الـ shapes في الـ Hero (float animation) عشان تضيف حركة بسيطة من غير ما تشتت.
  - Responsive Design بالكامل للموبايل والتابلت.

- **JavaScript (Vanilla)**
  - Burger menu للـ navigation في الشاشات الصغيرة.
  - Smooth scrolling للروابط اللي في الناف بار بين السكاشن.
  - Intersection Observer عشان أعمل fade-in بسيط للسكاشن والكروت أثناء الـ scroll.
  - Highlight للـ active link في الناف بار حسب السكشن اللي ظاهر.
  - Handling بسيط للـ Contact Form (simulation حالياً + notification).

---

### 📁 هيكل المشروع

- `index.html`  
  - الهيكل الرئيسي للموقع، وكل سكشن متقسم بوضوح:
    - `hero`  
    - `about`  
    - `skills`  
    - `projects`  
    - `education`  
    - `contact`

- `style/style.css`  
  - كل الستايلات الخاصة بالمشروع:
    - Navigation modern / glassmorphism.
    - Hero مع floating shapes.
    - Skills كـ كروت + tags بدل progress bars.
    - Projects, Education, Contact, Footer.
    - Responsive rules للموبايل والتابلت.

- `script/script.js`  
  - منطق الـ UI البسيط:
    - فتح/قفل الـ burger menu.
    - تغيير شكل الناف بار مع الـ scroll.
    - Smooth scroll للـ anchors.
    - Intersection Observer للـ fade-in.
    - Contact form submit + notification.

- `assets/`  
  - مجلد جاهز لأي صور/لوجو/أيقونات إضافية لو احتجتها.

---

### 🚀 تشغيل المشروع محليًا

1. نزل الريبو أو اعمله clone:

```bash
git clone <repo-url>
cd Portfolio
```

2. افتح `index.html` مباشرة في المتصفح  
   أو شغّل سيرفر بسيط لو حابب:

```bash
npx serve .
```

3. جرّب الموقع على:
   - Desktop
   - Tablet
   - Mobile  
   عشان تتأكد أن كل حاجة شغالة كويس على كل المقاسات.

---

### ✉️ تواصل

لو حابب تتواصل معايا بخصوص شغل أو تعاون:

- **Email**: `mabdelkawy554@gmail.com`  
- **Phone**: `+20 101 649 0404`  
- **Location**: Cairo, Egypt  

لينكات **LinkedIn** و **GitHub** موجودة جوه سكشن **Get In Touch** في الموقع نفسه.

