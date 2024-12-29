# Interactive Pricing Component

A modern, responsive pricing component built with Next.js 13+, TypeScript, and Tailwind CSS. This component features dynamic pricing updates, theme switching, and smooth animations.

![Interactive Pricing Component](https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?auto=format&fit=crop&q=80&w=1000)

## Features

- 🎚️ Interactive pricing slider with real-time updates
- 💰 Monthly/yearly billing toggle with 25% discount
- 🌓 Dark mode support with smooth transitions
- 📱 Fully responsive design
- ♿ Accessible components
- ⌨️ Keyboard navigation support

## Tech Stack

- **Framework:** Next.js 13+
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **UI Components:** shadcn/ui
- **Icons:** Lucide React
- **Theme:** next-themes

## Getting Started

1. Clone the repository:
```bash
git clone https://github.com/yourusername/interactive-pricing-component.git
```

2. Install dependencies:
```bash
cd interactive-pricing-component
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
├── app/
│   ├── layout.tsx       # Root layout with theme provider
│   ├── page.tsx         # Main page component
│   ├── providers.tsx    # Theme provider setup
│   └── globals.css      # Global styles
├── components/
│   ├── pricing/
│   │   └── PricingCard.tsx    # Main pricing component
│   └── theme/
│       └── ThemeToggle.tsx    # Dark mode toggle
└── lib/
    └── utils.ts         # Utility functions
```

## Features in Detail

### Pricing Tiers
- 10K pageviews: $8/month
- 50K pageviews: $12/month
- 100K pageviews: $16/month
- 500K pageviews: $24/month
- 1M pageviews: $36/month

### Billing Options
- Monthly billing (default)
- Yearly billing (25% discount)

### Theme Support
- Light mode (default)
- Dark mode
- System preference detection
- Smooth theme transitions

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Design inspiration from Frontend Mentor
- Icons by Lucide React
- UI components by shadcn/ui
