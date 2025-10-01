import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  FlatList,
  StyleSheet,
  Modal,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import FontAwesome from "@expo/vector-icons/FontAwesome";

type Bank = {
  name: string;
  code: string;
};

type BankSelectProps = {
  onSelect: (bank: Bank) => void;
  label?: string;
};

const BankSelect: React.FC<BankSelectProps> = ({ onSelect, label }) => {
  const [banks, setBanks] = useState<Bank[]>([]);
  const [filteredBanks, setFilteredBanks] = useState<Bank[]>([]);
  const [search, setSearch] = useState("");
  const [open, setOpen] = useState(false);
  const [selectedBank, setSelectedBank] = useState<Bank | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchBanks = async () => {
      setLoading(true);
      try {
        const res = await fetch("https://nigerianbanks.xyz");
        const data: Bank[] = await res.json();
        const sortedBanks = data.sort((a, b) => a.name.localeCompare(b.name));
        setBanks(sortedBanks);
        setFilteredBanks(sortedBanks);
      } catch (err) {
        console.error("Error fetching banks:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchBanks();
  }, []);

  const handleSearch = (text: string) => {
    setSearch(text);
    const filtered = banks.filter((bank) =>
      bank.name.toLowerCase().includes(text.toLowerCase())
    );
    setFilteredBanks(filtered);
  };

  const handleSelect = (bank: Bank) => {
    setSelectedBank(bank);
    onSelect(bank);
    setOpen(false);
    setSearch("");
    setFilteredBanks(banks);
  };

  return (
    <View style={styles.container}>
      {label && <Text style={styles.label}>{label}</Text>}
      
      {/* Dropdown Trigger */}
      <TouchableOpacity
        style={styles.dropdownHeader}
        onPress={() => setOpen(true)}
      >
        <Text style={styles.selectedText}>
          {selectedBank ? selectedBank.name : "Select a bank"}
        </Text>
        <Ionicons name="chevron-down" size={20} color="#fff" />
      </TouchableOpacity>

      {/* Modal for Bank Selection */}
      <Modal
        visible={open}
        transparent={true}
        animationType="slide"
        onRequestClose={() => setOpen(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            {/* Header */}
            <View style={styles.modalHeader}>
              <Text style={styles.modalTitle}>Select Bank</Text>
              <TouchableOpacity onPress={() => setOpen(false)}>
                <FontAwesome name="times" size={24} color="#9CA3AF" />
              </TouchableOpacity>
            </View>

            {/* Search Input */}
            <View style={styles.searchContainer}>
              <FontAwesome name="search" size={18} color="#9CA3AF" />
              <TextInput
                style={styles.searchInput}
                placeholder="Search bank..."
                placeholderTextColor="#999"
                value={search}
                onChangeText={handleSearch}
              />
              {search !== '' && (
                <TouchableOpacity onPress={() => handleSearch('')}>
                  <FontAwesome name="times-circle" size={18} color="#9CA3AF" />
                </TouchableOpacity>
              )}
            </View>

            {/* Results count */}
            <Text style={styles.resultsCount}>
              {filteredBanks.length} bank{filteredBanks.length !== 1 ? 's' : ''} found
            </Text>

            {/* Banks List */}
            <FlatList
              data={filteredBanks}
              keyExtractor={(item) => item.code}
              showsVerticalScrollIndicator={false}
              ListEmptyComponent={
                <View style={styles.emptyState}>
                  <FontAwesome name="search" size={50} color="#4B5563" />
                  <Text style={styles.emptyText}>No banks found</Text>
                </View>
              }
              renderItem={({ item }) => (
                <TouchableOpacity
                  style={[
                    styles.bankItem,
                    selectedBank?.code === item.code && styles.selectedBankItem
                  ]}
                  onPress={() => handleSelect(item)}
                >
                  <View style={styles.bankIconContainer}>
                    <FontAwesome name="bank" size={18} color="#755AE2" />
                  </View>
                  <View style={styles.bankInfo}>
                    <Text style={styles.bankName}>{item.name}</Text>
                    <Text style={styles.bankCode}>{item.code}</Text>
                  </View>
                  {selectedBank?.code === item.code && (
                    <FontAwesome name="check-circle" size={22} color="#755AE2" />
                  )}
                </TouchableOpacity>
              )}
            />
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default BankSelect;

const styles = StyleSheet.create({
  container: {
    margin: 10,
  },
  label: {
    fontSize: 14,
    color: "#f9fafb",
    marginBottom: 6,
  },
  dropdownHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#0d0d0d",
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 18,
    borderWidth: 1,
    borderColor: '#374151',
  },
  selectedText: {
    color: "#fff",
    fontSize: 16,
    fontFamily: "Manrope",
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'flex-end',
  },
  modalContent: {
    backgroundColor: "#0f0c1d",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    maxHeight: "85%",
    paddingBottom: 40,
  },
  modalHeader: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#374151",
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  modalTitle: {
    color: "#ffffff",
    fontSize: 20,
    fontWeight: "600",
    fontFamily: "Manrope",
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: "#0d0d0d",
    borderRadius: 8,
    paddingHorizontal: 15,
    margin: 20,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#374151',
  },
  searchInput: {
    flex: 1,
    color: "#fff",
    paddingVertical: 15,
    paddingHorizontal: 10,
    fontSize: 16,
    fontFamily: "Manrope",
  },
  resultsCount: {
    color: "#9CA3AF",
    fontSize: 14,
    paddingHorizontal: 20,
    marginBottom: 10,
    fontFamily: "Manrope",
  },
  bankItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#374151",
  },
  selectedBankItem: {
    backgroundColor: "#374151",
  },
  bankIconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#374151",
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  bankInfo: {
    flex: 1,
  },
  bankName: {
    color: "#fff",
    fontSize: 16,
    fontFamily: "Manrope",
  },
  bankCode: {
    color: "#9CA3AF",
    fontSize: 12,
    marginTop: 2,
    fontFamily: "Manrope",
  },
  emptyState: {
    padding: 40,
    alignItems: 'center',
  },
  emptyText: {
    color: "#9CA3AF",
    marginTop: 20,
    fontSize: 16,
    fontFamily: "Manrope",
  },
});