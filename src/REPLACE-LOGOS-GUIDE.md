# Οδηγός Αντικατάστασης Λογοτύπων

Αυτός ο οδηγός θα σε βοηθήσει να αντικαταστήσεις τα placeholder λογότυπα με τα πραγματικά λογότυπα.

## 📋 Τι χρειάζεται να αντικατασταθεί

### 1. Λογότυπο Valore (3 θέσεις)
Χρησιμοποιείται σε:
- Navbar (πάνω αριστερά)
- Hero section (μεγάλο, στο κέντρο)
- Footer (κάτω αριστερά)

### 2. Λογότυπα Ασφαλιστικών Εταιρειών (22 λογότυπα)
Connections section - infinite scroll carousel:
1. CIGNA
2. ARAG
3. Apeiron
4. Allianz
5. AIG
6. Aetna
7. Wakam
8. Syneteristiki
9. Europaiki Pisti
10. Horizon
11. NN (National Netherlands)
12. Mondial Assistance
13. Minetta
14. Eurolife FFH
15. MetLife
16. Lloyd's Register
17. Interasco
18. Interamerican
19. Interlife
20. Dynamis
21. Ydrogeios
22. Generali

### 3. Λογότυπα Πελατών (13 λογότυπα)
Clients section - grid layout:
1. Special Cars
2. Viamari SA
3. Yestay Development
4. CHE Restaurant
5. Novitron
6. Dimotikos Syllogos
7. Button Down (δεν έχει λογότυπο ακόμα)
8. Yestay Homes (δεν έχει λογότυπο ακόμα)
9. Aquarelle (δεν έχει λογότυπο ακόμα)
10. Pulsar (δεν έχει λογότυπο ακόμα)
11. Grigoris (δεν έχει λογότυπο ακόμα)
12. Envie Shoes (δεν έχει λογότυπο ακόμα)

---

## 🎯 Μέθοδος 1: Χρήση Πραγματικών Λογοτύπων (Προτεινόμενο)

### Βήμα 1: Συγκέντρωση Λογοτύπων

Για **Valore λογότυπο**:
- Πάρε το επίσημο λογότυπο σε PNG με διαφανές background
- Προτεινόμενο μέγεθος: 500x500px τουλάχιστον
- Format: PNG με transparency

Για **Ασφαλιστικές Εταιρείες**:
- Κατέβασε τα επίσημα λογότυπα από τις ιστοσελίδες τους
- Ή ζήτησε τα από τους εκπροσώπους τους
- Format: PNG ή SVG
- Μέγεθος: 200x80px (περίπου)

Για **Πελάτες**:
- Επικοινώνησε με τους πελάτες για τα λογότυπά τους
- Ή βρες τα από τις ιστοσελίδες τους
- Format: PNG ή SVG

### Βήμα 2: Βελτιστοποίηση Εικόνων

Πριν ανεβάσεις τις εικόνες:

1. **Μέγεθος αρχείου**: Κράτα τα κάτω από 100KB το καθένα
2. **Διαστάσεις**: 
   - Valore logo: 500x500px max
   - Insurance logos: 200x80px max
   - Client logos: 200x80px max
3. **Format**: 
   - Προτιμά PNG για λογότυπα με διαφάνεια
   - Ή WebP για μικρότερο μέγεθος

