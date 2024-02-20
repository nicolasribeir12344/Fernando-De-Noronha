import { View, Text, StyleSheet } from 'react-native'

export function Button() {
  return (
    <View>
      <Text style={styles.titulo}>Reserve sua Viagem</Text>
      <Text style={styles.texto}>2024 Fernando de Noronha Turismo</Text>
    </View>
    
  )
}
const styles = StyleSheet.create({
  titulo: {
    fontSize: 25,
    color: '#0001ff',
    textAlign: 'center',
    fontWeight: 'bold',
    backgroundColor: '#c6e0f2',
    paddingBottom: 15,
    paddingTop: 15,
    marginTop: 30,
    marginLeft: 25,
    marginRight: 25
  },
  texto: {
    marginLeft: 55,
    color: '#',
    marginTop: 25
  }
})