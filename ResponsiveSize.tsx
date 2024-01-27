import {} from 'react-native';
import {
  responsiveScreenHeight,
  responsiveScreenWidth,
  responsiveScreenFontSize,
} from 'react-native-responsive-dimensions';

const figmaWindowWidth = 395;
const figmaWindowHeight = 844;

export function widthPercentage(width: number): number {
  const percentage = (width / figmaWindowWidth) * 100;
  return responsiveScreenWidth(percentage);
}

export function heightPercentage(height: number): number {
  const percentage = (height / figmaWindowHeight) * 100;
  return responsiveScreenHeight(percentage);
}

export function fontPercentage(size: number): number {
  const percentage = size * 0.135;
  return responsiveScreenFontSize(percentage);
}