**Tools για βελτιστοποίηση**:
- [TinyPNG](https://tinypng.com/) - Δωρεάν compression
- [Squoosh](https://squoosh.app/) - Google's image optimizer
- Photoshop/GIMP - Export for Web

### Βήμα 3: Ανέβασμα Εικόνων

**Επιλογή A: Local (στο project)**

1. Δημιούργησε φακέλους:
```
/public/
  /assets/
    /logos/
      valore-logo.png
    /insurance/
      cigna.png
      arag.png
      apeiron.png
      ... (όλα τα insurance logos)
    /clients/
      special-cars.png
      viamari.png
      ... (όλα τα client logos)
```

2. Άνοιξε `/lib/assets.ts`

3. Άλλαξε τα paths:
```typescript
export const assets = {
  // Main logo
  logo: "/assets/logos/valore-logo.png",
  
  // Hero image - κράτα το Unsplash ή βάλε δική σου
  heroImage: "/assets/hero-image.jpg",
  
  // Insurance company logos
  insuranceCompanies: {
    cigna: "/assets/insurance/cigna.png",
    arag: "/assets/insurance/arag.png",
    apeiron: "/assets/insurance/apeiron.png",
    // ... και τα υπόλοιπα
  },
  
  // Client logos
  clients: {
    specialCars: "/assets/clients/special-cars.png",
    viamari: "/assets/clients/viamari.png",
    // ... και τα υπόλοιπα
  },
};
```

**Επιλογή B: Cloud Storage (Προτεινόμενο για production)**

1. Άνοιξε λογαριασμό σε image hosting service:
   - [Cloudinary](https://cloudinary.com) - Best για πολλές εικόνες
   - [imgBB](https://imgbb.com) - Απλό και δωρεάν
   - [AWS S3](https://aws.amazon.com/s3/) - Professional solution

2. Ανέβασε όλες τις εικόνες

3. Αντίγραψε τα URLs

4. Άλλαξε το `/lib/assets.ts`:
```typescript
export const assets = {
  logo: "https://res.cloudinary.com/your-account/valore-logo.png",
  
  insuranceCompanies: {
    cigna: "https://res.cloudinary.com/your-account/cigna.png",
    // ... κλπ
  },
};
```

---

## 🎨 Μέθοδος 2: Χρήση Logo Maker (Γρήγορη Λύση)

Αν δεν έχεις τα λογότυπα:

### Για Valore Logo:

1. Χρησιμοποίησε δωρεάν logo maker:
   - [Canva](https://www.canva.com/create/logos/)
   - [Hatchful by Shopify](https://www.shopify.com/tools/logo-maker)
   - [LogoMakr](https://logomakr.com/)

2. Χρησιμοποίησε:
   - Χρώμα: #52a447 (το πράσινο της Valore)
   - Text: "Valore Assicurativo" ή "V"
   - Style: Professional, modern

### Για Insurance Company Logos:

Οι περισσότερες ασφαλιστικές έχουν τα λογότυπά τους online:
- Google search: "[Company Name] logo PNG"
- Ή επίσημη ιστοσελίδα → Press Kit / Media

---

## 📝 Naming Convention

Όταν αποθηκεύεις τις εικόνες, χρησιμοποίησε:

✅ **ΚΑΛΑ**:
- `valore-logo.png`
- `cigna-logo.png`
- `special-cars-logo.png`

❌ **ΛΑΘΟΣ**:
- `Logo 1.PNG`
- `image (1).png`
- `Untitled.png`

Πάντα χρησιμοποίησε:
- Lowercase letters
- Dashes αντί για spaces
- Descriptive names

---

## ✅ Checklist Αντικατάστασης

Πριν το deployment:

- [ ] Έχω το λογότυπο Valore σε PNG
- [ ] Έχω τα 22 λογότυπα ασφαλιστικών εταιρειών
- [ ] Έχω τουλάχιστον 6 λογότυπα πελατών
- [ ] Όλες οι εικόνες είναι optimized (<100KB)
- [ ] Έχω ενημερώσει το `/lib/assets.ts`
- [ ] Έχω δοκιμάσει τοπικά ότι φορτώνουν
- [ ] Τα λογότυπα φαίνονται καλά σε mobile και desktop

---

## 🚨 Συνήθη Προβλήματα

### "Η εικόνα δεν φορτώνει"
- ✅ Έλεγξε το path (π.χ. `/assets/` ΟΧΙ `assets/`)
- ✅ Βεβαιώσου ότι το αρχείο είναι στο σωστό φάκελο
- ✅ Έλεγξε το όνομα αρχείου (case-sensitive)

### "Το λογότυπο είναι πολύ μεγάλο/μικρό"
- ✅ Κάνε resize πριν το ανεβάσεις
- ✅ Χρησιμοποίησε σωστές διαστάσεις (δες παραπάνω)

### "Η ποιότητα είναι κακή"
- ✅ Χρησιμοποίησε PNG αντί για JPG για λογότυπα
- ✅ Μην κάνεις πολύ compression
- ✅ Χρησιμοποίησε 2x resolution για retina displays

---

## 💡 Pro Tips

1. **Κράτα τα original files**: Πάντα κράτα backup των original λογοτύπων
2. **Version control**: Χρησιμοποίησε descriptive filenames (π.χ. `valore-logo-v2.png`)
3. **WebP format**: Σκέψου να χρησιμοποιήσεις WebP για καλύτερο performance
4. **Lazy loading**: Τα logos φορτώνουν με lazy loading αυτόματα
5. **Alt text**: Τα alt texts είναι ήδη ορισμένα στον κώδικα

---

## 📞 Χρειάζεσαι Βοήθεια;

Αν έχεις πρόβλημα με την αντικατάσταση των λογοτύπων:
- Στείλε email στο info@valore.com
- Ή ζήτησε βοήθεια από developer

---

Καλή Επιτυχία! 🎨
