export interface LoanNavItem {
  id: string;
  label: string;
  path: string;
}

export interface LoanNavGroup {
  id: string;
  title: string;
  items: LoanNavItem[];
}

export const LOAN_NAVIGATION: LoanNavGroup[] = [
  {
    id: "loan-management",
    title: "Loan Management",
    items: [
      { id: "loan-apply", label: "Apply Loan", path: "/loan/apply" },
      {
        id: "loan-applications",
        label: "Loan Applications",
        path: "/loan/applications",
      },
      {
        id: "loan-disbursement",
        label: "Disbursement",
        path: "/loan/disbursement",
      },
      { id: "loan-reports", label: "Loan Reports", path: "/loan/reports" },
    ],
  },
];
