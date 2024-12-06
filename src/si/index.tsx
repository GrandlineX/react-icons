import SI1password from './SI1password';
import SIBitwarden from './SIBitwarden';
import SIChromecast from './SIChromecast';
import SIDerspiegel from './SIDerspiegel';
import SIDiscord from './SIDiscord';
import SIElement from './SIElement';
import SIEpicgames from './SIEpicgames';
import SIFigma from './SIFigma';
import SIFilezilla from './SIFilezilla';
import SIFirefoxbrowser from './SIFirefoxbrowser';
import SIGit from './SIGit';
import SIGitea from './SIGitea';
import SIGithub from './SIGithub';
import SIGitlab from './SIGitlab';
import SIGogdotcom from './SIGogdotcom';
import SIIntellijidea from './SIIntellijidea';
import SIJirasoftware from './SIJirasoftware';
import SILinux from './SILinux';
import SILogmein from './SILogmein';
import SIMacos from './SIMacos';
import SIMattermost from './SIMattermost';
import SIMicrosoftoutlook from './SIMicrosoftoutlook';
import SIMicrosoftteams from './SIMicrosoftteams';
import SINextcloud from './SINextcloud';
import SINintendoswitch from './SINintendoswitch';
import SIPihole from './SIPihole';
import SIPimcore from './SIPimcore';
import SIPlaystation from './SIPlaystation';
import SIPlaystation2 from './SIPlaystation2';
import SIPlaystation3 from './SIPlaystation3';
import SIPlaystation4 from './SIPlaystation4';
import SIPlaystation5 from './SIPlaystation5';
import SIPlex from './SIPlex';
import SISentry from './SISentry';
import SISignal from './SISignal';
import SISoundcloud from './SISoundcloud';
import SISpeedtest from './SISpeedtest';
import SISpotify from './SISpotify';
import SISteam from './SISteam';
import SISublimetext from './SISublimetext';
import SITeamspeak from './SITeamspeak';
import SITelegram from './SITelegram';
import SIThunderbird from './SIThunderbird';
import SITwitter from './SITwitter';
import SITypescript from './SITypescript';
import SIWhatsapp from './SIWhatsapp';
import SIWiiu from './SIWiiu';
import SIWindows from './SIWindows';
import SIWindowsterminal from './SIWindowsterminal';
import SIWireguard from './SIWireguard';
import SIWireshark from './SIWireshark';
import SIXbox from './SIXbox';
import SIYoutube from './SIYoutube';
import SIX from './SIX';
import SICurseforge from './SICurseforge';
import SIFacebook from './SIFacebook';
import SIGmail from './SIGmail';
import SIGooglecalendar from './SIGooglecalendar';
import SIGoogledrive from './SIGoogledrive';
import SIInstagram from './SIInstagram';
import SIKubernetes from './SIKubernetes';
import SIMiro from './SIMiro';
import SIPaperlessngx from './SIPaperlessngx';
import SIStackoverflow from './SIStackoverflow';
import SITiktok from './SITiktok';

export const SIWrapper = {
  SI1password,
  SIBitwarden,
  SIChromecast,
  SIDerspiegel,
  SIDiscord,
  SIElement,
  SIEpicgames,
  SIFigma,
  SIFilezilla,
  SIFirefoxbrowser,
  SIGit,
  SIGitea,
  SIGithub,
  SIGitlab,
  SIGogdotcom,
  SIIntellijidea,
  SIJirasoftware,
  SILinux,
  SILogmein,
  SIMacos,
  SIMattermost,
  SIMicrosoftoutlook,
  SIMicrosoftteams,
  SINextcloud,
  SINintendoswitch,
  SIPihole,
  SIPimcore,
  SIPlaystation,
  SIPlaystation2,
  SIPlaystation3,
  SIPlaystation4,
  SIPlaystation5,
  SIPlex,
  SISentry,
  SISignal,
  SISoundcloud,
  SISpeedtest,
  SISpotify,
  SISteam,
  SISublimetext,
  SITeamspeak,
  SITelegram,
  SIThunderbird,
  SITwitter,
  SITypescript,
  SIWhatsapp,
  SIWiiu,
  SIWindows,
  SIWindowsterminal,
  SIWireguard,
  SIWireshark,
  SIXbox,
  SIYoutube,
  SIX,
  SICurseforge,
  SIFacebook,
  SIGmail,
  SIGooglecalendar,
  SIGoogledrive,
  SIInstagram,
  SIKubernetes,
  SIMiro,
  SIPaperlessngx,
  SIStackoverflow,
  SITiktok,
};

