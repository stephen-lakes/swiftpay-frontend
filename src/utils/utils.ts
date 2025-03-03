export const hideEmail = (email: string): string => {
  const [user, domain] = email.split("@");
  const hiddenUser = user.slice(0, 3) + "***" + user.slice(-1);
  const hiddenDomain = domain.split(".").join(".");
  return hiddenUser + "@" + hiddenDomain;
};
