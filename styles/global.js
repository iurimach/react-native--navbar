import { StyleSheet } from 'react-native';

export const globalStyles = StyleSheet.create({
 
    container2:{
        flexDirection: 'row', // Arrange children horizontally
        justifyContent: 'space-between', // Add space between the buttons
        padding: 16,
        backgroundColor:'red'
    },

    button: {
        flex: 1, // Take up equal space
        backgroundColor: 'red',
        borderRadius: 18,
        paddingVertical: 12,
        paddingHorizontal: 16,
        marginHorizontal: 28,
      },
    titleText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    flexDirection: 'row', // Arrange children horizontally
    justifyContent: 'space-between', // Add space between the buttons
    padding: 16,
  },
  paragraph: {
    marginVertical: 8,
    lineHeight: 20,
  },
  container: {
    flex: 1,
    padding: 20,
  },
});