function getFullWindowPath() {
  if (typeof window !== 'undefined') {
    return `${window.location.protocol}//${window.location.host}`;
  }
  return null;
}

export const Data = {
  RULE_URL: `http://127.0.0.1:8000/rule_images/`,
};

export default Data;
