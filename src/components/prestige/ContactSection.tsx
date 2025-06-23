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
    <section className="py-24 bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }} />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Typography variant="h2" className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">
            Get In Touch
          </Typography>
          <div className="max-w-3xl mx-auto">
            <Typography variant="h5" className="text-gray-200 font-semibold text-center leading-relaxed">
              Ready to experience Queensland's premier real estate service? Contact our expert team today.
            </Typography>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Paper elevation={0} className="p-8 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl shadow-2xl">
              <Typography variant="h4" className="font-bold mb-8 text-white">
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
                    InputLabelProps={{ className: 'text-gray-100' }}
                    InputProps={{ className: 'text-white' }}
                    sx={{
                      '& .MuiOutlinedInput-root': {
                        '& fieldset': {
                          borderColor: 'rgba(255, 255, 255, 0.3)',
                        },
                        '&:hover fieldset': {
                          borderColor: 'rgba(255, 255, 255, 0.5)',
                        },
                      },
                    }}
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
                    InputLabelProps={{ className: 'text-gray-100' }}
                    InputProps={{ className: 'text-white' }}
                    sx={{
                      '& .MuiOutlinedInput-root': {
                        '& fieldset': {
                          borderColor: 'rgba(255, 255, 255, 0.3)',
                        },
                        '&:hover fieldset': {
                          borderColor: 'rgba(255, 255, 255, 0.5)',
                        },
                      },
                    }}
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
                    InputLabelProps={{ className: 'text-gray-100' }}
                    InputProps={{ className: 'text-white' }}
                    sx={{
                      '& .MuiOutlinedInput-root': {
                        '& fieldset': {
                          borderColor: 'rgba(255, 255, 255, 0.3)',
                        },
                        '&:hover fieldset': {
                          borderColor: 'rgba(255, 255, 255, 0.5)',
                        },
                      },
                    }}
                  />
                  <TextField
                    fullWidth
                    label="Subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    variant="outlined"
                    className="bg-white/5"
                    InputLabelProps={{ className: 'text-gray-100' }}
                    InputProps={{ className: 'text-white' }}
                    sx={{
                      '& .MuiOutlinedInput-root': {
                        '& fieldset': {
                          borderColor: 'rgba(255, 255, 255, 0.3)',
                        },
                        '&:hover fieldset': {
                          borderColor: 'rgba(255, 255, 255, 0.5)',
                        },
                      },
                    }}
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
                  className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-bold px-12 py-4 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
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
                className="p-6 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-white/15"
              >
                <Typography variant="h5" className="font-bold mb-4 text-blue-400">
                  {office.city} Office
                </Typography>
                
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-blue-400 mt-0.5 flex-shrink-0" />
                    <Typography variant="body1" className="text-white font-medium">
                      {office.address}
                    </Typography>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <Phone className="h-5 w-5 text-green-400 flex-shrink-0" />
                    <Typography variant="body1" className="text-white font-medium">
                      {office.phone}
                    </Typography>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <Mail className="h-5 w-5 text-purple-400 flex-shrink-0" />
                    <Typography variant="body1" className="text-white font-medium">
                      {office.email}
                    </Typography>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <Clock className="h-5 w-5 text-amber-400 mt-0.5 flex-shrink-0" />
                    <Typography variant="body1" className="text-white font-medium">
                      {office.hours}
                    </Typography>
                  </div>
                </div>
              </Paper>
            ))}

            {/* Emergency Contact */}
            <Paper
              elevation={0}
              className="p-6 bg-gradient-to-br from-red-500/20 to-orange-500/20 backdrop-blur-md border border-red-400/30 rounded-xl shadow-lg"
            >
              <Typography variant="h5" className="font-bold mb-3 text-red-400">
                🚨 24/7 Emergency Line
              </Typography>
              <Typography variant="body1" className="text-white font-medium mb-4">
                For urgent property matters outside business hours
              </Typography>
              <Typography variant="h4" className="text-white font-bold">
                +61 7 8888 0000
              </Typography>
            </Paper>
          </div>
        </div>
      </div>
    </section>
  );
};