const generalInfo = [
  ["1.", "NAME OF THE SCHOOL", "ST. JOSEPH'S SCHOOL"],
  ["2.", "AFFILIATION NO. (IF APPLICABLE)", "TO BE UPDATED"],
  ["3.", "SCHOOL CODE (IF APPLICABLE)", "TO BE UPDATED"],
  [
    "4.",
    "COMPLETE ADDRESS WITH PIN CODE",
    "ST. JOSEPH'S SCHOOL ITKAULI, IN FRONT OF HP PETROL PUMP ITKAULI GOSAIGANJ, GOSAINGANJ, UTTAR PRADESH 228119",
  ],
  ["5.", "PRINCIPAL NAME & QUALIFICATION", "TO BE UPDATED"],
  ["6.", "SCHOOL EMAIL ID", "St.joseph'sschool2018@gmail.com"],
  ["7.", "CONTACT DETAILS (LANDLINE / MOBILE)", "+91 9648100020, 9648100030, 9648100040"],
];

const documentInfo = [
  {
    id: "1.",
    label: "COPIES OF AFFILIATION UPGRADATION LETTER AND RECENT EXTENSION OF AFFILIATION, IF ANY",
    href: "#",
  },
  {
    id: "2.",
    label: "COPIES OF SOCIETIES / TRUST / COMPANY REGISTRATION / RENEWAL CERTIFICATE AS APPLICABLE",
    href: "#",
  },
  {
    id: "3.",
    label: "COPIES OF LAND CERTIFICATE AS APPLICABLE",
    href: "#",
  },
  {
    id: "4.",
    label: "COPY OF NO OBJECTION CERTIFICATE (NOC) ISSUED, IF APPLICABLE, BY THE STATE GOVT / UT",
    href: "#",
  },
  {
    id: "5.",
    label: "COPIES OF RECOGNITION CERTIFICATE UNDER RTE ACT, 2009, AND ITS RENEWAL IF APPLICABLE",
    href: "#",
  },
  {
    id: "6.",
    label: "COPY OF VALID BUILDING SAFETY CERTIFICATE AS PER THE NATIONAL BUILDING CODE",
    href: "#",
  },
  {
    id: "7.",
    label: "COPY OF VALID FIRE SAFETY CERTIFICATE ISSUED BY THE COMPETENT AUTHORITY",
    href: "#",
  },
  {
    id: "8.",
    label: "COPY OF THE DEO CERTIFICATE SUBMITTED BY THE SCHOOL FOR AFFILIATION / UPGRADATION / EXTENSION OF AFFILIATION OR SELF CERTIFICATION BY SCHOOL",
    href: "#",
  },
  {
    id: "9.",
    label: "COPIES OF VALID WATER, HEALTH AND SANITATION CERTIFICATES",
    href: "#",
  },
  {
    id: "10.",
    label: "WATER SAMPLE TEST REPORT FROM PUBLIC HEALTH ENGINEER DEPARTMENT",
    href: "#",
  },
  {
    id: "11.",
    label: "COPIES OF TEACHING STAFF STATEMENT",
    href: "#",
  },
];

const academicInfo = [
  {
    id: "1.",
    label: "FEE STRUCTURE OF THE SCHOOL",
    href: "#",
  },
  {
    id: "2.",
    label: "ANNUAL ACADEMIC CALENDAR",
    href: "#",
  },
  {
    id: "3.",
    label: "LIST OF SCHOOL MANAGEMENT COMMITTEE (SMC)",
    href: "#",
  },
  {
    id: "4.",
    label: "LIST OF PARENTS TEACHERS ASSOCIATION (PTA) MEMBERS",
    href: "#",
  },
  {
    id: "5.",
    label: "LAST THREE-YEAR RESULT OF THE BOARD EXAMINATION AS PER APPLICABILITY",
    href: "#",
  },
];

const resultClassX = [
  ["1.", "", "", "", "", ""],
  ["2.", "", "", "", "", ""],
  ["3.", "", "", "", "", ""],
];

