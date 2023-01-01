const getQueryString = (name, url) => {
  if (!url) url = window.location.href;
  name = name.replace(/[\[\]]/g, "\\$&");
  var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
    results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return "";
  return decodeURIComponent(results[2].replace(/\+/g, " "));
};

const endpoints = {
  prod: 'https://prod.cibler.io/',
  qa: "https://qa.cibler.io/",
  local: "http://localhost:8080/",
};

const d = {
  endpoint: endpoints[getQueryString('endpoint') || 'prod'],
  accessToken: '',
  customerId: 318,
  inPageMode: false,
};

const CiblerContext = () => window.CiblerContext || {
  campaign: {}
};

const userLoggedIn = ()=> {
  return !!window.CiblerContext.accessToken
}

const initCiblerContext = () => {
  try {
    const previousContext = getQueryString('clearcache')
      ? d
      : JSON.parse(localStorage.getItem(`CiblerContext_${d.customerId}`))

    window.CiblerContext = {
      ...(previousContext || d),
      ...(window.CiblerContext || {}),
    };

    if (getQueryString('endpoint')) {
      window.CiblerContext.endpoint = endpoints[getQueryString('endpoint')]
    }
  } catch (e) {
    window.CiblerContext = d;
  }
};

const fetchPartner = async () => {
  let result = await fetch(
    `${CiblerContext().endpoint}/api/campaigns/search/template/687630512/318?campaignId=63080118`
  ).then((r) => {
    if (r.ok && r.status === 200) {
      return r.json();
    }
  });

  if (!result) {
    result = {id: 0};
  }

  if (CiblerContext().campaign?.id !== result.id) {
    window.CiblerContext = d;
  }
  console.log(result)
  CiblerContext().campaign = result;
  CiblerContext().campaign.useGiftcode = result.useGiftcode === 'true';

  //Customize browser tab icon based on partner
  //create new link tag
  const htmlHead = document.querySelector("head");
  const addStyle = document.createElement("link");
  //set new link tag attributes
  addStyle.setAttribute("href",
    `https://cdn.cibler.io/campaigns/assets/${result.id}/mobile/style.css`
  );
  addStyle.setAttribute("rel","stylesheet");
  addStyle.setAttribute("type","text/css");
  htmlHead.appendChild(addStyle);

  const app = document.querySelector("#ciblerDivRoot");
  app.style.setProperty('--background', `url("${getImagePath('background', null, true)}")`);
  app.style.setProperty('--backgroundValidation', `url("${getImagePath('backgroundValidation', null, true)}")`);
  app.style.setProperty('--backgroundMobile', `url("${getImagePath('background')}")`);
  app.style.setProperty('--backgroundMobileValidation', `url("${getImagePath('backgroundValidation')}")`);

  app.style.setProperty('--backgroundColor', result.backgroundColor || '#283847');
  app.style.setProperty('--buttonColor', result.buttonColor || '#E13A06');
  app.style.setProperty('--inputBorderColor', result.inputBorderColor || 'transparent');
  app.style.setProperty('--buttonTextColor', result.buttonTextColor || '#fff');
  app.style.setProperty('--buttonDisableColor', result.buttonDisableColor || '#E1E1E1');
  app.style.setProperty('--textColor', result.textColor || '#fff');

  const form = await fetch(
    `${CiblerContext().endpoint}/api/campaigns/formdatas/${result.id}`
  ).then((r) => {
    if (r.ok && r.status === 200) {
      return r.json();
    }
  });

  CiblerContext().form = form;

  saveContext();

  return result;
};

const isStringJson = (str) => {
  let result = null;
  try {
    result = JSON.parse(str);
  } catch (e) {
    return false;
  }
  return !!result;
};

const saveContext = () => {
  localStorage.setItem(`CiblerContext_${d.customerId}`, JSON.stringify(CiblerContext()));
};
window.saveContext = saveContext;

const urlEncodeParameters = (details) => {
  var formBody = [];
  for (var property in details) {
    var encodedKey = encodeURIComponent(property);
    var encodedValue = encodeURIComponent(details[property]);
    formBody.push(encodedKey + "=" + encodedValue);
  }
  formBody = formBody.join("&");
  return formBody;
};

const logout = () => {
  window.CiblerContext = d;
  saveContext();
};

const setCibId = () =>
  'CIB1.'+Math.floor(Math.random() * 1e9)+'.'+Math.floor((new Date()).getTime() / 1000);

const getImagePath = (key, suffix, desktop) =>
  `https://cdn.cibler.io/campaigns/assets/${CiblerContext().campaign.id}/${
  desktop ? 'desktop' : 'mobile'
  }/${key}.${suffix || 'png'}`


export {
  initCiblerContext,
  fetchPartner,
  saveContext,
  isStringJson,
  CiblerContext,
  urlEncodeParameters,
  getQueryString,
  logout,
  userLoggedIn,
  setCibId,
  getImagePath,
};
