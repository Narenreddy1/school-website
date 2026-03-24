export interface InquiryFormData {
  name: string;
  phone: string;
  email: string;
  grade: string;
  message: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  avatar?: string;
}

export interface Facility {
  id: string;
  title: string;
  description: string;
  image: string;
  icon: string;
}
