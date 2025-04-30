import { StyleSheet } from 'react-native';

export const loginStyles = StyleSheet.create({
    container: {
      padding: 24,
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    titlelogin: {
        fontSize: 22,
        marginBottom: 24,
        textAlign: 'center',
      },
    input: {
        width: 100,
        textAlign: 'center',
        borderWidth: 1,
        borderColor: '#aaa',
        padding: 8,
        marginBottom: 12,
        borderRadius: 4,
      },
    link: {
        marginTop: 12,
        textAlign: 'center',
        color: 'blue',
        textDecorationLine: 'underline',
      },
});