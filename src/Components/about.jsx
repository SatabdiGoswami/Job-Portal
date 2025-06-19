import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import nicLogo from '../assets/nic.png';

const sections = {
  "Introduction": `
    Welcome to the National Government Job Recruitment Portal, your one-stop destination for all updates and information
    related to public sector employment in India. Our portal is developed under the National Informatics Centre (NIC) internship initiative 
    to ensure transparency, accessibility, and ease of use for millions of aspiring candidates across the country.

    This platform is designed to centralize job opportunities across central and state government departments, autonomous bodies,
    PSUs, constitutional offices, and more. Whether you're a school graduate looking for your first job or a post-graduate seeking
    a specialized role, we aim to cater to every Indian citizen interested in serving the nation through public service.
    
    Government jobs offer a combination of stability, responsibility, prestige, and benefits that make them highly sought-after. 
    This portal simplifies the path to those careers by streamlining access to reliable information, secure applications,
    and timely updates. 
  `,

  "Available Job Categories": `
    The portal provides categorized access to thousands of job roles in the government sector, including:

    1. All India Services – Indian Administrative Service (IAS), Indian Police Service (IPS), Indian Foreign Service (IFS).
    2. Central Civil Services – Indian Revenue Service (IRS), Indian Audit and Accounts Service (IA&AS), etc.
    3. Public Sector Undertakings (PSUs) – Jobs in companies like NTPC, BHEL, GAIL, SAIL, ONGC, offering engineering, 
       HR, finance, and marketing positions.
    4. Banking and Financial Services – Roles through SBI, IBPS, NABARD, SEBI, RBI.
    5. Railways – RRB NTPC, JE, ALP, and Group D roles under Indian Railways, one of the world’s largest employers.
    6. Teaching and Research – Assistant Professors, Scientists, Research Fellows in institutions like UGC, CSIR, DRDO, ISRO.
    7. Defense Services – Indian Army, Navy, Air Force recruitment through NDA, CDS, AFCAT, and Agniveer schemes.
    8. Medical and Health Services – Positions in AIIMS, ESIC, NHM, and state health departments including doctors, 
       nurses, pharmacists, and lab technicians.
    9. Judiciary and Legal Jobs – Civil Judges, Legal Advisors, Law Clerks, and Prosecutors.
    10. State-level Jobs – Group A/B/C/D vacancies under State Public Service Commissions and other local bodies.

    Each category includes job listings with detailed job profiles, pay matrix, eligibility, application links, 
    and selection timelines.
  `,

  "Eligibility & Qualifications": `
    Eligibility is determined by the type and level of the job. Generally, government job requirements include:

    - Educational Qualification:
      - 10th/12th Pass: For Group D, clerical, and entry-level positions.
      - Graduate Degree: Essential for Group B & C, administrative, police, and teaching positions.
      - Postgraduate/Professional Degrees: Required for scientific, medical, legal, and managerial roles.
      - Technical Certification: ITI, Diploma, or engineering for technician/engineer-level roles.

    - Age Limit:
      - Varies between 18 to 40 years for general candidates.
      - Age relaxation of 3 to 10 years for OBC, SC/ST, PwD, Ex-servicemen, and others.

    - Nationality: Candidates must be Indian citizens. In certain cases, subjects of Nepal, Bhutan, or Tibetan refugees
      may be eligible under constitutional guidelines.

    - Language Requirements: Certain jobs require proficiency in Hindi or specific regional/state languages.

    - Physical Standards: Applicable for police, defense, and forest services—includes height, chest, eyesight, and stamina benchmarks.

    Full eligibility details are always published in the official job notification PDFs, available for download.
  `,

  "Application Process": `
    Applying through our portal is a secure and user-friendly experience. The steps include:

    Step 1: Registration
    - Sign up with a valid email address and phone number.
    - OTP-based verification is required for security.

    Step 2: Complete Profile
    - Enter personal details, address, education history, experience, etc.
    - Upload passport-sized photo, scanned signature, and valid ID proof (Aadhar, PAN, Voter ID, etc.).

    Step 3: Search for Jobs
    - Use filters such as category, qualification, department, and location.
    - Bookmark and set alerts for jobs of interest.

    Step 4: Online Application
    - Fill in required information as per the job-specific format.
    - Upload additional documents if required.
    - Pay application fees via UPI, credit card, debit card, or net banking.

    Step 5: Confirmation
    - Download the application receipt and preview.
    - Application status can be tracked on your dashboard.

    Note: Candidates are advised to apply well before the last date to avoid server overload and payment failures.
  `,

  "Recruitment Process": `
    Government job selection is a multi-tiered and transparent process:

    1. Preliminary Examination – Objective-type paper to filter candidates (used in UPSC, State PSC, Banking exams).
    2. Main Examination – Descriptive papers to evaluate in-depth knowledge, often includes language and optional subjects.
    3. Skill/Trade Test – Typing, stenography, or technical skill tests based on the job nature.
    4. Physical Standards/Endurance Test – Especially for Police, Defense, and Fire departments.
    5. Interview/Personality Test – Evaluates communication, ethics, leadership, and domain knowledge.
    6. Document Verification – Validates submitted information; involves checking original certificates and IDs.
    7. Medical Examination – Mandatory for physically demanding or defense-related roles.

    Final selection is based on merit, category reservation, and medical fitness. Results and selection lists are published 
    with registration numbers and cut-off marks for transparency.
  `,

  "Help & Support": `
    We are committed to delivering timely and accurate support for all your queries and technical issues.

    - Live Chat: Connect with our trained support staff from 9 AM to 6 PM, Monday to Saturday.
    - Email Helpdesk: Write to support@nicjobs.gov.in with your Application ID or Registration number.
    - Phone Support: Dedicated helpline: 1800-123-4567 (Toll-free).
    - Knowledge Base: Step-by-step guides, FAQs, and application walkthroughs are available in English, Hindi, 
      and major regional languages.
    - Grievance Redressal: File complaints through the “Raise a Ticket” feature. Resolved within 3–5 working days.

    Candidates with disabilities, rural background, or digital limitations can request assisted application services 
    at Common Service Centers (CSCs).
  `,

  "Citizen's Charter": `
    The Government Job Recruitment Portal operates under the guiding values of transparency, **efficiency, and 
    inclusiveness. Our charter includes:

    - Information Transparency: All notifications are published with clear deadlines, eligibility, and instructions.
    - Response Timeliness: Application status and updates are shared in real-time through dashboards and email/SMS alerts.
    - Accessibility for All: Built with accessibility standards in mind for differently-abled candidates.
    - Zero Tolerance for Corruption: Fully digital processing ensures minimal human intervention and no middlemen.
    - Equal Opportunity: We honor constitutional provisions for SC, ST, OBC, EWS, PwD, and Women candidates.

    Our portal is audited regularly for performance and user experience. We continuously work to make recruitment more 
    citizen-friendly and inclusive in spirit and action.
  `,
};

