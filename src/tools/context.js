const Context = {

};

class ContextUtil {
  static update = (key, value) => {
    if (Array.isArray(key) && key.length) {
      let i;
      let local;
      for (i = 0; i < key.length - 1; i += 1) {
        local = Context[key[i]];
      }
      local[key[i]] = value;
      return;
    }
    Context[key] = value; 
  };

  static getParamFromContext = (path) => {
    const params = path.split(".");
    let i;
    let local = Context;
    for (i = 0; i < params.length; i += 1) {
      local = local[params[i]];
      if (local === undefined) {
        return "";
      }
    }
    return local;
  };

  static massUpdate = (value) => {
    Object.keys(value).forEach((k) => (Context[k] = value[k]));
  };
}

export { Context, ContextUtil };

export default Context;
