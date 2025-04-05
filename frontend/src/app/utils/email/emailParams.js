const { getEmailTemplate } = require("./emailTemplates");

const createEmailParams = (userEmail, userName, templateName = "confirmation", customSource = null, ...templateArgs) => {
  const { source, subject, body } = getEmailTemplate(templateName, userName, ...templateArgs);
  return {
    Source: customSource || source,
    Destination: { ToAddresses: [userEmail] },
    Message: {
      Subject: { Data: subject },
      Body: {
        Text: { Data: body },
      },
    },
  };
};

module.exports = { createEmailParams };