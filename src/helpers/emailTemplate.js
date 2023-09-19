const forgetPasswordEmail = (email, temporaryPassword) => {
    return `
      Hello ${email}
  
      A new password has been requested by this email:
      ${email}
  
      This is your temporary password: ${temporaryPassword}
  
      For security reasons, please change your temporary password after logging in.
  
      Thanks!
      Upsilon Team
  `;
  };
  
  module.exports = {
    forgetPasswordEmail,
  };