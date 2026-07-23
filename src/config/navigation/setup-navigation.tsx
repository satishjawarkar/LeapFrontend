export interface SetupNavItem {
  id: string;
  label: string;
  path: string;
}

export interface SetupNavGroup {
  id: string;
  title: string;
  items: SetupNavItem[];
}

export const SETUP_NAVIGATION: SetupNavGroup[] = [
  {
    id: "loan-setups",
    title: "Loan Setups",
    items: [
      {
        id: "scheme-setup",
        label: "Scheme Setup",
        path: "/setup/scheme-setup",
      },
      {
        id: "loan-type-setup",
        label: "Loan Type Setup",
        path: "/setup/loan-type-setup",
      },
      {
        id: "sector-setup",
        label: "Sector Setup",
        path: "/setup/sector-setup",
      },
      { id: "loan-setup", label: "Loan Setup", path: "/setup/loan-setup" },
      { id: "group-setup", label: "Group Setup", path: "/setup/group-setup" },
      {
        id: "channelising-partner-setup",
        label: "Channelising Partner Setup",
        path: "/setup/channelising-partner-setup",
      },
      { id: "state-setup", label: "State Setup", path: "/setup/state-setup" },
      {
        id: "district-setup",
        label: "District Setup",
        path: "/setup/district-setup",
      },
      { id: "user-list", label: "User List", path: "/setup/user-list" },
      {
        id: "terms-conditions-setup",
        label: "Terms & Conditions Setup",
        path: "/setup/terms-conditions-setup",
      },
      { id: "bank-setup", label: "Bank Setup", path: "/setup/bank-setup" },
      {
        id: "course-setup",
        label: "Course Setup",
        path: "/setup/course-setup",
      },
    ],
  },
  {
    id: "grant-setups",
    title: "Grant Setups",
    items: [],
  },
  {
    id: "EMS",
    title: "EMS",
    items: [],
  },
  {
    id: "privilege-setup",
    title: "Privilege Setup",
    items: [],
  },
];
