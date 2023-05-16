import {
  View,
  Text,
  Modal,
  StyleSheet,

  FlatList,
  TouchableOpacity,
  Dimensions,
  Image,
} from 'react-native';
import React, { useState } from 'react';
const { height, width } = Dimensions.get('window');
function LanguageModal({
  langModalVisible, setLangModalVisible, onSelectLang,
}) {
  const [selectedLang, setSelectedLang] = useState(0);
  const [languages, setLangauges] = useState([
    { name: 'English', selected: true },
    { name: 'தமிழ்', selected: false },
    { name: 'हिन्दी', selected: false },
    { name: 'ਪੰਜਾਬੀ', selected: false },
    { name: 'اردو', selected: false },
  ]);
  const onSelect = index => {
    const temp = languages;
    temp.map((item, ind) => {
      if (index == ind) {
        if (item.selected == true) {
          item.selected = false;
        } else {
          item.selected = true;
          setSelectedLang(index);
        }
      } else {
        item.selected = false;
      }
    });
    let temp2 = [];
    temp.map(item => {
      temp2.push(item);
    });
    setLangauges(temp2);
  };
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={langModalVisible}
      onRequestClose={() => {
        setLangModalVisible(!langModalVisible);
      }}>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <Text style={styles.title}>Select Language</Text>
          <View style={{ width: '100%' }}>
            <FlatList
              data={languages}
              renderItem={({ item, index }) => {
                return (
                  <TouchableOpacity
                    style={[
                      styles.languageItem,
                      { borderColor: item.selected == true ? 'blue' : 'black' },
                    ]}
                    onPress={() => {
                      onSelect(index);
                    }}>
                    {item.selected == true ? (
                      <Image
                        source={require('../assets/yes.png')}
                        style={[styles.icon, { tintColor: 'blue' }]} />
                    ) : (
                      <Image
                        source={require('../assets/no.png')}
                        style={styles.icon} />
                    )}

                    <Text
                      style={{
                        marginLeft: 20,
                        fontSize: 18,
                        color: item.selected == true ? 'blue' : 'black',
                      }}>
                      {item.name}
                    </Text>
                  </TouchableOpacity>
                );
              }} />
          </View>
          <View style={styles.btns}>
            <TouchableOpacity
              style={styles.btn1}
              onPress={() => {
                setLangModalVisible(false);
              }}>
              <Text>Cancel</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.btn2}
              onPress={() => {
                setLangModalVisible(false);
                onSelectLang(selectedLang);
              }}>
              <Text style={{ color: '#fff' }}>Apply</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
}

export default LanguageModal;
const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
    backgroundColor: 'rgba(0,0,0,.5)',
  },
  modalView: {
    margin: 20,
    width: width - 20,
    height: height / 1.09,
    //   width:'90%',
    //   height:200,

    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
  },
  languageItem: {
    width: '100%',
    height: 50,
    borderRadius: 10,
    //   borderWidth: 0.5,
    marginTop: 10,
    paddingLeft: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    width: 24,
    height: 24,
  },
  btns: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 20,
  },
  btn1: {
    width: '40%',
    height: 50,
    //   borderWidth: 0.5,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#4B68E9',
  },
  btn2: {
    width: '40%',
    height: 50,
    //   borderWidth: 
    borderRadius: 10,
    backgroundColor: '#4B68E9',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
