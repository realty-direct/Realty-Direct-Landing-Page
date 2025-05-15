'use client';

import { useState } from 'react';
import { PropertyCard } from './PropertyCard';
import { 
  Container, 
  Typography, 
  ToggleButton,
  ToggleButtonGroup,
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Button,
  Drawer,
  IconButton,
  useMediaQuery,
  useTheme
} from '@mui/material';
import { List, Grid3x3, Filter, X } from 'lucide-react';

const mockProperties = [
  {
    id: '1',
    title: 'Modern Family Home with Pool',
    address: '123 Sunshine Street',
    suburb: 'Brisbane, QLD',
    price: '$750,000',
    bedrooms: 4,
    bathrooms: 2,
    parking: 2,
    propertyType: 'House',
    imageUrl: '/property-1.jpg',
    agentName: 'Sarah Thompson',
    agentImage: '/agent-1.jpg'
  },
  {
    id: '2',
    title: 'Luxury Waterfront Apartment',
    address: '45 Marina Drive',
    suburb: 'Gold Coast, QLD',
    price: '$1,200,000',
    bedrooms: 3,
    bathrooms: 2,
    parking: 2,
    propertyType: 'Apartment',
    imageUrl: '/property-2.jpg',
    agentName: 'Michael Rodriguez',
    agentImage: '/agent-2.jpg'
  },
  // Add more mock properties as needed
];

export function PropertyListings() {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [filterOpen, setFilterOpen] = useState(false);
  const [filters, setFilters] = useState({
    priceMin: '',
    priceMax: '',
    bedrooms: '',
    propertyType: '',
    suburb: ''
  });

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const handleViewChange = (_event: React.MouseEvent<HTMLElement>, newView: 'grid' | 'list' | null) => {
    if (newView !== null) {
      setViewMode(newView);
    }
  };

  const FilterContent = () => (
    <div className="p-4">
      <div className="flex justify-between items-center mb-6">
        <Typography variant="h6" className="font-bold">
          Filter Properties
        </Typography>
        {isMobile && (
          <IconButton onClick={() => setFilterOpen(false)}>
            <X />
          </IconButton>
        )}
      </div>

      {/* Price Range - Mobile First */}
      <div className="mb-6">
        <Typography variant="subtitle2" className="mb-3 font-medium">
          Price Range
        </Typography>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <TextField
            label="Min Price"
            variant="outlined"
            size="small"
            fullWidth
            value={filters.priceMin}
            onChange={(e) => setFilters({...filters, priceMin: e.target.value})}
          />
          <TextField
            label="Max Price"
            variant="outlined"
            size="small"
            fullWidth
            value={filters.priceMax}
            onChange={(e) => setFilters({...filters, priceMax: e.target.value})}
          />
        </div>
      </div>

      {/* Bedrooms - Mobile First */}
      <div className="mb-6">
        <FormControl fullWidth size="small">
          <InputLabel>Bedrooms</InputLabel>
          <Select
            value={filters.bedrooms}
            label="Bedrooms"
            onChange={(e) => setFilters({...filters, bedrooms: e.target.value})}
          >
            <MenuItem value="">Any</MenuItem>
            <MenuItem value="1">1+</MenuItem>
            <MenuItem value="2">2+</MenuItem>
            <MenuItem value="3">3+</MenuItem>
            <MenuItem value="4">4+</MenuItem>
          </Select>
        </FormControl>
      </div>

      {/* Property Type - Mobile First */}
      <div className="mb-6">
        <FormControl fullWidth size="small">
          <InputLabel>Property Type</InputLabel>
          <Select
            value={filters.propertyType}
            label="Property Type"
            onChange={(e) => setFilters({...filters, propertyType: e.target.value})}
          >
            <MenuItem value="">All Types</MenuItem>
            <MenuItem value="house">House</MenuItem>
            <MenuItem value="apartment">Apartment</MenuItem>
            <MenuItem value="townhouse">Townhouse</MenuItem>
            <MenuItem value="land">Land</MenuItem>
          </Select>
        </FormControl>
      </div>

      {/* Suburb - Mobile First */}
      <div className="mb-6">
        <TextField
          label="Suburb"
          variant="outlined"
          size="small"
          fullWidth
          value={filters.suburb}
          onChange={(e) => setFilters({...filters, suburb: e.target.value})}
        />
      </div>

      {/* Action Buttons - Mobile First */}
      <div className="flex flex-col gap-3">
        <Button
          variant="contained"
          fullWidth
          className="bg-blue-600 hover:bg-blue-700"
        >
          Apply Filters
        </Button>
        <Button
          variant="outlined"
          fullWidth
          onClick={() => setFilters({
            priceMin: '',
            priceMax: '',
            bedrooms: '',
            propertyType: '',
            suburb: ''
          })}
        >
          Clear Filters
        </Button>
      </div>
    </div>
  );

  return (
    <Container maxWidth="xl" className="py-4 sm:py-8">
      {/* Header - Mobile First */}
      <div className="mb-6">
        <Typography variant="h4" className="font-bold text-gray-900 mb-2 text-2xl sm:text-3xl">
          Available Properties
        </Typography>
        <Typography variant="subtitle1" className="text-gray-600">
          {mockProperties.length} properties found
        </Typography>
      </div>

      {/* Controls Bar - Mobile First */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
        {/* Filter Button - Mobile */}
        <Button
          variant="outlined"
          startIcon={<Filter />}
          onClick={() => setFilterOpen(true)}
          className="w-full sm:w-auto"
        >
          Filters
        </Button>

        {/* View Toggle - Always visible */}
        <ToggleButtonGroup
          value={viewMode}
          exclusive
          onChange={handleViewChange}
          size="small"
          className="ml-auto"
        >
          <ToggleButton value="grid" aria-label="grid view">
            <Grid3x3 className="h-5 w-5" />
          </ToggleButton>
          <ToggleButton value="list" aria-label="list view">
            <List className="h-5 w-5" />
          </ToggleButton>
        </ToggleButtonGroup>
      </div>

      {/* Main Content Grid - Mobile First */}
      <div className="flex gap-6">
        {/* Desktop Filter Sidebar */}
        {!isMobile && (
          <div className="w-72 flex-shrink-0">
            <div className="sticky top-4 bg-white rounded-lg shadow-sm border border-gray-200">
              <FilterContent />
            </div>
          </div>
        )}

        {/* Property Grid - Mobile First */}
        <div className="flex-1">
          <div 
            className={`grid gap-6 ${
              viewMode === 'grid' 
                ? 'grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4' 
                : 'grid-cols-1'
            }`}
          >
            {mockProperties.map((property) => (
              <div key={property.id}>
                <PropertyCard
                  property={property}
                  variant={viewMode}
                  onSelect={(prop) => {
                    // Navigate to property details
                    console.log('Selected property:', prop);
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile Filter Drawer */}
      <Drawer
        anchor="right"
        open={filterOpen}
        onClose={() => setFilterOpen(false)}
        className="sm:hidden"
      >
        <div className="w-80 max-w-[100vw]">
          <FilterContent />
        </div>
      </Drawer>
    </Container>
  );
}