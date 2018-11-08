import { StyleSheet, Dimensions } from 'react-native';
import * as defaultStyle from '../../../style';

const STYLESHEET_ID = 'stylesheet.day.basic';

export default function styleConstructor(theme = {}) {
  const appStyle = { ...defaultStyle, ...theme };
  const size = (Dimensions.get('window').width - 30) / 7;
  const halfSize = size / 2;
  const backBlockHeight = 34;
  const backBlockColor = '#f1f2f6';
  return StyleSheet.create({
    base: {
      width: size,
      height: size,
      alignItems: 'center',
      justifyContent: 'center'
    },
    text: {
      fontSize: appStyle.textDayFontSize,
      fontFamily: appStyle.textDayFontFamily,
      fontWeight: '300',
      color: appStyle.dayTextColor,
      backgroundColor: 'rgba(255, 255, 255, 0)'
    },
    priceText: {
      fontSize: appStyle.textDayFontSize - 7,
      color: appStyle.dayTextColor
    },
    alignedText: {},
    selected: {
      backgroundColor: appStyle.selectedDayBackgroundColor,
      borderRadius: halfSize,
      width: 40,
      height: 40,
      alignItems: 'center',
      justifyContent: 'center',
      position: 'absolute'
    },
    leftBlock: {
      width: halfSize,
      height: backBlockHeight,
      position: 'absolute',
      left: 0,
      backgroundColor: backBlockColor
    },
    rightBlock: {
      width: halfSize,
      height: backBlockHeight,
      position: 'absolute',
      right: 0,
      backgroundColor: backBlockColor
    },
    fullBlock: {
      width: size,
      height: backBlockHeight,
      position: 'absolute',
      right: 0,
      backgroundColor: backBlockColor
    },
    today: {
      backgroundColor: appStyle.todayBackgroundColor
    },
    todayText: {
      color: appStyle.todayTextColor
    },
    selectedText: {
      color: appStyle.selectedDayTextColor
    },
    disabledText: {
      color: appStyle.textDisabledColor
    },
    dot: {
      width: 4,
      height: 4,
      marginTop: 1,
      borderRadius: 2,
      opacity: 0
    },
    visibleDot: {
      opacity: 1,
      backgroundColor: appStyle.dotColor
    },
    selectedDot: {
      backgroundColor: appStyle.selectedDotColor
    },
    ...(theme[STYLESHEET_ID] || {})
  });
}
