'use client';

import { Typography, TextField, Button, Paper } from '@mui/material';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { useState } from 'react';

const offices = [
  {
    city: 'Brisbane',
    address: '123 Queen Street, Brisbane CBD QLD 4000',
    phone: '+61 7 3333 0123',
    email: 'brisbane@realtydirect.com.au',
    hours: 'Mon-Fri 9AM-6PM, Sat 9AM-4PM'
  },
  {
    city: 'Gold Coast',
    address: '456 Surfers Paradise Blvd, Surfers Paradise QLD 4217',
    phone: '+61 7 5555 0123', 
    email: 'goldcoast@realtydirect.com.au',
    hours: 'Mon-Fri 9AM-6PM, Sat 9AM-4PM'
  }
];

export const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'General Inquiry',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  return (
    <section className="py-24 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Typography variant="h2" className="text-4xl md:text-5xl font-light mb-4 text-white">
            Get In Touch
          </Typography>
          <Typography variant="h6" className="text-gray-300 font-light max-w-2xl mx-auto">
            Ready to experience Queensland's premier real estate service? Contact our expert team today.
          </Typography>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Paper elevation={0} className="p-8 bg-white/5 backdrop-blur-sm border border-white/10">
              <Typography variant="h5" className="font-medium mb-6 text-white">
                Send us a Message
              </Typography>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <TextField
                    fullWidth
                    label="Full Name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    variant="outlined"
                    className="bg-white/5"
                    InputLabelProps={{ className: 'text-gray-300' }}
                    InputProps={{ className: 'text-white' }}
                  />
                  <TextField
                    fullWidth
                    label="Email Address"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    variant="outlined"
                    className="bg-white/5"
                    InputLabelProps={{ className: 'text-gray-300' }}
                    InputProps={{ className: 'text-white' }}
                  />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <TextField
                    fullWidth
                    label="Phone Number"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    variant="outlined"
                    className="bg-white/5"
                    InputLabelProps={{ className: 'text-gray-300' }}
                    InputProps={{ className: 'text-white' }}
                  />
                  <TextField
                    fullWidth
                    label="Subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    variant="outlined"
                    className="bg-white/5"
                    InputLabelProps={{ className: 'text-gray-300' }}
                    InputProps={{ className: 'text-white' }}
                  />
                </div>
                
                <TextField
                  fullWidth
                  label="Message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  multiline
                  rows={4}
                  required
                  variant="outlined"
                  className="bg-white/5"
                  InputLabelProps={{ className: 'text-gray-300' }}
                  InputProps={{ className: 'text-white' }}
                />
                
                <Button
                  type="submit"
                  variant="contained"
                  size="large"
                  className="bg-amber-500 hover:bg-amber-600 text-gray-900 font-medium px-8 py-3"
                >
                  Send Message
                </Button>
              </form>
            </Paper>
          </div>

          {/* Office Information */}
          <div className="space-y-8">
            {offices.map((office, index) => (
              <Paper
                key={index}
                elevation={0}
                className="p-6 bg-white/5 backdrop-blur-sm border border-white/10"
              >
                <Typography variant="h6" className="font-medium mb-4 text-amber-400">
                  {office.city} Office
                </Typography>
                
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-gray-400 mt-0.5 flex-shrink-0" />
                    <Typography variant="body2" className="text-gray-300">
                      {office.address}
                    </Typography>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <Phone className="h-5 w-5 text-gray-400 flex-shrink-0" />
                    <Typography variant="body2" className="text-gray-300">
                      {office.phone}
                    </Typography>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <Mail className="h-5 w-5 text-gray-400 flex-shrink-0" />
                    <Typography variant="body2" className="text-gray-300">
                      {office.email}
                    </Typography>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <Clock className="h-5 w-5 text-gray-400 mt-0.5 flex-shrink-0" />
                    <Typography variant="body2" className="text-gray-300">
                      {office.hours}
                    </Typography>
                  </div>
                </div>
              </Paper>
            ))}

            {/* Emergency Contact */}
            <Paper
              elevation={0}
              className="p-6 bg-amber-500/10 backdrop-blur-sm border border-amber-500/20"
            >
              <Typography variant="h6" className="font-medium mb-2 text-amber-400">
                24/7 Emergency Line
              </Typography>
              <Typography variant="body2" className="text-gray-300 mb-3">
                For urgent property matters outside business hours
              </Typography>
              <Typography variant="h6" className="text-white">
                +61 7 8888 0000
              </Typography>
            </Paper>
          </div>
        </div>
      </div>
    </section>
  );
};