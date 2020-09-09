import React, {useState} from 'react';
import {SafeAreaView, StyleSheet, ScrollView, StatusBar} from 'react-native';
import {Form, FormItem} from 'react-native-form-component';

const App = () => {
  const [firstValue, setFirstValue] = useState('');
  const [secondValue, setSecondValue] = useState('');
  const [thirdValue, setThirdValue] = useState('');

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
              value={secondValue}
              onChangeText={(email) => setSecondValue(email)}
            />
            <FormItem
              label="phone number"
              keyboardType="numeric"
              value={thirdValue}
              onChangeText={(text) => setThirdValue(text)}
            />
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
