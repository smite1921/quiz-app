import { G, Path, Svg } from 'react-native-svg';
import { IconProps } from '../types';
import { styles } from '../styles';

export function HomeIcon({ strokeColor }: IconProps) {
  return (
    <Svg style={styles.svg} viewBox="0 0 24 24">
      <G
        fill="none"
        stroke={strokeColor}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      >
        <Path d="m3 9l9-7l9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <Path d="M9 22V12h6v10" />
      </G>
    </Svg>
  );
}
