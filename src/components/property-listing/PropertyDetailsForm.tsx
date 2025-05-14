'use client';

import { useTranslations } from 'next-intl';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { ArrowRight } from 'lucide-react';

// Define the schema for the property details form
const propertyDetailsSchema = z.object({
  propertyType: z.string().min(1, { message: 'Property type is required' }),
  address: z.string().min(5, { message: 'Full address is required' }),
  bedrooms: z.number().min(0, { message: 'Must be a positive number' }).optional(),
  bathrooms: z.number().min(0, { message: 'Must be a positive number' }).optional(),
  parking: z.number().min(0, { message: 'Must be a positive number' }).optional(),
  price: z.string().min(1, { message: 'Price is required' }),
  description: z.string().min(20, { message: 'Description must be at least 20 characters' }),
  features: z.string().optional(),
});

type PropertyDetailsFormValues = z.infer<typeof propertyDetailsSchema>;

type PropertyDetailsFormProps = {
  onSubmit: (data: PropertyDetailsFormValues) => void;
  initialValues?: Partial<PropertyDetailsFormValues>;
};

export const PropertyDetailsForm = ({
  onSubmit,
  initialValues,
}: PropertyDetailsFormProps) => {
  const t = useTranslations('PropertyListing');
  
  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isSubmitting },
  } = useForm<PropertyDetailsFormValues>({
    resolver: zodResolver(propertyDetailsSchema),
    defaultValues: initialValues || {
      propertyType: '',
      address: '',
      bedrooms: 0,
      bathrooms: 0,
      parking: 0,
      price: '',
      description: '',
      features: '',
    },
  });
  
  // Common class for form inputs
  const inputClass = "w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200";
  const labelClass = "block text-sm font-medium text-gray-700 mb-2";
  const errorClass = "mt-1 text-sm text-red-600 font-medium";
  
  return (
    <div className="w-full bg-white p-8 rounded-lg">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">{t('step_1_title')}</h2>
      
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-8">
          {/* Property Type */}
          <div className="col-span-1 md:col-span-2">
            <label htmlFor="propertyType" className={labelClass}>
              {t('form_property_type')}
            </label>
            <select
              id="propertyType"
              {...register('propertyType')}
              className={`${inputClass} ${errors.propertyType ? 'border-red-500' : ''}`}
            >
              <option value="">{t('form_property_type_placeholder')}</option>
              <option value="house">{t('form_property_type_house')}</option>
              <option value="apartment">{t('form_property_type_apartment')}</option>
              <option value="townhouse">{t('form_property_type_townhouse')}</option>
              <option value="land">{t('form_property_type_land')}</option>
              <option value="commercial">{t('form_property_type_commercial')}</option>
            </select>
            {errors.propertyType && (
              <p className={errorClass}>{errors.propertyType.message}</p>
            )}
          </div>

          {/* Property Address */}
          <div className="col-span-1 md:col-span-2">
            <label htmlFor="address" className={labelClass}>
              {t('form_address')}
            </label>
            <input
              id="address"
              type="text"
              {...register('address')}
              placeholder={t('form_address_placeholder')}
              className={`${inputClass} ${errors.address ? 'border-red-500' : ''}`}
            />
            {errors.address && (
              <p className={errorClass}>{errors.address.message}</p>
            )}
          </div>

          {/* Bedrooms */}
          <div>
            <label htmlFor="bedrooms" className={labelClass}>
              {t('form_bedrooms')}
            </label>
            <Controller
              name="bedrooms"
              control={control}
              render={({ field }) => (
                <input
                  id="bedrooms"
                  type="number"
                  min="0"
                  {...field}
                  value={field.value === 0 ? '' : field.value}
                  onChange={(e) => field.onChange(e.target.value ? parseInt(e.target.value, 10) : 0)}
                  className={`${inputClass} ${errors.bedrooms ? 'border-red-500' : ''}`}
                />
              )}
            />
            {errors.bedrooms && (
              <p className={errorClass}>{errors.bedrooms.message}</p>
            )}
          </div>

          {/* Bathrooms */}
          <div>
            <label htmlFor="bathrooms" className={labelClass}>
              {t('form_bathrooms')}
            </label>
            <Controller
              name="bathrooms"
              control={control}
              render={({ field }) => (
                <input
                  id="bathrooms"
                  type="number"
                  min="0"
                  {...field}
                  value={field.value === 0 ? '' : field.value}
                  onChange={(e) => field.onChange(e.target.value ? parseInt(e.target.value, 10) : 0)}
                  className={`${inputClass} ${errors.bathrooms ? 'border-red-500' : ''}`}
                />
              )}
            />
            {errors.bathrooms && (
              <p className={errorClass}>{errors.bathrooms.message}</p>
            )}
          </div>

          {/* Parking */}
          <div>
            <label htmlFor="parking" className={labelClass}>
              {t('form_parking')}
            </label>
            <Controller
              name="parking"
              control={control}
              render={({ field }) => (
                <input
                  id="parking"
                  type="number"
                  min="0"
                  {...field}
                  value={field.value === 0 ? '' : field.value}
                  onChange={(e) => field.onChange(e.target.value ? parseInt(e.target.value, 10) : 0)}
                  className={`${inputClass} ${errors.parking ? 'border-red-500' : ''}`}
                />
              )}
            />
            {errors.parking && (
              <p className={errorClass}>{errors.parking.message}</p>
            )}
          </div>

          {/* Asking Price */}
          <div>
            <label htmlFor="price" className={labelClass}>
              {t('form_price')}
            </label>
            <input
              id="price"
              type="text"
              {...register('price')}
              placeholder={t('form_price_placeholder')}
              className={`${inputClass} ${errors.price ? 'border-red-500' : ''}`}
            />
            {errors.price && (
              <p className={errorClass}>{errors.price.message}</p>
            )}
          </div>

          {/* Description */}
          <div className="col-span-1 md:col-span-2">
            <label htmlFor="description" className={labelClass}>
              {t('form_description')}
            </label>
            <textarea
              id="description"
              rows={4}
              {...register('description')}
              placeholder={t('form_description_placeholder')}
              className={`${inputClass} resize-none ${errors.description ? 'border-red-500' : ''}`}
            />
            {errors.description && (
              <p className={errorClass}>{errors.description.message}</p>
            )}
          </div>

          {/* Features */}
          <div className="col-span-1 md:col-span-2">
            <label htmlFor="features" className={labelClass}>
              {t('form_features')}
            </label>
            <input
              id="features"
              type="text"
              {...register('features')}
              placeholder={t('form_features_placeholder')}
              className={`${inputClass} ${errors.features ? 'border-red-500' : ''}`}
            />
            {errors.features && (
              <p className={errorClass}>{errors.features.message}</p>
            )}
          </div>
        </div>

        <div className="flex justify-end pt-4">
          <button
            type="submit"
            disabled={isSubmitting}
            className="inline-flex items-center px-6 py-3 border border-transparent rounded-lg shadow-md text-base font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200 disabled:opacity-70"
          >
            {t('next_button')}
            <ArrowRight className="ml-2 h-5 w-5" />
          </button>
        </div>
      </form>
    </div>
  );
};