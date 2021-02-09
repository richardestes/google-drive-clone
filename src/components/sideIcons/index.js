import React from 'react'
import AddIcon from '@material-ui/icons/Add';
import GoogleMapsIcon from '../../media/001-google-maps.svg';
import PhotosIcon from '../../media/003-photos.svg';
import TranslateIcon from '../../media/004-translate.svg';
import GoogleDocsIcon from '../../media/005-docs.svg';
import GoogleSheetsIcon from '../../media/006-sheets.svg';
import GoogleSlidesIcon from '../../media/007-slides.svg';
import GoogleSearchIcon from '../../media/010-search.svg';
import YoutubeIcon from '../../media/012-youtube.svg';
import GmailIcon from '../../media/014-gmail.svg';
import GoogleCalendarIcon from '../../media/015-calendar.svg';
import '../../styles/SideIcons.css';

const index = () => {
  return (
    <div className='sideIcons'>
      <div className="sideIcons__top">
        <img src={PhotosIcon} alt="Photos"/>
        <img src={TranslateIcon} alt="Translate"/>
        <img src={GoogleDocsIcon} alt="Google Docs"/>
        <img src={GoogleSheetsIcon} alt="Google Sheets"/>
        <img src={GoogleSlidesIcon} alt="Google Slides"/>
        <img src={GoogleSearchIcon} alt="Google Search"/>
        <img src={YoutubeIcon} alt="YouTube"/>
        <img src={GmailIcon} alt="Gmail"/>
        <img src={GoogleCalendarIcon} alt="Google Calendar"/>
      </div>
      
      <hr/>
      
      <div className="sideIcons__plusIcon">
        <AddIcon />
      </div>
      
    </div>
  )
}

export default index
