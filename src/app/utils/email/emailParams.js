// utils/email/emailParams.js
const { getEmailTemplate } = require("./emailTemplates");

const createEmailParams = (userEmail, userName, templateName = "confirmation", customSource = null, cc = null, ...templateArgs) => {
  const { source, subject, body } = getEmailTemplate(templateName, userName, ...templateArgs);
  const emailParams = {
    Source: customSource || source,
    Destination: { ToAddresses: [userEmail] },
    Message: {
      Subject: { Data: subject },
      Body: body.Html
        ? {
          Html: body.Html,
          Text: body.Text,
        }
        : {
          Text: { Data: body },
        },

    },
  };
  if (cc) {
    emailParams.Destination.CcAddresses = Array.isArray(cc) ? cc : [cc];
  }
  return emailParams;
};

module.exports = { createEmailParams };