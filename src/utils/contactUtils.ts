export const handlePhoneCall = (phoneNumber: string) => {
  window.location.href = `tel:${phoneNumber}`;
};

export const handleEmailContact = (
  email: string,
  subject?: string,
  body?: string
) => {
  const mailtoUrl = `mailto:${email}${
    subject ? `?subject=${encodeURIComponent(subject)}` : ""
  }${body ? `&body=${encodeURIComponent(body)}` : ""}`;
  window.location.href = mailtoUrl;
};

export const businessPhone = "+91-8048-175-725";
export const businessEmail = "support@United Fillings.com";
