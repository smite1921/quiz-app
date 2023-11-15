import { G, Path, Svg } from 'react-native-svg';
import { IconProps } from '../types';
import { styles } from '../styles';

export function ChartBarIcon({ strokeColor }: IconProps) {
  return (
    <Svg style={styles.svg} viewBox="0 0 24 24">
      <G
        fill="none"
        stroke={strokeColor}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      >
        <Path d="M3 3v18h18" />
        <Path d="m19 9l-5 5l-4-4l-3 3" />
      </G>
    </Svg>
  );
}