const About = () => {
  const [selectedSection, setSelectedSection] = useState("Introduction");
const navigate = useNavigate(); // Hook for navigation
  return (
    <div className="font-sans bg-gray-100">
      <div className="flex justify-between items-center border-b-4 border-[#032e5a] px-4 py-2">
        <img className="h-[60px] mr-2"  src={nicLogo}alt="NIC Logo" />
        <h2 className="text-[30px] text-black -ml-[1000px]">About Us</h2>
        <div></div>
      </div>

      <div className="flex mt-5">
        <div className="w-[250px] h-screen bg-[#d7e3f4] border-r-2 border-gray-300 px-5 -mt-5">
          <ul className="list-none">
            {Object.keys(sections).map((section) => (
              <li
                key={section}
                className={`py-2 font-medium cursor-pointer ${
                  selectedSection === section
                    ? 'text-blue-900 font-semibold'
                    : 'text-[#003366]'
                } hover:text-black hover:shadow-md hover:bg-blue-300`}
                onClick={() => setSelectedSection(section)}
              >
                {section}
              </li>
            ))}
          </ul>
 

<div 
  className="mt-[270px] text-[#001f3d] cursor-pointer hover:underline hover:text-blue-400"
  onClick={() => navigate("/")} // Navigates to the Home route
>
  <h4>Back to Home Screen</h4>
</div>

        </div>

        <div className="flex-1 px-8 pr-4 max-h-[500px] overflow-y-auto leading-relaxed">
          <h3 className="text-[40px] text-[#003366] mb-4">{selectedSection}</h3>
          <p className="text-justify text-gray-800 whitespace-pre-line">
            {sections[selectedSection]}
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;