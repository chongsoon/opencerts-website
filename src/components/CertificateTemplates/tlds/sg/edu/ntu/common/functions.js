export const formatDate = dateString => {
  if (!dateString) return null;
  const date = new Date(dateString);
  const months = [
    "JANUARY",
    "FEBRUARY",
    "MARCH",
    "APRIL",
    "MAY",
    "JUNE",
    "JULY",
    "AUGUST",
    "SEPTEMBER",
    "OCTOCBER",
    "NOVEMBER",
    "DECEMBER"
  ];
  const month = date.getMonth();
  const year = date.getUTCFullYear();
  const day = date.getDate();
  return `${day} ${months[month]} ${year}`;
};

export const formatNRIC = nricFin => {
  if (!nricFin) return null;
  const arrayNric = nricFin.split(":");
  return arrayNric.length === 3 ? arrayNric[2] : null;
};

export const formatDatePrefix = dateString => {
  if (!dateString) return null;
  const date = new Date(dateString);
  const day = date.getDate();
  let daySup = "";
  switch (day % 10) {
    case 1:
      daySup = "st";
      break;
    case 2:
      daySup = "nd";
      break;
    case 3:
      daySup = "rd";
      break;
    default:
      daySup = "th";
  }

  return <span>on {day}</span>;
};

export const formatCertID = certId => {
  if (!certId) return null;
  const arrayCertId = certId.split(":");
  return arrayCertId.length > 0 ? arrayCertId[0] : null;
};