# Valore Assicurativo - Insurance Website

Επαγγελματικός ιστότοπος για το ασφαλιστικό γραφείο "Valore Assicurativo" με πλήρη δίγλωσση υποστήριξη (Ελληνικά/Αγγλικά).

## 🌟 Χαρακτηριστικά

### Πλήρης Λειτουργικότητα
- ✅ **Δίγλωσσος ιστότοπος** (Ελληνικά & Αγγλικά) με language switcher
- ✅ **Responsive Design** - Λειτουργεί τέλεια σε desktop, tablet και mobile
- ✅ **Πολλαπλές Σελίδες** με React Router
- ✅ **Δυναμικές Φόρμες** (Property Insurance & Health Insurance)
- ✅ **Contact Form** που στέλνει στο info@valore.com
- ✅ **Smooth Animations** με Framer Motion
- ✅ **Professional Design** με εταιρικά χρώματα (#52a447 πράσινο)

### Ενότητες

#### Αρχική Σελίδα
1. **Hero Section** - Λογότυπο και κεντρικό μήνυμα
2. **About** - Παρουσίαση εταιρείας
3. **History** - Ιστορία της εταιρείας
4. **Individual Solutions** - 5 κατηγορίες ασφαλειών
5. **Business Solutions** - Λύσεις για επιχειρήσεις
6. **Unique Coverages** - Ειδικές καλύψεις
7. **Pricing** - 3 πακέτα τιμολόγησης
8. **Clients** - 13 λογότυπα πελατών
9. **Contact Form** - Φόρμα επικοινωνίας
10. **Connections** - 22 ασφαλιστικές εταιρείες (με infinite scroll carousel)
11. **Google Reviews** - Κριτικές πελατών
12. **Footer** - Πλήρες footer με links

#### Ξεχωριστές Σελίδες
- **Home Insurance** - Λεπτομερής πληροφορίες
- **Vehicle Insurance** - Ασφάλειες αυτοκινήτων
- **Boat Insurance** - Σκαφών ασφάλειες
- **Health Programs** - Προγράμματα υγείας
- **Pet Insurance** - Ασφάλειες κατοικίδιων
- **Personal Insurance** - Προσωπικές ασφάλειες
- **Business Solutions** - Επιχειρηματικές λύσεις
- **FAQ Individuals** - Συχνές ερωτήσεις ιδιωτών
- **FAQ Businesses** - Συχνές ερωτήσεις επιχειρήσεων
- **Health Form** - Φόρμα υγείας
- **Property Form** - Δυναμική φόρμα περιουσίας

## 🛠️ Τεχνολογίες

- **React** - Frontend framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Framer Motion** - Animations
- **React Router** - Navigation
- **Shadcn/UI** - UI Components
- **Lucide React** - Icons

## 📁 Δομή Αρχείων

```
/
├── App.tsx                 # Main app component
├── components/
│   ├── About.tsx
│   ├── Hero.tsx
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   ├── Connections.tsx     # Insurance companies carousel
│   ├── Clients.tsx         # Client logos
│   ├── Contact.tsx
│   ├── ContactForm.tsx
│   ├── GoogleReviews.tsx
│   ├── History.tsx
│   ├── IndividualSolutions.tsx
│   ├── Pricing.tsx
│   ├── UniqueCoverages.tsx
│   └── ui/                 # Shadcn components
├── pages/
│   ├── HomePage.tsx
│   ├── HomeInsurancePage.tsx
│   ├── HealthProgramsPage.tsx
│   ├── VehicleInsurancePage.tsx
│   ├── BoatInsurancePage.tsx
│   ├── PetInsurancePage.tsx
│   ├── PersonalInsurancePage.tsx
│   ├── BusinessSolutionsPage.tsx
│   ├── FAQIndividualsPage.tsx
│   ├── FAQBusinessesPage.tsx
│   ├── HealthFormPage.tsx
│   └── PropertyFormPage.tsx
├── lib/
│   ├── LanguageContext.tsx  # Language switching logic
│   ├── translations.ts      # All translations (EN/EL)
│   └── assets.ts           # Image paths & URLs
└── styles/
    └── globals.css         # Global styles & typography
```

## 🎨 Χρώματα & Branding

- **Κύριο Πράσινο**: #52a447
- **Γκρι**: Various shades για backgrounds
- **Γραμματοσειρά Τίτλων**: Montserrat
- **Γραμματοσειρά Κειμένου**: System fonts

## 🚀 Deployment

Δες το αρχείο [DEPLOYMENT.md](./DEPLOYMENT.md) για λεπτομερείς οδηγίες deployment.

### Γρήγορη Έναρξη

1. **Download** τον κώδικα από Figma Make
2. **Upload** στο Vercel ή Netlify
3. **Deploy** αυτόματα σε λίγα δευτερόλεπτα!

## 📷 Εικόνες & Assets

Όλες οι εικόνες ορίζονται στο `/lib/assets.ts`:

- **Logo**: Unsplash image (αντικατέστησε με το πραγματικό λογότυπο)
- **Hero Image**: Professional business photo
- **Insurance Company Logos**: Placeholder (αντικατέστησε με πραγματικά)
- **Client Logos**: Placeholder (αντικατέστησε με πραγματικά)
- **Insurance Category Images**: Unsplash photos

### Πώς να αντικαταστήσεις εικόνες:

1. Βάλε τις εικόνες στο `/public/assets/`
2. Άνοιξε το `/lib/assets.ts`
3. Άλλαξε τα URLs σε `/assets/your-image.png`

## 📧 Email Configuration

Οι φόρμες στέλνουν στο: **info@valore.com**

Για να λειτουργήσουν οι φόρμες πραγματικά, χρειάζεται:
- Email service (π.χ. SendGrid, EmailJS)
- Environment variables configuration
- Backend endpoint ή serverless function

## 🌐 Languages

Ο ιστότοπος υποστηρίζει:
- 🇬🇧 **English**
- 🇬🇷 **Ελληνικά**

Όλες οι μεταφράσεις βρίσκονται στο `/lib/translations.ts`

## 🔧 Customization

### Αλλαγή Χρωμάτων

Άνοιξε το `/styles/globals.css` και άλλαξε τις τιμές:
```css
--color-primary: #52a447;
```

### Προσθήκη Νέας Γλώσσας

1. Άνοιξε το `/lib/translations.ts`
2. Πρόσθεσε νέο language object
3. Ενημέρωσε το `LanguageContext.tsx`

### Προσθήκη Νέας Σελίδας

1. Δημιούργησε component στο `/pages/`
2. Πρόσθεσε route στο `App.tsx`
3. Πρόσθεσε link στο `Navbar.tsx`
4. Πρόσθεσε μεταφράσεις στο `translations.ts`

## 📱 Mobile Responsive

Ο ιστότοπος είναι πλήρως responsive με:
- Mobile-first design
- Touch-friendly navigation
- Optimized images
- Hamburger menu για mobile

## ⚡ Performance

- Lazy loading για εικόνες
- Optimized animations
- Minimal bundle size
- Fast page transitions

## 📝 License

© 2025 Valore Assicurativo. All rights reserved.

## 🤝 Contact

Email: info@valore.com
Τηλέφωνο: 210 417 7760
Τοποθεσία: Πειραιάς, Ελλάδα

---

Δημιουργήθηκε με ❤️ χρησιμοποιώντας Figma Make