export type SINames =
  | 'SI1password'
  | 'SIBitwarden'
  | 'SIChromecast'
  | 'SIDerspiegel'
  | 'SIDiscord'
  | 'SIElement'
  | 'SIEpicgames'
  | 'SIFigma'
  | 'SIFilezilla'
  | 'SIFirefoxbrowser'
  | 'SIGit'
  | 'SIGitea'
  | 'SIGithub'
  | 'SIGitlab'
  | 'SIGogdotcom'
  | 'SIIntellijidea'
  | 'SIJirasoftware'
  | 'SILinux'
  | 'SILogmein'
  | 'SIMacos'
  | 'SIMattermost'
  | 'SIMicrosoftoutlook'
  | 'SIMicrosoftteams'
  | 'SINextcloud'
  | 'SINintendoswitch'
  | 'SIPihole'
  | 'SIPimcore'
  | 'SIPlaystation'
  | 'SIPlaystation2'
  | 'SIPlaystation3'
  | 'SIPlaystation4'
  | 'SIPlaystation5'
  | 'SIPlex'
  | 'SISentry'
  | 'SISignal'
  | 'SISoundcloud'
  | 'SISpeedtest'
  | 'SISpotify'
  | 'SISteam'
  | 'SISublimetext'
  | 'SITeamspeak'
  | 'SITelegram'
  | 'SIThunderbird'
  | 'SITwitter'
  | 'SITypescript'
  | 'SIWhatsapp'
  | 'SIWiiu'
  | 'SIWindows'
  | 'SIWindowsterminal'
  | 'SIWireguard'
  | 'SIWireshark'
  | 'SIXbox'
  | 'SIYoutube'
  | 'SIX'
  | 'SICurseforge'
  | 'SIFacebook'
  | 'SIGmail'
  | 'SIGooglecalendar'
  | 'SIGoogledrive'
  | 'SIInstagram'
  | 'SIKubernetes'
  | 'SIMiro'
  | 'SIPaperlessngx'
  | 'SIStackoverflow'
  | 'SITiktok';

export {
  SI1password,
  SIBitwarden,
  SIChromecast,
  SIDerspiegel,
  SIDiscord,
  SIElement,
  SIEpicgames,
  SIFigma,
  SIFilezilla,
  SIFirefoxbrowser,
  SIGit,
  SIGitea,
  SIGithub,
  SIGitlab,
  SIGogdotcom,
  SIIntellijidea,
  SIJirasoftware,
  SILinux,
  SILogmein,
  SIMacos,
  SIMattermost,
  SIMicrosoftoutlook,
  SIMicrosoftteams,
  SINextcloud,
  SINintendoswitch,
  SIPihole,
  SIPimcore,
  SIPlaystation,
  SIPlaystation2,
  SIPlaystation3,
  SIPlaystation4,
  SIPlaystation5,
  SIPlex,
  SISentry,
  SISignal,
  SISoundcloud,
  SISpeedtest,
  SISpotify,
  SISteam,
  SISublimetext,
  SITeamspeak,
  SITelegram,
  SIThunderbird,
  SITwitter,
  SITypescript,
  SIWhatsapp,
  SIWiiu,
  SIWindows,
  SIWindowsterminal,
  SIWireguard,
  SIWireshark,
  SIXbox,
  SIYoutube,
  SIX,
  SICurseforge,
  SIFacebook,
  SIGmail,
  SIGooglecalendar,
  SIGoogledrive,
  SIInstagram,
  SIKubernetes,
  SIMiro,
  SIPaperlessngx,
  SIStackoverflow,
  SITiktok,
};
