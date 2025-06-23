'use client';

import { Typography, Paper, Chip } from '@mui/material';
import { TrendingUp, TrendingDown, DollarSign, Home, Calendar } from 'lucide-react';

const marketData = [
  {
    title: 'Median House Prices',
    locations: [
      { area: 'Main Beach', price: '$2.8M', change: '+12.5%', trend: 'up' },
      { area: 'New Farm', price: '$1.9M', change: '+8.3%', trend: 'up' },
      { area: 'Ascot', price: '$2.1M', change: '+15.2%', trend: 'up' },
    ]
  },
  {
    title: 'Days on Market',
    locations: [
      { area: 'Waterfront Properties', price: '28 days', change: '-5 days', trend: 'down' },
      { area: 'Luxury Homes', price: '35 days', change: '-8 days', trend: 'down' },
      { area: 'Penthouses', price: '42 days', change: '+3 days', trend: 'up' },
    ]
  }
];

const insights = [
  {
    icon: TrendingUp,
    title: 'Market Growth',
    stat: '14.2%',
    description: 'Average price growth in luxury segments YoY',
    trend: 'Positive outlook for Q2 2024'
  },
  {
    icon: Home,
    title: 'Property Sales',
    stat: '287',
    description: 'Luxury properties sold this quarter',
    trend: '+23% compared to last quarter'
  },
  {
    icon: DollarSign,
    title: 'Average Sale Price',
    stat: '$3.2M',
    description: 'For waterfront and prestige properties',
    trend: 'Highest in 5 years'
  }
];

export const MarketInsights = () => {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Typography variant="h2" className="text-4xl md:text-5xl font-light mb-4">
            Market Insights
          </Typography>
          <Typography variant="h6" className="text-gray-600 font-light max-w-2xl mx-auto">
            Stay informed with the latest Queensland luxury property market trends and data
          </Typography>
        </div>

        {/* Key Insights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {insights.map((insight, index) => {
            const Icon = insight.icon;
            return (
              <Paper key={index} elevation={0} className="p-8 text-center border border-gray-200">
                <div className="inline-flex p-3 bg-gray-900 rounded-full mb-4">
                  <Icon className="h-6 w-6 text-white" />
                </div>
                <Typography variant="h3" className="text-3xl font-light mb-2">
                  {insight.stat}
                </Typography>
                <Typography variant="h6" className="font-medium mb-2">
                  {insight.title}
                </Typography>
                <Typography variant="body2" className="text-gray-600 mb-3">
                  {insight.description}
                </Typography>
                <Chip
                  label={insight.trend}
                  size="small"
                  className="bg-green-100 text-green-800"
                />
              </Paper>
            );
          })}
        </div>

        {/* Market Data */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {marketData.map((data, index) => (
            <Paper key={index} elevation={0} className="p-8 border border-gray-200">
              <Typography variant="h5" className="font-medium mb-6">
                {data.title}
              </Typography>
              <div className="space-y-4">
                {data.locations.map((location, locationIndex) => (
                  <div key={locationIndex} className="flex items-center justify-between">
                    <div>
                      <Typography variant="subtitle1" className="font-medium">
                        {location.area}
                      </Typography>
                      <Typography variant="h6" className="text-gray-900">
                        {location.price}
                      </Typography>
                    </div>
                    <div className="flex items-center gap-2">
                      {location.trend === 'up' ? (
                        <TrendingUp className="h-4 w-4 text-green-500" />
                      ) : (
                        <TrendingDown className="h-4 w-4 text-red-500" />
                      )}
                      <Typography
                        variant="body2"
                        className={location.trend === 'up' ? 'text-green-600' : 'text-red-600'}
                      >
                        {location.change}
                      </Typography>
                    </div>
                  </div>
                ))}
              </div>
            </Paper>
          ))}
        </div>

        {/* Data Source */}
        <div className="mt-8 text-center">
          <div className="flex items-center justify-center gap-2 text-gray-500">
            <Calendar className="h-4 w-4" />
            <Typography variant="caption">
              Data updated quarterly • Last update: March 2024
            </Typography>
          </div>
        </div>
      </div>
    </section>
  );
};