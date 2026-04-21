// @ts-nocheck

import { useEffect, useState } from 'react';
import { Image, KeyboardAvoidingView, Platform, Pressable, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';



const Header = ({theme}) => {
  return (
      <View style={[styles.headerBox, { backgroundColor: theme.background}]}>
        <Text style={[styles.bigText, { color: theme.text }]}>Panel użytkownika</Text>
      </View>
  )
}

const SettingsRow = ({ label, right, onPress, theme }) => {
  return (
    <Pressable style={styles.settingsRow} onPress={onPress}>
      <Text style={{ color: theme.text }}>{label}</Text>
      <Text style={{ color: theme.text }}>{right}</Text>
    </Pressable>
  )
}

const UserProfileElement = ({field, property, theme}) => {
  return (
    <View style={styles.row}>
      <Text style={[{ color: theme.text },styles.mediumText, styles.label]}>{field}</Text>
      <Text style={[{ color: theme.text }, styles.mediumText, { fontWeight: 'bold' }, styles.value]}>{property}</Text>
    </View>
  )
}

const UserProfile = ({name, email, city, bio, theme}) => {
  return (
    <View>
      <Image
        source={require('../../assets/images/icon.png')}
        style={styles.avatar}
      />
      <View style={[styles.userProfileCard, { backgroundColor: theme.backgroundCard }]}>
        <Text style={[ { color: theme.text }, styles.headerFont, { fontWeight: 'bold', textAlign: 'center', fontSize: 20, paddingVertical: 10, }]}>Dane użytkownika</Text>
        <UserProfileElement field={'Imię:'} property={name} theme={theme} />
        <UserProfileElement field={'Adres e-mail:'} property={email} theme={theme} />
        <UserProfileElement field={'Miasto:'} property={city} theme={theme} />
        <UserProfileElement field={'Bio:'} property={bio} theme={theme} />
      </View>
    </View>
  )
}

const Form = ({name, setName, email, setEmail, city, setCity, bio, setBio, errors, validateData, success, theme}) => {
  return (
        <View style={[styles.container, { backgroundColor: theme.background }]}>
      <View style ={[styles.centeredBox, { backgroundColor: theme.background }]}>
      <TextInput style={[styles.inputField, errors.name && styles.errorInput]} placeholder='Imię' value={name} onChangeText={setName}></TextInput>
      <TextInput style={[styles.inputField, errors.email && styles.errorInput]} placeholder='Adres e-mail' value={email} onChangeText={setEmail}></TextInput>
      <TextInput style={styles.inputField} placeholder='Miasto' value={city} onChangeText={setCity}></TextInput>
      <TextInput style={[styles.inputField, styles.bioField, errors.bio && styles.errorInput]} placeholder='Bio (max. 100 znaków)' multiline={true} value={bio} onChangeText={setBio}></TextInput>
      <View style={styles.counterWrapper}>
      <Text style={[{ color: theme.text }, bio.length>100 ? styles.errorText : false]}>Ilość znaków: {bio.length}/100</Text>
      </View>
      {Object.values(errors).map((error, index) => (
        <Text key={index} style={styles.errorText}>{error}</Text>
      ))}{success ? ( <Text style={styles.successText}>{success}</Text>) : null}
      <Pressable style={[styles.saveButton, {marginTop: 30, marginBottom: 30, alignItems: 'center'}]} onPress={() => validateData()}><Text style={styles.mediumText}>Zapisz zmiany</Text></Pressable>
    </View>
      </View>
  )
}

const nameWrongComunicate = "Imię musi zawierać przynajmniej 1 znak";
const emailWrongComunicate = "Nieprawidłowy adres email";
const bioWrongComunicate = "Za długie bio";

export default function HomeScreen() {
const [dark, setDark] = useState(false);

const lightTheme = {
background: '#f8f8f8',
backgroundCard: '#ffffff',
text: '#1a1a1a',
border: '#1a1a1a',
};

const darkTheme = {
  background: '#121212',
  backgroundCard: '#404040',
  text: '#f1f1f1',
  border: '#f1f1f1',
};

const theme = dark ? darkTheme : lightTheme;

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [city, setCity] = useState('');
  const [bio, setBio] = useState('');
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState('');

const [user, setUser] = useState({
  name: '',
  email: '',
  city: '',
  bio: ''
});

const toggleMode = () => {
  setDark(!dark);
}

const validateData = () => {
    let newErrors = {};
    const emailCorrect = email.includes('@');
    const bioCorrect = bio.length <= 100;
    const nameCorrect = name.length > 0

    if (!nameCorrect) {
      newErrors.name = "Imie musi zawierać przynajmniej 1 znak.";
    }
    if (!emailCorrect) {
      newErrors.email = "Niepoprawny adres e-mail.";
    }
    if (!bioCorrect) {
      newErrors.bio = "Maksymalna ilość znaków w bio wynosi 100.";
    }

    if(nameCorrect && emailCorrect && bioCorrect) {
      setUser({ name, email, city, bio });
      setErrors({});
      setSuccess("Dane zostały zapisane");
    } else {
      setSuccess('');
    }

    setErrors(newErrors);
    console.log(JSON.stringify(errors));
}

    useEffect(() => {
        if (success) {
          const timer = setTimeout(() => {
            setSuccess('');
          }, 3000);

          return () => clearTimeout(timer);
        }
      }, [success]);

  return (
    <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
    <ScrollView style={[styles.body, dark ? {backgroundColor: '#121212'} : styles.body]} keyboardShouldPersistTaps="handled">
      <Header theme={theme}/>
      <SettingsRow label={"Powiadomienia"} right=">" onPress={() => console.log("Powiadomienia")} theme={theme} />
      <SettingsRow label={"Prywatność"} right=">" onPress={() => console.log("Prywatność")} theme={theme} />
      <SettingsRow label={"Ciemny motyw"} right={dark ? "ON" : "OFF" } onPress={toggleMode} theme={theme} />
      <SettingsRow label={"O aplikacji"} right=">" onPress={() => console.log("O aplikacji")} theme={theme} />
      <UserProfile name={user.name} email={user.email} city={user.city} bio={user.bio} theme={theme}/>
      <Form name={name} setName={setName} email={email} setEmail={setEmail} city={city} setCity={setCity} bio={bio} setBio={setBio} errors={errors} validateData={validateData} success={success} theme={theme} />
    </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  body: {
    backgroundColor: '#f8f8f8',
  },
  userProfileCard: {
    marginTop: 20,
    width: '80%',
    alignSelf: 'center',
    backgroundColor: 'white',
    overflow: 'hidden',
    padding: 10,
    borderRadius: 16,
  },
  settingsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderColor: '#ddd',
  },
  row: {
    flexDirection: 'row',
    width: '100%',
    alignSelf: 'center',
    borderBottomColor: '#dbdbdb',
    paddingVertical: 10,
    borderBottomWidth: 1,
    marginBottom: 10,
  },
  label: {
    width: 120,
  },
  value: {
    flex: 1,
  },
  container: {
    width: '80%',
    alignSelf: 'center',
  },
  headerBox: {
    backgroundColor: '#1e1e1e',
    paddingTop: 50,
    paddingBottom: 16,
    paddingHorizontal: 20,
  },
  bigText: {
    fontSize: 20,
    marginTop: 'auto',
    marginBottom: 'auto',
  },
  mediumText: {
    fontSize: 16,
  },
  avatar: {
    width: 150,
    height: 150,
    borderRadius: 75,
    borderColor: 'black',
    borderWidth: 2,
    alignSelf: 'center',
    marginTop: 20,

  },
  inputField: {
    width: '100%',
    borderRadius: 12,
    borderColor: 'black',
    backgroundColor: 'white',
    borderWidth: 1.2,
    marginBottom: 10,
  },
  bioField: {
    height: 80,
    textAlignVertical: 'top',
  },
  counterWrapper: {
    alignSelf: 'flex-end',
    marginBottom: 30,
  },
  centeredBox: {
    marginTop: 20,
    alignItems: 'center',
  },
  saveButton: {
    backgroundColor: 'green',
    width: '50%',
    padding: 12,
    borderRadius: 12,
  },
  errorText: {
    color: 'red',
    width: '100%',
    alignSelf: 'center',
  },
  successText: {
    color: 'green',
    width: '100%',
  },
  errorInput: {
    borderColor: 'red',
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
