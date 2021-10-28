import { StyleSheet } from 'react-native';

export type ShortProperty = 'mt' | 'mr' | 'mb' | 'ml' | 'pt' | 'pr' | 'pb' | 'pl' | 'w' | 'h';
export type RichProperty = `${ShortProperty}-${number}`;

export const propertyMap: Record<string, string> = {
  mt: 'marginTop',
  mr: 'marginRight',
  mb: 'marginBottom',
  ml: 'marginLeft',
  pt: 'paddingTop',
  pr: 'paddingRight',
  pb: 'paddingBottom',
  pl: 'paddingLeft',
  w: 'width',
  h: 'height',
};

// TODO: How to check mt-10 type?
export default (input: string) => {
  if (input.length < 4) {
    throw new Error('Wrong token shape');
  }

  const tokens = input.split(' ');

  return tokens.map((token) => {
    const [property, value] = token.split('-');
    if (!propertyMap[property]) {
      throw new Error('Wrong property name');
    }
    const styles = StyleSheet.create({
      [token]: {
        [propertyMap[property]]: parseInt(value, 10),
      },
    });
    return styles[token];
  });
};
