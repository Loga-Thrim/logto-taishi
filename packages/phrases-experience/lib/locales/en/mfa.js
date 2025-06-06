const mfa = {
    totp: 'Authenticator app OTP',
    webauthn: 'Passkey',
    backup_code: 'Backup code',
    link_totp_description: 'Link google authenticator, etc.',
    link_webauthn_description: 'Link your device or USB hardware',
    link_backup_code_description: 'Generate a backup code',
    verify_totp_description: 'Enter the one-time code in app',
    verify_webauthn_description: 'Verify your device or USB hardware',
    verify_backup_code_description: 'Paste the backup code you saved',
    add_mfa_factors: 'Add 2-step authentication',
    add_mfa_description: 'Two-factor authentication is enabled. Select your second verification method for secure account sign-in.',
    verify_mfa_factors: '2-step authentication',
    verify_mfa_description: '2-step authentication has been enabled for this account. Please select the second way to verify your identity.',
    add_authenticator_app: 'Add authenticator app',
    step: 'Step {{step, number}}: {{content}}',
    scan_qr_code: 'Scan this QR code',
    scan_qr_code_description: 'Scan using your authenticator app, like Google Authenticator, Duo mobile, Authy, etc.',
    qr_code_not_available: 'Can’t scan the QR code?',
    copy_and_paste_key: 'Copy and paste the key',
    copy_and_paste_key_description: 'Paste blow key to your authenticator app, like Google Authenticator, Duo mobile, Authy, etc.',
    want_to_scan_qr_code: 'Want to scan QR code?',
    enter_one_time_code: 'Enter the one-time code',
    enter_one_time_code_link_description: 'Enter the 6-digit verification code generated by the authenticator app.',
    enter_one_time_code_description: '2-step authentication has been enabled for this account. Please enter the one-time code see on your authenticator app linked.',
    link_another_mfa_factor: 'Link another 2-step authentication',
    save_backup_code: 'Save your backup code',
    save_backup_code_description: 'You can use one of these backup code to access your account if you have trouble during 2-step authentication in another ways. Each code may be used only once.',
    backup_code_hint: 'Make sure copy them and save in a safe place.',
    enter_backup_code_description: 'Enter the backup code you saved when the 2-step authentication was initially enabled.',
    create_a_passkey: 'Create a passkey',
    create_passkey_description: 'Register a passkey to verify by your device password or biometrics, scanning QR code, or using USB security key like YubiKey.',
    name_your_passkey: 'Name your passkey',
    name_passkey_description: 'You have successfully verified this device for 2-step authentication. Customize the name to recognize if you have multiple keys.',
    try_another_verification_method: 'Try another method to verify',
    verify_via_passkey: 'Verify via passkey',
    verify_via_passkey_description: 'Use passkey to verify by your device password or biometrics, scanning QR code, or using USB security key like YubiKey.',
    secret_key_copied: 'Secret key copied.',
    backup_code_copied: 'Backup code copied.',
};
export default Object.freeze(mfa);
