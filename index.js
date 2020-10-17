const React = require('react');

exports.Padding = ({ children, x, y, all, spread, ...props }) => {
  const multiplier = 8;

  if (all && typeof all !== 'number') {
    all = 0;
  }

  if (x && typeof x !== 'number') {
    x = 0;
  }

  if (y && typeof y !== 'number') {
    y = 0;
  }

  const style = {
    padding: {
      paddingTop: all * multiplier || y * multiplier || 0,
      paddingRight: all * multiplier || x * multiplier || 0,
      paddingLeft: all * multiplier || x * multiplier || 0,
      paddingBottom: all * multiplier || x * multiplier || 0,
      flexGrow: spread ? 1 : 0,
    },
  };
  return (
    <>
      <div style={style.padding}>{children}</div>
    </>
  );
};

exports.PaddingNative = ({ children, x, y, all, spread, ...props }) => {
  const { View } = require('react-native');
  const multiplier = 8;

  if (all && typeof all !== 'number') {
    all = 0;
  }

  if (x && typeof x !== 'number') {
    x = 0;
  }

  if (y && typeof y !== 'number') {
    y = 0;
  }

  const style = {
    padding: {
      paddingTop: all * multiplier || y * multiplier || 0,
      paddingRight: all * multiplier || x * multiplier || 0,
      paddingLeft: all * multiplier || x * multiplier || 0,
      paddingBottom: all * multiplier || x * multiplier || 0,
      flexGrow: spread ? 1 : 0,
    },
  };
  return (
    <>
      <View style={style.padding}>{children}</View>
    </>
  );
};
