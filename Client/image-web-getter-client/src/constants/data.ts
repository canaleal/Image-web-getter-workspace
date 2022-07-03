function getFullWindowPath() {
  if (typeof window !== 'undefined') {
    return `${window.location.protocol}//${window.location.host}`;
  }
  return null;
}

export const Data = {
  RULE_URL: `${getFullWindowPath()}/data/rule_images.json`,
};

export default Data;