const resultClassXII = [
  ["1.", "", "", "", "", ""],
  ["2.", "", "", "", "", ""],
  ["3.", "", "", "", "", ""],
];

const staffInfo = [
  ["1.", "TOTAL NO. OF TEACHERS", "TO BE UPDATED"],
  ["", "PGT", "TO BE UPDATED"],
  ["", "TGT", "TO BE UPDATED"],
  ["", "PRT", "TO BE UPDATED"],
  ["2.", "TEACHERS SECTION RATIO", "TO BE UPDATED"],
  ["3.", "DETAILS OF SPECIAL EDUCATOR", "TO BE UPDATED"],
  ["4.", "DETAILS OF COUNSELLOR AND WELLNESS TEACHER", "TO BE UPDATED"],
];

const infrastructureInfo = [
  ["1.", "TOTAL CAMPUS AREA OF THE SCHOOL (IN SQUARE MTR)", "TO BE UPDATED"],
  ["2.", "NO. AND SIZE OF THE CLASS ROOMS (IN SQ FTMTR)", "TO BE UPDATED"],
  ["3.", "NO. AND SIZE OF LABORATORIES INCLUDING COMPUTER LABS (IN SQ MTR)", "TO BE UPDATED"],
  ["4.", "INTERNET FACILITY (Y/N)", "TO BE UPDATED"],
  ["5.", "NO. OF GIRLS TOILETS", "TO BE UPDATED"],
  ["6.", "NO. OF BOYS TOILETS", "TO BE UPDATED"],
  [
    "7.",
    "LINK OF YOUTUBE VIDEO OF THE INSPECTION OF SCHOOL COVERING THE INFRASTRUCTURE OF THE SCHOOL",
    { text: "Click Here", href: "#" },
  ],
];

const declarationInfo = [
  {
    id: "a.",
    label: "COPIES OF DECLARATION LETTER",
    href: "#",
  },
  {
    id: "b.",
    label: "",
    href: "#",
  },
  {
    id: "c.",
    label: "",
    href: "#",
  },
  {
    id: "d.",
    label: "",
    href: "#",
  },
];

function createTextRow(columns) {
  const row = document.createElement("tr");

  columns.forEach((value) => {
    const cell = document.createElement("td");

    if (typeof value === "object" && value !== null && "href" in value) {
      const link = document.createElement("a");
      link.className = `table-link${value.href === "#" ? " placeholder" : ""}`;
      link.href = value.href;
      link.textContent = value.text;

      if (value.href !== "#") {
        link.target = "_blank";
        link.rel = "noreferrer";
      }

      cell.appendChild(link);
    } else {
      cell.textContent = value;
    }

    row.appendChild(cell);
  });

  return row;
}

function createLinkRow(item) {
  const row = document.createElement("tr");
  const isPlaceholder = item.href === "#";

  row.innerHTML = `
    <td>${item.id}</td>
    <td>${item.label}</td>
    <td>
      <a
        class="table-link${isPlaceholder ? " placeholder" : ""}"
        href="${item.href}"
        ${isPlaceholder ? "" : 'target="_blank" rel="noreferrer"'}
      >
        Click Here
      </a>
    </td>
  `;

  return row;
}

function renderRows(selector, rows) {
  const tableBody = document.querySelector(selector);

  if (!tableBody) {
    return;
  }

  rows.forEach((entry) => {
    tableBody.appendChild(createTextRow(entry));
  });
}

function renderLinkRows(selector, rows) {
  const tableBody = document.querySelector(selector);

  if (!tableBody) {
    return;
  }

  rows.forEach((entry) => {
    tableBody.appendChild(createLinkRow(entry));
  });
}

renderRows("#general-info-table", generalInfo);
renderLinkRows("#document-table", documentInfo);
renderLinkRows("#academic-table", academicInfo);
renderRows("#result-x-table", resultClassX);
renderRows("#result-xii-table", resultClassXII);
renderRows("#staff-table", staffInfo);
renderRows("#infrastructure-table", infrastructureInfo);
renderLinkRows("#declaration-table", declarationInfo);
