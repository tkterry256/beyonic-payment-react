import dayjs from "dayjs";

function formatMoney(amount, { prefix = "", suffix = " UGX" } = {}) {
  return prefix + Intl.NumberFormat().format(amount) + suffix;
}

function formatDate(date) {
  return dayjs(date).format("DD MMMM YYYY");
}

function truncateText(text, max = 20) {
  return text.length > max ? text.slice(0, max) + "..." : text;
}

export { formatMoney, formatDate, truncateText };
