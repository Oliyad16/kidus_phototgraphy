/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface ExifData {
  camera: string;
  lens: string;
  focalLength: string;
  aperture: string;
  shutterSpeed: string;
  iso: number;
}

export interface Photo {
  id: string;
  title: string;
  category: 'portraits' | 'weddings' | 'landscapes' | 'street';
  url: string;
  location: string;
  date: string;
  backstory: string;
  exif: ExifData;
  featured?: boolean;
}

export interface GearItem {
  id: string;
  category: 'body' | 'lens' | 'drone' | 'accessory';
  name: string;
  description: string;
  specs: string[];
}

export interface JournalPost {
  id: string;
  title: string;
  summary: string;
  content: string;
  coverImage: string;
  date: string;
  location: string;
  readTime: string;
}

export interface BookingRequest {
  id: string;
  name: string;
  email: string;
  phone: string;
  date: string;
  details: string;
  status: 'pending' | 'confirmed' | 'cancelled';
  createdAt: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  avatarUrl?: string;
}
