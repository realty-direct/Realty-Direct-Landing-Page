'use client';

import { Button, Card, CardContent, Typography } from '@mui/material';

export const MarketingSection = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-accent-500 to-accent-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Typography
            variant="h2"
            className="text-4xl md:text-5xl font-semibold mb-4 text-primary-900 tracking-tight"
          >
            Naturally Direct
          </Typography>
          <Typography
            variant="h6"
            className="text-slate-700 font-normal max-w-2xl mx-auto"
            style={{ lineHeight: 1.6 }}
          >
            As Queensland's growing independent real estate company, we believe in direct relationships, transparent communication, and genuine service.
          </Typography>
        </div>

        {/* Marketing Content */}
        <Card
          className="max-w-3xl mx-auto shadow-xl rounded-2xl border border-accent-600 bg-white"
          elevation={0}
        >
          <CardContent className="p-10">
            <Typography
              variant="h4"
              className="font-semibold mb-8 text-center text-primary-800"
            >
              Your Queensland Real Estate Journey Starts Here
            </Typography>

            <div className="space-y-6 mb-10 text-center">
              <Typography
                variant="body1"
                className="text-slate-700 leading-relaxed text-lg"
              >
                We live and breathe Queensland real estate. Our dedicated team of local professionals share your passion for this incredible state – from the vibrant streets of Brisbane to the golden beaches of the Gold Coast, and everywhere in between.
              </Typography>

              <Typography
                variant="body1"
                className="text-slate-700 leading-relaxed text-lg"
              >
                As an independent agency, we've built our reputation on doing things differently. We combine cutting-edge technology with old-fashioned personal service. Our agents are equipped with the best marketing tools and strategies, all backed by a support team that ensures every client receives exceptional service.
              </Typography>

              <Typography
                variant="body1"
                className="text-slate-700 leading-relaxed text-lg"
              >
                We have a simple philosophy:
                {' '}
                <span className="text-primary-700 font-medium">"Direct communication, exceptional results."</span>
                {' '}
                We believe in being straightforward, accessible, and focused on what matters most – helping you achieve your property goals. This approach has made choosing Realty Direct a natural decision for hundreds of Queensland families.
              </Typography>
            </div>

            <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
              <Button
                variant="contained"
                size="large"
                href="/contact"
                className="w-full sm:w-auto font-semibold rounded-full shadow-md"
                style={{
                  background: 'linear-gradient(90deg, var(--primary-900) 0%, var(--primary-700) 100%)',
                  color: '#fff',
                  paddingLeft: 32,
                  paddingRight: 32,
                  textTransform: 'none',
                  fontSize: '1.1rem',
                }}
              >
                Get Started Today
              </Button>
              <Button
                variant="outlined"
                size="large"
                href="/about"
                className="w-full sm:w-auto font-semibold rounded-full border-2"
                style={{
                  borderColor: 'var(--primary-700)',
                  color: 'var(--primary-700)',
                  paddingLeft: 32,
                  paddingRight: 32,
                  textTransform: 'none',
                  fontSize: '1.1rem',
                  background: 'var(--accent-500)',
                }}
              >
                Learn More About Us
              </Button>
            </div>

            {/* Company Motto */}
            <div className="mt-10 pt-8 border-t border-accent-600">
              <Typography
                variant="h6"
                className="text-primary-800 text-center italic font-light"
              >
                "Direct communication, exceptional results"
              </Typography>
              <Typography
                variant="body2"
                className="text-slate-600 text-center mt-2"
              >
                This is what makes us Naturally Direct
              </Typography>
            </div>
          </CardContent>
        </Card>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 max-w-3xl mx-auto">
          <Card className="text-center p-6 shadow-md rounded-xl border border-accent-600 bg-white" elevation={0}>
            <Typography variant="h6" className="font-bold text-primary-700 mb-2 tracking-wide">
              Local Expertise
            </Typography>
            <Typography variant="body2" className="text-slate-600 text-base">
              Deep Queensland market knowledge
            </Typography>
          </Card>

          <Card className="text-center p-6 shadow-md rounded-xl border border-accent-600 bg-white" elevation={0}>
            <Typography variant="h6" className="font-bold text-primary-700 mb-2 tracking-wide">
              Strategic Reach
            </Typography>
            <Typography variant="body2" className="text-slate-600 text-base">
              Connected across Queensland
            </Typography>
          </Card>

          <Card className="text-center p-6 shadow-md rounded-xl border border-accent-600 bg-white" elevation={0}>
            <Typography variant="h6" className="font-bold text-primary-700 mb-2 tracking-wide">
              Tech-Enabled
            </Typography>
            <Typography variant="body2" className="text-slate-600 text-base">
              Best-in-class marketing tools
            </Typography>
          </Card>
        </div>
      </div>
    </section>
  );
};
