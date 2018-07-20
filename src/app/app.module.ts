import {BrowserModule} from '@angular/platform-browser';
import {HttpModule} from '@angular/http';
import {NgModule, ErrorHandler} from '@angular/core';

import {IonicApp, IonicModule, IonicErrorHandler} from 'ionic-angular';

import {InAppBrowser} from '@ionic-native/in-app-browser';
import {SplashScreen} from '@ionic-native/splash-screen';
import { ThemeableBrowser } from '@ionic-native/themeable-browser';

import {Camera} from '@ionic-native/camera';
import {IonicStorageModule} from '@ionic/storage';

import {ConferenceApp} from './app.component';

import {AboutPage} from '../pages/about/about';
import {PopoverPage} from '../pages/about-popover/about-popover';
import {AccountPage} from '../pages/account/account';
import {LoginPage} from '../pages/login/login';
import {MapPage} from '../pages/map/map';
import {SchedulePage} from '../pages/schedule/schedule';
//import { ScheduleFilterPage } from '../pages/schedule-filter/schedule-filter';
import {SessionDetailPage} from '../pages/session-detail/session-detail';
import {SignupPage} from '../pages/signup/signup';
//import { SpeakerDetailPage } from '../pages/speaker-detail/speaker-detail';
//import { SpeakerListPage } from '../pages/speaker-list/speaker-list';
import {TabsPage} from '../pages/tabs-page/tabs-page';
import {TutorialPage} from '../pages/tutorial/tutorial';
import {SupportPage} from '../pages/support/support';
import {DashboardPage} from '../pages/dashboard/dashboard';

import {ConferenceData} from '../providers/conference-data';
import {UserData} from '../providers/user-data';
import {HomeCameraPage} from '../pages/home-camera/home-camera';

import {OcrInputPage} from '../pages/ocr-input/ocr-input';
import {OAuthModule} from 'angular-oauth2-oidc';
import {HttpClientModule} from '@angular/common/http';
import {ForgotpasswordPage} from '../pages/forgotpassword/forgotpassword';
import {PasswordChangePage} from '../pages/password-change/password-change';
import {DataProvider} from '../providers/data/data';
import {FlashCardComponent} from '../components/flash-card/flash-card';
import {Data} from '../providers/data';
import {CoveragePage} from '../pages/coverage/coverage';
import {AddfamilyPage} from '../pages/addfamily/addfamily';
import {PdfPage} from '../pages/pdf/pdf';

import {TypeOfInsurancePage} from '../pages/type-Of-Insurance/type-Of-Insurance';
import {ClaimsPage} from '../pages/claims/claims';
import {SignupSuccessfulPage} from '../pages/signup-successful/signup-successful';
import {FileChooser} from '@ionic-native/file-chooser';
import {FileOpener} from '@ionic-native/file-opener';
import {FilePath} from '@ionic-native/file-path';
import { AddstorepolicyPage } from '../pages/addstorepolicy/addstorepolicy';

import { FeedbackPage } from '../pages/feedback/feedback';




@NgModule({
  declarations: [
    ConferenceApp,
    AboutPage,
    AccountPage,
    MapPage,
    PopoverPage,
    SchedulePage,
    //ScheduleFilterPage,
    SessionDetailPage,
    SignupPage,
    //SpeakerDetailPage,
    //SpeakerListPage,
    TabsPage,
    TutorialPage,
    SupportPage,
    HomeCameraPage,
    OcrInputPage, LoginPage,
    ForgotpasswordPage,
    PasswordChangePage,
    CoveragePage,
    DashboardPage,
    FlashCardComponent,
    AddfamilyPage,
    PdfPage,
    TypeOfInsurancePage,
    ClaimsPage,
    SignupSuccessfulPage,
    AddstorepolicyPage,
    FeedbackPage ,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule,

    OAuthModule.forRoot(),
    IonicModule.forRoot(ConferenceApp, {}, {
      links: [
        {component: TabsPage, name: 'TabsPage', segment: 'tabs-page'},
        {component: SchedulePage, name: 'Schedule', segment: 'schedule'},
        {component: SessionDetailPage, name: 'SessionDetail', segment: 'sessionDetail/:sessionId'},
        // { component: ScheduleFilterPage, name: 'ScheduleFilter', segment: 'scheduleFilter' },
        // { component: SpeakerListPage, name: 'SpeakerList', segment: 'speakerList' },
        //{ component: SpeakerDetailPage, name: 'SpeakerDetail', segment: 'speakerDetail/:speakerId' },
        {component: MapPage, name: 'Map', segment: 'map'},
        {component: AboutPage, name: 'About', segment: 'about'},
        {component: TutorialPage, name: 'Tutorial', segment: 'tutorial'},
        {component: SupportPage, name: 'SupportPage', segment: 'support'},
        {component: LoginPage, name: 'LoginPage', segment: 'login'},
        {component: AccountPage, name: 'AccountPage', segment: 'account'},
        {component: SignupPage, name: 'SignupPage', segment: 'signup'},
        {component: DashboardPage, name: 'DashboardPage', segment: 'dashboard'},
        {component: ForgotpasswordPage, name: 'ForgotpasswordPage', segment: 'forgotpassword'},
        {component: AddfamilyPage, name: 'AddfamilyPage', segment: 'addfamily'},
        {component: PasswordChangePage, name: 'PasswordChangePage', segment: 'password-change'},
        {component: TypeOfInsurancePage, name: 'TypeOfInsurancePage', segment: 'type-of-insurance'},
        {component: ClaimsPage, name: 'ClaimsPage', segment: 'claims'},
        {component: SignupSuccessfulPage, name: 'SignupSuccessfulPage', segment: 'signup-successful'},
        {component:  AddstorepolicyPage ,name: ' AddstorepolicyPage', segment: 'addstorepolicy'},
        {component:  FeedbackPage ,name: ' FeedbackPage', segment: 'FeedbackPage'}
     




      ]
    }),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    ConferenceApp,
    AboutPage,
    AccountPage,
    MapPage,
    PopoverPage,
    SchedulePage,
    //ScheduleFilterPage,
    SessionDetailPage,
    SignupPage,
    //SpeakerDetailPage,
    //SpeakerListPage,
    TabsPage,
    TutorialPage,
    SupportPage,
    HomeCameraPage,
    OcrInputPage,
    LoginPage,
    ForgotpasswordPage,
    PasswordChangePage,
    CoveragePage,
    DashboardPage,
    AddfamilyPage,
    PdfPage,
    TypeOfInsurancePage,
    ClaimsPage,
    SignupSuccessfulPage,
    AddstorepolicyPage,
    FeedbackPage


  ],
  providers: [
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ConferenceData,
    UserData,
    ThemeableBrowser,
    InAppBrowser,
    SplashScreen,
    HomeCameraPage,
    CoveragePage,
    Camera,
    DataProvider,
    FileChooser, 
    FileOpener,
    FilePath,


    Data
  ]
})
export class AppModule {
}
