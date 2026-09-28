# 🚗 Constatare Amiabilă Online System

A complete accident claim ("Constatare Amiabilă") form system for your Nuxt.js website, inspired by autoklasen.ro.

## ✨ Features

- **Multi-step wizard form** (5 steps)
  - Accident details (date, time, location, injuries)
  - Vehicle A information (user's vehicle)
  - Vehicle B information (third-party vehicle)
  - Witness details (optional, multi-witness support)
  - Summary, PDF generation & export

- **Auto-save functionality**
  - Data automatically saved to browser localStorage
  - Users can resume form where they left off
  - Clear data option available

- **PDF Generation**
  - Generates professional PDF documents
  - Download locally or send via email
  - Accepted by all Romanian insurance companies

- **Responsive Design**
  - Mobile-friendly interface
  - Tailwind CSS styling
  - Progress tracking with visual feedback

- **Backend Integration** (optional)
  - API endpoint for form submissions
  - Email notification support
  - Database storage ready

## 📁 Project Structure

```
pages/
  └── constatare-amiabila/
      └── index.vue                 # Main form page

components/
  └── constatare/
      ├── Step1AccidentDetails.vue  # Accident info
      ├── Step2VehicleA.vue         # User's vehicle
      ├── Step3VehicleB.vue         # Third-party vehicle
      ├── Step4Witnesses.vue        # Witness info
      └── Step5Summary.vue          # PDF & submission

server/
  └── api/
      └── constatare-amiabila.post.ts  # Form submission endpoint
```

## 🚀 Getting Started

### Installation

The project already has all dependencies installed. jsPDF is included for PDF generation.

```bash
npm install
```

### Development

```bash
npm run dev
```

Then visit: `http://localhost:3000/constatare-amiabila/`

### Building

```bash
npm run build
npm run generate
```

## 📝 Usage

### User Flow

1. **Step 1**: Enter accident details
   - Date and time of accident
   - Location and country
   - Injuries and other damages

2. **Step 2**: Vehicle A (Your vehicle)
   - Vehicle make, model, year, VIN
   - License plate, insurance info
   - Driver information

3. **Step 3**: Vehicle B (Third-party)
   - Vehicle make, model, year, VIN
   - License plate, insurance info
   - Driver information

4. **Step 4**: Witnesses
   - Add/remove witness details
   - Optional field - can skip if no witnesses

5. **Step 5**: Summary & Export
   - Review all data
   - Download PDF or submit online
   - Clear data after completion

### Features

- **Auto-save**: Data is automatically saved to localStorage as user fills the form
- **Resume**: If user closes tab, data is restored when they return
- **Clear Data**: Button to clear all saved data with confirmation
- **PDF Download**: Generate professional PDF for downloading or printing
- **Email Submission**: Submit form data to backend (requires email service setup)

## 🔧 Configuration

### Customizing Insurance Companies

Edit `Step2VehicleA.vue` and `Step3VehicleB.vue`:

```vue
<select v-model="localData.vehicleA.insuranceCompany">
  <option value="Allianz">Allianz</option>
  <option value="Axa">Axa</option>
  <!-- Add more as needed -->
</select>
```

### Email Service Integration

Edit `server/api/constatare-amiabila.post.ts`:

```typescript
// Integrate with your email service
// Options: Resend, SendGrid, Nodemailer, etc.

const emailResponse = await sendEmail({
  to: 'support@yoursite.com',
  cc: formData.vehicleA.driverEmail,
  subject: `Constatare Amiabilă - ${formData.vehicleA.licensePlate}`,
  html: generateEmailTemplate(formData),
})
```

### Styling Customization

The form uses Tailwind CSS. All colors and spacing can be customized in:
- `tailwind.config.js`
- Individual component files (indigo-600, blue-50, etc.)

## 📊 Data Storage

### localStorage Structure

```javascript
{
  accidentDate: "2026-04-24",
  accidentTime: "14:30",
  country: "Romania",
  accidentLocation: "Str. Victoriei, nr. 45, București",
  injuries: "no",
  otherDamages: "no",
  
  vehicleA: {
    make: "BMW",
    model: "X5",
    year: "2020",
    vin: "...",
    licensePlate: "B 123 ABC",
    insuranceCompany: "Allianz",
    policyNumber: "...",
    driverName: "Ion Popescu",
    driverPhone: "+40 745 123 456",
    driverEmail: "ion@example.com",
    licenseNumber: "RO ABC 123456",
    damageDescription: "..."
  },
  
  vehicleB: { /* same structure */ },
  
  witnesses: [
    {
      name: "Ana Popescu",
      phone: "+40 745 999 888",
      email: "ana@example.com"
    }
  ],
  
  agreedResponsibility: "50-50",
  notes: "..."
}
```

### API Submission

**POST** `/api/constatare-amiabila`

```json
{
  "type": "constatare_amiabila",
  "formData": { /* all form data */ },
  "agreedResponsibility": "50-50",
  "notes": "...",
  "submittedAt": "2026-04-24T14:30:00Z"
}
```

**Response**:
```json
{
  "success": true,
  "message": "Constatarea a fost primită cu succes",
  "submissionId": "CA-1234567890"
}
```

## 🎨 Design Notes

- **Color Scheme**: Indigo, blue, red, purple, green
- **Progress Indicator**: Visual progress bar showing current step
- **Validation**: Required fields marked with red asterisk (*)
- **Responsive**: Optimized for mobile, tablet, and desktop
- **Accessibility**: Semantic HTML, proper labels, ARIA attributes

## 📦 Dependencies

- **Nuxt 3**: Full-stack framework
- **Vue 3**: Frontend framework
- **Tailwind CSS**: Utility-first CSS
- **jsPDF**: PDF generation
- **@heroicons/vue**: Icon components

## 🔐 Security Notes

- Form data is stored client-side in localStorage (not encrypted)
- For sensitive data, implement server-side storage
- Validate all form inputs on the backend
- Use HTTPS for all API submissions
- Implement rate limiting on the API endpoint

## 🚀 Future Enhancements

- [ ] File upload for damage photos
- [ ] Signature capture (digital signature)
- [ ] Multi-language support
- [ ] Email template customization
- [ ] Database storage for submissions
- [ ] Admin dashboard for viewing submissions
- [ ] SMS notifications
- [ ] Integration with insurance company APIs

## 📞 Support

For customization or issues, refer to:
- [Nuxt Documentation](https://nuxt.com)
- [jsPDF Documentation](https://github.com/parallax/jsPDF)
- [Tailwind CSS Documentation](https://tailwindcss.com)

## 📄 License

Include your license information here.

---

**Built with ❤️ using Vue 3 + Nuxt 3 + Tailwind CSS**
