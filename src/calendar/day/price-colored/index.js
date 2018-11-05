import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { shouldUpdate } from '../../../component-updater';
import styleConstructor from './style';

class PriceColoredDay extends Component {
  static propTypes = {
    // TODO: disabled props should be removed
    state: PropTypes.oneOf(['disabled', 'today', '']),

    // Specify theme properties to override specific styles for calendar parts. Default = {}
    theme: PropTypes.object,
    marking: PropTypes.any,
    onPress: PropTypes.func,
    onLongPress: PropTypes.func,
    date: PropTypes.object,
    price: PropTypes.string,
    color: PropTypes.string
  };

  constructor(props) {
    super(props);
    this.style = styleConstructor(props.theme);
    this.onDayPress = this.onDayPress.bind(this);
    this.onDayLongPress = this.onDayLongPress.bind(this);
  }

  onDayPress() {
    this.props.onPress(this.props.date);
  }
  onDayLongPress() {
    this.props.onLongPress(this.props.date);
  }

  shouldComponentUpdate(nextProps) {
    return shouldUpdate(this.props, nextProps, [
      'state',
      'children',
      'marking',
      'onPress',
      'onLongPress',
      'price',
      'color'
    ]);
  }

  render() {
    const containerStyle = [this.style.base];
    const textStyle = [this.style.text];
    const priceTextStyle = [this.style.priceText];

    const { price, color } = this.props;

    if (!isDisabled && color) {
      priceTextStyle.push({
        color
      });
    }

    let marking = this.props.marking || {};
    if (marking && marking.constructor === Array && marking.length) {
      marking = {
        marking: true
      };
    }
    const isDisabled =
      typeof marking.disabled !== 'undefined'
        ? marking.disabled
        : this.props.state === 'disabled';

    const selectedContainer = marking.selected
      ? [this.style.selected]
      : containerStyle;

    if (marking.selected) {
      textStyle.push(this.style.selectedText);
      priceTextStyle.push(this.style.selectedText);
    } else if (isDisabled) {
      textStyle.push(this.style.disabledText);
    } else if (this.props.state === 'today') {
      containerStyle.push(this.style.today);
      textStyle.push(this.style.todayText);
    }

    return (
      <View style={containerStyle}>
        {marking.betweenDay && <View style={this.style.fullBlock} />}
        {marking.startingDay && <View style={this.style.rightBlock} />}
        {marking.endingDay && <View style={this.style.leftBlock} />}
        <TouchableOpacity
          style={selectedContainer}
          onPress={this.onDayPress}
          onLongPress={this.onDayLongPress}
          activeOpacity={marking.activeOpacity}
          disabled={marking.disableTouchEvent}
        >
          <Text allowFontScaling={false} style={textStyle}>
            {String(this.props.date.day)}
          </Text>
          {!isDisabled &&
            price && (
              <Text
                allowFontScaling={false}
                style={[textStyle, priceTextStyle]}
              >
                {String(price)}
              </Text>
            )}
        </TouchableOpacity>
      </View>
    );
  }
}

export default PriceColoredDay;
