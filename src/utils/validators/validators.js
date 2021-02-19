export const required = (value) => (value ? undefined : "быстро написал");

export const maxLength = (max) => (value) =>
  value && value.length > max
    ? `Много чирикаешь, максы ${max} символов `
    : undefined;
