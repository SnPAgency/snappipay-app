import { StyleSheet, Text, TextInput, View, Image, TouchableOpacity, ImageBackground, Dimensions, Modal, FlatList, Animated } from "react-native";
import React, { useEffect, useRef, useState } from "react";
import { Link, router } from "expo-router";

const { width, height } = Dimensions.get('window');

interface DropdownOption {
  value: string;
  label: string;
}

interface CustomDropdownProps {
  options: DropdownOption[];
  selectedValue: string;
  onSelect: (value: string) => void;
  placeholder: string;
  style?: any;
}

// Custom Dropdown Component
const SelectCountry = ({ options, selectedValue, onSelect, placeholder, style }: CustomDropdownProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const scaleAnim = useRef(new Animated.Value(0.8)).current;
  const slideAnim = useRef(new Animated.Value(-10)).current;
  
  const selectedOption = options.find(option => option.value === selectedValue);

  const showDropdown = () => {
    setIsVisible(true);
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 200,
        useNativeDriver: true,
      }),
      Animated.spring(scaleAnim, {
        toValue: 1,
        tension: 100,
        friction: 8,
        useNativeDriver: true,
      }),
      Animated.timing(slideAnim, {
        toValue: 0,
        duration: 200,
        useNativeDriver: true,
      }),
    ]).start();
  };

  const hideDropdown = () => {
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 0,
        duration: 150,
        useNativeDriver: true,
      }),
      Animated.timing(scaleAnim, {
        toValue: 0.8,
        duration: 150,
        useNativeDriver: true,
      }),
      Animated.timing(slideAnim, {
        toValue: -10,
        duration: 150,
        useNativeDriver: true,
      }),
    ]).start(() => {
      setIsVisible(false);
    });
  };
  
  const handleSelect = (option: DropdownOption) => {
    onSelect(option.value);
    hideDropdown();
  };

  return (
    <View style={style}>
      {/* Dropdown Button */}
      <TouchableOpacity 
        style={styles.dropdownButton} 
        onPress={showDropdown}
      >
       <Text
        style={[
            styles.dropdownButtonText,
            !selectedOption && styles.placeholderText  // apply when no selection
        ]}
        >
        {selectedOption ? selectedOption.label : placeholder}
        </Text>

        <Animated.Text 
          style={[
            styles.dropdownArrow,
            {
              transform: [{
                rotate: isVisible ? '180deg' : '0deg'
              }]
            }
          ]}
        >
          ▼
        </Animated.Text>
      </TouchableOpacity>

      {/* Dropdown Modal */}
      <Modal
        visible={isVisible}
        transparent={true}
        animationType="none"
        onRequestClose={hideDropdown}
      >
        <TouchableOpacity 
          style={styles.modalOverlay}
          onPress={hideDropdown}
          activeOpacity={1}
        >
          <Animated.View 
            style={[
              styles.dropdownContainer,
              {
                opacity: fadeAnim,
                transform: [
                  { scale: scaleAnim },
                  { translateY: slideAnim }
                ]
              }
            ]}
          >
            <FlatList
              data={options}
              keyExtractor={(item) => item.value}
              showsVerticalScrollIndicator={false}
              renderItem={({ item, index }) => (
                <Animated.View
                  style={{
                    opacity: fadeAnim,
                    transform: [{
                      translateY: fadeAnim.interpolate({
                        inputRange: [0, 1],
                        outputRange: [20, 0],
                      })
                    }]
                  }}
                >
                  <TouchableOpacity
                    style={[
                      styles.dropdownItem,
                      index === options.length - 1 && styles.lastDropdownItem
                    ]}
                    onPress={() => handleSelect(item)}
                  >
                    <Text style={styles.dropdownItemText}>{item.label}</Text>
                  </TouchableOpacity>
                </Animated.View>
              )}
            />
          </Animated.View>
        </TouchableOpacity>
      </Modal>
    </View>
  );
};

export default SelectCountry;


const styles = StyleSheet.create({
 
 
  dropdown: {
    width: '100%',
  },
  dropdownButton: {
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 18,
    borderWidth: 1,
    borderColor: '#1f2937',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'transparent',
  },
  dropdownButtonText: {
    fontSize: 16,
    color: '#f9fafb',
    flex: 1,
  },
  dropdownArrow: {
    fontSize: 12,
    color: '#f9fafb',
    marginLeft: 10,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  dropdownContainer: {
    backgroundColor: '#0d0d0d',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#1f2937',
    maxHeight: 300,
    width: width - 60, // Match the input width approximately
  
  },
  dropdownItem: {
    paddingHorizontal: 15,
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#374151',
  },
  lastDropdownItem: {
    borderBottomWidth: 0,
  },
  dropdownItemText: {
    fontSize: 16,
    color: '#f9fafb',
    fontFamily: 'Manrope',
  },
  dropdownPlaceholder: {
    color: '#888',     // placeholder color
    fontSize: 16,      // placeholder font size
    fontFamily: 'Manrope',
  },
  placeholderText: {
    color: '#6b7280',        // placeholder color
    fontSize: 14,         // placeholder font size
    // you can also adjust fontWeight or fontStyle if desired
  },
});