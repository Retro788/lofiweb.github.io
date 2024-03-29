import{ useState } from 'react';

import { chill, jazzy, sleep } from '../../data/songData';
import './styles.scss';
import Player from '../../components/Player'
import { CONSTANTS } from '../../constants/constants';
import { RootState, useAppSelector } from '../../store/store';

const Footer = () => {
  const data = useAppSelector((state: RootState) => state.mood);

  const { moodMode } = data;

  const [currentSongIndex, setCurrentSongIndex] = useState(0);

  return (
    <div className='footer'>
      <div className='song-name'>
        {moodMode === 'chill' ? (
          <span>Estas reproduciendo: {chill[currentSongIndex].name}</span>
        ) : moodMode === 'jazzy' ? (
          <span>Estas reproduciendo: {jazzy[currentSongIndex].name}</span>
        ) : (
          <span>Estas reproduciendo: {sleep[currentSongIndex].name}</span>
        )}
      </div>
      <div className='controller'>
        {moodMode === 'chill' ? (
          <Player
            currentSongIndex={currentSongIndex}
            setCurrentSongIndex={setCurrentSongIndex}
            songs={chill}
          />
        ) : moodMode === 'jazzy' ? (
          <Player
            currentSongIndex={currentSongIndex}
            setCurrentSongIndex={setCurrentSongIndex}
            songs={jazzy}
          />
        ) : (
          <Player
            currentSongIndex={currentSongIndex}
            setCurrentSongIndex={setCurrentSongIndex}
            songs={sleep}
          />
        )}
      </div>
      <div className='author'>
        Hecho por:
        <a
          href={CONSTANTS.AUTHOR_GITHUB_LINK}
          target='_blank'
          rel='noopener noreferrer'
          className='author-name'
        >
         {CONSTANTS.AUTHOR}
        </a>
      </div>
    </div>
  );
};

export default Footer;
