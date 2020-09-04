import React, {useState} from 'react';
import {SafeAreaView, StyleSheet, ScrollView, StatusBar} from 'react-native';
import {Form, FormItem} from 'react-native-form-component';

const App = () => {
  const [email, setEmail] = useState('');
  const [firstValue, setFirstValue] = useState('');

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={{flex: 1}}>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          contentContainerStyle={styles.scrollView}>
          <Form>
            <FormItem
              label="Label"
              isRequired
              value={firstValue}
              onChangeText={(text) => setFirstValue(text)}
            />
            <FormItem
              label="Email"
              keyboardType="email-address"
              value={email}
              onChangeText={(email) => setEmail(email)}
            />
            <FormItem label="phone number" keyboardType="numeric" />
          </Form>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    flexGrow: 1,
    padding: 24,
  },
});

export default App;
