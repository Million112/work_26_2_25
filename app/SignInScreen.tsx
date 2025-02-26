import { View, TextInput, Button, Text, StyleSheet } from 'react-native';
import { useState } from 'react';

export default function SignInScreen() {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const validatePhoneNumber = (phone: string) => {
    const phoneRegex = /^(0[3|5|7|8|9])+([0-9]{8})$/;
    if (phoneRegex.test(phone)) {
      setErrorMessage('✅ Số điện thoại hợp lệ!');
    } else {
      setErrorMessage('⚠️ Số điện thoại không hợp lệ!');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Đăng nhập</Text>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Nhập số điện thoại"
          keyboardType="numeric"
          value={phoneNumber}
          onChangeText={setPhoneNumber}
          style={styles.input}
          placeholderTextColor="#888"
        />
      </View>
      <Button title="tiếp tục" onPress={() => validatePhoneNumber(phoneNumber)} />
      {errorMessage ? <Text style={styles.error}>{errorMessage}</Text> : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center', 
    padding: 20, 
    backgroundColor: '#fff', // Nền trắng toàn bộ
    width: '100%', 
    height: '100%', 
  },
  title: { 
    fontSize: 24, 
    fontWeight: 'bold', 
    color: '#000', 
    position: 'absolute', 
    top: 60, // Đưa tiêu đề lên trên
  },
  inputContainer: { 
    borderBottomWidth: 2, // Gạch chân dài
    borderBottomColor: '#000', // Màu đen
    width: '80%', 
    marginBottom: 20 
  },
  input: { 
    height: 40, 
    fontSize: 16, 
    color: '#000' 
  },
  error: { 
    color: 'red', 
    marginTop: 10 
  },
});
