module.exports = {
  generateId: (name) => {
    return `${+new Date()}_${name.replace(/ /g, '_')}`;
  }
};