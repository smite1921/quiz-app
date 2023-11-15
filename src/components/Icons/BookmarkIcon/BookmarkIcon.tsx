import { Path, Svg } from 'react-native-svg';
import { IconProps } from '../types';
import { styles } from '../styles';

export function BookmarkIcon({ strokeColor }: IconProps) {
  return (
    <Svg style={styles.svg} viewBox="0 0 24 24">
      <Path
        fill="none"
        stroke={strokeColor}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="m19 21l-7-4l-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z"
      />
    </Svg>
  );
}
