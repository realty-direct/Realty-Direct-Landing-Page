import { redirect } from 'next/navigation';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Realty Direct - Queensland Real Estate',
  description: "Queensland's most flexible real estate platform. Professional property services across Brisbane and Gold Coast.",
};

export default function RootPage() {
  redirect('/en');
}