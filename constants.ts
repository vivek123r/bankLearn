
import { ContentType, Section } from './types';

export const SECTIONS: Section[] = [
  {
    id: 'sec1',
    title: '1. Structure & History',
    icon: 'Landmark',
    content: [
      {
        type: ContentType.PARAGRAPH,
        text: 'The Indian Banking System is the backbone of the country\'s economy. For a PO aspirant, knowing the hierarchy and history is the first step. The system is regulated by the Reserve Bank of India (RBI), which ensures financial stability and public confidence.'
      },
      {
        type: ContentType.IMAGE,
        imageUrl: 'https://picsum.photos/seed/rbi_building/800/400',
        imageCaption: 'The structure flows from the RBI to Scheduled Commercial Banks and Cooperative Banks.'
      },
      {
        type: ContentType.INFO_BOX,
        title: 'Evolution Timeline',
        text: 'The journey from 1770 to the modern digital era:',
        items: [
          '1770: Bank of Hindustan (First bank established in India)',
          '1935: Reserve Bank of India established (Hilton Young Commission recommendations)',
          '1949: Banking Regulation Act passed; RBI Nationalized',
          '1955: SBI formed from Imperial Bank of India (Gorewala Committee)',
          '1969: Nationalization of 14 major banks (Deposits > ₹50 Cr)',
          '1980: Nationalization of 6 more banks (Deposits > ₹200 Cr)',
          '1993: New Bank of India merged with PNB',
          '2017: SBI merged with its 5 Associate Banks and Bhartiya Mahila Bank',
          '2020: Mega Merger of PSBs (10 banks merged into 4)',
        ]
      },
      {
        type: ContentType.CHART_PIE,
        title: 'Current Market Share (Approx Assets)',
        chartData: [
          { name: 'Public Sector Banks', value: 58 },
          { name: 'Private Sector Banks', value: 34 },
          { name: 'Foreign/RRB/Small', value: 8 },
        ]
      },
      {
        type: ContentType.TABLE,
        title: 'Banking Structure Categories',
        tableHeaders: ['Category', 'Definition', 'Examples'],
        tableData: [
          { Category: 'Scheduled Banks', Definition: 'Listed in 2nd Schedule of RBI Act, 1934. Paid-up capital > ₹5 Lakh.', Examples: 'SBI, HDFC, PNB' },
          { Category: 'Non-Scheduled', Definition: 'Not listed in 2nd Schedule. Rare in modern times.', Examples: 'Local Area Banks' },
          { Category: 'Public Sector', Definition: 'Govt holds > 51% stake.', Examples: 'Bank of Baroda, Canara Bank' },
          { Category: 'Private Sector', Definition: 'Majority stake held by private individuals.', Examples: 'ICICI, Axis, Kotak' },
        ]
      }
    ]
  },
  {
    id: 'sec2',
    title: '2. RBI (Reserve Bank of India)',
    icon: 'Building2',
    content: [
      {
        type: ContentType.PARAGRAPH,
        text: 'The RBI is the central bank of India, established on April 1, 1935. It was nationalized on January 1, 1949. Headquartered in Mumbai, it is governed by a Central Board of Directors headed by the Governor.'
      },
      {
        type: ContentType.INFO_BOX,
        title: 'Key Functions',
        items: [
          'Monetary Authority: Formulates monetary policy to control inflation.',
          'Issuer of Currency: Sole right to issue notes (except ₹1 note & coins).',
          'Banker to Govt: Manages debt and accounts of Central & State Govts.',
          'Banker to Banks: Lender of last resort; maintains CRR accounts.',
          'Regulator: Issues licenses to banks (Section 22 of BR Act).',
          'Forex Manager: Custodian of Foreign Exchange Reserves.'
        ]
      },
      {
        type: ContentType.TABLE,
        title: 'RBI Subsidiaries',
        tableHeaders: ['Subsidiary', 'Full Form', 'Function'],
        tableData: [
          { Subsidiary: 'DICGC', 'Full Form': 'Deposit Insurance and Credit Guarantee Corp', Function: 'Insures bank deposits up to ₹5 Lakh.' },
          { Subsidiary: 'BRBNMPL', 'Full Form': 'Bharatiya Reserve Bank Note Mudran', Function: 'Prints currency notes (Mysore & Salboni).' },
          { Subsidiary: 'ReBIT', 'Full Form': 'Reserve Bank Info Tech', Function: 'IT Solutions & Cyber Security.' },
          { Subsidiary: 'IFTAS', 'Full Form': 'Indian Financial Technology & Allied Services', Function: 'Banking infrastructure.' },
          { Subsidiary: 'RBIH', 'Full Form': 'Reserve Bank Innovation Hub', Function: 'Promotes fintech innovation.' }
        ]
      }
    ]
  },
  {
    id: 'sec3',
    title: '3. Monetary Policy',
    icon: 'TrendingUp',
    content: [
      {
        type: ContentType.PARAGRAPH,
        text: 'Monetary Policy is the macroeconomic policy laid down by the central bank. The Monetary Policy Committee (MPC) constitutes 6 members (3 from RBI, 3 Govt appointed) who meet at least 4 times a year to decide the policy rates.'
      },
      {
        type: ContentType.CHART_BAR,
        title: 'Policy Transmission Effect',
        chartData: [
          { name: 'Repo Rate Cut', inflation: 15, liquidity: 20, loanCost: -20 },
          { name: 'Repo Rate Hike', inflation: -15, liquidity: -20, loanCost: 20 },
        ]
      },
      {
        type: ContentType.INFO_BOX,
        title: 'Direct vs Indirect Instruments',
        text: 'Instruments used by RBI to control money supply:',
        items: [
          'Direct Instruments: CRR (Cash Reserve Ratio), SLR (Statutory Liquidity Ratio). These directly affect the idle cash banks must hold.',
          'Indirect Instruments: Repo Rate, Reverse Repo Rate, Bank Rate, MSF. These affect the cost of borrowing.'
        ]
      },
      {
        type: ContentType.TABLE,
        title: 'Key Rates & Definitions',
        tableHeaders: ['Rate', 'Definition', 'Current Trend'],
        tableData: [
          { Rate: 'Repo Rate', Definition: 'Rate at which RBI lends to banks (Short term) against securities.', 'Current Trend': 'Policy Rate' },
          { Rate: 'Reverse Repo', Definition: 'Rate at which RBI borrows from banks (Absorbs liquidity).', 'Current Trend': 'Lower than Repo' },
          { Rate: 'MSF', Definition: 'Penal rate for emergency borrowing (Overnight).', 'Current Trend': 'Higher than Repo' },
          { Rate: 'Bank Rate', Definition: 'Long term lending rate; Penalty rate.', 'Current Trend': 'Aligned with MSF' }
        ]
      }
    ]
  },
  {
    id: 'sec4',
    title: '4. Operations & Accounts',
    icon: 'Briefcase',
    content: [
      {
        type: ContentType.PARAGRAPH,
        text: 'Banking operations revolve around accepting deposits (Liability for bank) and lending loans (Asset for bank). Understanding the types of accounts is fundamental.'
      },
      {
        type: ContentType.TABLE,
        title: 'Types of Deposit Accounts',
        tableHeaders: ['Type', 'Interest', 'Liquidity', 'Ideal For'],
        tableData: [
          { Type: 'Savings (CASA)', Interest: 'Low (2.7-4%)', Liquidity: 'High', 'Ideal For': 'Salaried/Individuals' },
          { Type: 'Current (CASA)', Interest: 'Zero (0%)', Liquidity: 'Very High', 'Ideal For': 'Businesses/Traders' },
          { Type: 'Fixed Deposit (Term)', Interest: 'High (6-7.5%)', Liquidity: 'Low (Penalty on break)', 'Ideal For': 'Lump sum savings' },
          { Type: 'Recurring Deposit', Interest: 'High', Liquidity: 'Low', 'Ideal For': 'Monthly savings' }
        ]
      },
      {
        type: ContentType.INFO_BOX,
        title: 'NRI Accounts',
        items: [
          'NRE (Non-Resident External): Repatriable (can move money back abroad). Tax-free interest in India. Maintained in ₹.',
          'NRO (Non-Resident Ordinary): Non-repatriable (mostly). For income earned in India (Rent/Dividends). Taxable. Maintained in ₹.',
          'FCNR (Foreign Currency Non-Resident): Term deposit only. Maintained in Foreign Currency (USD/GBP etc). No exchange risk for depositor.'
        ]
      }
    ]
  },
  {
    id: 'sec5',
    title: '5. Regulations & Acts',
    icon: 'Gavel',
    content: [
      {
        type: ContentType.PARAGRAPH,
        text: 'The legal framework ensures banks operate ethically and transparently. Key acts include the RBI Act, Banking Regulation Act, and others dealing with cheques and recovery.'
      },
      {
        type: ContentType.LIST,
        title: 'Crucial Acts for Exams',
        items: [
          'Banking Regulation Act, 1949: Gives RBI power to license, inspect, and regulate banks.',
          'Negotiable Instruments Act, 1881: Defines cheques, bills. Section 138 covers criminal liability for cheque bounce.',
          'SARFAESI Act, 2002: Empower banks to seize and auction collateral for bad loans (NPAs) without court intervention (for secured loans).',
          'IBC (Insolvency and Bankruptcy Code), 2016: A unified framework to resolve insolvency for companies within 180-270 days.',
          'PMLA, 2002: Prevention of Money Laundering Act. Mandates KYC and reporting of suspicious transactions.'
        ]
      },
      {
        type: ContentType.INFO_BOX,
        title: 'Basel Norms',
        text: 'International banking safety standards to ensure banks have enough capital to absorb losses.',
        items: [
          'Basel I (1988): Focused on Credit Risk.',
          'Basel II (2004): Added Market & Operational Risk.',
          'Basel III (2010): Post-2008 crisis. Introduced Liquidity Coverage Ratio (LCR) and Net Stable Funding Ratio (NSFR).',
          'India follows Basel III with a Capital Adequacy Ratio (CAR) requirement of 9% + 2.5% buffer.'
        ]
      }
    ]
  },
  {
    id: 'sec6',
    title: '6. Financial Inclusion',
    icon: 'Users',
    content: [
      {
        type: ContentType.PARAGRAPH,
        text: 'Financial Inclusion is the delivery of banking services at an affordable cost to the vast sections of disadvantaged and low-income groups. It is a National Priority.'
      },
      {
        type: ContentType.CHART_PIE,
        title: 'Priority Sector Lending (PSL) Targets',
        chartData: [
          { name: 'Agriculture', value: 18 },
          { name: 'Micro Enterprises', value: 7.5 },
          { name: 'Weaker Sections', value: 12 },
          { name: 'Other Priority', value: 2.5 },
        ]
      },
      {
        type: ContentType.TABLE,
        title: 'Flagship Schemes',
        tableHeaders: ['Scheme', 'Feature', 'Insurance/Pension'],
        tableData: [
          { Scheme: 'PMJDY', Feature: 'Zero Balance, Overdraft ₹10k', 'Insurance/Pension': '₹2L Accidental Ins.' },
          { Scheme: 'PMJJBY', Feature: 'Life Insurance (18-50 yrs)', 'Insurance/Pension': '₹2 Lakh Death Benefit' },
          { Scheme: 'PMSBY', Feature: 'Accident Insurance (18-70 yrs)', 'Insurance/Pension': '₹2 Lakh Disability' },
          { Scheme: 'APY', Feature: 'Pension (18-40 yrs entry)', 'Insurance/Pension': '₹1k-5k/mo after 60' }
        ]
      }
    ]
  },
  {
    id: 'sec7',
    title: '7. Financial Markets',
    icon: 'BarChart2',
    content: [
      {
        type: ContentType.PARAGRAPH,
        text: 'Financial markets channelize funds from savers to investors. They are broadly classified into Money Market (Short term) and Capital Market (Long term).'
      },
      {
        type: ContentType.TABLE,
        title: 'Money vs Capital Market',
        tableHeaders: ['Feature', 'Money Market', 'Capital Market'],
        tableData: [
          { Feature: 'Duration', 'Money Market': '< 1 Year', 'Capital Market': '> 1 Year' },
          { Feature: 'Regulator', 'Money Market': 'RBI', 'Capital Market': 'SEBI' },
          { Feature: 'Instruments', 'Money Market': 'T-Bills, CD, CP, Call Money', 'Capital Market': 'Shares, Debentures, Bonds' },
          { Feature: 'Risk', 'Money Market': 'Low', 'Capital Market': 'High' }
        ]
      },
      {
        type: ContentType.INFO_BOX,
        title: 'Key Instruments',
        items: [
          'Treasury Bills (T-Bills): Issued by Govt (91, 182, 364 days). Zero coupon bonds.',
          'Commercial Paper (CP): Issued by Corporates. Unsecured.',
          'Certificate of Deposit (CD): Issued by Banks. High value.',
          'Call Money: Inter-bank borrowing for 1 day (Overnight).'
        ]
      }
    ]
  },
  {
    id: 'sec8',
    title: '8. International Banking',
    icon: 'Globe',
    content: [
      {
        type: ContentType.PARAGRAPH,
        text: 'Understanding global finance is crucial. This involves cross-border trade, forex, and international organizations.'
      },
      {
        type: ContentType.INFO_BOX,
        title: 'Correspondent Banking Accounts',
        items: [
          'NOSTRO (Our money with you): Indian bank\'s account in a US bank in Dollars.',
          'VOSTRO (Your money with us): US bank\'s account in an Indian bank in Rupees.',
          'LORO (Their money with them): Third party account reference.'
        ]
      },
      {
        type: ContentType.TABLE,
        title: 'International Orgs',
        tableHeaders: ['Org', 'HQ', 'Purpose'],
        tableData: [
          { Org: 'IMF', HQ: 'Washington DC', Purpose: 'Balance of Payments crisis, Short term loans' },
          { Org: 'World Bank', HQ: 'Washington DC', Purpose: 'Development, Long term loans (Infrastructure)' },
          { Org: 'ADB', HQ: 'Manila, Philippines', Purpose: 'Regional development in Asia' },
          { Org: 'BIS', HQ: 'Basel, Switzerland', Purpose: 'Central bank for central banks' },
          { Org: 'SWIFT', HQ: 'Brussels, Belgium', Purpose: 'Messaging network for international transfers' }
        ]
      }
    ]
  },
  {
    id: 'sec9',
    title: '9. Banking Terms',
    icon: 'BookOpen',
    content: [
      {
        type: ContentType.PARAGRAPH,
        text: 'This section covers high-yield terminology often asked in exams.'
      },
      {
        type: ContentType.INFO_BOX,
        title: 'NPA (Non-Performing Assets)',
        text: 'A loan becomes an NPA if interest/principal remains overdue for 90 days.',
        items: [
          'Substandard Asset: NPA for ≤ 12 months.',
          'Doubtful Asset: NPA for > 12 months.',
          'Loss Asset: Uncollectible, identified for write-off.'
        ]
      },
      {
        type: ContentType.LIST,
        title: 'Other Critical Terms',
        items: [
          'MCLR (Marginal Cost of Funds based Lending Rate): Internal benchmark for lending rates.',
          'PCR (Provisioning Coverage Ratio): Funds set aside to cover bad loans.',
          'CASA Ratio: (Current + Savings deposits) / Total Deposits. Higher is better for banks.',
          'PCA (Prompt Corrective Action): RBI triggers this when a bank\'s metrics (Capital, Asset Quality, Leverage) deteriorate.',
          'Lien: Right to keep possession of property belonging to another person until a debt is paid.'
        ]
      }
    ]
  },
  {
    id: 'sec10',
    title: '10. Cyber Security',
    icon: 'Shield',
    content: [
      {
        type: ContentType.PARAGRAPH,
        text: 'With the rise of digital banking, cyber threats are a major syllabus topic.'
      },
      {
        type: ContentType.TABLE,
        title: 'Types of Cyber Attacks',
        tableHeaders: ['Attack', 'Mechanism'],
        tableData: [
          { Attack: 'Phishing', Mechanism: 'Fraudulent emails mimicking banks.' },
          { Attack: 'Vishing', Mechanism: 'Voice phishing (Phone calls asking OTP).' },
          { Attack: 'Smishing', Mechanism: 'SMS phishing (Malicious links).' },
          { Attack: 'Man-in-the-Middle', Mechanism: 'Intercepting comms between user and bank.' },
          { Attack: 'Ransomware', Mechanism: 'Locking files and demanding payment (e.g., WannaCry).' }
        ]
      },
      {
        type: ContentType.INFO_BOX,
        title: 'Security Measures',
        items: [
          '2FA (Two-Factor Authentication): Password + OTP.',
          'EMV Chips: Secure card technology replacing magnetic strips.',
          'Positive Pay System: Re-verifying details for cheques > ₹50,000.'
        ]
      }
    ]
  },
  {
    id: 'sec11',
    title: '11. Regulators',
    icon: 'Landmark',
    content: [
      {
        type: ContentType.PARAGRAPH,
        text: 'Different sectors of the Indian Financial System are regulated by specific bodies.'
      },
      {
        type: ContentType.TABLE,
        title: 'Financial Regulators',
        tableHeaders: ['Regulator', 'Sector', 'Headquarters'],
        tableData: [
          { Regulator: 'RBI', Sector: 'Banking & Money Market', Headquarters: 'Mumbai' },
          { Regulator: 'SEBI', Sector: 'Capital Market (Stock/Mutual Funds)', Headquarters: 'Mumbai' },
          { Regulator: 'IRDAI', Sector: 'Insurance', Headquarters: 'Hyderabad' },
          { Regulator: 'PFRDA', Sector: 'Pension', Headquarters: 'New Delhi' },
          { Regulator: 'NABARD', Sector: 'Rural Financing (Dev Bank)', Headquarters: 'Mumbai' }
        ]
      }
    ]
  },
  {
    id: 'sec12',
    title: '12. NBFCs',
    icon: 'Building',
    content: [
      {
        type: ContentType.PARAGRAPH,
        text: 'Non-Banking Financial Companies (NBFCs) provide banking services without meeting the legal definition of a bank. They are registered under the Companies Act, 1956/2013.'
      },
      {
        type: ContentType.TABLE,
        title: 'Bank vs NBFC',
        tableHeaders: ['Feature', 'Bank', 'NBFC'],
        tableData: [
          { Feature: 'Demand Deposits', Bank: 'Can accept (Savings/Current)', NBFC: 'Cannot accept' },
          { Feature: 'Payment System', Bank: 'Part of clearing cycle', NBFC: 'Cannot issue cheques' },
          { Feature: 'Deposit Insurance', Bank: 'Available (DICGC)', NBFC: 'Not Available' },
          { Feature: 'FDI', Bank: 'Up to 74% (Pvt)', NBFC: '100% allowed' }
        ]
      }
    ]
  },
  {
    id: 'sec13',
    title: '13. Negotiable Inst.',
    icon: 'FileText',
    content: [
      {
        type: ContentType.PARAGRAPH,
        text: 'Negotiable Instruments are documents guaranteeing the payment of a specific amount of money. Governed by NI Act, 1881.'
      },
      {
        type: ContentType.LIST,
        items: [
          'Promissory Note (Section 4): Promise to pay. (e.g., "I promise to pay B ₹500"). Debtor makes it.',
          'Bill of Exchange (Section 5): Order to pay. Creditor makes it.',
          'Cheque (Section 6): Bill of exchange drawn on a specified banker.'
        ]
      },
      {
        type: ContentType.INFO_BOX,
        title: 'Types of Cheques',
        items: [
          'Bearer Cheque: Payable to whoever holds it.',
          'Order Cheque: Payable to a specific person.',
          'Crossed Cheque: Two parallel lines; money goes to account only.',
          'Stale Cheque: Presented after 3 months (Validity expired).',
          'Mutilated Cheque: Torn or damaged.'
        ]
      }
    ]
  },
  {
    id: 'sec14',
    title: '14. Agriculture',
    icon: 'Sprout',
    content: [
      {
        type: ContentType.PARAGRAPH,
        text: 'Agriculture is a primary component of Priority Sector Lending. NABARD is the apex development bank here.'
      },
      {
        type: ContentType.INFO_BOX,
        title: 'Kisan Credit Card (KCC)',
        text: 'Introduced in 1998. Provides timely credit to farmers.',
        items: [
          'Validity: 5 Years.',
          'Insurance: Covers crop failure and personal accident.',
          'Interest Subvention: Usually available for prompt repayment (Effective rate ~4%).'
        ]
      },
      {
        type: ContentType.LIST,
        title: 'NABARD Functions',
        items: [
          'Refinances RRBs and Cooperative banks.',
          'Manages RIDF (Rural Infrastructure Development Fund).',
          'Supervises RRBs and Cooperative Banks.'
        ]
      }
    ]
  },
  {
    id: 'sec15',
    title: '15. MSME',
    icon: 'Factory',
    content: [
      {
        type: ContentType.PARAGRAPH,
        text: 'Micro, Small, and Medium Enterprises are the growth engines. The definition was revised in 2020 to be composite (Investment + Turnover).'
      },
      {
        type: ContentType.TABLE,
        title: 'Revised MSME Classification',
        tableHeaders: ['Type', 'Investment', 'Turnover'],
        tableData: [
          { Type: 'Micro', Investment: '< ₹1 Crore', Turnover: '< ₹5 Crore' },
          { Type: 'Small', Investment: '< ₹10 Crore', Turnover: '< ₹50 Crore' },
          { Type: 'Medium', Investment: '< ₹50 Crore', Turnover: '< ₹250 Crore' }
        ]
      },
      {
        type: ContentType.INFO_BOX,
        title: 'SIDBI',
        text: 'Small Industries Development Bank of India (HQ: Lucknow). It is the principal financial institution for MSME financing.'
      }
    ]
  },
  {
    id: 'sec16',
    title: '16. Housing',
    icon: 'Home',
    content: [
      {
        type: ContentType.PARAGRAPH,
        text: 'Housing finance is regulated by NHB (National Housing Bank), which is now a subsidiary of the Govt of India (formerly RBI).'
      },
      {
        type: ContentType.LIST,
        title: 'Key Schemes',
        items: [
          'PMAY (Pradhan Mantri Awas Yojana): Housing for All. Provides interest subsidy (CLSS).',
          'Priority Sector Housing: Loans up to ₹35 Lakh in metros (pop > 10L) and ₹25 Lakh in other centers are considered PSL.'
        ]
      }
    ]
  },
  {
    id: 'sec17',
    title: '17. Stock Markets',
    icon: 'TrendingUp',
    content: [
      {
        type: ContentType.PARAGRAPH,
        text: 'While banks deal with debt, stock markets deal with equity. POs must know the basics of capital markets.'
      },
      {
        type: ContentType.TABLE,
        title: 'Key Concepts',
        tableHeaders: ['Term', 'Meaning'],
        tableData: [
          { Term: 'IPO', Meaning: 'Initial Public Offering (First time selling stock to public).' },
          { Term: 'Demat Account', Meaning: 'Account to hold shares in electronic form.' },
          { Term: 'ASBA', Meaning: 'Application Supported by Blocked Amount (Money stays in bank until allotment).' },
          { Term: 'Bull/Bear', Meaning: 'Bull: Market rising. Bear: Market falling.' },
          { Term: 'Sensex/Nifty', Meaning: 'Indices of BSE (30 stocks) and NSE (50 stocks).' }
        ]
      }
    ]
  },
  {
    id: 'sec18',
    title: '18. Digital Payments',
    icon: 'Smartphone',
    content: [
      {
        type: ContentType.PARAGRAPH,
        text: 'India is a global leader in digital payments, driven by NPCI (National Payments Corporation of India).'
      },
      {
        type: ContentType.CHART_BAR,
        title: 'Digital Payment Growth (Illustrative)',
        chartData: [
          { name: '2020', inflation: 20, liquidity: 30 }, 
          { name: '2021', inflation: 45, liquidity: 50 },
          { name: '2022', inflation: 70, liquidity: 80 },
          { name: '2023', inflation: 100, liquidity: 110 },
        ]
      },
      {
        type: ContentType.LIST,
        title: 'NPCI Products',
        items: [
          'UPI (Unified Payments Interface): Instant real-time payment system.',
          'RuPay: Indigeneous card payment network.',
          'IMPS: Immediate Payment Service.',
          'AePS: Aadhaar Enabled Payment System (Banking using fingerprint).',
          'NACH: National Automated Clearing House (Bulk payments like dividends/salaries).'
        ]
      },
      {
        type: ContentType.INFO_BOX,
        title: 'e-RUPI & CBDC',
        text: 'Recent innovations: e-RUPI is a voucher-based prepaid instrument. CBDC (Central Bank Digital Currency) is the digital form of legal tender (e-Rupee) issued by RBI.'
      }
    ]
  },
  {
    id: 'sec19',
    title: '19. Abbreviations',
    icon: 'Type',
    content: [
      {
        type: ContentType.PARAGRAPH,
        text: 'Banking exams are famous for asking full forms. Here are the most critical ones.'
      },
      {
        type: ContentType.TABLE,
        title: 'Must Know Acronyms',
        tableHeaders: ['Acronym', 'Full Form'],
        tableData: [
          { Acronym: 'AMFI', 'Full Form': 'Association of Mutual Funds in India' },
          { Acronym: 'BSBDA', 'Full Form': 'Basic Savings Bank Deposit Account' },
          { Acronym: 'CIBIL', 'Full Form': 'Credit Information Bureau (India) Limited' },
          { Acronym: 'CRAR', 'Full Form': 'Capital to Risk (Weighted) Assets Ratio' },
          { Acronym: 'ECGC', 'Full Form': 'Export Credit Guarantee Corporation' },
          { Acronym: 'FEMA', 'Full Form': 'Foreign Exchange Management Act' },
          { Acronym: 'KYC', 'Full Form': 'Know Your Customer' },
          { Acronym: 'LAF', 'Full Form': 'Liquidity Adjustment Facility' },
          { Acronym: 'LIBOR', 'Full Form': 'London Interbank Offered Rate' },
          { Acronym: 'SARFAESI', 'Full Form': 'Securitisation and Reconstruction of Financial Assets and Enforcement of Security Interest' }
        ]
      }
    ]
  },
  {
    id: 'sec20',
    title: '20. Current Scenario',
    icon: 'Activity',
    content: [
      {
        type: ContentType.PARAGRAPH,
        text: 'Knowing the current landscape of Public Sector Banks (PSBs) is vital after the mega mergers.'
      },
      {
        type: ContentType.TABLE,
        title: '12 Public Sector Banks',
        tableHeaders: ['Bank Name', 'Headquarters', 'Tagline (Example)'],
        tableData: [
          { 'Bank Name': 'SBI', Headquarters: 'Mumbai', 'Tagline (Example)': 'The Banker to Every Indian' },
          { 'Bank Name': 'Punjab National Bank', Headquarters: 'New Delhi', 'Tagline (Example)': 'The Name You Can Bank Upon' },
          { 'Bank Name': 'Bank of Baroda', Headquarters: 'Vadodara', 'Tagline (Example)': 'India\'s International Bank' },
          { 'Bank Name': 'Canara Bank', Headquarters: 'Bengaluru', 'Tagline (Example)': 'Together We Can' },
          { 'Bank Name': 'Union Bank of India', Headquarters: 'Mumbai', 'Tagline (Example)': 'Good People to Bank With' },
          { 'Bank Name': 'Indian Bank', Headquarters: 'Chennai', 'Tagline (Example)': 'Your Own Bank' },
          { 'Bank Name': 'Bank of India', Headquarters: 'Mumbai', 'Tagline (Example)': 'Relationship Beyond Banking' },
          { 'Bank Name': 'Central Bank of India', Headquarters: 'Mumbai', 'Tagline (Example)': 'Central to You Since 1911' },
          { 'Bank Name': 'Indian Overseas Bank', Headquarters: 'Chennai', 'Tagline (Example)': 'Good People to Grow With' },
          { 'Bank Name': 'UCO Bank', Headquarters: 'Kolkata', 'Tagline (Example)': 'Honours Your Trust' },
          { 'Bank Name': 'Bank of Maharashtra', Headquarters: 'Pune', 'Tagline (Example)': 'One Family One Bank' },
          { 'Bank Name': 'Punjab & Sind Bank', Headquarters: 'New Delhi', 'Tagline (Example)': 'Where Service is a Way of Life' }
        ]
      }
    ]
  },
  {
    id: 'sec21',
    title: '21. Prep Tips',
    icon: 'CheckCircle',
    content: [
      {
        type: ContentType.PARAGRAPH,
        text: 'Cracking the PO exam requires strategy, not just hard work. Here is a breakdown of how to approach the General Awareness (GA) section.'
      },
      {
        type: ContentType.LIST,
        title: 'Strategy Checklist',
        items: [
          'Current Affairs (60%): Focus on last 6 months. Read newspapers (The Hindu/Express) or monthly capsules.',
          'Banking Awareness (30%): Focus on terms, RBI circulars, and static banking (History, HQ).',
          'Static GK (10%): National Parks, Dams, Capitals, Currencies (Usually linked to news).',
          'Mock Tests: Analyze GA questions in mocks. They often repeat high-yield topics.'
        ]
      }
    ]
  },
  {
    id: 'sec22',
    title: '22. Fin. Literacy',
    icon: 'DollarSign',
    content: [
      {
        type: ContentType.PARAGRAPH,
        text: 'General concepts that help in understanding the "Why" behind banking.'
      },
      {
        type: ContentType.INFO_BOX,
        title: 'Credit Score (CIBIL)',
        items: [
          'Range: 300 to 900.',
          'Good Score: 750+.',
          'Factors: Repayment history, Credit mix, New credit inquiries.',
          'Impact: Determines loan eligibility and interest rates.'
        ]
      },
      {
        type: ContentType.PARAGRAPH,
        title: 'The Power of Compounding',
        text: 'Albert Einstein called it the eighth wonder of the world. Compound interest is interest on interest. Formula: A = P(1 + r/n)^(nt).'
      }
    ]
  },
  {
    id: 'sec23',
    title: '23. Committees',
    icon: 'Users',
    content: [
      {
        type: ContentType.PARAGRAPH,
        text: 'Exam questions often link committees to their recommendations.'
      },
      {
        type: ContentType.TABLE,
        title: 'Important Committees',
        tableHeaders: ['Committee', 'Associated With'],
        tableData: [
          { Committee: 'Narasimham Committee', 'Associated With': 'Banking Sector Reforms (1991, 1998)' },
          { Committee: 'Shivraman Committee', 'Associated With': 'Establishment of NABARD' },
          { Committee: 'Hilton Young Commission', 'Associated With': 'Establishment of RBI' },
          { Committee: 'Bimal Jalan Committee', 'Associated With': 'Economic Capital Framework (RBI Reserves)' },
          { Committee: 'Nandan Nilekani Committee', 'Associated With': 'Deepening Digital Payments' },
          { Committee: 'Nachiket Mor Committee', 'Associated With': 'Small Finance Banks & Payments Banks' }
        ]
      }
    ]
  },
  {
    id: 'sec24',
    title: '24. Frauds',
    icon: 'AlertTriangle',
    content: [
      {
        type: ContentType.PARAGRAPH,
        text: 'Awareness of major financial frauds helps understand the need for strict compliance and regulations.'
      },
      {
        type: ContentType.LIST,
        title: 'Major Case Studies',
        items: [
          'Nirav Modi / PNB Scam (2018): Misuse of LoU (Letters of Undertaking). Result: RBI banned LoUs.',
          'Vijay Mallya: Willful defaulter. Led to the strengthening of the Fugitive Economic Offenders Act.',
          'PMC Bank Crisis: Hidden exposure to HDIL. Led to stricter oversight of Cooperative Banks by RBI.'
        ]
      }
    ]
  },
  {
    id: 'sec25',
    title: '25. Final Checklist',
    icon: 'ClipboardList',
    content: [
      {
        type: ContentType.PARAGRAPH,
        text: 'Before you enter the exam hall, ensure you have these topics at your fingertips.'
      },
      {
        type: ContentType.INFO_BOX,
        title: 'Last Minute Revision',
        items: [
          'Current Repo Rate, Reverse Repo, Bank Rate.',
          'GDP predictions by IMF, World Bank, RBI for India.',
          'Heads of major organizations (RBI Gov, SBI Chair, SEBI Chair).',
          'Recent Bank Mergers.',
          'Theme of the latest Union Budget.',
          'Important Days (Banking Day, Consumer Rights Day).'
        ]
      },
      {
        type: ContentType.IMAGE,
        imageUrl: 'https://picsum.photos/seed/success/800/400',
        imageCaption: 'Good luck! Confidence is key.'
      }
    ]
  }
];
