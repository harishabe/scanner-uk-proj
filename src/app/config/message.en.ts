import { Injectable } from '@angular/core';

@Injectable()
export class Message {
    //LOGIN PAGE  
    OCR_TITLE: string = 'Login to OCR Scanner';
    OCR_LOGIN: string = 'LOG IN';
    OCR_FORGET_PASSWORD_LINK: string = 'Forget Password?';
    OCR_SIGN_UP_LINK: string = 'Sign Up Here?';

    //SIGNUP PAGE
    OCR_SIGNUP_TITLE: string = 'SIGNUP TO OCR SCANNER';
    OCR_SIGN_UP_BUTTON: string = 'SIGN UP';
    OCR_LOGIN_LINK: string = 'Login Here?';

    //FORGET PAGE
    OCR_FORGET_PASSWORD_TITLE: string = 'Forget Password';
    OCR_FORGET_PASSWORD_BUTTON: string = 'Forget Password';
    OCR_FORGET_PWD_LOGIN_LINK: string = 'Login Here?';

    //NAVBAR
    OCR_NAVBAR_TITLE: string = 'OCR SCANNER';
    OCR_SIDEBAR_UPLOAD_TITLE: string = 'Upload Docs';
    OCR_SIDEBAR_PDF_TITLE: string = 'PDF Details';
    OCR_SIDEBAR_PROFILE: string = 'Profile';
    OCR_SIDEBAR_SETTING: string = 'Settings';
    OCR_SIDEBAR_LOGOUT: string = 'Log Out';


    //BREADCRUM
    OCR_BREADCRUM_FIRST_TITLE: string = 'Upload Docs';
    OCR_BREADCRUM_SECOND_TITLE: string = 'Document Details';
    OCR_BREADCRUM_PROFILE_TITLE: string = 'Profile';

    //DASHBOARD
    OCR_DASHBOARD_BREADCRUM_TITLE: string = 'Upload Docs';
    OCR_DASHBOARD_CONFIGURE_TITLE: string = 'CONFIGURE FIELDS';
    OCR_DASHBOARD_UPLOAD_SUBMIT: string = 'SUBMIT';



}