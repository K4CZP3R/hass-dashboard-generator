export const getStateOf = (entityId: string) => {
  return `{{${getRawStateOf(entityId)}}}`;
};

export const getRawStateOf = (entityId: string) => {
  return `states("${entityId}")`;
};

export const getAttributeOf = (entityId: string, attribute: string) => {
  return `{{state_attr("${entityId}", "${attribute}")}}`;
};
