export default {
  error: {
    forgotPassword: {
      too_many_requests:
        'You have reached the limit on password change attempts. Please wait before trying again.',
      'lock.fallback': "We're sorry, something went wrong when requesting the password change.",
      enterprise_email:
        "Your email's domain is part of an Enterprise identity provider. To reset your password, please see your security administrator."
    },
    login: {
      blocked_user: 'The user is blocked.',
      invalid_user_password: 'Մուտքի սխալ տվյալներ',
      'lock.fallback': "We're sorry, something went wrong when attempting to log in.",
      'lock.invalid_code': 'Սխալ ծածկագիր։',
      'lock.invalid_email_password': 'Սխալ էլփոստ կամ գաղտնաբառ։',
      'lock.invalid_username_password': 'Սխալ օգտանուն կամ գաղտնաբառ։ ',
      'lock.network': 'We could not reach the server. Please check your connection and try again.',
      'lock.popup_closed': 'Popup window closed. Try again.',
      'lock.unauthorized': 'Permissions were not granted. Try again.',
      'lock.mfa_registration_required':
        'Multifactor authentication is required but your device is not enrolled. Please enroll it before moving on.',
      'lock.mfa_invalid_code': 'Wrong code. Please try again.',
      password_change_required:
        'You need to update your password because this is the first time you are logging in, or because your password has expired.', // TODO: verify error code
      password_leaked:
        'We have detected a potential security issue with this account. To protect your account, we have blocked this login. An email was sent with instruction on how to unblock your account.',
      too_many_attempts: 'Your account has been blocked after multiple consecutive login attempts.',
      session_missing:
        "Couldn't complete your authentication request. Please try again after closing all open dialogs",
      'hrd.not_matching_email': 'Please, use your corporate email to login.'
    },
    passwordless: {
      'bad.email': 'Էլփոստի հասցեն անվավեր է',
      'bad.phone_number': 'Հեռախոսահամարն անվավեր է',
      'lock.fallback': "We're sorry, something went wrong"
    },
    signUp: {
      invalid_password: 'Գաղտնաբառն անվավեր է։',
      'lock.fallback': "We're sorry, something went wrong when attempting to sign up.",
      password_dictionary_error: 'Գաղտաբառը շատ տարածված է։',
      password_no_user_info_error: 'Գաղտաբառը հիմնված է օգտատիրոջ տվյալների վրա։',
      password_strength_error: 'Գաղտաբառը շատ թույլ է։',
      user_exists: 'Օգտատերը արդեն գոյություն ունի։',
      username_exists: 'Օգտանունը արդեն գոյություն ունի։'
    }
  },
  success: {
    // success messages show above the form or in a confirmation pane
    logIn: 'Thanks for logging in.',
    forgotPassword: "We've just sent you an email to reset your password.",
    magicLink: 'We sent you a link to log in<br />to %s.',
    signUp: 'Thanks for signing up.'
  },
  blankErrorHint: "Can't be blank",
  codeInputPlaceholder: 'your code',
  databaseEnterpriseLoginInstructions: '',
  databaseEnterpriseAlternativeLoginInstructions: 'or',
  databaseSignUpInstructions: '',
  databaseAlternativeSignUpInstructions: 'or',
  emailInputPlaceholder: 'yours@example.com',
  enterpriseLoginIntructions: 'Login with your corporate credentials.',
  enterpriseActiveLoginInstructions: 'Please enter your corporate credentials at %s.',
  failedLabel: 'Failed!',
  forgotPasswordTitle: 'Reset your password',
  forgotPasswordAction: "Չե՞ք հիշում Ձեր գաղտաբառը",
  forgotPasswordInstructions:
    'Խնդրում ենք ներածել Ձեր էլհասցեն։ Մենք կուղարկենք էլնամակ Ձեր գաղտաբառը վերակայելու համար։',
  forgotPasswordSubmitLabel: 'Ուղարկել էլնամակով',
  invalidErrorHint: 'Անվավեր',
  lastLoginInstructions: 'Նախորդ անգամ Դուք մուտք եք գործել որպես',
  loginAtLabel: 'Մուտք գործել %s հղմամբ',
  loginLabel: 'Մուտք',
  loginSubmitLabel: 'Մուտք գործել',
  loginWithLabel: 'Մուտք գործել որպես %s',
  notYourAccountAction: 'Ձեր հաշիվը չէ՞',
  passwordInputPlaceholder: 'Ձեր գաղտնաբառը',
  passwordStrength: {
    containsAtLeast: 'Պարունակի նշանների հետևյալ %d տեսակներից նվազագույնը %dը՝',
    identicalChars: 'No more than %d identical characters in a row (e.g., "%s" not allowed)',
    nonEmpty: 'Գաղտաբառը չպետք է դատարկ լինի',
    numbers: 'Թվեր (i.e. 0-9)',
    lengthAtLeast: 'Ամենակարճը %d նշան',
    lowerCase: 'Փոքրատառեր (a-z)',
    shouldContain: 'Պետք է պարունակի՝',
    specialCharacters: 'Հատուկ նշաններ (e.g. !@#$%^&*)',
    upperCase: 'Մեծադառեր (A-Z)'
  },
  passwordlessEmailAlternativeInstructions:
    'Այլապես՝ երածեք Ձեր էլփոստի հասցեն մուտք գործելու<br/> կամ հաշիվ գրանցելու համար',
  passwordlessEmailCodeInstructions: 'An email with the code has been sent to %s.',
  passwordlessEmailInstructions: 'Ներածեք Ձեր էլփոստի հասցեն մուտք գործելու<br/> կամ հաշիվ գրանցելու համար',
  passwordlessSMSAlternativeInstructions:
    'Այլապես՝ներածեք Ձեր հեռախոսահամարը մուտք գործելու<br/> կամ հաշիվ գրանցելու համար',
  passwordlessSMSCodeInstructions: 'An SMS with the code has been sent<br/>to %s.',
  passwordlessSMSInstructions: 'Ներածեք Ձեր հեռախոսահամարը մուտք գործելու<br/> կամ հաշիվ գրանցելու համար',
  phoneNumberInputPlaceholder: 'Ձեր հեռախոսահամարը',
  resendCodeAction: 'Ծածկագիրը չե՞ք ստացել',
  resendLabel: 'Նորից ուղարկել',
  resendingLabel: 'Resending...',
  retryLabel: 'Կրկին փորձել',
  sentLabel: 'Ուղարկված է',
  showPassword: 'Ցույց տալ գաղտնաբառը',
  signupTitle: 'Sign Up',
  signUpLabel: 'Գրանցում',
  signUpSubmitLabel: 'Գրանցվել',
  signUpTerms: '',
  signUpWithLabel: 'Sign up with %s',
  socialLoginInstructions: '',
  socialSignUpInstructions: '',
  ssoEnabled: 'Single Sign-On enabled',
  submitLabel: 'Submit',
  unrecoverableError: 'Something went wrong.<br />Please contact technical support.',
  usernameFormatErrorHint:
    'Օգտագործեք %d-%d տառեր, թվեր և հետևյալ նշանները՝ "_", ".", "+", "-"',
  usernameInputPlaceholder: 'Ձեր մուտքանունը',
  usernameOrEmailInputPlaceholder: 'մուտքանուն/էլհասցե',
  title: 'Auth0',
  welcome: 'Բարի գալուստ, %s!',
  windowsAuthInstructions: 'You are connected from your corporate network&hellip;',
  windowsAuthLabel: 'Windows նույնականացում',
  mfaInputPlaceholder: 'Ծածկագիր',
  mfaLoginTitle: '2-քայլ իսկորոշում',
  mfaLoginInstructions: 'Խնդրում ենք մուտքագրել Ձեր բջջային հավելվածի ձևավորած verification code generated by your mobile application.',
  mfaSubmitLabel: 'Մուտք գործել',
  mfaCodeErrorHint: 'Օգտագործեք %d թվեր'
};
