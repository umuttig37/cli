document.addEventListener('DOMContentLoaded', () => {
  const targetElement = document.getElementById('target');

  const userAgent = navigator.userAgent;
  let browserName = navigator.appName;
  let browserVersion = '' + parseFloat(navigator.appVersion);
  let temp;

  if ((temp = userAgent.match(/Edg\/([\d.]+)/))) {
      browserName = 'Microsoft Edge';
      browserVersion = temp[1];
  } else if ((temp = userAgent.match(/Chrome\/([\d.]+)/))) {
      browserName = 'Google Chrome';
      browserVersion = temp[1];
  } else if ((temp = userAgent.match(/Firefox\/([\d.]+)/))) {
      browserName = 'Mozilla Firefox';
      browserVersion = temp[1];
  } else if ((temp = userAgent.match(/Safari\/([\d.]+)/))) {
      browserName = 'Safari';
      browserVersion = temp[1];
  }

  let osName = "Unknown OS";
  if (userAgent.indexOf("Win") != -1) osName = "Windows";
  if (userAgent.indexOf("Mac") != -1) osName = "MacOS";
  if (userAgent.indexOf("X11") != -1) osName = "UNIX";
  if (userAgent.indexOf("Linux") != -1) osName = "Linux";

  const screenWidth = screen.width;
  const screenHeight = screen.height;

  const availWidth = screen.availWidth;
  const availHeight = screen.availHeight;

  const currentDate = new Date().toLocaleDateString('fi-FI', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
  });
  const currentTime = new Date().toLocaleTimeString('fi-FI', {
      hour: '2-digit',
      minute: '2-digit',
  });

  targetElement.innerHTML = `
  <p>Browser name and version: ${browserName}, ${browserVersion}</p>
  <p>Operating system: ${osName}</p>
  <p>Screen width and height: ${screenWidth}x${screenHeight}</p>
  <p>Available screen space: ${availWidth}x${availHeight}</p>
  <p>Current date: ${currentDate}</p>
  <p>Current time: ${currentTime}</p>
  `;
});
