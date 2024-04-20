import image_1 from "../assets/image_1.svg";
import image_2 from "../assets/image_2.svg";
import Ambulance from "../assets/Ambulance.svg";
import BloodSample from "../assets/Blood_Sample.svg";
import Capsule from "../assets/Capsule.svg";
import DoctorIcon from "../assets/doctor_icon.svg";
import Drugstore from "../assets/Drugstore.svg";
import HeartRateMonitor from "../assets/Heart Rate Monitor.svg";
import HeartRate from "../assets/Heart Rate.svg";
import Hospital from "../assets/Hospital.svg";
import XRay from "../assets/X-Ray.svg";
import Immune from "../assets/Immune.svg";
import Stethoscope from "../assets/Stethoscope.svg";
import AhmadKhan from "../assets/Ahmad_khan.svg";
import Heena from "../assets/Heena_Sachdeva.svg";
import Ankur from "../assets/Ankur_Sharma.svg";

export const OfferCarouselData = [
  { id: 1, image: image_1 },
  { id: 2, image: image_2 },
  { id: 3, image: image_1 },
  { id: 4, image: image_2 },
  { id: 5, image: image_1 },
];

export const medicalService = [
  { name: "Doctor", image: DoctorIcon },
  { name: "Labs", image: Drugstore },
  { name: "Hospital", image: Hospital },
  { name: "Medical Store", image: Capsule },
  { name: "Ambulance", image: Ambulance },
];

export const SpecializationsData = [
  { name: "Dentistry", image: Drugstore },
  { name: "Primary Care", image: Stethoscope },
  { name: "Cardiology", image: HeartRate },
  { name: "MRI Resonance", image: HeartRateMonitor },
  { name: "Blood Test", image: BloodSample },
  { name: "Piscologist", image: Immune },
  { name: "Laboratory", image: Drugstore },
  { name: "X-Ray", image: XRay },
];

export const SpecialistsData = [
  { name: "Dr. Lesley Hull", specialist: "Medicine", image: AhmadKhan },
  { name: "Dr. Ahmad Khan", specialist: "Neurologist", image: AhmadKhan },
  { name: "Dr. Heena Sachdeva", specialist: "Orthopedics", image: Heena },
  { name: "Dr. Ankur Sharma", specialist: "Medicine", image: Ankur },
  { name: "Dr. Ahmad Stevens", specialist: "", image: AhmadKhan },
];

export const QueryQuestionsData = [
  { id: 1, question: "Why choose our medical for your family?" },
  { id: 2, question: "Why we are different from others?" },
  { id: 3, question: "Trusted & experience senior care & love" },
  { id: 4, question: "How to get appointment for emergency cases?" },
];
