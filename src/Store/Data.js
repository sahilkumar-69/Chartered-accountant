import {
  Shield,
  Calculator,
  FileText,
  Building2,
  Globe,
  TrendingUp,
  Users,
  Award,
  Phone,
  Mail,
  MapPin,
  ArrowRight,
  CheckCircle,
  Star,
  BookOpen,
  Calendar,
  ChevronRight,
  Clock,
} from "lucide-react";

export const services = [
  {
    id: 1,
    icon: Shield,
    title: "Audit & Assurance",
    description:
      "Auditing & Assurance Services are at the core of any Financial Management setup. We offer a complete range of Assurance Solutions to help improve your financial efficiency, accuracy and stability.",
    features: [
      "Internal Audit",
      "Statutory Audit",
      "Tax Audit",
      "Bank Audit",
      "Stock Audit",
    ],
  },
  {
    id: 2,
    icon: Calculator,
    title: "Income Tax Services",
    description:
      "We specialise in providing Time-bound and quality Income Tax services. Our range of Direct Tax services cover all aspects of Indian Income Tax Laws and help minimize tax liability.",
    features: [
      "Tax Planning",
      "ITR Filing",
      "Tax Appeals",
      "Search & Seizure",
      "Transfer Pricing",
    ],
  },
  {
    id: 3,
    icon: FileText,
    title: "GST Services India",
    description:
      "GST (Goods & Service Tax) is a recently introduced concept which merges most indirect taxes under one umbrella tax. We provide comprehensive GST solutions.",
    features: [
      "GST Registration",
      "GST Returns",
      "GST Advisory",
      "GST Appeals",
      "GST Compliance",
    ],
  },
  {
    id: 4,
    icon: Users,
    title: "NGO Services",
    description:
      "Our NGO department specialises in providing legal, professional and consultative services to various NGO clients with comprehensive solutions.",
    features: [
      "NGO Formation",
      "80G & 12A Registration",
      "FCRA Registration",
      "NGO Auditing",
      "Compliance Services",
    ],
  },
  {
    id: 5,
    icon: Building2,
    title: "Business Registration",
    description:
      "Our team of experts are dedicated to helping businesses register with various authorities seamlessly for hassle-free registration experience.",
    features: [
      "Trademark Registration",
      "IEC Code",
      "MSME Registration",
      "NITI Aayog Registration",
      "Company Formation",
    ],
  },
  {
    id: 6,
    icon: TrendingUp,
    title: "Finance Services",
    description:
      "We offer a wide range of finance services to meet the diverse needs of our clients with customized solutions for business growth.",
    features: [
      "Business Loans",
      "Loan Syndication",
      "Project Finance",
      "Working Capital",
      "Investment Advisory",
    ],
  },
  {
    id: 7,
    icon: Globe,
    title: "Outsourcing Services",
    description:
      "We offer comprehensive outsourcing services including accounts/bookkeeping and payroll outsourcing to help businesses focus on core operations.",
    features: [
      "Bookkeeping",
      "Payroll Processing",
      "Accounts Outsourcing",
      "Virtual CFO",
      "Financial Reporting",
    ],
  },
  {
    id: 8,
    icon: Award,
    title: "International Taxation",
    description:
      "We offer expertise in international taxation to help clients navigate complexities of cross-border transactions and compliance requirements.",
    features: [
      "NRI Taxation",
      "Transfer Pricing",
      "DTAA",
      "Expat Taxation",
      "15CA/15CB Filing",
    ],
  },
];

export const homePagestats = [
  { suffix: "+", end: "20", label: "Years Experience" },
  { suffix: "+", end: "1000", label: "Happy Clients" },
  { suffix: "", end: "4", label: "Office Locations" },
  { suffix: "+", end: "50", label: "Cities Served" },
];

export const servicePageStats = [
  { suffix: "%", end: "100", label: "Client Satisfication" },
  { suffix: "+", end: "500", label: "Positive Feedbacks" },
  { suffix: "*7", end: "24", label: "Clients Support " },
];

export const AboutPageOffices = [
  {
    link: "https://www.google.com/maps?q=28.6296148,77.1459466",
    name: "Delhi",
    primary: false,
  },
  {
    link: "https://www.google.com/maps?q=28.5355,77.3910",
    name: "Noida",
    primary: false,
  },
  {
    link: "https://www.google.com/maps?q=28.5355,77.3910",
    name: "Gurgaon (Gurugram)",
    primary: false,
  },
  {
    link: "https://www.google.com/maps?q=28.5355,77.3910",
    name: "Greater Noida",
    primary: false,
  },
];

export const AboutPageSectors = [
  "Software and Information Technology",
  "Engineering",
  "Traveling & Hospitality",
  "Education",
  "Financial Services and Banking",
  "Non-Government Organisation (NGO)",
];

export const AboutPageServiceAreaCities = [
  "Jaipur",
  "Lucknow",
  "Kanpur",
  "Ghaziabad",
  "Ludhiana",
  "Agra",
  "Faridabad",
  "Meerut",
  "Varanasi",
  "Amritsar",
  "Allahabad",
  "Jodhpur",
  "Chandigarh",
  "Kota",
  "Bareilly",
  "Moradabad",
  "Aligarh",
  "Jalandhar",
  "Saharanpur",
  "Gorakhpur",
  "Bikaner",
  "Firozabad",
  "Dehradun",
  "Ajmer",
  "Loni",
  "Jhansi",
  "Jammu",
];

export const AboutPageServices = [
  "Assurance Services",
  "Accounting & Payroll Outsourcing Services",
  "Business Tax Planning and Financial Planning Services",
  "Company Formation and Business Setup Services",
  "Project Financing & PE Funding Services",
];

export const ContactUsoffices = [
  {
    city: "Gurgaon",
    title: "Gurgaon CA Firm",
    name: "NEXUS, Chartered Accountants",
    address: [
      "26 B2 ,Ground Floor ",
      "Spaze itech Tower",
      "Sohna Road, Sector 49",
      "Gurugram, Haryana 122002",
    ],
    color: "indigo",
  },
  {
    city: "Noida",
    title: "CA Firm in Noida",
    name: "NEXUS – Chartered Accountants",
    address: [
      "B-077, 7th Floor",
      "ATS Bouquet",
      "A2/2, Sector 132",
      "Noida, (U.P) – 201304",
    ],
    color: "blue",
  },
];

export const ContactUscontactInfo = [
  {
    icon: Phone,
    title: "Phone Numbers",
    details: ["+91-120-4164460", "+91-9811255829"],
    color: "blue",
  },
  {
    icon: Mail,
    title: "Email Address",
    details: ["ahujaandahuja@gmail.com"],
    color: "green",
  },
  {
    icon: Clock,
    title: "Business Hours",
    details: ["Mon - Fri: 9:00 AM - 6:00 PM", "Sat: 9:00 AM - 2:00 PM"],
    color: "purple",
  },
];

export const IndustryServedIndustries = [
  "IT/ITES",
  "BPO/KPO",
  "Manufacturing",
  "Trading",
  "Services",
  "Telecom",
  "Startups",
  "NGOs",
  "NBFC",
  "Sports",
];