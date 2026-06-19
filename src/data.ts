import { Dumbbell, Activity, UserCheck, Users, Apple } from "lucide-react";

export const DATA = {
  stats: [
    { label: "Active Members", value: "3,500+" },
    { label: "Personal Trainers", value: "50+" },
    { label: "Group Classes/Weekly", value: "120+" },
    { label: "Equipment Stations", value: "200+" },
    { label: "Retention Rate", value: "92%" },
    { label: "Locations", value: "3" },
    { label: "Years in Business", value: "10" },
    { label: "Average Rating", value: "4.8/5" },
  ],
  services: [
    { title: "Strength Training", description: "State-of-the-art weightlifting equipment and strength programs.", icon: Dumbbell, details: "Our Elite Zone features over 50+ premium machines, 10 Olympic lifting platforms, and dumbbells up to 80kg. Perfect for bodybuilding, powerlifting, or general strength conditioning." },
    { title: "Cardio Fitness", description: "Treadmills, rowing machines, bikes, and HIIT zones.", icon: Activity, details: "The HIIT Lab includes curved treadmills, Concept2 rowers, SkiErgs, and assault bikes. Designed to maximize your cardiovascular endurance and burn calories efficiently." },
    { title: "Personal Training", description: "One-on-one coaching with certified fitness experts.", icon: UserCheck, details: "Get customized workout plans, form correction, and dedicated motivation from our elite trainers. Includes initial fitness assessments and weekly progress tracking." },
    { title: "Group Classes", description: "Yoga, Zumba, CrossFit, Pilates, and Functional Training.", icon: Users, details: "Join 120+ weekly high-energy classes led by expert instructors. All classes are scalable to any fitness level, promoting community support and team motivation." },
    { title: "Nutrition Guidance", description: "Customized meal plans and fitness consultations.", icon: Apple, details: "Diet is 80% of the battle. Our certified nutritionists will build custom macros, meal timing plans, and supplement recommendations tailored specifically to your body type and goals." }
  ],
  plans: [
    { title: "Basic", price: "₹1,499", period: "/month", features: ["Cardio & Strength Zones", "Locker Room Access", "1 Fitness Assessment"] },
    { title: "Premium", price: "₹2,499", period: "/month", features: ["All Basic Features", "Unlimited Group Classes", "Guest Pass (1/month)", "Sauna Access"], popular: true },
    { title: "Elite", price: "₹4,999", period: "/month", features: ["All Premium Features", "Nutrition Consultation", "Priority Booking", "Free Merchandise"] },
    { title: "PT Add-on", price: "₹3,000", period: "/month", features: ["12 Sessions/month", "Custom Workout Plan", "Weekly Progress Tracking"] }
  ],
  testimonials: [
    { quote: "Lost 15 kg in 6 months with FitZone's personalized training program.", author: "Rahul Sharma" },
    { quote: "The trainers helped me build strength and confidence.", author: "Priya Patel" }
  ],
  trainers: [
    { name: "Amit Verma", role: "Strength & Conditioning Coach", experience: "8+ Years Experience", specialties: "Powerlifting, Hypertrophy", details: "Amit holds a Master's in Sports Science and has trained over 500 athletes. He focuses on progressive overload, biomechanics, and injury prevention to help clients build serious muscle safely." },
    { name: "Neha Kapoor", role: "Certified Nutrition Specialist", experience: "6+ Years Experience", specialties: "Weight Management, Sports Nutrition", details: "Neha believes in sustainable eating habits rather than crash diets. She has successfully helped clients reverse metabolic issues and achieve lasting fat loss through science-based nutrition." },
    { name: "Rohit Singh", role: "CrossFit Level 2 Trainer", experience: "10+ Years Experience", specialties: "HIIT, Olympic Weightlifting", details: "A former competitive weightlifter, Rohit brings unparalleled intensity and technical expertise to his coaching. Known for his high-energy group classes and precise form correction." }
  ],
  admin: [
    { label: "Monthly Revenue", value: "₹12,50,000", trend: "+12%" },
    { label: "New Members This Month", value: "180", trend: "+5%" },
    { label: "Membership Renewals", value: "420", trend: "-2%" },
    { label: "Avg Daily Check-ins", value: "650", trend: "+8%" },
    { label: "Trainer Utilization", value: "87%", trend: "+4%" },
    { label: "Lead Conversion Rate", value: "32%", trend: "+1%" }
  ]
};
