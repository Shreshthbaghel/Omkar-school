# Omkaar School of Excellence - Official Website

A modern, responsive website for Omkaar School of Excellence, built with React and featuring a premium navy-gold design theme based on the school's brand identity.

## 🌟 Features

- **Modern Design**: Premium navy-gold color scheme with smooth animations
- **Responsive Layout**: Fully mobile-friendly and tablet-optimized
- **Gallery Section**: Showcase school events and performances
- **Contact Form**: EmailJS integration for callback requests with spam prevention
- **Google Maps Integration**: Direct link to school location
- **SEO Optimized**: Proper meta tags and semantic HTML
- **Fast Performance**: Built with Vite for lightning-fast load times

## 🎨 Design Highlights

- Navy Blue (#1a2947) and Rich Gold (#d4a853) color palette
- Playfair Display serif font for headings
- Inter sans-serif font for body text
- Smooth hover effects and micro-animations
- Premium card designs with gold accents

## 🛠️ Tech Stack

- **Frontend**: React 19.2.3
- **Build Tool**: Vite 7.2.4
- **Styling**: Tailwind CSS 3.4.19
- **Email Service**: EmailJS
- **Fonts**: Google Fonts (Inter, Playfair Display)

## 📋 Prerequisites

- Node.js (v16 or higher)
- npm or yarn

## 🚀 Quick Start

### 1. Clone the repository

```bash
git clone https://github.com/Shreshthbaghel/Omkar-school.git
cd school_page
```

### 2. Install dependencies

```bash
npm install
```

### 3. Set up environment variables

Create a `.env` file in the root directory:

```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

See `.env.example` for reference.

### 4. Start development server

```bash
npm run dev
```

Visit `http://localhost:5173` to view the website.

## 📦 Build for Production

```bash
npm run build
```

The build files will be in the `dist` folder.

## 🎯 EmailJS Setup

1. Create a free account at [EmailJS](https://www.emailjs.com/)
2. Add your email service (Gmail recommended)
3. Create an email template with these variables:
   - `{{parent_name}}`
   - `{{student_name}}`
   - `{{class}}`
   - `{{phone}}`
   - `{{message}}`
   - `{{submission_date}}`
4. Copy your Service ID, Template ID, and Public Key to `.env`

## 📁 Project Structure

```
school_page/
├── public/
│   └── images/
│       ├── logo.png
│       └── gallery/          # Add event photos here
├── src/
│   ├── components/           # Reusable components
│   │   ├── Navigation.jsx
│   │   ├── Button.jsx
│   │   ├── FacultyCard.jsx
│   │   ├── Gallery.jsx
│   │   └── ...
│   ├── sections/             # Page sections
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Leadership.jsx
│   │   ├── Faculty.jsx
│   │   ├── Admissions.jsx
│   │   └── Contact.jsx
│   ├── data/                 # School information (gitignored)
│   │   ├── schoolInfo.json
│   │   └── faculty.json
│   ├── services/             # API services
│   │   ├── emailService.js
│   │   └── dataService.js
│   └── utils/                # Utility functions
├── .env.example              # Environment variables template
└── tailwind.config.js        # Tailwind configuration
```

## 📸 Adding Gallery Images

1. Create the folder: `public/images/gallery/`
2. Add your event photos with these names:
   - `event-1.jpg` - Annual Day Celebration
   - `event-2.jpg` - Sports Day
   - `event-3.jpg` - Cultural Program
   - `event-4.jpg` - Science Exhibition
   - `event-5.jpg` - Music Competition
   - `event-6.jpg` - Independence Day

Or customize the gallery by editing `src/components/Gallery.jsx`

## 🔐 Data Privacy

Sensitive school data files are excluded from version control:
- `/src/data/schoolInfo.json` - School information
- `/src/data/faculty.json` - Faculty details

Example templates are in `/src/data.example/`

## 🌐 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import project in Vercel
3. Add environment variables in Vercel dashboard
4. Deploy!

### Netlify

1. Push your code to GitHub
2. Connect repository in Netlify
3. Build command: `npm run build`
4. Publish directory: `dist`
5. Add environment variables

## 📝 Customization

### Update School Information

Edit `src/data/schoolInfo.json`:
- School name, tagline, about
- Mission, vision, facilities
- Contact details, working hours
- Available classes

### Update Faculty

Edit `src/data/faculty.json`:
- Founders, Principal, Teachers
- Add photos to `public/images/`

### Change Colors

Edit `tailwind.config.js`:
```javascript
colors: {
  primary: {
    DEFAULT: '#1a2947',  // Navy Blue
    // ...
  },
  gold: {
    DEFAULT: '#d4a853',  // Rich Gold
    // ...
  }
}
```

## 🐛 Troubleshooting

**CSS not loading?**
- Make sure Tailwind CSS v3 is installed
- Check `postcss.config.js` configuration
- Restart dev server

**EmailJS not working?**
- Verify environment variables are set
- Check EmailJS dashboard for API limits
- Ensure template variables match

## 📞 Contact

**Omkaar School of Excellence**
- Email: omkaareducation1@gmail.com
- Phone: +91 8602410774
- Address: In front of Dauji Petrol Pump, Sahrana Road, Morena (M.P.) - 476001

