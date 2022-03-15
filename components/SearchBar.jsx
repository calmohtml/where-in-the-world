import { StyleSheet, View, Keyboard, Button } from "react-native";
import { Feather, Entypo } from "@expo/vector-icons";
import styled from "styled-components/native";

export default function SearchBar({
  clicked,
  searchPhrase,
  setSearchPhrase,
  setCLicked,
}) {
  const Container = styled.View`
    margin: 10px auto;
    justify-content: flex-start;
    align-items: center;
    flex-direction: row;
    /* width: 90%; */
  `;

  const Input = styled.TextInput`
    font-size: 20px;
    margin-left: 10px;
    color: #d9dbda;
    /* width: 90%; */
  `;
  return (
    <Container>
      <View
        style={
          clicked ? styles.searchBar__clicked : styles.searchBar__unclicked
        }
      >
        {/* search Icon */}
        <Feather
          name="search"
          size={20}
          color="#d9dbda"
          style={{ marginLeft: 20 }}
        />
        {/* Input field */}
        <Input
          placeholder="Search for a country..."
          value={searchPhrase}
          onChangeText={setSearchPhrase}
          onFocus={() => {
            setClicked(true);
          }}
        />
        {/* cross Icon, depending on whether the search bar is clicked or not */}
        {clicked && (
          <Entypo
            name="cross"
            size={20}
            color="black"
            style={{ padding: 1 }}
            onPress={() => {
              setSearchPhrase("");
            }}
          />
        )}
      </View>
      {/* cancel button, depending on whether the search bar is clicked or not */}
      {clicked && (
        <View>
          <Button
            title="Cancel"
            onPress={() => {
              Keyboard.dismiss();
              setClicked(false);
            }}
          ></Button>
        </View>
      )}
    </Container>
  );
}

// styles
const styles = StyleSheet.create({
  searchBar__unclicked: {
    padding: 10,
    flexDirection: "row",
    width: "95%",
    backgroundColor: "#fff",
    borderRadius: 10,
    alignItems: "center",
  },
  searchBar__clicked: {
    padding: 10,
    flexDirection: "row",
    width: "80%",
    backgroundColor: "#d9dbda",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "space-evenly",
  },
});
